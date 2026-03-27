import { StateNonFungibleDetailsResponseItem, GatewayApiClient, State, Transaction, Status, Stream } from '@radixdlt/babylon-gateway-api-sdk';
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit';
import Decimal from 'decimal.js';

type NetworkT = 'mainnet' | 'stokenet';

interface ComponentCommonI {
    rootAddr: string;
}
/**
 * Radix Namespace Expansion Interface
 *
 * Auto-discovered component state from the Radix Namespace blueprint.
 * All fields are populated from the component state via Gateway API queries.
 *
 */
interface NamespaceCoreExpansionI {
    /** Domain NFT resource address (NonFungibleResourceManager) */
    domainResource: ResourceAddressString;
    /** Import domain NFT resource address (for accepted domain imports) */
    importDomainResource: ResourceAddressString;
    /**
     * Admin badge resource (burned after initialization to make system immutable)
     * May be null if already burned
     */
    adminBadgeResource: ResourceAddressString;
    /**
     * Config badge resource for address discovery/reverse resolution
     * Soulbound NFT that stores primary domain for each address
     */
    configBadgeResource: ResourceAddressString;
    /**
     * Registrar badge resource for domain service providers
     * NFT badge that tracks fee collection and domain registrations
     */
    registrarBadgeResource: ResourceAddressString;
    /**
     * Bond vaults KeyValueStore address
     * Structure: KeyValueStore<ResourceAddress, Vault>
     * Holds bonded stablecoins for each accepted payment resource
     */
    bondVaults: KeyValueStoreAddressString;
    /**
     * Domain registry KeyValueStore address
     * Structure: KeyValueStore<String, NonFungibleLocalId>
     * Maps domain names to their current NFT IDs (e.g., "example.xrd" -> NFT ID)
     */
    domainRegistry: KeyValueStoreAddressString;
    /**
     * Registrar statistics KeyValueStore address
     * Structure: KeyValueStore<NonFungibleLocalId, RegistrarStats>
     * Tracks performance stats for each registrar (domains bonded, fees earned)
     */
    registrarStats: KeyValueStoreAddressString;
    /**
     * Registrar fee vaults KeyValueStore address
     * Structure: KeyValueStore<(NonFungibleLocalId, ResourceAddress), Vault>
     * Stores collected fees for each registrar per payment resource
     */
    registrarFeeVaults: KeyValueStoreAddressString;
    /**
     * Reserved domain claims KeyValueStore address
     * Structure: KeyValueStore<String, ComponentAddress>
     * Maps reserved domain names to their designated claimant addresses
     */
    reservedDomainClaims: KeyValueStoreAddressString;
    /**
     * Domain counter key (used for sequential NFT ID generation)
     */
    domainCounterKey: number;
    /**
     * Account locker component address
     * Stores reserved domain NFTs for claimants
     */
    accountLocker: ComponentAddressString;
    /**
     * Registrar counter key (used for sequential registrar badge ID generation)
     */
    registrarCounterKey: number;
    /**
     * Accepted imports used KeyValueStore address
     * Structure: KeyValueStore<NonFungibleLocalId, bool>
     * Tracks which import domain NFTs have already been used
     */
    acceptedImportsUsed: KeyValueStoreAddressString;
    /**
     * dApp definition account address (optional)
     * Created during instantiation, links all subregistries to the main dApp
     */
    dappDefinition: ComponentAddressString | null;
    /**
     * Registration gate flag
     * false: Only admin can register domains (pre-launch)
     * true: Public registrations enabled (after admin badge burned)
     */
    isRegistrationActive: boolean;
    /**
     * Price ladder for domain registration
     * Structure: Record<character_length, required_bond_units>
     *
     * Default ladder from Scrypto:
     * - "1": "2250" (1 char: 2,250 units)
     * - "2": "240"  (2 char: 240 units)
     * - "3": "120"  (3 char: 120 units)
     * - "4": "40"   (4 char: 40 units)
     * - Missing lengths default to "4" (4 units)
     *
     */
    priceLadder: Record<string, DecimalString>;
    subregistryConfig: {
        /** Template name for subregistry components (e.g., "RNS Domain Subregistry") */
        name: string;
        /** Template description for subregistry components */
        description: string;
        /** Template tags for subregistry components (e.g., ["rns", "subregistry"]) */
        tags: string[];
        /** Template icon URL for subregistry components */
        iconUrl: string;
    };
    /**
     * List of accepted stablecoin resource addresses for domain payments
     * Populated from bond_vaults KeyValueStore keys
     * Example: [fUSD_address, sUSD_address]
     */
    acceptedPaymentResources: ResourceAddressString[];
}
/** Radix resource address (e.g., "resource_tdx_...") */
type ResourceAddressString = string;
/** Radix component address (e.g., "component_tdx_...") */
type ComponentAddressString = string;
/** Radix KeyValueStore address (e.g., "internal_keyvaluestore_tdx_...") */
type KeyValueStoreAddressString = string;
/** Decimal value represented as string for precision (e.g., "250.00") */
type DecimalString = string;
type EntitiesT = {
    rnsCore: NamespaceCoreExpansionI & ComponentCommonI;
};

/**
 * Resource Metadata Types
 *
 * Follows Radix metadata standards for wallet display
 * Reference: https://docs.radixdlt.com/docs/metadata-for-wallet-display
 */
/**
 * Resource type classification
 */
type ResourceTypeT = 'fungible' | 'non-fungible';
/**
 * Resource details with flattened metadata structure
 * Follows Radix metadata standards for easy access
 *
 * @example
 * ```typescript
 * resource.name         // "Fake USD"
 * resource.symbol       // "fUSD"
 * resource.icon_url     // "https://..."
 * ```
 */
interface ResourceDetailsI {
    /** Resource address */
    address: string;
    /** Resource type */
    type: ResourceTypeT;
    /**
     * Simple name of the asset (e.g., "Fake USD", "Bitcoin")
     * May be truncated after 32 characters
     */
    name: string | null;
    /**
     * Short unique identifier for fungible resources (e.g., "BTC", "fUSD")
     * Max 5 characters, alphanumeric, all caps, no whitespace
     * null for non-fungible resources
     */
    symbol: string | null;
    /**
     * Description of the asset and its purpose
     * May be truncated after 256 characters
     */
    description: string | null;
    /**
     * Descriptive tags (e.g., ["badge", "gaming"])
     * Alphanumeric, no caps, dashes for spaces
     * May be truncated after 16 characters each, first 100 tags only
     */
    tags: string[];
    /**
     * URL to image representing the token
     * Should be designed as circle for fungible, square for NFTs
     * Supported: JPG, PNG, GIF, WEBP, SVG
     */
    icon_url: string | null;
    /**
     * Direct link to informational webpage about the resource
     */
    info_url: string | null;
}

/**
 * Common Pagination Types
 *
 * Standard pagination interfaces used across all SDK methods that return
 * paginated data (KeyValueStore queries, NFT lists, etc.)
 */
/**
 * Pagination parameters for requesting paginated data
 *
 * @example
 * ```typescript
 * // Get first page (default)
 * await namespace.getRecords({ domain: 'example.xrd' });
 *
 * // Get specific page
 * await namespace.getRecords({ domain: 'example.xrd', pagination: { page: 2 } });
 * ```
 */
interface PaginationParamsI {
    /** Page number (1-indexed, defaults to 1) */
    page?: number;
}
/**
 * Pagination metadata returned with paginated responses
 *
 * @example
 * ```typescript
 * const result = await namespace.getRecords({ domain: 'example.xrd' });
 * if (result.data) {
 *   console.log(`Page has ${result.data.pagination.current_page_count} items`);
 *   console.log(`Total: ${result.data.pagination.total_count} items`);
 *   if (result.data.pagination.next_page) {
 *     console.log(`More pages available`);
 *   }
 * }
 * ```
 */
interface PaginationInfoI {
    /** Next page number, or null if this is the last page */
    next_page: number | null;
    /** Previous page number, or null if this is the first page */
    previous_page: number | null;
    /** Total count of items across all pages */
    total_count: number;
    /** Number of items in the current page */
    current_page_count: number;
}

/**
 * Registrar Details
 *
 * Represents the business information for a domain service provider.
 * Each registrar receives a unique NFT badge for authentication.
 *
 * Reference: core-contracts/src/model.rs - RegistrarInfo struct
 */
interface RegistrarDetailsI {
    /** NonFungibleLocalId of the registrar badge */
    id: string;
    /** Business or service name (1-100 characters) */
    name: string;
    /** Public URL to registrar logo/icon */
    icon_url: string;
    /** Public URL to registrar's website */
    website_url: string;
    /** Fee percentage (e.g., 10 = 10%, 0.5 = 0.5%, 200 = 200%) */
    fee_percentage: Decimal;
    /** Timestamp when registrar was created (milliseconds since epoch) */
    created_at: number;
    /** Timestamp when registrar metadata was last updated (milliseconds since epoch) */
    updated_at: number;
}
/**
 * Registrar Fee Vault Entry
 *
 * Represents accumulated fees for a specific registrar and payment resource.
 * Fees are stored in per-registrar vaults on the RNS Core component.
 */
interface RegistrarFeeVaultI {
    /** Payment resource address (e.g., fUSD, sUSD) */
    resource_address: ResourceAddressString;
    /**
     * Accumulated fee amount available for withdrawal
     * Represented as Decimal for precision
     */
    amount: Decimal;
    /**
     * Enriched resource details (name, symbol, icon, etc.)
     * Populated via Gateway API query
     */
    resource: ResourceDetailsI;
}
/**
 * Paginated Registrar Fees Response
 *
 * Used when querying fee vaults for a registrar across multiple payment resources.
 * Follows the same pagination pattern as domain/subdomain queries.
 */
interface PaginatedRegistrarFeesI {
    /** Array of fee vault entries */
    fees: RegistrarFeeVaultI[];
    /** Pagination metadata */
    pagination: PaginationInfoI;
}
/**
 * Paginated Registrars Response
 *
 * Used when querying all registrar badge IDs with pagination support.
 */
interface PaginatedRegistrarsResponseI {
    /** Array of registrar badge IDs */
    registrar_ids: string[];
    /** Pagination metadata */
    pagination: PaginationInfoI;
}
/**
 * Registrar Statistics
 *
 * Detailed performance statistics for a registrar, tracking domain registrations
 * and fee accumulation over time.
 *
 * Reference: core-contracts/src/model.rs - RegistrarStats struct
 */
interface RegistrarStatsI {
    /**
     * Current active domain count per bond resource
     * Maps ResourceAddress -> count of domains currently bonded with that resource
     */
    domains_bonded: Record<string, number>;
    /**
     * Lifetime total domains registered through this registrar
     * Cumulative count across all resources
     */
    domains_bonded_cumulative: number;
    /**
     * Lifetime total fees earned per resource
     * Maps ResourceAddress -> total Decimal amount ever earned (as string for precision)
     */
    fees_earned_cumulative: Record<string, string>;
    /**
     * Current available fees per resource (not yet withdrawn)
     * Maps ResourceAddress -> Decimal amount available to withdraw (as string for precision)
     */
    fees_earned_current: Record<string, string>;
    /**
     * Timestamp of last fee withdrawal (milliseconds since epoch)
     * null if fees have never been withdrawn
     */
    last_withdrawal: number | null;
}

interface EventCallbacksI {
    onInit?: Function;
    onSuccess?: Function;
    onFail?: Function;
    onAppApproved?: Function;
    onIntentReceipt?: Function;
}

/**
 * Record Context Types
 *
 * Records are stored in DomainSubregistry components as:
 * context -> directive -> value (nested HashMap structure)
 *
 * Contexts organize records into logical groups.
 */
type ContextT = "receivers" | "delegation" | "navigation" | "social" | "discovery" | "widgets" | string;
/**
 * Record Item
 *
 * Represents a single record entry from a DomainSubregistry component.
 * Records are stored as context-directive-value triplets.
 *
 * Records are retrieved from the domain's subregistry component,
 * not from a central storage location.
 *
 * Reference: core-contracts/src/domain_subregistry.rs
 */
interface RecordItemI {
    /**
     * Record context (e.g., "social", "receivers")
     * Max 25 alphanumeric characters + underscore
     */
    context: string;
    /**
     * Record directive/key within the context (e.g., "twitter", "wallet_address")
     * Max 180 characters
     */
    directive: string;
    /**
     * Record value
     * Max 500 characters
     * Can be null if record doesn't exist
     */
    value: string | null;
    /** Composite record ID for SDK tracking (e.g., "context:directive") */
    record_id?: string;
    /** Domain name this record belongs to */
    domain_name?: string;
    /** Whether this is a subdomain record */
    is_subdomain?: boolean;
}
/**
 * Record operation docket properties
 * Used when querying or validating records
 */
interface DocketPropsI {
    /** Record context */
    context: ContextT | string;
    /** Record directive (optional for context-wide operations) */
    directive?: string;
}
/**
 * Record creation/update docket
 * Used when creating or updating records
 */
interface RecordDocketI extends DocketPropsI {
    /** Record value */
    value: string;
}
/**
 * Record Entry for batch creation
 *
 * Used with createRecords() for setting multiple records in one transaction.
 * Maps to set_records_batch in DomainSubregistry.
 */
interface RecordEntryI {
    /** Record context (e.g., "social", "receivers") */
    context: string;
    /** Record directive/key within the context (e.g., "twitter", "wallet_address") */
    directive: string;
    /** Record value */
    value: string;
}
/**
 * Record Reference for batch deletion
 *
 * Used with deleteRecords() for removing multiple records in one transaction.
 * Maps to delete_records_batch in DomainSubregistry.
 */
interface RecordRefI {
    /** Record context */
    context: string;
    /** Record directive */
    directive: string;
}
/**
 * Record query result from subregistry
 */
interface RecordQueryResultI {
    /** Domain or subdomain name */
    name: string;
    /** Records organized by context */
    records: Record<string, Record<string, string>>;
    /** Total record count */
    record_count: number;
}
/**
 * Context records result
 * All records within a specific context
 */
interface ContextRecordsI {
    /** Context name */
    context: string;
    /** Map of directive -> value */
    directives: Record<string, string>;
}
/**
 * Paginated Records Response
 *
 * Used when querying records from a domain's subregistry with pagination support.
 */
interface PaginatedRecordsResponseI {
    /** Array of record items */
    records: RecordItemI[];
    /** Domain name these records belong to */
    domain_name: string;
    /** Pagination metadata */
    pagination: PaginationInfoI;
}

/**
 * Domain NFT Data
 *
 * Represents a Domain NFT as defined in the Radix Namespace blueprint.
 * Each domain now has its own dedicated subregistry component for managing
 * subdomains and records.
 *
 * Reference: core-contracts/src/model.rs - Domain struct
 */
interface DomainDataI {
    /** NFT ID (NonFungibleLocalId) - hash-based unique identifier */
    id: string;
    /** Domain name (e.g., "example.xrd") */
    name: string;
    /**
     * Current activated owner address
     * null if domain has not been activated yet (requires calling activate_domain_ownership)
     */
    current_activated_owner: string | null;
    /**
     * Bond information (enriched with resource details from Gateway API)
     *
     * @example
     * ```typescript
     * domain.bond.resource.name      // "Fake USD"
     * domain.bond.resource.symbol    // "fUSD"
     * domain.bond.resource.icon_url  // "https://..."
     * domain.bond.amount             // Decimal("250")
     * ```
     */
    bond: {
        /**
         * Full resource details with flattened metadata
         * Follows Radix metadata standards
         * Reference: https://docs.radixdlt.com/docs/metadata-for-wallet-display
         */
        resource: ResourceDetailsI;
        /** Bond amount as Decimal */
        amount: Decimal;
    };
    /**
     * Dedicated subregistry component address for this domain
     * Each domain gets its own component that manages its subdomains and records
     */
    subregistry_component_address: ComponentAddressString;
    /** QR code image URL for the domain */
    key_image_url: string;
    /** Timestamp when domain was created/registered (milliseconds since epoch) */
    created_timestamp: number;
    /**
     * Registrar that brokered the domain sale
     * null for imported domains
     * Reference: core-contracts/src/model.rs - Domain.issuer_registrar_id
     */
    issuer_registrar_id: string | null;
    /** List of subdomains (populated separately via subregistry queries) */
    subdomains?: SubDomainDataI[];
    /** Total number of subdomains for this domain (queried from subregistry) */
    subdomain_count?: number;
    /** Total number of records for this domain (queried from subregistry) */
    record_count?: number;
}
/**
 * Subdomain Record Data
 *
 * Represents a subdomain stored in a DomainSubregistry component.
 * Subdomains are stored in the parent domain's dedicated subregistry.
 *
 * Reference: core-contracts/src/model.rs - SubdomainRecord struct
 */
interface SubDomainDataI {
    /**
     * Subdomain name only (without root domain)
     * Example: "blog" (not "blog.example.xrd")
     */
    name: string;
    /**
     * Full subdomain name including root domain
     * Example: "blog.example.xrd"
     */
    full_name: string;
    /** Timestamp when subdomain was created (milliseconds since epoch) */
    created_timestamp: number;
    /** Timestamp when subdomain was last updated (milliseconds since epoch) */
    updated_timestamp: number;
    /**
     * Custom metadata key-value pairs
     * Arbitrary metadata that can be attached to subdomains
     */
    metadata: Record<string, string>;
    /** Reference to the root domain (populated by SDK) */
    root_domain?: DomainDataI;
    /** QR code or image URL (if applicable) */
    key_image_url?: string;
}
interface PaginatedDomainsResponseI {
    domains: DomainDataI[];
    pagination: PaginationInfoI;
}
interface PaginatedSubdomainsResponseI {
    subdomains: SubDomainDataI[];
    pagination: PaginationInfoI;
    root_domain_name: string;
}
/**
 * Domain availability status
 * Reference: core-contracts/src/model.rs - DomainStatus enum
 */
type DomainStatusT = 'available' | 'taken' | 'reserved';
interface DomainStatusInfoI {
    domain: string;
    status: DomainStatusT;
    /** Component address of the reserved claimant (only set when status is 'reserved') */
    reserved_for?: string;
}
/**
 * A reserved domain claim entry from the reserved_domain_claims KVS
 */
interface ReservedDomainClaimI {
    /** Reserved domain name (e.g., "example.xrd") */
    domain: string;
    /** Account address designated as claimant */
    claimant: string;
}
/**
 * Response for listing reserved domains claimable by an account
 */
interface ReservedDomainsResponseI {
    /** Reserved domain claims matching the queried account */
    claims: ReservedDomainClaimI[];
    /** Total number of reserved domains in the system */
    total_reserved: number;
}
/**
 * Account Settings Result
 *
 * Result of looking up an account's settings (primary domain and discovery).
 * Includes authenticity verification to ensure the primary domain is still
 * owned by the account.
 */
interface AccountSettingsResultI {
    /** The primary domain name (can be root or subdomain) */
    primaryDomain: string;
    /** Whether domain discovery is enabled for this account */
    discoveryEnabled: boolean;
    /**
     * Whether the primary domain is still authentically owned by the account
     * False if the domain has been transferred or unbonded
     */
    isAuthentic: boolean;
    /** The account address that was looked up */
    accountAddress: string;
    /**
     * Domain details if authentic and available
     * null if not authentic or details couldn't be fetched
     */
    domainDetails: DomainDataI | null;
}

/**
 * Import Domain NFT Data
 *
 * Represents an Import Domain NFT from the accepted imports system.
 * These domains can be imported to the Radix Namespace using `importAcceptedDomain()`.
 *
 * Import domains are identified by a hash of the domain name and contain
 * metadata about the original domain including deposit amounts and primary domain references.
 *
 * Reference: core-contracts/src/model.rs - ImportDomain struct
 */
interface ImportDomainI {
    /** Domain name (e.g., "example.xrd") */
    name: string;
    /** NFT ID (hash of domain name in bytes format) */
    id: string;
    /**
     * Optional component address
     * In the import system, domains can reference a component address
     */
    address: string | null;
    /** Creation timestamp (milliseconds since epoch) */
    created_timestamp: number;
    /**
     * Last valid timestamp if set (milliseconds since epoch)
     * null means no expiry
     */
    last_valid_timestamp: number | null;
    /**
     * Deposit amount info (if any deposit was made)
     * Tuple of (ResourceAddress, Decimal amount as string)
     */
    deposit_amount: {
        resource: ResourceAddressString;
        amount: string;
    } | null;
    /**
     * Primary domain reference (NonFungibleLocalId)
     * References the primary domain NFT if this import is linked to one
     */
    primary_domain: string | null;
    /** Domain key image URL */
    key_image_url: string;
}
/**
 * Paginated Import Domains Response
 *
 * Used when querying import domains owned by an account.
 * Follows the same pagination pattern as domain queries.
 */
interface PaginatedImportDomainsI {
    /** Array of import domain data */
    domains: ImportDomainI[];
    /** Pagination metadata */
    pagination: PaginationInfoI;
}

interface ErrorStackI {
    errors: ErrorI[];
}
interface ErrorI {
    code: string;
    error: string;
    verbose: string | null;
}
interface TransactionFeedbackI {
    code: string;
    details: string | null;
}
interface TransactionFeedbackStackI {
    messages: TransactionFeedbackI[];
}
type SdkResponseT<T> = {
    data: T;
    errors?: undefined;
} | {
    data?: undefined;
    errors: ErrorI[];
};
type SdkTransactionResponseT<T> = {
    feedback: T;
    errors?: undefined;
} | {
    feedback?: undefined;
    errors: ErrorI[];
};
interface ResolvedRecordI {
    value: string;
    nonFungibleDataList?: StateNonFungibleDetailsResponseItem[];
}
/**
 * Domain Status Response
 * Returns the availability status and required bond units for a domain
 */
type DomainAttributesResponseT = {
    domain: string;
    status: DomainStatusT;
    /** Required bond units (e.g., Decimal("120") for 3-char domain) */
    required_bond_units: Decimal;
    /** Component address of the reserved claimant (only set when status is 'reserved') */
    reserved_for?: string;
};
type RecordListResponseT = RecordItemI[] | [];
type CheckAuthenticityResponseT = {
    isAuthentic: boolean;
};
type ResolvedRecordResponseT = ResolvedRecordI | null;
/**
 * Registration Cost Breakdown
 * Provides a detailed breakdown of costs for domain registration
 */
interface RegistrationCostBreakdownI {
    /** Domain name being registered */
    domain: string;
    /** Bond amount (base price from pricing tier, refundable) */
    bondAmount: string;
    /** Registrar fee amount (percentage of bond, non-refundable) */
    registrarFee: string;
    /** Registrar fee percentage used */
    registrarFeePercentage: string;
    /** Total amount required (bond + registrar fee) */
    totalAmount: string;
    /** Payment resource address */
    paymentResource: string;
    /** Registrar badge ID used for the calculation */
    registrarId: string;
    /** Registrar name */
    registrarName: string;
}

/**
 * Individual resource balance info with full resource details
 */
interface ResourceBalanceInfoI {
    resource: ResourceDetailsI;
    balance: string;
}
/**
 * Result from getAccountBondBalances
 */
interface AccountBondBalancesResultI {
    balances: ResourceBalanceInfoI[];
}
/**
 * Sufficient balance info - resource has enough balance
 */
interface SufficientBalanceInfoI {
    resource: ResourceDetailsI;
    balance: string;
}
/**
 * Insufficient balance info - resource does not have enough balance
 */
interface InsufficientBalanceInfoI {
    resource: ResourceDetailsI;
    balance: string;
    shortfall: string;
}
/**
 * Result from checkAccountBondAffordability
 */
interface BondAffordabilityResultI {
    requiredAmount: string;
    sufficientBalances: SufficientBalanceInfoI[];
    insufficientBalances: InsufficientBalanceInfoI[];
}
/**
 * Clears the accepted bond tokens cache
 * Useful for testing or when switching networks
 */
declare function clearAcceptedBondTokensCache(): void;

/**
 * Standard validation result type
 * Used by all validation utility functions for consistency
 */
interface UtilValidationT {
    isValid: boolean;
    errors?: ErrorI[];
}

/**
 * Transfer Preferences
 */
interface TransferPreferencesI {
    /**
     * Whether to spawn a new subregistry before transfer (clean slate)
     * If true, creates a new empty subregistry for the domain
     * If false (default), keeps existing records and subdomains
     */
    cleanTransfer?: boolean;
}

type StatusI = 'available' | 'auction' | 'settlement' | 'registered' | 'sunrise' | 'tld' | 'genus-substrate';

/**
 * Clears the resource details cache
 * Useful for testing or when you want to force fresh data
 */
declare function clearResourceDetailsCache(): void;

/**
 * Cache Management Utilities
 *
 * Centralized cache management for the RNS SDK.
 * Provides a unified way to clear all caches when needed
 * (e.g., when switching networks or during testing).
 */
/**
 * Clears all SDK caches
 *
 * Use this when:
 * - Switching between networks (mainnet/stokenet)
 * - Running tests that need fresh data
 * - Forcing the SDK to refetch all cached data
 *
 * @example
 * ```typescript
 * import { clearAllCaches } from '@radixnamespace/typescript-sdk';
 *
 * // After switching networks
 * clearAllCaches();
 * ```
 */
declare function clearAllCaches(): void;

interface NamespaceSDKConfigI {
    gateway?: GatewayApiClient;
    rdt?: RadixDappToolkit;
    network?: NetworkT;
}
declare class NamespaceSDK {
    network: NetworkT;
    rdt: RadixDappToolkit;
    state: State;
    transaction: Transaction;
    status: Status;
    stream: Stream;
    entities: EntitiesT;
    constructor({ gateway, rdt, network }: NamespaceSDKConfigI);
    /**
     * Fetch SDK dependencies (entities from RNS Core component)
     *
     * Called automatically by @requireDependencies decorator before method execution.
     * Can also be called manually to pre-load entities (useful in tests or for eager loading).
     *
     * Uses instance-level memoization - only fetches once per SDK instance.
     *
     * @example
     * ```typescript
     * const namespace = new NamespaceSDK({ network: 'stokenet' });
     * await namespace.fetchDependencies(); // Pre-load entities
     * console.log(namespace.entities); // Now available
     * ```
     */
    fetchDependencies(): Promise<void>;
    private initGateway;
    private checkInitialized;
    private checkEntitiesLoaded;
    private dAppEntities;
    /**
     * Get Domain Status
     *
     * Checks the status of a domain name to determine if it's available for registration,
     * already registered, or invalid.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.domain - Domain name to check (e.g., "example.xrd")
     * @returns Domain status including availability, registration details, and attributes
     *
     * @example
     * ```typescript
     * const status = await namespace.getDomainStatus({ domain: 'example.xrd' });
     *
     * if (status.data?.status === 'available') {
     *   console.log('Domain is available for registration!');
     * } else if (status.data?.status === 'registered') {
     *   console.log('Domain is taken');
     * }
     * ```
     */
    getDomainStatus({ domain }: {
        domain: string;
    }): Promise<SdkResponseT<DomainAttributesResponseT>>;
    /**
     * Get Domain Details
     *
     * Retrieves comprehensive details for a registered domain or subdomain,
     * including owner, subregistry address, and records KeyValueStore address.
     *
     * Includes an authenticity check to verify the domain is legitimately owned.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.domain - Domain or subdomain name (e.g., "example.xrd" or "blog.example.xrd")
     * @returns Domain details including name, ID, owner, and subregistry info
     *
     * @example
     * ```typescript
     * const details = await namespace.getDomainDetails({ domain: 'example.xrd' });
     *
     * if (details.data) {
     *   console.log(`Owner: ${details.data.current_activated_owner}`);
     *   console.log(`NFT ID: ${details.data.id}`);
     * }
     * ```
     */
    getDomainDetails({ domain }: {
        domain: string;
    }): Promise<SdkResponseT<DomainDataI | SubDomainDataI>>;
    /**
     * Get Records
     *
     * Retrieves all records for a domain with pagination support.
     * Records are stored in a context:directive format (e.g., "social:twitter").
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.domain - Domain or subdomain name
     * @param options.pagination - Optional pagination parameters
     * @returns Paginated list of records with their context, directive, and value
     *
     * @example
     * ```typescript
     * const records = await namespace.getRecords({
     *   domain: 'example.xrd',
     *   pagination: { page: 1 }
     * });
     *
     * records.data?.records.forEach(record => {
     *   console.log(`${record.context}:${record.directive} = ${record.value}`);
     * });
     * ```
     */
    getRecords({ domain, pagination }: {
        domain: string;
        pagination?: PaginationParamsI;
    }): Promise<SdkResponseT<PaginatedRecordsResponseI>>;
    /**
     * Resolve Record
     *
     * Resolves a specific record by its context and directive combination.
     * Use this for targeted lookups when you know the exact record you need.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.domain - Domain or subdomain name
     * @param options.docket - Record identifier with context and directive
     * @returns The resolved record value
     *
     * @example
     * ```typescript
     * // Resolve XRD receiver address
     * const record = await namespace.resolveRecord({
     *   domain: 'alice.xrd',
     *   docket: { context: 'receivers', directive: 'xrd' }
     * });
     *
     * if (record.data?.value) {
     *   console.log(`Send XRD to: ${record.data.value}`);
     * }
     * ```
     */
    resolveRecord({ domain, docket }: {
        domain: string;
        docket: DocketPropsI;
    }): Promise<SdkResponseT<ResolvedRecordResponseT>>;
    /**
     * Get Account Domains
     *
     * Retrieves all domains owned by an account with pagination support.
     * Returns both root domains and subdomains held by the account.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.accountAddress - Radix account address to query
     * @param options.pagination - Optional pagination parameters
     * @returns Paginated list of domains owned by the account
     *
     * @example
     * ```typescript
     * const domains = await namespace.getAccountDomains({
     *   accountAddress: 'account_rdx...',
     *   pagination: { page: 1 }
     * });
     *
     * console.log(`Account owns ${domains.data?.pagination.total_count} domains`);
     * domains.data?.domains.forEach(d => console.log(d.name));
     * ```
     */
    getAccountDomains({ accountAddress, pagination }: {
        accountAddress: string;
        pagination?: PaginationParamsI;
    }): Promise<SdkResponseT<PaginatedDomainsResponseI>>;
    /**
     * Get Account Import Domains
     *
     * Lists all accepted import domains owned by an account.
     * Use this to discover which domains can be imported into the Radix Namespace.
     *
     * Once discovered, use existing utilities to check costs and import:
     * - `utils.getCostBreakdown({ domain })` - Calculate bond required
     * - `utils.checkAccountBondAffordability()` - Check if account can afford
     * - `importAcceptedDomain({ domain })` - Import each domain
     *
     * @category Domain Import
     * @param options - The options object
     * @param options.accountAddress - Account address to query
     * @param options.pagination - Optional pagination parameters
     * @returns Paginated list of import domains
     *
     * @example
     * ```typescript
     * // Discover import domains
     * const imports = await namespace.getAccountImportDomains({
     *   accountAddress: 'account_rdx...'
     * });
     *
     * if (imports.data.domains.length > 0) {
     *   console.log(`Found ${imports.data.domains.length} domains to import`);
     *
     *   // Import each domain
     *   for (const domain of imports.data.domains) {
     *     await namespace.importAcceptedDomain({
     *       domain: domain.name,
     *       accountAddress: 'account_rdx...'
     *     });
     *   }
     * }
     * ```
     */
    getAccountImportDomains({ accountAddress, pagination }: {
        accountAddress: string;
        pagination?: PaginationParamsI;
    }): Promise<SdkResponseT<PaginatedImportDomainsI>>;
    /**
     * Check Authenticity
     *
     * Verifies that a domain is legitimately owned by the claimed account.
     * Use this to validate domain ownership before trusting domain data.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.domain - Domain name to verify
     * @param options.accountAddress - Account address claiming ownership
     * @returns Authenticity status indicating if the account truly owns the domain
     *
     * @example
     * ```typescript
     * const check = await namespace.checkAuthenticity({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...'
     * });
     *
     * if (check.data?.isAuthentic) {
     *   console.log('Domain ownership verified!');
     * }
     * ```
     */
    checkAuthenticity({ domain, accountAddress }: {
        domain: string;
        accountAddress: string;
    }): Promise<SdkResponseT<CheckAuthenticityResponseT>>;
    /**
     * Get Account Settings (Primary Domain & Discovery)
     *
     * Retrieves the RNS configuration for an account, including primary domain and
     * discovery settings. Use this for account owners to view their own settings.
     *
     * The method:
     * 1. Checks if the account has a config badge (soulbound NFT)
     * 2. Reads the config badge metadata for the primary domain and discovery status
     * 3. Verifies the primary domain is still owned by the same account (authenticity check)
     *
     * @category Account Settings
     * @param options - The options object
     * @param options.accountAddress - Account address to look up
     * @returns Account settings with primary domain, discovery status, and authenticity
     *
     * @example
     * ```typescript
     * const result = await namespace.getAccountSettings({
     *   accountAddress: 'account_...'
     * });
     *
     * if (result.data) {
     *   console.log(`Primary domain: ${result.data.primaryDomain}`);
     *   console.log(`Discovery enabled: ${result.data.discoveryEnabled}`);
     *   console.log(`Is authentic: ${result.data.isAuthentic}`);
     *
     *   if (!result.data.isAuthentic) {
     *     console.warn('Primary domain is no longer owned by this account');
     *   }
     * } else {
     *   console.log('No settings configured for this account');
     * }
     * ```
     */
    getAccountSettings({ accountAddress }: {
        accountAddress: string;
    }): Promise<SdkResponseT<AccountSettingsResultI | null>>;
    /**
     * Get Subdomains
     *
     * Retrieves all subdomains under a parent domain with pagination support.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.domain - Parent domain name (e.g., "example.xrd")
     * @param options.pagination - Optional pagination parameters
     * @returns Paginated list of subdomains under the parent domain
     *
     * @example
     * ```typescript
     * const subdomains = await namespace.getSubdomains({
     *   domain: 'example.xrd',
     *   pagination: { page: 1 }
     * });
     *
     * subdomains.data?.subdomains.forEach(sub => {
     *   console.log(`${sub.name} - created by ${sub.created_by}`);
     * });
     * ```
     */
    getSubdomains({ domain, pagination }: {
        domain: string;
        pagination?: PaginationParamsI;
    }): Promise<SdkResponseT<PaginatedSubdomainsResponseI>>;
    /**
     * Register Domain
     *
     * Registers a new domain through a registrar. Requires payment of the bond amount
     * plus registrar fee. The bond is refundable when the domain is unbonded.
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Domain name to register (e.g., "example.xrd")
     * @param options.accountAddress - Account to receive the domain NFT
     * @param options.registrarId - Registrar badge ID to register through
     * @param options.paymentResource - Optional payment resource (defaults to first accepted)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.registerDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   registrarId: '1',
     *   callbacks: {
     *     onSuccess: () => console.log('Domain registered!')
     *   }
     * });
     * ```
     */
    registerDomain({ domain, accountAddress, paymentResource, registrarId, callbacks }: {
        domain: string;
        accountAddress: string;
        paymentResource?: string;
        registrarId: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Claim Reserved Domain
     *
     * Claims a domain that has been reserved for your account. Only the designated
     * claimant can claim a reserved domain. No registrar is needed.
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Reserved domain name to claim (e.g., "example.xrd")
     * @param options.accountAddress - Claimant account address (must match reservation)
     * @param options.paymentResource - Optional payment resource (defaults to first accepted)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.claimReservedDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...'
     * });
     * ```
     */
    claimReservedDomain({ domain, accountAddress, paymentResource, callbacks }: {
        domain: string;
        accountAddress: string;
        paymentResource?: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Get Reserved Domains
     *
     * Lists all reserved domain claims that the specified account is eligible to claim.
     * Queries the reserved_domain_claims KeyValueStore and filters by account address.
     *
     * Use this to discover which domains are reserved for you before calling claimReservedDomain.
     *
     * @category Domain Queries
     * @param options - The options object
     * @param options.accountAddress - Account address to check reserved claims for
     * @returns Reserved domains claimable by the account, plus total reserved count
     *
     * @example
     * ```typescript
     * const result = await namespace.getReservedDomains({
     *   accountAddress: 'account_rdx...'
     * });
     *
     * if (result.data && result.data.claims.length > 0) {
     *   console.log(`You can claim ${result.data.claims.length} reserved domains:`);
     *   result.data.claims.forEach(claim => {
     *     console.log(`  - ${claim.domain}`);
     *   });
     * } else {
     *   console.log('No reserved domains for this account');
     * }
     * ```
     */
    getReservedDomains({ accountAddress }: {
        accountAddress: string;
    }): Promise<SdkResponseT<ReservedDomainsResponseI>>;
    /**
     * Claim Domain NFTs from Account Locker
     *
     * Claims domain NFTs that are stored in the Radix Namespace AccountLocker.
     * This is needed when a reserved domain was claimed but the direct deposit
     * to the claimant's account was rejected (e.g., due to account deposit rules).
     *
     * The AccountLocker verifies account ownership by reading the claimant
     * account's owner role and asserting against it.
     *
     * **Two modes:**
     * - If `nftIds` is provided: Claims those specific domain NFTs
     * - If `nftIds` is omitted: Claims up to 100 domain NFTs stored for the account
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.accountAddress - Account to claim domain NFTs for
     * @param options.nftIds - Optional specific NFT IDs to claim
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // Claim all stored domain NFTs from the locker
     * const result = await namespace.claimFromLocker({
     *   accountAddress: 'account_rdx...'
     * });
     *
     * // Claim specific domain NFTs by ID
     * const result = await namespace.claimFromLocker({
     *   accountAddress: 'account_rdx...',
     *   nftIds: ['<nft-id-1>', '<nft-id-2>']
     * });
     * ```
     */
    claimFromLocker({ accountAddress, nftIds, callbacks }: {
        accountAddress: string;
        nftIds?: string[];
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Activate Domain
     *
     * Activates a domain to enable record management and other operations.
     * A domain must be activated before records can be created or modified.
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Domain name to activate
     * @param options.accountAddress - Account holding the domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.activateDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...'
     * });
     * ```
     */
    activateDomain({ domain, accountAddress, callbacks }: {
        domain: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Create Subdomain
     *
     * Creates a subdomain under a root domain you own.
     * Subdomains share the parent domain's subregistry.
     *
     * @category Subdomains
     * @param options - The options object
     * @param options.subdomain - Full subdomain name (e.g., "blog.example.xrd")
     * @param options.accountAddress - Account holding the parent domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.createSubdomain({
     *   subdomain: 'blog.example.xrd',
     *   accountAddress: 'account_rdx...'
     * });
     * ```
     */
    createSubdomain({ subdomain, accountAddress, callbacks }: {
        subdomain: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Delete Subdomain
     *
     * Deletes a subdomain from a root domain you own.
     * The subdomain's records are also removed.
     *
     * @category Subdomains
     * @param options - The options object
     * @param options.subdomain - Full subdomain name (e.g., "blog.example.xrd")
     * @param options.accountAddress - Account holding the parent domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.deleteSubdomain({
     *   subdomain: 'blog.example.xrd',
     *   accountAddress: 'account_rdx...'
     * });
     * ```
     */
    deleteSubdomain({ subdomain, accountAddress, callbacks }: {
        subdomain: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Create Record
     *
     * Creates a single record on a domain. Records use context:directive format
     * (e.g., "social:twitter", "receivers:xrd").
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain to create the record on
     * @param options.accountAddress - Account holding the domain
     * @param options.docket - Record data including context, directive, and value
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.createRecord({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   docket: {
     *     context: 'social',
     *     directive: 'twitter',
     *     value: '@example'
     *   }
     * });
     * ```
     */
    createRecord({ domain, accountAddress, docket, callbacks }: {
        domain: string;
        accountAddress: string;
        docket: RecordDocketI;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Amend Record
     *
     * Updates an existing record's value. The record must already exist.
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain containing the record
     * @param options.accountAddress - Account holding the domain
     * @param options.docket - Record data with updated value
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.amendRecord({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   docket: {
     *     context: 'social',
     *     directive: 'twitter',
     *     value: '@newhandle'
     *   }
     * });
     * ```
     */
    amendRecord({ domain, accountAddress, docket, callbacks }: {
        domain: string;
        accountAddress: string;
        docket: RecordDocketI;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Delete Record
     *
     * Deletes a record by its context and directive.
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain containing the record
     * @param options.accountAddress - Account holding the domain
     * @param options.docket - Record identifier with context and directive
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.deleteRecord({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   docket: { context: 'social', directive: 'twitter' }
     * });
     * ```
     */
    deleteRecord({ domain, accountAddress, docket, callbacks }: {
        domain: string;
        accountAddress: string;
        docket: DocketPropsI;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Delete Record By ID
     *
     * Deletes a record using its unique ID instead of context/directive.
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain containing the record
     * @param options.accountAddress - Account holding the domain
     * @param options.recordId - Unique record ID
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.deleteRecordById({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   recordId: '<record-id>'
     * });
     * ```
     */
    deleteRecordById({ domain, accountAddress, recordId, callbacks }: {
        domain: string;
        accountAddress: string;
        recordId: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Create Records (Batch)
     *
     * Creates multiple records in a single transaction using set_records_batch.
     * More efficient than multiple createRecord calls.
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain to set records on
     * @param options.accountAddress - Account address setting the records
     * @param options.records - Array of records to create (context, directive, value)
     * @param options.callbacks - Optional transaction callbacks
     * @returns Transaction response
     *
     * @example
     * ```typescript
     * const result = await namespace.createRecords({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   records: [
     *     { context: 'social', directive: 'twitter', value: '@example' },
     *     { context: 'social', directive: 'github', value: 'example' }
     *   ]
     * });
     * ```
     */
    createRecords({ domain, accountAddress, records, callbacks }: {
        domain: string;
        accountAddress: string;
        records: RecordEntryI[];
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Delete Records (Batch)
     *
     * Deletes multiple records in a single transaction using delete_records_batch.
     * More efficient than multiple deleteRecord calls.
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain to delete records from
     * @param options.accountAddress - Account address deleting the records
     * @param options.records - Array of record keys to delete (context, directive)
     * @param options.callbacks - Optional transaction callbacks
     * @returns Transaction response
     *
     * @example
     * ```typescript
     * const result = await namespace.deleteRecords({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   records: [
     *     { context: 'social', directive: 'twitter' },
     *     { context: 'social', directive: 'github' }
     *   ]
     * });
     * ```
     */
    deleteRecords({ domain, accountAddress, records, callbacks }: {
        domain: string;
        accountAddress: string;
        records: RecordRefI[];
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Delete Context Records
     *
     * Removes all records within a specific context in a single transaction.
     * Useful for clearing an entire category of records at once.
     *
     * @category Record Management
     * @param options - The options object
     * @param options.domain - Domain or subdomain to delete context records from
     * @param options.accountAddress - Account address deleting the records
     * @param options.context - Context to delete all records from (e.g., "social", "receivers")
     * @param options.callbacks - Optional transaction callbacks
     * @returns Transaction response
     *
     * @example
     * ```typescript
     * // Delete ALL social records at once
     * const result = await namespace.deleteContextRecords({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_rdx...',
     *   context: 'social'
     * });
     * ```
     */
    deleteContextRecords({ domain, accountAddress, context, callbacks }: {
        domain: string;
        accountAddress: string;
        context: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Transfer Domain
     *
     * Transfers a domain to another account. Can optionally deactivate
     * and clear records before transfer.
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Domain name to transfer
     * @param options.fromAddress - Current owner's account address
     * @param options.destinationAddress - New owner's account address
     * @param options.preferences - Optional transfer preferences (deactivate, clear records)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.transferDomain({
     *   domain: 'example.xrd',
     *   fromAddress: 'account_rdx...',
     *   destinationAddress: 'account_rdx...',
     *   preferences: {
     *     deactivateBeforeTransfer: true,
     *     clearRecords: true
     *   }
     * });
     * ```
     */
    transferDomain({ domain, fromAddress, destinationAddress, preferences, callbacks }: {
        domain: string;
        fromAddress: string;
        destinationAddress: string;
        preferences?: TransferPreferencesI;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Unbond Domain
     *
     * Unbonds a domain and withdraws the bonded USD stable value back to your account.
     * The domain NFT is deposited into the RNS Core component.
     *
     * You can choose whether to preserve or destroy the domain's subregistry data
     * (records and subdomains) during unbonding.
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Domain name to unbond (e.g., "example.xrd")
     * @param options.accountAddress - Account holding the domain
     * @param options.preserveSubregistryData - Whether to preserve subregistry data (default: false)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // Unbond and clear all data
     * const result = await namespace.unbondDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_...'
     * });
     *
     * // Unbond but preserve records/subdomains
     * const result = await namespace.unbondDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_...',
     *   preserveSubregistryData: true
     * });
     * ```
     */
    unbondDomain({ domain, accountAddress, preserveSubregistryData, callbacks }: {
        domain: string;
        accountAddress: string;
        preserveSubregistryData?: boolean;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Rebond Domain
     *
     * Rebonds a domain with a different accepted payment resource without losing the domain.
     * Returns the old bond and any change from the new payment.
     *
     * This allows users to swap their bond resource (e.g., from fUSD to sUSD)
     * while keeping their domain registered.
     *
     * **How it works:**
     * - Proves ownership of the domain NFT
     * - Withdraws the new payment resource from your account
     * - Calls rebond on RNS Core with proof and new payment
     * - Returns the old bond to your account
     * - Returns any excess payment as change
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Domain name to rebond (e.g., "example.xrd")
     * @param options.accountAddress - Account holding the domain
     * @param options.newPaymentResource - New payment resource address to bond with (must be accepted)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // Rebond a domain with a different stablecoin
     * const result = await namespace.rebondDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_...',
     *   newPaymentResource: 'resource_new_stablecoin...'
     * });
     *
     * if (result.feedback) {
     *   console.log('Rebond successful:', result.feedback.messages[0].details);
     *   // Old bond returned to account, domain now bonded with new resource
     * }
     * ```
     */
    rebondDomain({ domain, accountAddress, newPaymentResource, callbacks }: {
        domain: string;
        accountAddress: string;
        newPaymentResource: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Import Accepted Domain
     *
     * Imports an accepted domain into the Radix Namespace system. The import domain NFT
     * stays in the user's account (only a proof is presented), and a new domain NFT is
     * issued with a dedicated subregistry component.
     *
     * **Key differences from regular registration:**
     * - No registrar required (no registrar fees)
     * - Uses existing import domain NFT proof as input
     * - Import domain NFT stays in user's account
     * - Payment covers only the bond amount (refundable on unbond)
     *
     * @category Domain Transactions
     * @param options - The options object
     * @param options.domain - Domain name to import (e.g., "example.xrd")
     * @param options.accountAddress - Account holding the import domain
     * @param options.paymentResource - Optional payment resource (defaults to first accepted)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // Import an accepted domain (uses default payment resource)
     * const result = await namespace.importAcceptedDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_...'
     * });
     *
     * // Import with specific payment resource
     * const result = await namespace.importAcceptedDomain({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_...',
     *   paymentResource: 'resource_...'
     * });
     * ```
     */
    importAcceptedDomain({ domain, accountAddress, paymentResource, callbacks }: {
        domain: string;
        accountAddress: string;
        paymentResource?: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Update Subregistry Icon
     *
     * Updates the icon_url metadata on the domain's DomainSubregistry component.
     * This allows domain owners to customize the icon displayed for their subregistry.
     *
     * @category Subregistry Management
     * @param options - The options object
     * @param options.domain - Domain name (e.g., "example.xrd")
     * @param options.iconUrl - New icon URL
     * @param options.accountAddress - Account holding the domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.updateSubregistryIcon({
     *   domain: 'example.xrd',
     *   iconUrl: 'https://example.com/icon.png',
     *   accountAddress: 'account_...'
     * });
     * ```
     */
    updateSubregistryIcon({ domain, iconUrl, accountAddress, callbacks }: {
        domain: string;
        iconUrl: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Update Subregistry Dapp Definition
     *
     * Updates the dapp_definition metadata on the domain's DomainSubregistry component.
     * This allows domain owners to link their subregistry to a dApp definition account.
     *
     * @category Subregistry Management
     * @param options - The options object
     * @param options.domain - Domain name (e.g., "example.xrd")
     * @param options.dappDefinitionAddress - New dApp definition address
     * @param options.accountAddress - Account holding the domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.updateSubregistryDappDefinition({
     *   domain: 'example.xrd',
     *   dappDefinitionAddress: 'account_dapp_def...',
     *   accountAddress: 'account_...'
     * });
     * ```
     */
    updateSubregistryDappDefinition({ domain, dappDefinitionAddress, accountAddress, callbacks }: {
        domain: string;
        dappDefinitionAddress: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Update Domain Resource
     *
     * Updates the domain resource address on the domain's DomainSubregistry component.
     * This is used when the subregistry needs to recognize a new domain NFT resource
     * (e.g., after importing a domain from an accepted resource).
     *
     * **Warning:** This is an advanced operation. Only use if you understand the implications
     * of changing the domain resource address on a subregistry.
     *
     * @category Subregistry Management
     * @param options - The options object
     * @param options.domain - Domain name (e.g., "example.xrd")
     * @param options.newDomainResourceAddress - New domain resource address
     * @param options.accountAddress - Account holding the domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.updateDomainResource({
     *   domain: 'example.xrd',
     *   newDomainResourceAddress: 'resource_...',
     *   accountAddress: 'account_...'
     * });
     * ```
     */
    updateDomainResource({ domain, newDomainResourceAddress, accountAddress, callbacks }: {
        domain: string;
        newDomainResourceAddress: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Replace Subregistry
     *
     * Spawns a new empty subregistry for the domain, replacing the current one.
     * The old subregistry is orphaned (no longer referenced by the domain NFT).
     * All existing records and subdomains in the old subregistry become inaccessible.
     *
     * **Security:** The old subregistry remains locked to the original domain name -
     * other domains cannot attach to or interact with it.
     *
     * **Warning:** This is irreversible. All existing records and subdomains will be lost.
     *
     * @category Subregistry Management
     * @param options - The options object
     * @param options.domain - Domain name (e.g., "example.xrd")
     * @param options.accountAddress - Account holding the domain
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.replaceSubregistry({
     *   domain: 'example.xrd',
     *   accountAddress: 'account_...'
     * });
     * ```
     */
    replaceSubregistry({ domain, accountAddress, callbacks }: {
        domain: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Update Account Settings
     *
     * Unified method for managing account RNS settings:
     * - Set or change primary domain
     * - Toggle discovery settings
     *
     * **Privacy-first:** Discovery defaults to `false` when setting a primary domain.
     * Users must explicitly opt-in to be discoverable via reverse resolution.
     *
     * @category Account Settings
     * @param options - The options object
     * @param options.accountAddress - Account to update settings for
     * @param options.primaryDomain - Domain to set as primary (root or subdomain). Creates/updates config badge.
     * @param options.enableDiscovery - Whether to enable discovery. Defaults to false when setting primaryDomain.
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // Set primary domain (discovery disabled by default - privacy first)
     * const result = await namespace.updateAccountSettings({
     *   accountAddress: 'account_...',
     *   primaryDomain: 'example.xrd'
     * });
     *
     * // Set primary domain AND enable discovery (opt-in)
     * const result = await namespace.updateAccountSettings({
     *   accountAddress: 'account_...',
     *   primaryDomain: 'example.xrd',
     *   enableDiscovery: true
     * });
     *
     * // Set a subdomain as primary
     * const result = await namespace.updateAccountSettings({
     *   accountAddress: 'account_...',
     *   primaryDomain: 'blog.example.xrd'
     * });
     *
     * // Toggle discovery only (requires existing config badge)
     * const result = await namespace.updateAccountSettings({
     *   accountAddress: 'account_...',
     *   enableDiscovery: true
     * });
     * ```
     */
    updateAccountSettings({ accountAddress, primaryDomain, enableDiscovery, callbacks }: {
        accountAddress: string;
        primaryDomain?: string;
        enableDiscovery?: boolean;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Resolve Account Domain (Reverse Resolution)
     *
     * Performs reverse resolution to find the primary domain for an account address.
     * **This method respects the discovery flag** - it will only return the domain if
     * discovery is enabled by the account owner.
     *
     * Use this for third-party lookups where you want to respect user privacy settings.
     * Use `getAccountSettings` if you need to see all config data regardless of
     * discovery settings (e.g., for the account owner's own UI).
     *
     * @category Account Settings
     * @param options - The options object
     * @param options.accountAddress - Account address to resolve
     * @returns Domain name if found and discovery enabled, null otherwise
     *
     * @example
     * ```typescript
     * const domain = await namespace.resolveAccountDomain({
     *   accountAddress: 'account_...'
     * });
     *
     * if (domain.data) {
     *   console.log(`This account goes by: ${domain.data}`);
     * } else {
     *   console.log('No discoverable domain for this account');
     * }
     * ```
     */
    resolveAccountDomain({ accountAddress }: {
        accountAddress: string;
    }): Promise<SdkResponseT<string | null>>;
    /**
     * Register as a Registrar (Domain Service Provider)
     *
     * Registers your service as a domain registrar, allowing you to collect fees
     * from domain registrations. Returns a unique registrar badge NFT for authentication.
     *
     * Fee calculation: Fees are calculated as a percentage of the domain's base price
     * (e.g., 10% of a 4 USD domain = 0.4 USD fee). No upper limit on percentages.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.name - Business or service name (1-100 characters)
     * @param options.iconUrl - Public URL to your registrar logo/icon
     * @param options.websiteUrl - Public URL to your registrar's website
     * @param options.feePercentage - Fee percentage (1 = 1%, 0.5 = 0.5%, 200 = 200%)
     * @param options.accountAddress - Account to receive the registrar badge
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.registerAsRegistrar({
     *   name: 'My Domain Service',
     *   iconUrl: 'https://radixnameservice.com/logo.png',
     *   websiteUrl: 'https://radixnameservice.com',
     *   feePercentage: new Decimal(2.5), // 2.5% fee
     *   accountAddress: 'account_...'
     * });
     * ```
     */
    registerAsRegistrar({ name, iconUrl, websiteUrl, feePercentage, accountAddress, callbacks }: {
        name: string;
        iconUrl: string;
        websiteUrl: string;
        feePercentage: Decimal;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Update Registrar Metadata
     *
     * Updates business information for your registrar service.
     * All fields are optional - only provided fields will be updated.
     * Requires proof of registrar badge ownership.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.registrarId - Your registrar badge ID
     * @param options.accountAddress - Account holding the registrar badge
     * @param options.name - Optional new business name (1-100 characters)
     * @param options.iconUrl - Optional new icon URL
     * @param options.websiteUrl - Optional new website URL
     * @param options.feePercentage - Optional new fee percentage (>= 0)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * const result = await namespace.updateRegistrar({
     *   registrarId: '1',  // SDK handles formatting automatically
     *   accountAddress: 'account_...',
     *   feePercentage: new Decimal(3), // Update only fee to 3%
     * });
     * ```
     */
    updateRegistrar({ registrarId, accountAddress, name, iconUrl, websiteUrl, feePercentage, callbacks }: {
        registrarId: string;
        accountAddress: string;
        name?: string;
        iconUrl?: string;
        websiteUrl?: string;
        feePercentage?: Decimal;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Burn Registrar Badge
     * Note: Any unwithdrawn fees will be locked in the contract forever.
     *
     * **Before burning**: Withdraw all accumulated fees using `withdrawRegistrarFees()`.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.registrarId - Your registrar badge ID to burn
     * @param options.accountAddress - Account holding the registrar badge
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // 1. First withdraw all fees
     * await namespace.withdrawRegistrarFees({ registrarId, resourceAddress, accountAddress });
     *
     * // 2. Then burn the badge (irreversible!)
     * const result = await namespace.burnRegistrarBadge({
     *   registrarId: '1',  // SDK handles formatting automatically
     *   accountAddress: 'account_...'
     * });
     * ```
     */
    burnRegistrarBadge({ registrarId, accountAddress, callbacks }: {
        registrarId: string;
        accountAddress: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    /**
     * Get All Registrars
     *
     * Retrieves registered domain service providers (registrars) in the RNS system.
     * Returns paginated registrar badge IDs.
     * Use `getRegistrarDetails()` to fetch full metadata for a specific registrar.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.pagination - Optional pagination parameters
     * @returns Paginated registrar badge IDs
     *
     * @example
     * ```typescript
     * const result = await namespace.getAllRegistrars();
     * if (result.data) {
     *   console.log(`Found ${result.data.pagination.total_count} registrars`);
     *   result.data.registrar_ids.forEach(badgeId => console.log(badgeId));
     * }
     * ```
     */
    getAllRegistrars({ pagination }?: {
        pagination?: PaginationParamsI;
    }): Promise<SdkResponseT<PaginatedRegistrarsResponseI>>;
    /**
     * Get Registrar Details
     *
     * Retrieves full metadata for a specific registrar including name, URLs, and fee percentage.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.registrarId - The registrar badge ID
     * @returns Registrar metadata including name, iconUrl, websiteUrl, and feePercentage
     *
     * @example
     * ```typescript
     * const result = await namespace.getRegistrarDetails({
     *   registrarId: '1'  // SDK handles formatting automatically
     * });
     * if (result.data) {
     *   console.log(`Registrar: ${result.data.name}`);
     *   console.log(`Fee: ${result.data.feePercentage}%`);
     * }
     * ```
     */
    getRegistrarDetails({ registrarId }: {
        registrarId: string;
    }): Promise<SdkResponseT<RegistrarDetailsI>>;
    /**
     * Get Registrar Stats
     *
     * Retrieves detailed performance statistics for a specific registrar, including
     * domain registration counts and fee accumulation data.
     *
     * Statistics include:
     * - **domains_bonded**: Current active domains per payment resource
     * - **domains_bonded_cumulative**: Lifetime total domains registered
     * - **fees_earned_cumulative**: Lifetime total fees earned per resource
     * - **fees_earned_current**: Current available fees to withdraw
     * - **last_withdrawal**: Timestamp of last fee withdrawal
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.registrarId - The registrar badge ID (raw or formatted)
     * @returns Registrar statistics or null if registrar not found
     *
     * @example
     * ```typescript
     * const result = await namespace.getRegistrarStats({ registrarId: '1' });
     * if (result.data) {
     *   console.log(`Total domains registered: ${result.data.domains_bonded_cumulative}`);
     *   console.log(`Current fees available:`, result.data.fees_earned_current);
     * } else if (result.data === null) {
     *   console.log('Registrar not found');
     * }
     * ```
     */
    getRegistrarStats({ registrarId }: {
        registrarId: string;
    }): Promise<SdkResponseT<RegistrarStatsI | null>>;
    /**
     * Get Registrar Fee Balances
     *
     * Retrieves accumulated fee balances for a specific registrar across all payment resources.
     * Fees are collected when domains are registered through this registrar.
     *
     * Use `withdrawRegistrarFees()` to withdraw accumulated fees.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.registrarId - The registrar badge ID
     * @param options.pagination - Optional pagination parameters
     * @returns Paginated fee vault entries with resource details and amounts
     *
     * @example
     * ```typescript
     * const result = await namespace.getRegistrarFeeBalances({
     *   registrarId: '1'  // SDK handles formatting automatically
     * });
     * if (result.data) {
     *   console.log(`Total fee entries: ${result.data.pagination.total_count}`);
     *   result.data.fees.forEach(fee => {
     *     console.log(`${fee.resource.symbol}: ${fee.amount}`);
     *   });
     * }
     * ```
     */
    getRegistrarFeeBalances({ registrarId, pagination }: {
        registrarId: string;
        pagination?: PaginationParamsI;
    }): Promise<SdkResponseT<PaginatedRegistrarFeesI>>;
    /**
     * Withdraw Registrar Fees
     *
     * Withdraws accumulated fees for a registrar. By default, auto-discovers and
     * withdraws from ALL fee vaults in a single transaction. Optionally specify
     * a single resource to withdraw from.
     *
     * Requires proof of registrar badge ownership.
     *
     * @category Registrar System
     * @param options - The options object
     * @param options.registrarId - Your registrar badge ID
     * @param options.accountAddress - Account holding the registrar badge
     * @param options.resourceAddress - Optional: specific resource to withdraw (default: all)
     * @param options.callbacks - Optional transaction event callbacks
     * @returns Transaction response with success/error details
     *
     * @example
     * ```typescript
     * // Withdraw ALL accumulated fees (recommended)
     * const result = await namespace.withdrawRegistrarFees({
     *   registrarId: '1',
     *   accountAddress: 'account_...'
     * });
     *
     * // Or withdraw from a specific resource only
     * const result = await namespace.withdrawRegistrarFees({
     *   registrarId: '1',
     *   accountAddress: 'account_...',
     *   resourceAddress: 'resource_rdx1t4te4...' // fUSD address
     * });
     *
     * if (result.feedback) {
     *   console.log('Fees withdrawn successfully!');
     * }
     * ```
     */
    withdrawRegistrarFees({ registrarId, accountAddress, resourceAddress, callbacks }: {
        registrarId: string;
        accountAddress: string;
        resourceAddress?: string;
        callbacks?: EventCallbacksI;
    }): Promise<SdkTransactionResponseT<TransactionFeedbackStackI>>;
    utils: {
        validateDomain({ domain }: {
            domain: string;
        }): UtilValidationT;
        validateSubdomain({ subdomain }: {
            subdomain: string;
        }): UtilValidationT;
        validateAccountAddress: ({ accountAddress }: {
            accountAddress: string;
        }) => UtilValidationT;
        getRootFromSubdomain({ subdomain }: {
            subdomain: string;
        }): string | null;
        isSubdomain(domainEntity: string): boolean;
        isRootDomain(domainEntity: string): boolean;
        /**
         * Get Registration Cost Breakdown
         *
         * Calculates and returns a detailed breakdown of all costs for domain registration.
         * Use this to show users the exact costs before they commit to registration.
         *
         * @param options - The options object
         * @param options.domain - Domain name to register (e.g., "example.xrd")
         * @param options.registrarId - Registrar badge ID to use for registration
         * @param options.paymentResource - Optional payment resource address (defaults to first accepted resource)
         * @returns Cost breakdown including bond amount, registrar fee, and total
         *
         * @example
         * ```typescript
         * const result = await namespace.utils.getCostBreakdown({
         *   domain: 'example.xrd',
         *   registrarId: '1'  // SDK handles formatting automatically
         * });
         * if (result.data) {
         *   console.log(`Bond: ${result.data.bondAmount}`);
         *   console.log(`Registrar Fee (${result.data.registrarFeePercentage}%): ${result.data.registrarFee}`);
         *   console.log(`Total: ${result.data.totalAmount}`);
         * }
         * ```
         */
        getCostBreakdown: ({ domain, registrarId, paymentResource }: {
            domain: string;
            registrarId: string;
            paymentResource?: string;
        }) => Promise<SdkResponseT<RegistrationCostBreakdownI>>;
        /**
         * Get Accepted Bond Tokens
         *
         * Returns the list of accepted payment resources for domain registration bonds,
         * with full resource details following Radix metadata standards.
         *
         * Results are cached permanently after the first call since accepted
         * payment resources are static once an RNS Core component is instantiated.
         *
         * @returns Array of accepted bond tokens with full resource details
         *
         * @example
         * ```typescript
         * const tokens = await namespace.utils.getAcceptedBondTokens();
         * console.log('Accepted tokens:', tokens.data);
         * // [{
         * //   address: 'resource_rdx...',
         * //   type: 'fungible',
         * //   name: 'Fake USD',
         * //   symbol: 'fUSD',
         * //   description: '...',
         * //   tags: [],
         * //   icon_url: 'https://...',
         * //   info_url: 'https://...'
         * // }, ...]
         * ```
         */
        getAcceptedBondTokens: () => Promise<SdkResponseT<ResourceDetailsI[]>>;
        /**
         * Get Account Bond Balances
         *
         * Returns the current balance for all accepted payment resources.
         * Use this to show users what tokens they have available for payment.
         *
         * @param options - The options object
         * @param options.accountAddress - The account address to check
         * @returns Account bond balances with resource details
         *
         * @example
         * ```typescript
         * const balances = await namespace.utils.getAccountBondBalances({
         *   accountAddress: 'account_rdx...'
         * });
         *
         * balances.data.balances.forEach(r => {
         *   console.log(`${r.resourceName} (${r.resourceSymbol}): ${r.balance}`);
         * });
         * ```
         */
        getAccountBondBalances: ({ accountAddress }: {
            accountAddress: string;
        }) => Promise<SdkResponseT<AccountBondBalancesResultI>>;
        /**
         * Check Account Bond Affordability
         *
         * Compares account balances against a required amount to determine
         * which tokens have sufficient balance and which don't.
         *
         * @param options - The options object
         * @param options.accountAddress - The account address to check
         * @param options.requiredAmount - The total amount required (from getCostBreakdown)
         * @returns Affordability check with sufficient/insufficient arrays
         *
         * @example
         * ```typescript
         * // First get the cost breakdown
         * const costs = await namespace.utils.getCostBreakdown({
         *   domain: 'example.xrd',
         *   registrarId: '1'
         * });
         *
         * // Check affordability
         * const check = await namespace.utils.checkAccountBondAffordability({
         *   accountAddress: 'account_rdx...',
         *   requiredAmount: costs.data.totalAmount
         * });
         *
         * if (check.data.sufficientBalances.length > 0) {
         *   console.log('Can pay with:', check.data.sufficientBalances);
         * } else {
         *   console.log('Insufficient funds in all tokens');
         *   check.data.insufficientBalances.forEach(r => {
         *     console.log(`${r.resourceName}: have ${r.balance}, short by ${r.shortfall}`);
         *   });
         * }
         * ```
         */
        checkAccountBondAffordability: ({ accountAddress, requiredAmount }: {
            accountAddress: string;
            requiredAmount: string;
        }) => Promise<SdkResponseT<BondAffordabilityResultI>>;
    };
}

export { type AccountBondBalancesResultI, type AccountSettingsResultI, type BondAffordabilityResultI, type CheckAuthenticityResponseT, type ComponentAddressString, type ComponentCommonI, type ContextRecordsI, type ContextT, type DecimalString, type DocketPropsI, type DomainAttributesResponseT, type DomainDataI, type DomainStatusInfoI, type DomainStatusT, type EntitiesT, type ErrorI, type ErrorStackI, type EventCallbacksI, type ImportDomainI, type InsufficientBalanceInfoI, type KeyValueStoreAddressString, type NamespaceCoreExpansionI, type NamespaceSDKConfigI, type NetworkT, type PaginatedDomainsResponseI, type PaginatedImportDomainsI, type PaginatedRecordsResponseI, type PaginatedRegistrarFeesI, type PaginatedRegistrarsResponseI, type PaginatedSubdomainsResponseI, type PaginationInfoI, type PaginationParamsI, type RecordDocketI, type RecordEntryI, type RecordItemI, type RecordListResponseT, type RecordQueryResultI, type RecordRefI, type RegistrarDetailsI, type RegistrarFeeVaultI, type RegistrarStatsI, type RegistrationCostBreakdownI, type ReservedDomainClaimI, type ReservedDomainsResponseI, type ResolvedRecordI, type ResolvedRecordResponseT, type ResourceAddressString, type ResourceBalanceInfoI, type ResourceDetailsI, type ResourceTypeT, type SdkResponseT, type SdkTransactionResponseT, type StatusI, type SubDomainDataI, type SufficientBalanceInfoI, type TransactionFeedbackI, type TransactionFeedbackStackI, type TransferPreferencesI, type UtilValidationT, clearAcceptedBondTokensCache, clearAllCaches, clearResourceDetailsCache, NamespaceSDK as default };
