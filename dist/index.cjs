var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/index.ts
var index_exports = {};
__export(index_exports, {
  clearAcceptedBondTokensCache: () => clearAcceptedBondTokensCache,
  clearAllCaches: () => clearAllCaches,
  clearResourceDetailsCache: () => clearResourceDetailsCache,
  default: () => NamespaceSDK
});
module.exports = __toCommonJS(index_exports);
var import_babylon_gateway_api_sdk = require("@radixdlt/babylon-gateway-api-sdk");

// src/utils/pricing.utils.ts
var import_decimal = __toESM(require("decimal.js"), 1);

// src/mappings/errors.ts
var request = {
  missingParameters: ({ verbose = null }) => {
    return {
      code: "MISSING_PARAMETERS",
      error: `Not all required parameters were provided for this request.`,
      verbose
    };
  }
};
var account = {
  retrieval: ({ accountAddress, verbose = null }) => {
    return {
      code: "ACCOUNT_RETRIEVAL_ERROR",
      error: `An error occurred when attempting to fetch items from the following account: ${accountAddress}.`,
      verbose
    };
  },
  invalidAddress: ({ accountAddress, verbose = null }) => {
    return {
      code: "INVALID_ACCOUNT_ADDRESS",
      error: `The Radix account address entered is invalid: ${accountAddress}`,
      verbose
    };
  },
  authenticityMismatch: ({ domain: domain2, verbose = null }) => {
    return {
      code: "AUTHENTICITY_MISMATCH",
      error: `${domain2} has failed the authenticity check.`,
      verbose: verbose || `Inconsistencies have been detected for ${domain2} (e.g. could be inactive with residual records from a previous owner). It is inadvisable to utilize this domain within trusted contexts under these circumstances.`
    };
  }
};
var registration = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "REGISTRATION_ERROR",
      error: `An error occurred when attempting to register ${domain2}.`,
      verbose
    };
  }
};
var activation = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "ACTIVATION_ERROR",
      error: `An error occurred when attempting to activate ${domain2}.`,
      verbose
    };
  }
};
var domain = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "DOMAIN_ERROR",
      error: `An error occurred when attempting to interface with ${domain2}.`,
      verbose
    };
  },
  unavailable: ({ domain: domain2, verbose = null }) => {
    return {
      code: "DOMAIN_TAKEN",
      error: `${domain2} could not be registered as it is already taken.`,
      verbose
    };
  },
  invalid: ({ domain: domain2, verbose = null }) => {
    return {
      code: "INVALID_DOMAIN",
      error: `${domain2} is an invalid domain name.`,
      verbose
    };
  },
  empty: ({ domain: domain2, verbose = null }) => {
    return {
      code: "EMPTY_DOMAIN_DETAILS",
      error: `Could not retrieve details for ${domain2}.`,
      verbose
    };
  }
};
var subdomain = {
  generic: ({ subdomain: subdomain2, verbose = null }) => {
    return {
      code: "SUBDOMAIN_ERROR",
      error: `An error occurred when attempting to interface with ${subdomain2}.`,
      verbose
    };
  },
  creation: ({ subdomain: subdomain2, verbose = null }) => {
    return {
      code: "SUBDOMAIN_CREATION_FAILED",
      error: `An error occurred when attempting to create ${subdomain2}.`,
      verbose
    };
  },
  deletion: ({ subdomain: subdomain2, verbose = null }) => {
    return {
      code: "SUBDOMAIN_DELETION_FAILED",
      error: `An error occurred when attempting to delete ${subdomain2}.`,
      verbose
    };
  },
  invalid: ({ subdomain: subdomain2, verbose = null }) => {
    return {
      code: "INVALID_SUBDOMAIN",
      error: `${subdomain2} is an invalid subdomain name.`,
      verbose
    };
  },
  doesNotExist: ({ subdomain: subdomain2, verbose = null }) => {
    return {
      code: "NONEXISTENT_SUBDOMAIN",
      error: `${subdomain2} does not exist.`,
      verbose
    };
  },
  empty: ({ subdomain: subdomain2, verbose = null }) => {
    return {
      code: "EMPTY_SUBDOMAIN_DETAILS",
      error: `Could not retrieve details for ${subdomain2}.`,
      verbose
    };
  }
};
var transfer = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "DOMAIN_TRANSFER_FAILED",
      error: `Failed to transfer ${domain2}.`,
      verbose
    };
  }
};
var unbond = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "DOMAIN_UNBOND_FAILED",
      error: `Failed to unbond ${domain2}.`,
      verbose
    };
  }
};
var rebond = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "DOMAIN_REBOND_FAILED",
      error: `Failed to rebond ${domain2}.`,
      verbose
    };
  },
  invalidResource: ({ domain: domain2, resource, verbose = null }) => {
    return {
      code: "INVALID_REBOND_RESOURCE",
      error: `Cannot rebond ${domain2} with resource ${resource}. Resource is not accepted.`,
      verbose
    };
  },
  sameResource: ({ domain: domain2, resource, verbose = null }) => {
    return {
      code: "REBOND_SAME_RESOURCE",
      error: `${domain2} is already bonded with ${resource}.`,
      verbose
    };
  }
};
var accountSettings = {
  generic: ({ verbose = null }) => {
    return {
      code: "ACCOUNT_SETTINGS_UPDATE_FAILED",
      error: `Failed to update account settings.`,
      verbose
    };
  },
  noConfigBadge: ({ accountAddress, verbose = null }) => {
    return {
      code: "NO_CONFIG_BADGE",
      error: `Account ${accountAddress} does not have a config badge. Set a primary domain first.`,
      verbose
    };
  },
  nothingToUpdate: ({ accountAddress, verbose = null }) => {
    return {
      code: "NOTHING_TO_UPDATE",
      error: `No settings provided to update for ${accountAddress}. Provide primaryDomain and/or enableDiscovery.`,
      verbose
    };
  }
};
var record = {
  creation: ({ docket, verbose = null }) => {
    return {
      code: "RECORD_CREATION_FAILED",
      error: `An error occurred when attempting to create a domain record for: ${docket.context}:${docket.directive}.`,
      verbose
    };
  },
  deletion: ({ docket, verbose = null }) => {
    return {
      code: "RECORD_DELETION_FAILED",
      error: `An error occurred when attempting to delete a domain record for: ${docket.context}:${docket.directive}.`,
      verbose
    };
  },
  deletionById: ({ recordId, verbose = null }) => {
    return {
      code: "RECORD_DELETION_FAILED",
      error: `An error occurred when attempting to delete a domain record ID: ${recordId}.`,
      verbose
    };
  },
  amendment: ({ docket, verbose = null }) => {
    return {
      code: "RECORD_AMENDMENT_FAILED",
      error: `An error occurred when attempting to edit a domain record for: ${docket.context}:${docket.directive}.`,
      verbose
    };
  },
  retrieval: ({ domain: domain2, verbose = null }) => {
    return {
      code: "RECORD_RETRIEVAL_ERROR",
      error: `An error occurred when attempting to retrieve domain records for: ${domain2}.`,
      verbose
    };
  },
  batchCreation: ({ verbose = null }) => {
    return {
      code: "RECORDS_BATCH_CREATION_FAILED",
      error: `An error occurred when attempting to create multiple domain records.`,
      verbose
    };
  },
  batchDeletion: ({ verbose = null }) => {
    return {
      code: "RECORDS_BATCH_DELETION_FAILED",
      error: `An error occurred when attempting to delete multiple domain records.`,
      verbose
    };
  },
  contextDeletion: ({ context, verbose = null }) => {
    return {
      code: "CONTEXT_RECORDS_DELETION_FAILED",
      error: `An error occurred when attempting to delete all records in context "${context}".`,
      verbose
    };
  }
};
var balance = {
  noAcceptedResources: ({ verbose = null }) => {
    return {
      code: "NO_ACCEPTED_PAYMENT_RESOURCES",
      error: `No accepted payment resources are configured for bond payments.`,
      verbose
    };
  },
  insufficientFunds: ({ requiredAmount, verbose = null }) => {
    return {
      code: "INSUFFICIENT_BALANCE",
      error: `Insufficient balance. You need at least ${requiredAmount} in an accepted payment token.`,
      verbose
    };
  }
};
var discovery = {
  generic: ({ verbose = null }) => {
    return {
      code: "DISCOVERY_UPDATE_FAILED",
      error: `Failed to update discovery settings.`,
      verbose
    };
  },
  noConfigBadge: ({ accountAddress, verbose = null }) => {
    return {
      code: "NO_CONFIG_BADGE",
      error: `Account ${accountAddress} does not have a config badge. Set a primary domain first using updateAccountSettings().`,
      verbose
    };
  },
  disabled: ({ accountAddress, verbose = null }) => {
    return {
      code: "DISCOVERY_DISABLED",
      error: `Discovery is disabled for account ${accountAddress}. The account owner has not enabled reverse resolution.`,
      verbose
    };
  },
  noPrimaryDomain: ({ accountAddress, verbose = null }) => {
    return {
      code: "NO_PRIMARY_DOMAIN",
      error: `No primary domain is set for account ${accountAddress}.`,
      verbose
    };
  }
};
var registrar = {
  feeBalances: ({ registrarId, verbose = null }) => {
    return {
      code: "REGISTRAR_FEE_BALANCES_ERROR",
      error: `Failed to fetch fee balances for registrar: ${registrarId}.`,
      verbose
    };
  },
  withdrawal: ({ registrarId, verbose = null }) => {
    return {
      code: "REGISTRAR_WITHDRAWAL_ERROR",
      error: `Failed to withdraw fees for registrar: ${registrarId}.`,
      verbose
    };
  },
  noFees: ({ registrarId, verbose = null }) => {
    return {
      code: "REGISTRAR_NO_FEES_AVAILABLE",
      error: `No fees available to withdraw for registrar: ${registrarId}.`,
      verbose
    };
  }
};
var importDomain = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "IMPORT_FAILED",
      error: `Failed to import ${domain2}.`,
      verbose
    };
  },
  notFound: ({ domain: domain2, verbose = null }) => {
    return {
      code: "IMPORT_DOMAIN_NOT_FOUND",
      error: `Import domain ${domain2} was not found.`,
      verbose
    };
  },
  alreadyImported: ({ domain: domain2, verbose = null }) => {
    return {
      code: "DOMAIN_ALREADY_IMPORTED",
      error: `${domain2} has already been imported/registered.`,
      verbose
    };
  }
};
var subregistry = {
  generic: ({ domain: domain2, verbose = null }) => {
    return {
      code: "SUBREGISTRY_ERROR",
      error: `An error occurred when attempting to update subregistry for ${domain2}.`,
      verbose
    };
  },
  notOwner: ({ domain: domain2, accountAddress, currentOwner, verbose = null }) => {
    return {
      code: "SUBREGISTRY_NOT_OWNER",
      error: `Account ${accountAddress} is not the activated owner of ${domain2}.`,
      verbose: verbose || `Current owner is ${currentOwner}.`
    };
  }
};
var locker = {
  noLocker: ({ verbose = null }) => {
    return {
      code: "LOCKER_NOT_AVAILABLE",
      error: `AccountLocker is not available for the Radix Namespace component.`,
      verbose
    };
  },
  claimFailed: ({ verbose = null }) => {
    return {
      code: "LOCKER_CLAIM_FAILED",
      error: `Failed to claim items from the AccountLocker.`,
      verbose
    };
  },
  nothingToClaim: ({ accountAddress, verbose = null }) => {
    return {
      code: "LOCKER_NOTHING_TO_CLAIM",
      error: `No domain NFTs found in the AccountLocker for account ${accountAddress}.`,
      verbose
    };
  }
};
var errors_default = { request, account, registration, activation, domain, subdomain, transfer, unbond, rebond, accountSettings, record, balance, discovery, registrar, importDomain, subregistry, locker };

// src/common/util.types.ts
function validResult() {
  return { isValid: true };
}
function invalidResult(error) {
  return { isValid: false, errors: [error] };
}

// src/utils/nft.utils.ts
function stripNonFungibleLocalIdBrackets(id) {
  const trimmed = id.trim();
  if (trimmed.startsWith("#") && trimmed.endsWith("#") || trimmed.startsWith("[") && trimmed.endsWith("]") || trimmed.startsWith("{") && trimmed.endsWith("}")) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}
function formatNonFungibleLocalId(id) {
  const raw = stripNonFungibleLocalIdBrackets(id);
  if (/^\d+$/.test(raw)) {
    return `#${raw}#`;
  }
  return `[${raw}]`;
}

// src/utils/domain.utils.ts
async function domainToNonFungId(name, isByteId = true) {
  if (typeof globalThis.crypto === "undefined") {
    try {
      const { webcrypto } = await import("crypto");
      globalThis.crypto = webcrypto;
    } catch (error) {
      throw new Error("No suitable crypto module found in this environment.");
    }
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(name);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
  const hashArray = new Uint8Array(digest);
  const truncatedHash = hashArray.slice(0, 16);
  const hexString = Array.from(truncatedHash).map((byte) => byte.toString(16).padStart(2, "0")).reverse().join("");
  return isByteId ? `[${hexString}]` : hexString;
}
function stripExtension(domain2) {
  return domain2.split(".")[0];
}
function validateDomain(domain2) {
  const parts = domain2.split(".");
  if ((parts == null ? void 0 : parts[1]) !== "xrd")
    return invalidResult(errors_default.domain.invalid({ domain: domain2, verbose: "Invalid domain extension." }));
  const segment = parts[0];
  if (segment.length < 1)
    return invalidResult(errors_default.domain.invalid({ domain: domain2, verbose: "Domain name must be at least 1 character." }));
  if (segment.length > 65)
    return invalidResult(errors_default.domain.invalid({ domain: domain2, verbose: "Max domain length is 65 characters." }));
  if (!/^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/.test(segment))
    return invalidResult(errors_default.domain.invalid({ domain: domain2, verbose: "Domain must contain only lowercase letters, numbers, and hyphens. Cannot start or end with a hyphen." }));
  return validResult();
}
function validateSubdomain(subdomain2) {
  const parts = subdomain2.split(".");
  if ((parts == null ? void 0 : parts.length) !== 3 || parts[0].length < 2)
    return invalidResult(errors_default.subdomain.invalid({ subdomain: subdomain2, verbose: "Invalid subdomain format. Format should follow {subdomain}.{primary-domain}.xrd" }));
  if (subdomain2.includes("_"))
    return invalidResult(errors_default.subdomain.invalid({ subdomain: subdomain2, verbose: "Special characters are not permitted (except for hyphens)." }));
  const subdomainFormatRegex = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9]))(\.([a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9]))*\.xrd$/;
  if (subdomainFormatRegex.test(subdomain2) === false)
    return invalidResult(errors_default.subdomain.invalid({ subdomain: subdomain2, verbose: "Subdomain name format is incorrect." }));
  return validResult();
}
function validateDomainEntity(domainEntity) {
  const domainType = deriveDomainType(domainEntity);
  if (!domainType.isValid)
    return domainType;
  if (domainType.type === "root")
    return validateDomain(domainEntity);
  if (domainType.type === "sub")
    return validateSubdomain(domainEntity);
  return validResult();
}
function deriveDomainType(domain2) {
  const parts = domain2.split(".");
  if (parts.length === 2 && parts[1] === "xrd") {
    return { isValid: true, type: "root" };
  } else if (parts.length === 3 && parts[2] === "xrd") {
    return { isValid: true, type: "sub" };
  }
  const error = errors_default.domain.invalid({ domain: domain2, verbose: "Domain type is neither a valid root domain nor subdomain." });
  return { isValid: false, errors: [error] };
}
function normaliseDomain(domain2) {
  return domain2.trim().toLowerCase();
}
function deriveRootDomain(subdomain2) {
  const domainParts = subdomain2.split(".");
  const secondToLastDotIndex = domainParts.length - 2;
  const rootDomain = domainParts.slice(secondToLastDotIndex).join(".");
  if (rootDomain.includes(".")) {
    return rootDomain;
  }
  return null;
}

// src/utils/pricing.utils.ts
function getDomainPrice(domain2, priceLadder) {
  const domainWithoutExtension = stripExtension(domain2);
  const length = domainWithoutExtension.length;
  const price = priceLadder[length.toString()];
  if (price) {
    return price;
  }
  return "4";
}
function getCostBreakdown(domain2, priceLadder, registrarFeePercentage, registrarId, registrarName, paymentResource) {
  const bondAmount = getDomainPrice(domain2, priceLadder);
  const bondAmountDecimal = new import_decimal.default(bondAmount);
  const feePercentageNum = registrarFeePercentage.toNumber();
  const registrarFeeDecimal = bondAmountDecimal.mul(feePercentageNum).div(100);
  const totalDecimal = bondAmountDecimal.plus(registrarFeeDecimal);
  return {
    domain: domain2,
    bondAmount,
    registrarFee: registrarFeeDecimal.toFixed(6),
    registrarFeePercentage: registrarFeePercentage.toString(),
    totalAmount: totalDecimal.toFixed(6),
    paymentResource,
    registrarId,
    registrarName
  };
}

// src/utils/decimal.utils.ts
var import_decimal2 = __toESM(require("decimal.js"), 1);
function convertToDecimal(num, decimalPlaces = 5) {
  import_decimal2.default.set({ precision: decimalPlaces, rounding: import_decimal2.default.ROUND_UP });
  return new import_decimal2.default(num);
}

// src/utils/log.utils.ts
var logger = {
  error(context, error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack2 = error instanceof Error ? error.stack : "No stack available";
    console.error(`[Error - ${context}] Message: ${errorMessage}`, { stack: errorStack2 });
  }
};

// src/requests/domain/status.ts
async function requestDomainStatus(domainName, { sdkInstance }) {
  try {
    const statusInfo = await checkDomainStatus(domainName, { sdkInstance });
    if (statusInfo instanceof Error) {
      throw statusInfo;
    }
    const requiredBondUnitsString = getDomainPrice(domainName, sdkInstance.entities.rnsCore.priceLadder);
    const requiredBondUnits = convertToDecimal(requiredBondUnitsString);
    return {
      domain: domainName,
      status: statusInfo.status,
      required_bond_units: requiredBondUnits,
      ...statusInfo.reserved_for ? { reserved_for: statusInfo.reserved_for } : {}
    };
  } catch (e) {
    logger.error("requestDomainStatus", e);
    return e;
  }
}
async function checkDomainStatus(domainName, { sdkInstance }) {
  var _a, _b;
  try {
    const registryResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: sdkInstance.entities.rnsCore.domainRegistry,
        keys: [{ key_json: { kind: "String", value: domainName } }]
      }
    });
    if (registryResponse.entries && registryResponse.entries.length > 0) {
      return {
        domain: domainName,
        status: "taken"
      };
    }
    if (sdkInstance.entities.rnsCore.reservedDomainClaims) {
      try {
        const reservedResponse = await sdkInstance.state.innerClient.keyValueStoreData({
          stateKeyValueStoreDataRequest: {
            key_value_store_address: sdkInstance.entities.rnsCore.reservedDomainClaims,
            keys: [{ key_json: { kind: "String", value: domainName } }]
          }
        });
        if (reservedResponse.entries && reservedResponse.entries.length > 0) {
          const claimantEntry = reservedResponse.entries[0];
          let reservedFor;
          if (((_b = (_a = claimantEntry.value) == null ? void 0 : _a.programmatic_json) == null ? void 0 : _b.kind) === "Reference") {
            reservedFor = claimantEntry.value.programmatic_json.value;
          }
          return {
            domain: domainName,
            status: "reserved",
            reserved_for: reservedFor
          };
        }
      } catch {
      }
    }
    const domainId = await domainToNonFungId(domainName);
    try {
      const importResponse = await sdkInstance.state.innerClient.nonFungibleData({
        stateNonFungibleDataRequest: {
          resource_address: sdkInstance.entities.rnsCore.importDomainResource,
          non_fungible_ids: [domainId]
        }
      });
      if (importResponse && importResponse.non_fungible_ids && importResponse.non_fungible_ids.length > 0) {
        return {
          domain: domainName,
          status: "taken"
        };
      }
    } catch (error) {
    }
    return {
      domain: domainName,
      status: "available"
    };
  } catch (e) {
    logger.error("checkDomainStatus", e);
    return e;
  }
}

// src/requests/domain/reserved.ts
async function requestReservedDomains(accountAddress, { sdkInstance }) {
  var _a, _b;
  try {
    const reservedKvs = sdkInstance.entities.rnsCore.reservedDomainClaims;
    if (!reservedKvs) {
      return { claims: [], total_reserved: 0 };
    }
    const allClaims = [];
    let cursor = void 0;
    do {
      const keysResponse = await sdkInstance.state.innerClient.keyValueStoreKeys({
        stateKeyValueStoreKeysRequest: {
          key_value_store_address: reservedKvs,
          cursor: cursor != null ? cursor : void 0,
          limit_per_page: 100
        }
      });
      if (!keysResponse.items || keysResponse.items.length === 0) break;
      const domainNames = [];
      for (const item of keysResponse.items) {
        if (item.key.programmatic_json.kind === "String") {
          domainNames.push(item.key.programmatic_json.value);
        }
      }
      if (domainNames.length > 0) {
        const dataResponse = await sdkInstance.state.innerClient.keyValueStoreData({
          stateKeyValueStoreDataRequest: {
            key_value_store_address: reservedKvs,
            keys: domainNames.map((name) => ({
              key_json: { kind: "String", value: name }
            }))
          }
        });
        if (dataResponse.entries) {
          for (const entry of dataResponse.entries) {
            const domainName = entry.key.programmatic_json.kind === "String" ? entry.key.programmatic_json.value : void 0;
            const claimant = ((_b = (_a = entry.value) == null ? void 0 : _a.programmatic_json) == null ? void 0 : _b.kind) === "Reference" ? entry.value.programmatic_json.value : void 0;
            if (domainName && claimant) {
              allClaims.push({ domain: domainName, claimant });
            }
          }
        }
      }
      cursor = keysResponse.next_cursor;
    } while (cursor !== null && cursor !== void 0);
    const totalReserved = allClaims.length;
    const accountClaims = accountAddress ? allClaims.filter((c) => c.claimant === accountAddress) : allClaims;
    return {
      claims: accountClaims,
      total_reserved: totalReserved
    };
  } catch (e) {
    logger.error("requestReservedDomains", e);
    return e;
  }
}

// src/utils/gateway.utils.ts
function isStringValue(value) {
  return typeof value === "object" && value !== null && "kind" in value && value.kind === "String";
}
function isTupleValue(value) {
  return typeof value === "object" && value !== null && "kind" in value && value.kind === "Tuple" && "fields" in value && Array.isArray(value.fields);
}
function isDecimalValue(value) {
  return typeof value === "object" && value !== null && "kind" in value && value.kind === "Decimal";
}
function isU32Value(value) {
  return typeof value === "object" && value !== null && "kind" in value && value.kind === "U32";
}
function isEnumValue(value) {
  return typeof value === "object" && value !== null && "kind" in value && value.kind === "Enum";
}
function findFieldByName(fields, fieldName) {
  return fields.find(
    (f) => "field_name" in f && f.field_name === fieldName
  );
}
function getFieldStringValue(field) {
  if (!field) return void 0;
  if (isStringValue(field)) return field.value;
  if ("value" in field && typeof field.value === "string") {
    return field.value;
  }
  return void 0;
}
function getFieldU32Value(field) {
  if (!field) return void 0;
  if (isU32Value(field)) return parseInt(field.value);
  if ("value" in field) {
    const val = field.value;
    if (typeof val === "string") return parseInt(val);
    if (typeof val === "number") return val;
  }
  return void 0;
}
function isFungibleVaultAggregated(resource) {
  return typeof resource === "object" && resource !== null && "vaults" in resource && typeof resource.vaults === "object";
}
function isNonFungibleVaultAggregated(resource) {
  return typeof resource === "object" && resource !== null && "vaults" in resource && typeof resource.vaults === "object";
}
var gatewayBasePaths = {
  mainnet: "https://mainnet.radixdlt.com",
  stokenet: "https://stokenet.radixdlt.com"
};
function getBasePath(network) {
  return gatewayBasePaths[network];
}

// src/utils/resource.utils.ts
function getMetadataValue(metadataItems, key) {
  const item = metadataItems == null ? void 0 : metadataItems.find((m) => m.key === key);
  if (!(item == null ? void 0 : item.value)) return null;
  const value = item.value;
  if ("typed" in value && value.typed) {
    const typedValue = value.typed;
    if (typedValue.type === "String" && "value" in typedValue) {
      return typedValue.value;
    }
    if (typedValue.type === "Url" && "value" in typedValue) {
      return typedValue.value;
    }
  }
  return null;
}
function getMetadataArrayValue(metadataItems, key) {
  const item = metadataItems == null ? void 0 : metadataItems.find((m) => m.key === key);
  if (!(item == null ? void 0 : item.value)) return [];
  const value = item.value;
  if ("typed" in value && value.typed) {
    const typedValue = value.typed;
    if (typedValue.type === "StringArray" && "values" in typedValue) {
      return typedValue.values;
    }
    if (typedValue.type === "UrlArray" && "values" in typedValue) {
      return typedValue.values;
    }
  }
  return [];
}
function parseResourceMetadata(metadataItems) {
  return {
    name: getMetadataValue(metadataItems, "name"),
    symbol: getMetadataValue(metadataItems, "symbol"),
    description: getMetadataValue(metadataItems, "description"),
    tags: getMetadataArrayValue(metadataItems, "tags"),
    icon_url: getMetadataValue(metadataItems, "icon_url"),
    info_url: getMetadataValue(metadataItems, "info_url")
  };
}

// src/requests/resource/details.ts
var resourceDetailsCache = /* @__PURE__ */ new Map();
function getResourceType(resourceDetails) {
  var _a;
  const type = (_a = resourceDetails == null ? void 0 : resourceDetails.details) == null ? void 0 : _a.type;
  if (type === "FungibleResource") return "fungible";
  if (type === "NonFungibleResource") return "non-fungible";
  return "fungible";
}
async function requestResourceDetails(resourceAddress, { sdkInstance }) {
  var _a;
  if (resourceDetailsCache.has(resourceAddress)) {
    return resourceDetailsCache.get(resourceAddress);
  }
  try {
    const response = await sdkInstance.state.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: {
        addresses: [resourceAddress]
      }
    });
    const resourceDetails = response.items[0];
    if (!resourceDetails) {
      throw new Error(`Resource not found: ${resourceAddress}`);
    }
    const metadataItems = ((_a = resourceDetails.metadata) == null ? void 0 : _a.items) || [];
    const metadata = parseResourceMetadata(metadataItems);
    const structured = {
      address: resourceAddress,
      type: getResourceType(resourceDetails),
      ...metadata
    };
    resourceDetailsCache.set(resourceAddress, structured);
    return structured;
  } catch (error) {
    logger.error("requestResourceDetails", error);
    const fallback = {
      address: resourceAddress,
      type: "fungible",
      name: null,
      symbol: null,
      description: null,
      tags: [],
      icon_url: null,
      info_url: null
    };
    resourceDetailsCache.set(resourceAddress, fallback);
    return fallback;
  }
}
function clearResourceDetailsCache() {
  resourceDetailsCache.clear();
}

// src/requests/account/domains.ts
function filterUserDomainVault(accountNfts, domainResourceAddr) {
  var _a;
  return (_a = accountNfts.non_fungible_resources.items.find(
    (nft) => nft.resource_address === domainResourceAddr
  )) == null ? void 0 : _a.vaults.items[0];
}
async function fetchRootDomainIds(accountAddress, accountNfts, { sdkInstance }, pagination) {
  const accountDomainVault = filterUserDomainVault(accountNfts, sdkInstance.entities.rnsCore.domainResource);
  if (!(accountDomainVault == null ? void 0 : accountDomainVault.items)) return { domainIds: [], totalCount: 0, nextCursor: null, previousCursor: null };
  const { vault_address: userDomainVaultAddr } = accountDomainVault;
  const currentPage = (pagination == null ? void 0 : pagination.page) || 1;
  if (currentPage === 1) {
    const totalCount = await getTotalDomainCount(accountAddress, userDomainVaultAddr, accountDomainVault, { sdkInstance });
    return {
      domainIds: accountDomainVault.items,
      totalCount,
      nextCursor: accountDomainVault.next_cursor ? 2 : null,
      previousCursor: null
    };
  }
  let currentCursor = accountDomainVault.next_cursor;
  let pageNumber = 2;
  while (currentCursor && pageNumber < currentPage) {
    try {
      const ledgerStateVersion = (await sdkInstance.status.getCurrent()).ledger_state.state_version;
      const response = await sdkInstance.state.innerClient.entityNonFungibleIdsPage({
        stateEntityNonFungibleIdsPageRequest: {
          address: accountAddress,
          resource_address: sdkInstance.entities.rnsCore.domainResource,
          vault_address: userDomainVaultAddr,
          cursor: currentCursor,
          at_ledger_state: { state_version: ledgerStateVersion }
        }
      });
      currentCursor = response.next_cursor || null;
      pageNumber++;
    } catch (error) {
      logger.error("fetchRootDomainIds", error);
      break;
    }
  }
  if (currentCursor && pageNumber === currentPage) {
    try {
      const ledgerStateVersion = (await sdkInstance.status.getCurrent()).ledger_state.state_version;
      const response = await sdkInstance.state.innerClient.entityNonFungibleIdsPage({
        stateEntityNonFungibleIdsPageRequest: {
          address: accountAddress,
          resource_address: sdkInstance.entities.rnsCore.domainResource,
          vault_address: userDomainVaultAddr,
          cursor: currentCursor,
          at_ledger_state: { state_version: ledgerStateVersion }
        }
      });
      return {
        domainIds: response.items || [],
        totalCount: null,
        nextCursor: response.next_cursor ? currentPage + 1 : null,
        previousCursor: currentPage > 1 ? currentPage - 1 : null
      };
    } catch (error) {
      logger.error("fetchRootDomainIds", error);
    }
  }
  return {
    domainIds: [],
    totalCount: null,
    nextCursor: null,
    previousCursor: currentPage > 1 ? currentPage - 1 : null
  };
}
async function getTotalDomainCount(accountAddress, userDomainVaultAddr, initialVault, { sdkInstance }) {
  var _a, _b, _c;
  try {
    let totalCount = ((_a = initialVault.items) == null ? void 0 : _a.length) || 0;
    let currentCursor = initialVault.next_cursor;
    while (currentCursor) {
      const ledgerStateVersion = (await sdkInstance.status.getCurrent()).ledger_state.state_version;
      const response = await sdkInstance.state.innerClient.entityNonFungibleIdsPage({
        stateEntityNonFungibleIdsPageRequest: {
          address: accountAddress,
          resource_address: sdkInstance.entities.rnsCore.domainResource,
          vault_address: userDomainVaultAddr,
          cursor: currentCursor,
          at_ledger_state: { state_version: ledgerStateVersion }
        }
      });
      totalCount += ((_b = response.items) == null ? void 0 : _b.length) || 0;
      currentCursor = response.next_cursor || null;
    }
    return totalCount;
  } catch (error) {
    logger.error("getTotalDomainCount", error);
    return ((_c = initialVault.items) == null ? void 0 : _c.length) || 0;
  }
}
async function formatDomainList(domains, { sdkInstance }) {
  const parsedDomains = domains.filter((r) => {
    var _a;
    return ((_a = r.data) == null ? void 0 : _a.programmatic_json.kind) === "Tuple";
  }).map((r) => {
    var _a;
    if (((_a = r.data) == null ? void 0 : _a.programmatic_json.kind) === "Tuple") {
      const domainData = r.data.programmatic_json.fields.reduce((acc, field) => {
        var _a2, _b, _c, _d;
        const fieldVal = field.value;
        if (field.kind === "String" && field.field_name) {
          return { ...acc, [field.field_name]: fieldVal };
        }
        if (field.kind === "Decimal" && field.field_name === "bond_amount") {
          return { ...acc, _bond_amount: fieldVal };
        }
        if (field.field_name === "bond_resource" && fieldVal) {
          return { ...acc, _bond_resource: fieldVal };
        }
        if (field.field_name === "subregistry_component_address" && fieldVal) {
          return { ...acc, subregistry_component_address: fieldVal };
        }
        if (field.field_name === "created_timestamp" && field.kind === "I64") {
          return { ...acc, created_timestamp: parseInt(fieldVal) * 1e3 };
        }
        if (field.field_name === "current_activated_owner" && field.kind === "Enum") {
          if (field.variant_name === "Some" && ((_a2 = field.fields) == null ? void 0 : _a2.length) > 0) {
            const ownerField = field.fields[0];
            return { ...acc, current_activated_owner: (_b = ownerField.value) != null ? _b : null };
          }
          return { ...acc, current_activated_owner: null };
        }
        if (field.field_name === "issuer_registrar_id" && field.kind === "Enum") {
          if (field.variant_name === "Some" && ((_c = field.fields) == null ? void 0 : _c.length) > 0) {
            const registrarField = field.fields[0];
            return { ...acc, issuer_registrar_id: (_d = registrarField.value) != null ? _d : null };
          }
          return { ...acc, issuer_registrar_id: null };
        }
        return acc;
      }, { id: r.non_fungible_id });
      return domainData;
    }
    return null;
  }).filter(Boolean);
  const enrichedDomains = await Promise.all(
    parsedDomains.map(async (domain2) => {
      if (!domain2) return null;
      if (domain2._bond_resource && domain2._bond_amount) {
        const resourceDetails = await requestResourceDetails(domain2._bond_resource, { sdkInstance });
        if (resourceDetails instanceof Error) {
          throw resourceDetails;
        }
        const { _bond_resource, _bond_amount, ...domainFields } = domain2;
        return {
          ...domainFields,
          bond: {
            resource: resourceDetails,
            amount: convertToDecimal(_bond_amount)
          }
        };
      }
      return domain2;
    })
  );
  return enrichedDomains;
}
async function getSubregistryCounts(subregistryComponentAddress, { sdkInstance }) {
  var _a, _b;
  try {
    const componentDetails = await sdkInstance.state.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: { addresses: [subregistryComponentAddress] }
    });
    const componentItem = componentDetails.items[0];
    if (!componentItem || componentItem.details.type !== "Component") {
      return { subdomain_count: 0, record_count: 0 };
    }
    const componentState = componentItem.details.state;
    if (!componentState || !("fields" in componentState)) {
      return { subdomain_count: 0, record_count: 0 };
    }
    if (!isTupleValue(componentState)) {
      return { subdomain_count: 0, record_count: 0 };
    }
    const fields = componentState.fields;
    const subdomainCountField = findFieldByName(fields, "subdomain_count");
    const recordCountField = findFieldByName(fields, "record_count");
    const subdomainCount = (_a = getFieldU32Value(subdomainCountField)) != null ? _a : 0;
    const recordCount = (_b = getFieldU32Value(recordCountField)) != null ? _b : 0;
    return {
      subdomain_count: subdomainCount,
      record_count: recordCount
    };
  } catch (error) {
    logger.error("getSubregistryCounts", error);
    return { subdomain_count: 0, record_count: 0 };
  }
}
async function fetchDomainData(accountAddress, { sdkInstance }, pagination) {
  try {
    const accountNfts = await sdkInstance.state.getEntityDetailsVaultAggregated(accountAddress);
    const { domainIds, totalCount, nextCursor, previousCursor } = await fetchRootDomainIds(
      accountAddress,
      accountNfts,
      { sdkInstance },
      pagination
    );
    if (!domainIds.length) {
      return {
        domains: [],
        pagination: {
          next_page: null,
          previous_page: null,
          total_count: totalCount,
          current_page_count: 0
        }
      };
    }
    const response = await sdkInstance.state.innerClient.nonFungibleData({
      stateNonFungibleDataRequest: {
        resource_address: sdkInstance.entities.rnsCore.domainResource,
        non_fungible_ids: domainIds
      }
    });
    const domains = (response == null ? void 0 : response.non_fungible_ids) || [];
    const formattedDomains = await formatDomainList(domains, { sdkInstance });
    const paginationInfo = {
      next_page: nextCursor,
      previous_page: previousCursor,
      total_count: totalCount,
      current_page_count: formattedDomains.length
    };
    return {
      domains: formattedDomains,
      pagination: paginationInfo
    };
  } catch (error) {
    logger.error("fetchPaginatedDomainData", error);
    return null;
  }
}
async function requestAccountDomains(accountAddress, { sdkInstance }, pagination) {
  if (!accountAddress) {
    return {
      domains: [],
      pagination: {
        next_page: null,
        previous_page: null,
        total_count: 0,
        current_page_count: 0
      }
    };
  }
  try {
    return await fetchDomainData(accountAddress, { sdkInstance }, pagination);
  } catch (e) {
    logger.error("requestAccountDomains", e);
    return e;
  }
}
async function requestDomainDetails(domain2, { sdkInstance }) {
  var _a, _b, _c;
  try {
    const registryResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: sdkInstance.entities.rnsCore.domainRegistry,
        keys: [{
          key_json: {
            kind: "String",
            value: domain2
          }
        }]
      }
    });
    if (!registryResponse || !registryResponse.entries || registryResponse.entries.length === 0) {
      return null;
    }
    const nftIdValue = (_b = (_a = registryResponse.entries[0]) == null ? void 0 : _a.value) == null ? void 0 : _b.programmatic_json;
    if (!nftIdValue || nftIdValue.kind !== "NonFungibleLocalId") {
      return null;
    }
    const domainId = nftIdValue.value;
    const response = await sdkInstance.state.innerClient.nonFungibleData({
      stateNonFungibleDataRequest: {
        resource_address: sdkInstance.entities.rnsCore.domainResource,
        non_fungible_ids: [domainId]
      }
    });
    if (!response || !response.non_fungible_ids || response.non_fungible_ids.length === 0) {
      return null;
    }
    const nftData = response.non_fungible_ids[0];
    if (!nftData) return null;
    const fields = ((_c = nftData.data) == null ? void 0 : _c.programmatic_json).fields;
    const parsedData = fields.reduce((acc, field) => {
      var _a2, _b2, _c2, _d;
      const fieldVal = field.value;
      if (field.kind === "String" && field.field_name) {
        return { ...acc, [field.field_name]: fieldVal };
      }
      if (field.kind === "Decimal" && field.field_name === "bond_amount") {
        return { ...acc, _bond_amount: fieldVal };
      }
      if (field.field_name === "bond_resource" && fieldVal) {
        return { ...acc, _bond_resource: fieldVal };
      }
      if (field.field_name === "subregistry_component_address" && fieldVal) {
        return { ...acc, subregistry_component_address: fieldVal };
      }
      if (field.field_name === "created_timestamp" && field.kind === "I64") {
        return { ...acc, created_timestamp: parseInt(fieldVal) * 1e3 };
      }
      if (field.field_name === "current_activated_owner" && field.kind === "Enum") {
        if (field.variant_name === "Some" && ((_a2 = field.fields) == null ? void 0 : _a2.length) > 0) {
          const ownerField = field.fields[0];
          return { ...acc, current_activated_owner: (_b2 = ownerField.value) != null ? _b2 : null };
        }
        return { ...acc, current_activated_owner: null };
      }
      if (field.field_name === "issuer_registrar_id" && field.kind === "Enum") {
        if (field.variant_name === "Some" && ((_c2 = field.fields) == null ? void 0 : _c2.length) > 0) {
          const registrarField = field.fields[0];
          return { ...acc, issuer_registrar_id: (_d = registrarField.value) != null ? _d : null };
        }
        return { ...acc, issuer_registrar_id: null };
      }
      return acc;
    }, { id: nftData.non_fungible_id });
    const resourceDetails = await requestResourceDetails(parsedData._bond_resource, { sdkInstance });
    if (resourceDetails instanceof Error) {
      throw resourceDetails;
    }
    const { _bond_resource, _bond_amount, ...domainFields } = parsedData;
    const domainData = {
      ...domainFields,
      bond: {
        resource: resourceDetails,
        amount: convertToDecimal(_bond_amount)
      }
    };
    if (domainData.subregistry_component_address) {
      const counts = await getSubregistryCounts(
        domainData.subregistry_component_address,
        { sdkInstance }
      );
      domainData.subdomain_count = counts.subdomain_count;
      domainData.record_count = counts.record_count;
    }
    return domainData;
  } catch (e) {
    logger.error("requestDomainDetails", e);
    return e;
  }
}
function parseStringHashMap(mapValue) {
  const result = {};
  if (!mapValue.entries) return result;
  for (const entry of mapValue.entries) {
    const typedEntry = entry;
    if (typedEntry.key.kind === "String" && typedEntry.value.kind === "String") {
      result[typedEntry.key.value] = typedEntry.value.value;
    }
  }
  return result;
}
function parseSubdomainRecord(subdomainRecord, rootDomainData) {
  if (subdomainRecord.kind !== "Tuple") {
    throw new Error("Invalid subdomain record format");
  }
  const parsedSubdomain = {
    name: "",
    full_name: "",
    created_timestamp: 0,
    updated_timestamp: 0,
    metadata: {},
    root_domain: rootDomainData
  };
  for (const field of subdomainRecord.fields) {
    if (field.field_name === "name" && field.kind === "String") {
      parsedSubdomain.name = field.value;
    }
    if (field.field_name === "full_name" && field.kind === "String") {
      parsedSubdomain.full_name = field.value;
    }
    if (field.field_name === "created_timestamp" && field.kind === "I64") {
      parsedSubdomain.created_timestamp = parseInt(field.value) * 1e3;
    }
    if (field.field_name === "updated_timestamp" && field.kind === "I64") {
      parsedSubdomain.updated_timestamp = parseInt(field.value) * 1e3;
    }
    if (field.field_name === "metadata" && field.kind === "Map") {
      parsedSubdomain.metadata = parseStringHashMap(field);
    }
  }
  return parsedSubdomain;
}
async function getSubdomainsKvStoreAddress(subregistryAddress, { sdkInstance }) {
  const componentDetails = await sdkInstance.state.innerClient.stateEntityDetails({
    stateEntityDetailsRequest: { addresses: [subregistryAddress] }
  });
  const componentItem = componentDetails.items[0];
  if (!componentItem || componentItem.details.type !== "Component") {
    throw new Error("Could not fetch subregistry component");
  }
  const componentState = componentItem.details.state;
  if (!componentState || !("fields" in componentState)) {
    throw new Error("Could not fetch subregistry state");
  }
  if (!isTupleValue(componentState)) {
    throw new Error("Invalid subregistry component state");
  }
  const fields = componentState.fields;
  const subdomainsKvStoreField = findFieldByName(fields, "subdomains");
  if (!subdomainsKvStoreField) {
    throw new Error("Subdomains KeyValueStore not found");
  }
  const kvStoreAddress = getFieldStringValue(subdomainsKvStoreField);
  if (!kvStoreAddress) {
    throw new Error("Subdomains KeyValueStore address not found");
  }
  return kvStoreAddress;
}
async function requestSubdomainDetails(subdomain2, { sdkInstance }) {
  try {
    const rootDomainName = deriveRootDomain(subdomain2);
    const rootDomainData = await requestDomainDetails(rootDomainName, { sdkInstance });
    if (!rootDomainData || rootDomainData instanceof Error) {
      throw new Error("Root domain not found or error fetching root domain");
    }
    const subdomainName = subdomain2.split(".")[0];
    const subdomainsKvStoreAddress = await getSubdomainsKvStoreAddress(
      rootDomainData.subregistry_component_address,
      { sdkInstance }
    );
    const subdomainData = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: subdomainsKvStoreAddress,
        keys: [{ key_json: { kind: "String", value: subdomainName } }]
      }
    });
    if (!subdomainData.entries || subdomainData.entries.length === 0) {
      throw new Error("Subdomain not found");
    }
    const subdomainRecord = subdomainData.entries[0].value.programmatic_json;
    return parseSubdomainRecord(subdomainRecord, rootDomainData);
  } catch (e) {
    logger.error("requestSubdomainDetails", e);
    return e instanceof Error ? e : new Error(String(e));
  }
}
async function getSubdomains(domain2, { sdkInstance }, pagination) {
  try {
    const domainData = await requestDomainDetails(domain2, { sdkInstance });
    if (!domainData || domainData instanceof Error) {
      throw new Error("Domain not found");
    }
    if (!domainData.subregistry_component_address) {
      throw new Error("Subregistry component address not found");
    }
    const subdomainsKvStoreAddress = await getSubdomainsKvStoreAddress(
      domainData.subregistry_component_address,
      { sdkInstance }
    );
    const currentPage = (pagination == null ? void 0 : pagination.page) || 1;
    let cursor = void 0;
    let pageNumber = 1;
    while (pageNumber < currentPage) {
      const keysResponse2 = await sdkInstance.state.innerClient.keyValueStoreKeys({
        stateKeyValueStoreKeysRequest: {
          key_value_store_address: subdomainsKvStoreAddress,
          cursor
        }
      });
      if (!keysResponse2.next_cursor) {
        return {
          subdomains: [],
          pagination: {
            next_page: null,
            previous_page: currentPage > 1 ? currentPage - 1 : null,
            total_count: 0,
            current_page_count: 0
          },
          root_domain_name: domain2
        };
      }
      cursor = keysResponse2.next_cursor;
      pageNumber++;
    }
    const keysResponse = await sdkInstance.state.innerClient.keyValueStoreKeys({
      stateKeyValueStoreKeysRequest: {
        key_value_store_address: subdomainsKvStoreAddress,
        cursor
      }
    });
    if (!keysResponse.items || keysResponse.items.length === 0) {
      return {
        subdomains: [],
        pagination: {
          next_page: null,
          previous_page: currentPage > 1 ? currentPage - 1 : null,
          total_count: 0,
          current_page_count: 0
        },
        root_domain_name: domain2
      };
    }
    const subdomainNames = [];
    for (const item of keysResponse.items) {
      const keyItem = item;
      if (keyItem.key.programmatic_json.kind === "String") {
        subdomainNames.push(keyItem.key.programmatic_json.value);
      }
    }
    const subdomainDataResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: subdomainsKvStoreAddress,
        keys: subdomainNames.map((name) => ({
          key_json: { kind: "String", value: name }
        }))
      }
    });
    const subdomains = [];
    if (subdomainDataResponse.entries) {
      for (const entry of subdomainDataResponse.entries) {
        try {
          const parsedSubdomain = parseSubdomainRecord(
            entry.value.programmatic_json,
            domainData
          );
          subdomains.push(parsedSubdomain);
        } catch (error) {
          logger.error("Failed to parse subdomain record", error);
        }
      }
    }
    let totalCount = 0;
    if (currentPage === 1) {
      totalCount = await getTotalSubdomainCount(subdomainsKvStoreAddress, { sdkInstance });
    }
    return {
      subdomains,
      pagination: {
        next_page: keysResponse.next_cursor ? currentPage + 1 : null,
        previous_page: currentPage > 1 ? currentPage - 1 : null,
        total_count: totalCount,
        current_page_count: subdomains.length
      },
      root_domain_name: domain2
    };
  } catch (e) {
    logger.error("getSubdomains", e);
    return e;
  }
}
async function getTotalSubdomainCount(subdomainsKvStoreAddress, { sdkInstance }) {
  var _a;
  try {
    let totalCount = 0;
    let cursor = void 0;
    do {
      const keysResponse = await sdkInstance.state.innerClient.keyValueStoreKeys({
        stateKeyValueStoreKeysRequest: {
          key_value_store_address: subdomainsKvStoreAddress,
          cursor
        }
      });
      totalCount += ((_a = keysResponse.items) == null ? void 0 : _a.length) || 0;
      cursor = keysResponse.next_cursor;
    } while (cursor);
    return totalCount;
  } catch (error) {
    logger.error("getTotalSubdomainCount", error);
    return 0;
  }
}
async function requestDomainEntityDetails(domain2, { sdkInstance }) {
  const domainTypeResult = deriveDomainType(domain2);
  const isSubdomain = domainTypeResult.isValid && domainTypeResult.type === "sub";
  if (isSubdomain) {
    return requestSubdomainDetails(domain2, { sdkInstance });
  }
  return requestDomainDetails(domain2, { sdkInstance });
}

// src/requests/domain/records.ts
async function getRecordsKvStoreAddress(subregistryAddress, { sdkInstance }) {
  const componentDetails = await sdkInstance.state.innerClient.stateEntityDetails({
    stateEntityDetailsRequest: { addresses: [subregistryAddress] }
  });
  const componentItem = componentDetails.items[0];
  if (!componentItem || componentItem.details.type !== "Component") {
    throw new Error("Could not fetch subregistry component");
  }
  const componentState = componentItem.details.state;
  if (!componentState || !("fields" in componentState)) {
    throw new Error("Could not fetch subregistry state");
  }
  const fields = componentState.fields;
  const recordsKvStoreField = fields.find(
    (f) => f.field_name === "records"
  );
  if (!recordsKvStoreField || !recordsKvStoreField.value) {
    throw new Error("Records KeyValueStore not found");
  }
  return String(recordsKvStoreField.value);
}
async function getSubdomainRecordsKvStoreAddress(subregistryAddress, { sdkInstance }) {
  const componentDetails = await sdkInstance.state.innerClient.stateEntityDetails({
    stateEntityDetailsRequest: { addresses: [subregistryAddress] }
  });
  const componentItem = componentDetails.items[0];
  if (!componentItem || componentItem.details.type !== "Component") {
    throw new Error("Could not fetch subregistry component");
  }
  const componentState = componentItem.details.state;
  if (!componentState || !("fields" in componentState)) {
    throw new Error("Could not fetch subregistry state");
  }
  const fields = componentState.fields;
  const subdomainRecordsKvStoreField = fields.find(
    (f) => f.field_name === "subdomain_records"
  );
  if (!subdomainRecordsKvStoreField || !subdomainRecordsKvStoreField.value) {
    throw new Error("Subdomain records KeyValueStore not found");
  }
  return String(subdomainRecordsKvStoreField.value);
}
function parseDirectivesMap(mapValue) {
  const result = {};
  if (!mapValue.entries) return result;
  for (const entry of mapValue.entries) {
    const typedEntry = entry;
    if (typedEntry.key.kind === "String" && typedEntry.value.kind === "String") {
      result[typedEntry.key.value] = typedEntry.value.value;
    }
  }
  return result;
}
async function getTotalContextCount(recordsKvStoreAddress, { sdkInstance }) {
  var _a;
  let totalCount = 0;
  let cursor = void 0;
  do {
    const response = await sdkInstance.state.innerClient.keyValueStoreKeys({
      stateKeyValueStoreKeysRequest: {
        key_value_store_address: recordsKvStoreAddress,
        cursor
      }
    });
    totalCount += ((_a = response.items) == null ? void 0 : _a.length) || 0;
    cursor = response.next_cursor || void 0;
  } while (cursor);
  return totalCount;
}
async function requestRecords(domainName, { sdkInstance }, pagination) {
  try {
    const domainTypeResult = deriveDomainType(domainName);
    if (domainTypeResult.isValid && domainTypeResult.type === "sub") {
      return await requestSubdomainRecords(domainName, { sdkInstance }, pagination);
    }
    const domainData = await requestDomainDetails(domainName, { sdkInstance });
    if (!domainData || domainData instanceof Error) {
      throw new Error("Domain not found");
    }
    if (!domainData.subregistry_component_address) {
      throw new Error("Subregistry component address not found");
    }
    const recordsKvStoreAddress = await getRecordsKvStoreAddress(
      domainData.subregistry_component_address,
      { sdkInstance }
    );
    const currentPage = (pagination == null ? void 0 : pagination.page) || 1;
    let cursor = void 0;
    let pageNumber = 1;
    while (pageNumber < currentPage) {
      const keysResponse2 = await sdkInstance.state.innerClient.keyValueStoreKeys({
        stateKeyValueStoreKeysRequest: {
          key_value_store_address: recordsKvStoreAddress,
          cursor
        }
      });
      if (!keysResponse2.next_cursor) {
        return {
          records: [],
          domain_name: domainName,
          pagination: {
            next_page: null,
            previous_page: currentPage > 1 ? currentPage - 1 : null,
            total_count: 0,
            current_page_count: 0
          }
        };
      }
      cursor = keysResponse2.next_cursor;
      pageNumber++;
    }
    const keysResponse = await sdkInstance.state.innerClient.keyValueStoreKeys({
      stateKeyValueStoreKeysRequest: {
        key_value_store_address: recordsKvStoreAddress,
        cursor
      }
    });
    if (!keysResponse.items || keysResponse.items.length === 0) {
      return {
        records: [],
        domain_name: domainName,
        pagination: {
          next_page: null,
          previous_page: currentPage > 1 ? currentPage - 1 : null,
          total_count: 0,
          current_page_count: 0
        }
      };
    }
    const contexts = [];
    for (const item of keysResponse.items) {
      if (item.key.programmatic_json.kind === "String") {
        contexts.push(item.key.programmatic_json.value);
      }
    }
    const recordsResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: recordsKvStoreAddress,
        keys: contexts.map((context) => ({
          key_json: { kind: "String", value: context }
        }))
      }
    });
    const records = [];
    if (recordsResponse.entries) {
      for (const entry of recordsResponse.entries) {
        const keyJson = entry.key.programmatic_json;
        const context = keyJson && typeof keyJson === "object" && "value" in keyJson && typeof keyJson.value === "string" ? keyJson.value : "";
        const directivesMap = entry.value.programmatic_json;
        const directives = parseDirectivesMap(directivesMap);
        for (const [directive, value] of Object.entries(directives)) {
          records.push({
            context,
            directive,
            value,
            record_id: `${context}:${directive}`,
            domain_name: domainName,
            is_subdomain: false
          });
        }
      }
    }
    let totalCount = 0;
    if (currentPage === 1) {
      totalCount = await getTotalContextCount(recordsKvStoreAddress, { sdkInstance });
    }
    const paginationInfo = {
      next_page: keysResponse.next_cursor ? currentPage + 1 : null,
      previous_page: currentPage > 1 ? currentPage - 1 : null,
      total_count: totalCount,
      current_page_count: records.length
    };
    return {
      records,
      domain_name: domainName,
      pagination: paginationInfo
    };
  } catch (e) {
    logger.error("requestRecords", e);
    return e;
  }
}
async function requestSubdomainRecords(subdomainFullName, { sdkInstance }, pagination) {
  try {
    const rootDomainName = deriveRootDomain(subdomainFullName);
    const rootDomainData = await requestDomainDetails(rootDomainName, { sdkInstance });
    if (!rootDomainData || rootDomainData instanceof Error) {
      throw new Error("Root domain not found");
    }
    const subdomainName = subdomainFullName.split(".")[0];
    const subdomainRecordsKvStoreAddress = await getSubdomainRecordsKvStoreAddress(
      rootDomainData.subregistry_component_address,
      { sdkInstance }
    );
    const subdomainRecordsResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: subdomainRecordsKvStoreAddress,
        keys: [{ key_json: { kind: "String", value: subdomainName } }]
      }
    });
    if (!subdomainRecordsResponse.entries || subdomainRecordsResponse.entries.length === 0) {
      return {
        records: [],
        domain_name: subdomainFullName,
        pagination: {
          next_page: null,
          previous_page: null,
          total_count: 0,
          current_page_count: 0
        }
      };
    }
    const contextMapValue = subdomainRecordsResponse.entries[0].value.programmatic_json;
    const records = [];
    if (contextMapValue.entries) {
      for (const contextEntry of contextMapValue.entries) {
        const typedContextEntry = contextEntry;
        if (typedContextEntry.key.kind === "String" && typedContextEntry.value.kind === "Map") {
          const context = typedContextEntry.key.value;
          const directivesMap = typedContextEntry.value;
          const directives = parseDirectivesMap(directivesMap);
          for (const [directive, value] of Object.entries(directives)) {
            records.push({
              context,
              directive,
              value,
              record_id: `${context}:${directive}`,
              domain_name: subdomainFullName,
              is_subdomain: true
            });
          }
        }
      }
    }
    return {
      records,
      domain_name: subdomainFullName,
      pagination: {
        next_page: null,
        previous_page: null,
        total_count: records.length,
        current_page_count: records.length
      }
    };
  } catch (e) {
    logger.error("requestSubdomainRecords", e);
    return e;
  }
}
async function resolveRecord(domain2, { context, directive }, { sdkInstance }) {
  try {
    const domainTypeResult = deriveDomainType(domain2);
    if (domainTypeResult.isValid && domainTypeResult.type === "sub") {
      return await resolveSubdomainRecord(domain2, context, directive, { sdkInstance });
    }
    const domainData = await requestDomainDetails(domain2, { sdkInstance });
    if (!domainData || domainData instanceof Error) {
      throw new Error("Domain not found");
    }
    if (!domainData.subregistry_component_address) {
      throw new Error("Subregistry component address not found");
    }
    const recordsKvStoreAddress = await getRecordsKvStoreAddress(
      domainData.subregistry_component_address,
      { sdkInstance }
    );
    const contextResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: recordsKvStoreAddress,
        keys: [{ key_json: { kind: "String", value: context } }]
      }
    });
    if (!contextResponse.entries || contextResponse.entries.length === 0) {
      return null;
    }
    const directivesMap = contextResponse.entries[0].value.programmatic_json;
    const directives = parseDirectivesMap(directivesMap);
    const value = directives[directive] || null;
    return { value };
  } catch (e) {
    logger.error("resolveRecord", e);
    return e;
  }
}
async function resolveSubdomainRecord(subdomainFullName, context, directive, { sdkInstance }) {
  try {
    const rootDomainName = deriveRootDomain(subdomainFullName);
    const rootDomainData = await requestDomainDetails(rootDomainName, { sdkInstance });
    if (!rootDomainData || rootDomainData instanceof Error) {
      throw new Error("Root domain not found");
    }
    const subdomainName = subdomainFullName.split(".")[0];
    const subdomainRecordsKvStoreAddress = await getSubdomainRecordsKvStoreAddress(
      rootDomainData.subregistry_component_address,
      { sdkInstance }
    );
    const subdomainRecordsResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: subdomainRecordsKvStoreAddress,
        keys: [{ key_json: { kind: "String", value: subdomainName } }]
      }
    });
    if (!subdomainRecordsResponse.entries || subdomainRecordsResponse.entries.length === 0) {
      return null;
    }
    const contextMapValue = subdomainRecordsResponse.entries[0].value.programmatic_json;
    if (!contextMapValue.entries) {
      return null;
    }
    for (const contextEntry of contextMapValue.entries) {
      const typedContextEntry = contextEntry;
      if (typedContextEntry.key.kind === "String" && typedContextEntry.key.value === context) {
        if (typedContextEntry.value.kind === "Map") {
          const directivesMap = typedContextEntry.value;
          const directives = parseDirectivesMap(directivesMap);
          const value = directives[directive] || null;
          return { value };
        }
      }
    }
    return null;
  } catch (e) {
    logger.error("resolveSubdomainRecord", e);
    return e;
  }
}

// src/requests/account/imports.ts
function filterImportDomainVault(accountNfts, importDomainResourceAddr) {
  var _a, _b;
  return (_b = (_a = accountNfts.non_fungible_resources) == null ? void 0 : _a.items.find(
    (nft) => nft.resource_address === importDomainResourceAddr
  )) == null ? void 0 : _b.vaults.items[0];
}
async function fetchImportDomainIds(accountAddress, accountNfts, { sdkInstance }, pagination) {
  const importDomainVault = filterImportDomainVault(
    accountNfts,
    sdkInstance.entities.rnsCore.importDomainResource
  );
  if (!(importDomainVault == null ? void 0 : importDomainVault.items)) {
    return { domainIds: [], totalCount: 0, nextCursor: null, previousCursor: null };
  }
  const { vault_address: vaultAddr } = importDomainVault;
  const currentPage = (pagination == null ? void 0 : pagination.page) || 1;
  const totalCount = importDomainVault.total_count || importDomainVault.items.length;
  if (currentPage === 1) {
    return {
      domainIds: importDomainVault.items,
      totalCount,
      nextCursor: importDomainVault.next_cursor ? 2 : null,
      previousCursor: null
    };
  }
  let currentCursor = importDomainVault.next_cursor;
  let pageNumber = 2;
  while (currentCursor && pageNumber < currentPage) {
    try {
      const ledgerStateVersion = (await sdkInstance.status.getCurrent()).ledger_state.state_version;
      const response = await sdkInstance.state.innerClient.entityNonFungibleIdsPage({
        stateEntityNonFungibleIdsPageRequest: {
          address: accountAddress,
          resource_address: sdkInstance.entities.rnsCore.importDomainResource,
          vault_address: vaultAddr,
          cursor: currentCursor,
          at_ledger_state: { state_version: ledgerStateVersion }
        }
      });
      currentCursor = response.next_cursor || null;
      pageNumber++;
    } catch (error) {
      logger.error("fetchImportDomainIds", error);
      break;
    }
  }
  if (currentCursor && pageNumber === currentPage) {
    try {
      const ledgerStateVersion = (await sdkInstance.status.getCurrent()).ledger_state.state_version;
      const response = await sdkInstance.state.innerClient.entityNonFungibleIdsPage({
        stateEntityNonFungibleIdsPageRequest: {
          address: accountAddress,
          resource_address: sdkInstance.entities.rnsCore.importDomainResource,
          vault_address: vaultAddr,
          cursor: currentCursor,
          at_ledger_state: { state_version: ledgerStateVersion }
        }
      });
      return {
        domainIds: response.items || [],
        totalCount,
        nextCursor: response.next_cursor ? currentPage + 1 : null,
        previousCursor: currentPage > 1 ? currentPage - 1 : null
      };
    } catch (error) {
      logger.error("fetchImportDomainIds", error);
    }
  }
  return {
    domainIds: [],
    totalCount,
    nextCursor: null,
    previousCursor: currentPage > 1 ? currentPage - 1 : null
  };
}
function parseImportDomainData(nftId, fields) {
  var _a, _b, _c, _d, _e;
  const domain2 = {
    name: "",
    id: nftId,
    address: null,
    created_timestamp: 0,
    last_valid_timestamp: null,
    deposit_amount: null,
    primary_domain: null,
    key_image_url: ""
  };
  for (const field of fields) {
    if (!field.field_name) continue;
    switch (field.field_name) {
      case "name":
        if (field.kind === "String") {
          domain2.name = field.value;
        }
        break;
      case "address":
        if (field.kind === "Enum") {
          if (field.variant_name === "Some" && ((_a = field.fields) == null ? void 0 : _a[0])) {
            const innerField = field.fields[0];
            if (innerField.kind === "Reference") {
              domain2.address = innerField.value;
            }
          }
        }
        break;
      case "created_timestamp":
        if (field.kind === "I64") {
          domain2.created_timestamp = parseInt(field.value, 10) * 1e3;
        }
        break;
      case "last_valid_timestamp":
        if (field.kind === "Enum") {
          if (field.variant_name === "Some" && ((_b = field.fields) == null ? void 0 : _b[0])) {
            const innerField = field.fields[0];
            if (innerField.kind === "I64") {
              domain2.last_valid_timestamp = parseInt(innerField.value, 10) * 1e3;
            }
          }
        }
        break;
      case "deposit_amount":
        if (field.kind === "Enum") {
          if (field.variant_name === "Some" && ((_c = field.fields) == null ? void 0 : _c[0])) {
            const tupleField = field.fields[0];
            if (tupleField.kind === "Tuple" && ((_d = tupleField.fields) == null ? void 0 : _d.length) === 2) {
              const resourceField = tupleField.fields[0];
              const amountField = tupleField.fields[1];
              if (resourceField.kind === "Reference" && amountField.kind === "Decimal") {
                domain2.deposit_amount = {
                  resource: resourceField.value,
                  amount: amountField.value
                };
              }
            }
          }
        }
        break;
      case "primary_domain":
        if (field.kind === "Enum") {
          if (field.variant_name === "Some" && ((_e = field.fields) == null ? void 0 : _e[0])) {
            const innerField = field.fields[0];
            if (innerField.kind === "NonFungibleLocalId") {
              domain2.primary_domain = innerField.value;
            }
          }
        }
        break;
      case "key_image_url":
        if (field.kind === "String") {
          domain2.key_image_url = field.value;
        }
        break;
    }
  }
  return domain2;
}
async function requestAccountImportDomains({
  accountAddress,
  sdkInstance,
  pagination
}) {
  var _a;
  if (!accountAddress) {
    return {
      domains: [],
      pagination: {
        next_page: null,
        previous_page: null,
        total_count: 0,
        current_page_count: 0
      }
    };
  }
  try {
    const ledgerStateVersion = (await sdkInstance.status.getCurrent()).ledger_state.state_version;
    const accountNfts = await sdkInstance.state.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: {
        addresses: [accountAddress],
        aggregation_level: "Vault",
        opt_ins: {
          non_fungible_include_nfids: true
        },
        at_ledger_state: { state_version: ledgerStateVersion }
      }
    });
    const accountDetails = accountNfts.items[0];
    if (!accountDetails) {
      return {
        domains: [],
        pagination: {
          next_page: null,
          previous_page: null,
          total_count: 0,
          current_page_count: 0
        }
      };
    }
    const { domainIds, totalCount, nextCursor, previousCursor } = await fetchImportDomainIds(
      accountAddress,
      accountDetails,
      { sdkInstance },
      pagination
    );
    if (domainIds.length === 0) {
      return {
        domains: [],
        pagination: {
          next_page: null,
          previous_page: null,
          total_count: 0,
          current_page_count: 0
        }
      };
    }
    const nftDataResponse = await sdkInstance.state.innerClient.nonFungibleData({
      stateNonFungibleDataRequest: {
        resource_address: sdkInstance.entities.rnsCore.importDomainResource,
        non_fungible_ids: domainIds
      }
    });
    const domains = [];
    for (const nftItem of nftDataResponse.non_fungible_ids || []) {
      if (!((_a = nftItem.data) == null ? void 0 : _a.programmatic_json)) continue;
      const fields = nftItem.data.programmatic_json.fields;
      if (!fields) continue;
      const domain2 = parseImportDomainData(nftItem.non_fungible_id, fields);
      domains.push(domain2);
    }
    return {
      domains,
      pagination: {
        next_page: nextCursor,
        previous_page: previousCursor,
        total_count: totalCount,
        current_page_count: domains.length
      }
    };
  } catch (e) {
    logger.error("requestAccountImportDomains", e);
    return e;
  }
}

// src/requests/account/account-settings.ts
async function fetchAccountConfigBadges(accountAddress, { sdkInstance }) {
  var _a, _b, _c, _d, _e, _f;
  try {
    const configBadgeResource = sdkInstance.entities.rnsCore.configBadgeResource;
    if (!configBadgeResource) {
      logger.error("Config badge resource not found in SDK entities", null);
      return [];
    }
    const accountState = await sdkInstance.state.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: {
        addresses: [accountAddress],
        aggregation_level: "Vault",
        opt_ins: {
          non_fungible_include_nfids: true
        }
      }
    });
    const accountItem = (_a = accountState.items) == null ? void 0 : _a[0];
    if (!accountItem || !("non_fungible_resources" in accountItem)) {
      return [];
    }
    const configBadgeCollection = (_c = (_b = accountItem.non_fungible_resources) == null ? void 0 : _b.items) == null ? void 0 : _c.find(
      (nft) => nft.resource_address === configBadgeResource
    );
    if (!((_f = (_e = (_d = configBadgeCollection == null ? void 0 : configBadgeCollection.vaults) == null ? void 0 : _d.items) == null ? void 0 : _e[0]) == null ? void 0 : _f.items)) {
      return [];
    }
    return configBadgeCollection.vaults.items[0].items;
  } catch (error) {
    logger.error("Error fetching account config badges:", error);
    return [];
  }
}
async function fetchConfigBadgeMetadata(configBadgeId, { sdkInstance }) {
  var _a, _b, _c;
  try {
    const configBadgeResource = sdkInstance.entities.rnsCore.configBadgeResource;
    const response = await sdkInstance.state.innerClient.nonFungibleData({
      stateNonFungibleDataRequest: {
        resource_address: configBadgeResource,
        non_fungible_ids: [configBadgeId]
      }
    });
    const nftData = (_a = response.non_fungible_ids) == null ? void 0 : _a[0];
    if (!((_b = nftData == null ? void 0 : nftData.data) == null ? void 0 : _b.programmatic_json)) {
      return null;
    }
    const programmaticJson = nftData.data.programmatic_json;
    if (!isTupleValue(programmaticJson)) {
      return null;
    }
    const fields = programmaticJson.fields;
    let primaryDomain = null;
    let discoveryEnabled = false;
    for (const field of fields) {
      const fieldName = "field_name" in field ? field.field_name : null;
      if (fieldName === "primary_domain") {
        if (isEnumValue(field) && field.variant_name === "Some" && ((_c = field.fields) == null ? void 0 : _c[0])) {
          const innerField = field.fields[0];
          if ("value" in innerField && typeof innerField.value === "string") {
            primaryDomain = innerField.value;
          }
        }
      } else if (fieldName === "discovery_enabled") {
        if ("value" in field) {
          discoveryEnabled = field.value === true || field.value === "true";
        }
      }
    }
    return { primaryDomain, discoveryEnabled };
  } catch (error) {
    logger.error("Error fetching config badge metadata:", error);
    return null;
  }
}
async function requestAccountSettings(accountAddress, { sdkInstance }) {
  try {
    const configBadgeIds = await fetchAccountConfigBadges(accountAddress, { sdkInstance });
    if (configBadgeIds.length === 0) {
      return null;
    }
    const configBadgeId = configBadgeIds[0];
    const configMetadata = await fetchConfigBadgeMetadata(configBadgeId, { sdkInstance });
    if (!configMetadata || !configMetadata.primaryDomain) {
      return null;
    }
    const accountDomains = await requestAccountDomains(accountAddress, { sdkInstance });
    if (accountDomains instanceof Error) {
      return new Error(`Failed to verify domain ownership: ${accountDomains.message}`);
    }
    const ownsDomain = accountDomains.domains.some(
      (domain2) => domain2.name.toLowerCase() === configMetadata.primaryDomain.toLowerCase()
    );
    let ownsRootDomain = false;
    if (!ownsDomain && configMetadata.primaryDomain.split(".").length === 3) {
      const parts = configMetadata.primaryDomain.split(".");
      const rootDomain = `${parts[1]}.${parts[2]}`;
      ownsRootDomain = accountDomains.domains.some(
        (domain2) => domain2.name.toLowerCase() === rootDomain.toLowerCase()
      );
    }
    const isAuthentic = ownsDomain || ownsRootDomain;
    let domainDetails = null;
    if (isAuthentic) {
      try {
        const details = await requestDomainDetails(
          configMetadata.primaryDomain.split(".").length === 3 ? `${configMetadata.primaryDomain.split(".")[1]}.${configMetadata.primaryDomain.split(".")[2]}` : configMetadata.primaryDomain,
          { sdkInstance }
        );
        if (!(details instanceof Error)) {
          domainDetails = details;
        }
      } catch {
      }
    }
    return {
      primaryDomain: configMetadata.primaryDomain,
      discoveryEnabled: configMetadata.discoveryEnabled,
      isAuthentic,
      accountAddress,
      domainDetails
    };
  } catch (error) {
    logger.error("Error in requestAccountSettings:", error);
    return error instanceof Error ? error : new Error(String(error));
  }
}

// src/requests/registrar/list.ts
async function getTotalRegistrarCount(registrarBadgeResource, { sdkInstance }) {
  var _a, _b, _c;
  let totalCount = 0;
  let cursor = void 0;
  do {
    const response = await sdkInstance.state.innerClient.nonFungibleIds({
      stateNonFungibleIdsRequest: {
        resource_address: registrarBadgeResource,
        cursor,
        limit_per_page: 100
      }
    });
    totalCount += ((_b = (_a = response.non_fungible_ids) == null ? void 0 : _a.items) == null ? void 0 : _b.length) || 0;
    cursor = ((_c = response.non_fungible_ids) == null ? void 0 : _c.next_cursor) || null;
  } while (cursor !== null && cursor !== void 0);
  return totalCount;
}
async function requestAllRegistrars({ sdkInstance }, pagination) {
  var _a, _b, _c;
  try {
    const registrarBadgeResource = sdkInstance.entities.rnsCore.registrarBadgeResource;
    if (!registrarBadgeResource) {
      throw new Error("Registrar badge resource not found in RNS entities");
    }
    const currentPage = (pagination == null ? void 0 : pagination.page) || 1;
    let cursor = void 0;
    let pageNumber = 1;
    while (pageNumber < currentPage) {
      const response2 = await sdkInstance.state.innerClient.nonFungibleIds({
        stateNonFungibleIdsRequest: {
          resource_address: registrarBadgeResource,
          cursor,
          limit_per_page: 100
        }
      });
      if (!((_a = response2.non_fungible_ids) == null ? void 0 : _a.next_cursor)) {
        return {
          registrar_ids: [],
          pagination: {
            next_page: null,
            previous_page: currentPage > 1 ? currentPage - 1 : null,
            total_count: 0,
            current_page_count: 0
          }
        };
      }
      cursor = response2.non_fungible_ids.next_cursor;
      pageNumber++;
    }
    const response = await sdkInstance.state.innerClient.nonFungibleIds({
      stateNonFungibleIdsRequest: {
        resource_address: registrarBadgeResource,
        cursor,
        limit_per_page: 100
      }
    });
    const badgeIds = (((_b = response.non_fungible_ids) == null ? void 0 : _b.items) || []).map(stripNonFungibleLocalIdBrackets);
    let totalCount = 0;
    if (currentPage === 1) {
      totalCount = await getTotalRegistrarCount(registrarBadgeResource, { sdkInstance });
    }
    const paginationInfo = {
      next_page: ((_c = response.non_fungible_ids) == null ? void 0 : _c.next_cursor) ? currentPage + 1 : null,
      previous_page: currentPage > 1 ? currentPage - 1 : null,
      total_count: totalCount,
      current_page_count: badgeIds.length
    };
    return {
      registrar_ids: badgeIds,
      pagination: paginationInfo
    };
  } catch (e) {
    logger.error("requestAllRegistrars", e);
    return e;
  }
}

// src/requests/registrar/details.ts
var import_decimal5 = __toESM(require("decimal.js"), 1);

// src/utils/sbor.utils.ts
function parseResourceAddress(value) {
  if (!value) {
    return { success: false, error: "Value is null or undefined" };
  }
  if (typeof value === "string") {
    return { success: true, value };
  }
  if (typeof value === "object" && value !== null) {
    const obj = value;
    if (obj.value) {
      if (typeof obj.value === "string") {
        return { success: true, value: obj.value };
      }
      if (typeof obj.value === "object" && obj.value !== null) {
        const nested = obj.value;
        if (nested.value && typeof nested.value === "string") {
          return { success: true, value: nested.value };
        }
      }
    }
    if (obj.resource_address && typeof obj.resource_address === "string") {
      return { success: true, value: obj.resource_address };
    }
  }
  return { success: false, error: "Could not extract resource address from value" };
}
function parseComponentAddress(value) {
  if (!value) {
    return { success: false, error: "Value is null or undefined" };
  }
  if (typeof value === "string") {
    return { success: true, value };
  }
  if (typeof value === "object" && value !== null) {
    const obj = value;
    if (obj.value && typeof obj.value === "string") {
      return { success: true, value: obj.value };
    }
  }
  return { success: false, error: "Could not extract component address from value" };
}
function parseStringArray(value) {
  if (!value) {
    return { success: true, value: [] };
  }
  if (Array.isArray(value)) {
    const filtered = value.filter((item) => typeof item === "string");
    return { success: true, value: filtered };
  }
  if (typeof value === "object" && value !== null) {
    const obj = value;
    if (obj.fields && Array.isArray(obj.fields)) {
      const parsed = obj.fields.map((field) => {
        if (typeof field === "string") return field;
        if (typeof field === "object" && field !== null) {
          const fieldObj = field;
          if (fieldObj.value) return fieldObj.value;
        }
        return field;
      }).filter((item) => typeof item === "string");
      return { success: true, value: parsed };
    }
  }
  return { success: false, error: "Could not parse as string array" };
}
function parseBoolean(value) {
  if (typeof value === "boolean") {
    return { success: true, value };
  }
  if (typeof value === "string") {
    return { success: true, value: value === "true" };
  }
  if (value === null || value === void 0) {
    return { success: true, value: false };
  }
  return { success: true, value: Boolean(value) };
}
function parseString(value) {
  if (typeof value === "string") {
    return { success: true, value };
  }
  if (typeof value === "object" && value !== null) {
    const obj = value;
    if (obj.kind === "String" && typeof obj.value === "string") {
      return { success: true, value: obj.value };
    }
  }
  return { success: false, error: "Could not parse as string" };
}
function parseField(componentState, fieldName, parser) {
  const field = componentState.fields.find((f) => f.field_name === fieldName);
  if (!field || field.value === void 0) {
    return null;
  }
  const result = parser(field.value);
  return result.success ? result.value : null;
}
function parseSborU64(value) {
  if (value.kind === "U64") {
    return { success: true, value: parseInt(value.value, 10) };
  }
  return { success: false, error: `Expected U64, got ${value.kind}` };
}
function parseSborDecimal(value) {
  if (value.kind === "Decimal") {
    return { success: true, value: value.value };
  }
  return { success: false, error: `Expected Decimal, got ${value.kind}` };
}
function parseSborInstant(value) {
  if (!value) {
    return { success: false, error: "Value is undefined" };
  }
  if (value.kind === "I64") {
    return { success: true, value: parseInt(value.value, 10) };
  }
  return { success: false, error: `Expected I64 for Instant, got ${value.kind}` };
}
function parseSborOptionInstant(value) {
  var _a;
  if (!value) {
    return { success: true, value: null };
  }
  if (value.kind === "Enum") {
    if (value.variant_name === "None" || value.variant_id === "0") {
      return { success: true, value: null };
    }
    if (value.variant_name === "Some" || value.variant_id === "1") {
      const innerValue = (_a = value.fields) == null ? void 0 : _a[0];
      if ((innerValue == null ? void 0 : innerValue.kind) === "I64") {
        return { success: true, value: parseInt(innerValue.value, 10) };
      }
    }
  }
  if (value.kind === "I64") {
    return { success: true, value: parseInt(value.value, 10) };
  }
  return { success: true, value: null };
}
function parseSborHashMap(mapValue, valueParser) {
  const result = {};
  if (!mapValue) {
    return { success: true, value: result };
  }
  if (mapValue.kind !== "Map") {
    return { success: false, error: `Expected Map, got ${mapValue.kind}` };
  }
  for (const entry of mapValue.entries || []) {
    const keyJson = entry.key;
    const valueJson = entry.value;
    let key;
    if (keyJson.kind === "Reference") {
      key = keyJson.value;
    } else if (keyJson.kind === "String") {
      key = keyJson.value;
    } else {
      continue;
    }
    const parsed = valueParser(valueJson);
    if (parsed.success) {
      result[key] = parsed.value;
    }
  }
  return { success: true, value: result };
}

// src/requests/registrar/details.ts
async function requestRegistrarDetails({
  registrarId,
  sdkInstance
}) {
  var _a, _b, _c, _d;
  try {
    const formattedRegistrarId = formatNonFungibleLocalId(registrarId);
    const registrarBadgeResource = sdkInstance.entities.rnsCore.registrarBadgeResource;
    if (!registrarBadgeResource) {
      throw new Error("Registrar badge resource not found in RNS entities");
    }
    const nftDataResponse = await sdkInstance.state.innerClient.nonFungibleData({
      stateNonFungibleDataRequest: {
        resource_address: registrarBadgeResource,
        non_fungible_ids: [formattedRegistrarId]
      }
    });
    const nftItem = (_a = nftDataResponse.non_fungible_ids) == null ? void 0 : _a[0];
    const nftData = (_b = nftItem == null ? void 0 : nftItem.data) == null ? void 0 : _b.programmatic_json;
    if (!nftData || !("fields" in nftData) || !Array.isArray(nftData.fields)) {
      throw new Error(`Registrar badge not found: ${formattedRegistrarId}`);
    }
    const nftState = { fields: nftData.fields };
    return {
      id: stripNonFungibleLocalIdBrackets(registrarId),
      // Return clean ID without brackets
      name: parseField(nftState, "name", parseString) || "Unknown Registrar",
      icon_url: parseField(nftState, "icon_url", parseString) || "",
      website_url: parseField(nftState, "website_url", parseString) || "",
      fee_percentage: new import_decimal5.default(parseField(nftState, "fee_percentage", parseString) || "0"),
      created_at: ((_c = parseField(nftState, "created_timestamp", parseSborInstant)) != null ? _c : 0) * 1e3,
      updated_at: ((_d = parseField(nftState, "updated_timestamp", parseSborInstant)) != null ? _d : 0) * 1e3
    };
  } catch (e) {
    logger.error("requestRegistrarDetails", e);
    return e;
  }
}

// src/requests/registrar/stats.ts
async function requestRegistrarStats({
  registrarId,
  sdkInstance
}) {
  try {
    const formattedRegistrarId = formatNonFungibleLocalId(registrarId);
    const registrarStatsKvs = sdkInstance.entities.rnsCore.registrarStats;
    if (!registrarStatsKvs) {
      throw new Error("Registrar stats KeyValueStore not found in RNS entities");
    }
    const kvsResponse = await sdkInstance.state.innerClient.keyValueStoreData({
      stateKeyValueStoreDataRequest: {
        key_value_store_address: registrarStatsKvs,
        keys: [{
          key_json: {
            kind: "NonFungibleLocalId",
            value: formattedRegistrarId
          }
        }]
      }
    });
    if (!kvsResponse.entries || kvsResponse.entries.length === 0) {
      return null;
    }
    const entry = kvsResponse.entries[0];
    const valueJson = entry.value.programmatic_json;
    if (valueJson.kind !== "Tuple" || !valueJson.fields) {
      throw new Error("Unexpected registrar stats format");
    }
    const fields = valueJson.fields;
    const domainsBondedResult = parseSborHashMap(fields[0], parseSborU64);
    const domainsBonded = domainsBondedResult.success ? domainsBondedResult.value : {};
    const domainsBondedCumulativeResult = fields[1] ? parseSborU64(fields[1]) : null;
    const domainsBondedCumulative = (domainsBondedCumulativeResult == null ? void 0 : domainsBondedCumulativeResult.success) ? domainsBondedCumulativeResult.value : 0;
    const feesEarnedCumulativeResult = parseSborHashMap(fields[2], parseSborDecimal);
    const feesEarnedCumulative = feesEarnedCumulativeResult.success ? feesEarnedCumulativeResult.value : {};
    const feesEarnedCurrentResult = parseSborHashMap(fields[3], parseSborDecimal);
    const feesEarnedCurrent = feesEarnedCurrentResult.success ? feesEarnedCurrentResult.value : {};
    const lastWithdrawalResult = parseSborOptionInstant(fields[4]);
    const lastWithdrawalSeconds = lastWithdrawalResult.success ? lastWithdrawalResult.value : null;
    const lastWithdrawal = lastWithdrawalSeconds !== null ? lastWithdrawalSeconds * 1e3 : null;
    return {
      domains_bonded: domainsBonded,
      domains_bonded_cumulative: domainsBondedCumulative,
      fees_earned_cumulative: feesEarnedCumulative,
      fees_earned_current: feesEarnedCurrent,
      last_withdrawal: lastWithdrawal
    };
  } catch (e) {
    logger.error("requestRegistrarStats", e);
    return e;
  }
}

// src/requests/registrar/fee-balances.ts
var import_decimal6 = __toESM(require("decimal.js"), 1);
async function getTotalFeeVaultCount(registrarFeeVaultsAddress, registrarId, { sdkInstance }) {
  const formattedId = formatNonFungibleLocalId(registrarId);
  let totalCount = 0;
  let cursor = void 0;
  do {
    const response = await sdkInstance.state.innerClient.keyValueStoreKeys({
      stateKeyValueStoreKeysRequest: {
        key_value_store_address: registrarFeeVaultsAddress,
        cursor,
        limit_per_page: 100
      }
    });
    for (const item of response.items || []) {
      const keyItem = item;
      const keyJson = keyItem.key.programmatic_json;
      if (isTupleValue(keyJson)) {
        const fields = keyJson.fields;
        if (fields.length >= 2) {
          const nftIdField = fields[0];
          const nftIdValue = getFieldStringValue(nftIdField);
          if (nftIdValue === formattedId) {
            totalCount++;
          }
        }
      }
    }
    cursor = response.next_cursor || null;
  } while (cursor !== null && cursor !== void 0);
  return totalCount;
}
async function requestRegistrarFeeBalances(registrarId, { sdkInstance }, pagination) {
  try {
    const registrarFeeVaultsAddress = sdkInstance.entities.rnsCore.registrarFeeVaults;
    if (!registrarFeeVaultsAddress) {
      throw new Error("Registrar fee vaults address not found in RNS entities");
    }
    const formattedId = formatNonFungibleLocalId(registrarId);
    const currentPage = (pagination == null ? void 0 : pagination.page) || 1;
    const pageSize = 100;
    const matchingEntries = [];
    let cursor = void 0;
    let pageNumber = 1;
    do {
      const keysResponse = await sdkInstance.state.innerClient.keyValueStoreKeys({
        stateKeyValueStoreKeysRequest: {
          key_value_store_address: registrarFeeVaultsAddress,
          cursor,
          limit_per_page: pageSize
        }
      });
      const matchingKeys = [];
      for (const item of keysResponse.items || []) {
        const keyItem = item;
        const keyJson = keyItem.key.programmatic_json;
        if (isTupleValue(keyJson)) {
          const fields = keyJson.fields;
          if (fields.length >= 2) {
            const nftIdField = fields[0];
            const nftIdValue = getFieldStringValue(nftIdField);
            if (nftIdValue === formattedId) {
              matchingKeys.push({
                key_json: keyJson
              });
            }
          }
        }
      }
      if (matchingKeys.length > 0 && pageNumber >= currentPage) {
        const dataResponse = await sdkInstance.state.innerClient.keyValueStoreData({
          stateKeyValueStoreDataRequest: {
            key_value_store_address: registrarFeeVaultsAddress,
            keys: matchingKeys
          }
        });
        for (const entry of dataResponse.entries || []) {
          const keyJson = entry.key.programmatic_json;
          let resourceAddress;
          if (isTupleValue(keyJson) && keyJson.fields.length >= 2) {
            resourceAddress = getFieldStringValue(keyJson.fields[1]);
          }
          const valueJson = entry.value.programmatic_json;
          let vaultAmount = "0";
          if (isTupleValue(valueJson)) {
            const amountField = findFieldByName(valueJson.fields, "amount") || findFieldByName(valueJson.fields, "0");
            if (amountField) {
              vaultAmount = getFieldStringValue(amountField) || "0";
            }
          } else if (isDecimalValue(valueJson)) {
            vaultAmount = valueJson.value || "0";
          }
          if (resourceAddress) {
            matchingEntries.push({
              resourceAddress,
              vaultAmount
            });
          }
        }
      }
      cursor = keysResponse.next_cursor || null;
      pageNumber++;
      if (pageNumber > currentPage && matchingEntries.length >= pageSize) {
        break;
      }
    } while (cursor !== null && cursor !== void 0);
    const fees = [];
    for (const entry of matchingEntries) {
      const resourceDetails = await requestResourceDetails(entry.resourceAddress, { sdkInstance });
      fees.push({
        resource_address: entry.resourceAddress,
        amount: new import_decimal6.default(entry.vaultAmount || "0"),
        resource: resourceDetails instanceof Error ? {
          address: entry.resourceAddress,
          type: "fungible",
          name: null,
          symbol: null,
          description: null,
          tags: [],
          icon_url: null,
          info_url: null
        } : resourceDetails
      });
    }
    let totalCount = 0;
    if (currentPage === 1) {
      totalCount = await getTotalFeeVaultCount(registrarFeeVaultsAddress, registrarId, { sdkInstance });
    }
    const paginationInfo = {
      next_page: matchingEntries.length === pageSize ? currentPage + 1 : null,
      previous_page: currentPage > 1 ? currentPage - 1 : null,
      total_count: totalCount,
      current_page_count: fees.length
    };
    return {
      fees,
      pagination: paginationInfo
    };
  } catch (e) {
    logger.error("requestRegistrarFeeBalances", e);
    return e;
  }
}

// src/manifests/domains/domain-registration-manifest.ts
async function registerDomainManifest({
  sdkInstance,
  domain: domain2,
  accountAddress,
  paymentResource,
  bondAmount,
  registrarFee,
  registrarId
}) {
  const formattedRegistrarId = formatNonFungibleLocalId(registrarId);
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw"
            Address("${paymentResource}")
            Decimal("${bondAmount}");
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw"
            Address("${paymentResource}")
            Decimal("${registrarFee}");
        TAKE_ALL_FROM_WORKTOP
            Address("${paymentResource}")
            Bucket("payment_bucket");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "register_and_bond_domain"
            "${domain2}"
            Bucket("payment_bucket")
            Address("${accountAddress}")
            NonFungibleLocalId("${formattedRegistrarId}");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/utils/error.utils.ts
var errorPatterns = [
  {
    // VaultDoesNotExist - user doesn't have the payment token
    pattern: /VaultDoesNotExist.*resource_address.*"(resource_[^"]+)"/,
    message: (match) => `Your wallet does not contain the required payment token (${shortenAddress(match[1])}). Please ensure you have the accepted payment resource in your account.`
  },
  {
    // InsufficientBalance
    pattern: /InsufficientBalance|insufficient.*balance/i,
    message: () => `Insufficient balance. Your account does not have enough tokens to complete this transaction.`
  },
  {
    // User rejected/cancelled transaction
    pattern: /user.*(?:rejected|cancelled|canceled|denied)/i,
    message: () => `Transaction was cancelled by user.`
  },
  {
    // User rejected in wallet
    pattern: /rejectedByUser/i,
    message: () => `Transaction was rejected in the wallet.`
  },
  {
    // Failed to submit
    pattern: /failed.*submit|submission.*failed/i,
    message: () => `Failed to submit transaction to the network. Please try again.`
  },
  {
    // Domain already registered
    pattern: /domain.*already.*(?:registered|exists|taken)/i,
    message: () => `This domain is already registered.`
  },
  {
    // Not authorized / Auth error
    pattern: /not.*authorized|authorization.*failed|auth.*error/i,
    message: () => `Authorization failed. You may not have permission to perform this action.`
  },
  {
    // Proof required
    pattern: /proof.*required|missing.*proof/i,
    message: () => `Required proof not found. Ensure you own the necessary NFT or badge.`
  },
  {
    // Invalid NonFungibleLocalId
    pattern: /NonFungibleLocalId|invalid.*id/i,
    message: () => `Invalid ID format provided.`
  },
  {
    // Network/connection errors
    pattern: /network.*error|connection.*(?:failed|refused|timeout)/i,
    message: () => `Network connection error. Please check your connection and try again.`
  },
  {
    // Wallet not connected
    pattern: /wallet.*not.*connected|no.*wallet/i,
    message: () => `Wallet is not connected. Please connect your Radix wallet.`
  },
  {
    // RDT not initialized
    pattern: /Radix.*Dapp.*Toolkit.*(?:not|must).*initialized/i,
    message: () => `Wallet connection not initialized. Please ensure the dApp is properly connected.`
  }
];
function shortenAddress(address) {
  if (address.length <= 20) return address;
  return `${address.slice(0, 12)}...${address.slice(-8)}`;
}
function parseErrorMessage(rawError) {
  for (const { pattern, message } of errorPatterns) {
    const match = rawError.match(pattern);
    if (match) {
      return message(match);
    }
  }
  let cleaned = rawError.replace(/^errorMessage=/i, "");
  if (cleaned.includes("ApplicationError") || cleaned.includes("::") || cleaned.length > 200) {
    return `Transaction failed. Technical details: ${cleaned.slice(0, 150)}${cleaned.length > 150 ? "..." : ""}`;
  }
  return cleaned;
}

// src/utils/transaction.utils.ts
async function sendTransaction({ manifest, rdt, transaction, callbacks, message }) {
  if (!rdt) {
    if (callbacks == null ? void 0 : callbacks.onFail) callbacks.onFail({ manifest });
    throw new Error("Wallet connection not initialized. Please ensure the dApp is properly connected.");
  }
  if (callbacks == null ? void 0 : callbacks.onInit) callbacks.onInit({ manifest });
  const result = await (rdt == null ? void 0 : rdt.walletApi.sendTransaction({
    transactionManifest: manifest,
    message
  }));
  if (!result || result.isErr()) {
    if (callbacks == null ? void 0 : callbacks.onFail) callbacks.onFail(result);
    if (result == null ? void 0 : result.isErr()) {
      const rawError = result.error.message || result.error.error || JSON.stringify(result.error);
      throw new Error(parseErrorMessage(rawError));
    }
    throw new Error("Transaction was rejected or failed to submit.");
  }
  if (callbacks == null ? void 0 : callbacks.onAppApproved) callbacks.onAppApproved({ manifest });
  const intentHash = result.value.transactionIntentHash;
  const transactionStatus = await transaction.getStatus(intentHash);
  if (callbacks == null ? void 0 : callbacks.onIntentReceipt) callbacks.onIntentReceipt({ manifest, intentHash });
  const getCommitReceipt = await transaction.getCommittedDetails(intentHash);
  if (callbacks == null ? void 0 : callbacks.onSuccess) callbacks.onSuccess(getCommitReceipt);
  return true;
}

// src/utils/balance.utils.ts
var import_decimal7 = __toESM(require("decimal.js"), 1);
var acceptedBondTokensCache = null;
async function getAcceptedBondTokensWithMetadata(acceptedResources, { sdkInstance }) {
  if (acceptedBondTokensCache) {
    return acceptedBondTokensCache;
  }
  const tokens = [];
  for (const resourceAddress of acceptedResources) {
    const resourceDetails = await requestResourceDetails(resourceAddress, { sdkInstance });
    if (resourceDetails instanceof Error) {
      tokens.push({
        address: resourceAddress,
        type: "fungible",
        name: null,
        symbol: null,
        description: null,
        tags: [],
        icon_url: null,
        info_url: null
      });
    } else {
      tokens.push(resourceDetails);
    }
  }
  acceptedBondTokensCache = tokens;
  return tokens;
}
function clearAcceptedBondTokensCache() {
  acceptedBondTokensCache = null;
}
async function getAccountResourceBalance(accountAddress, resourceAddress, { sdkInstance }) {
  var _a, _b;
  try {
    const entityDetails = await sdkInstance.state.getEntityDetailsVaultAggregated(accountAddress);
    const fungibleResources = ((_a = entityDetails == null ? void 0 : entityDetails.fungible_resources) == null ? void 0 : _a.items) || [];
    for (const resource of fungibleResources) {
      if (resource.resource_address === resourceAddress) {
        if (isFungibleVaultAggregated(resource)) {
          const vaults = ((_b = resource.vaults) == null ? void 0 : _b.items) || [];
          let totalAmount = new import_decimal7.default(0);
          for (const vault of vaults) {
            if (vault.amount) {
              totalAmount = totalAmount.plus(vault.amount);
            }
          }
          return totalAmount.toString();
        }
      }
    }
    return "0";
  } catch (error) {
    logger.error("getAccountResourceBalance", error);
    return "0";
  }
}
async function getAccountBondBalances(accountAddress, acceptedResources, { sdkInstance }) {
  const balances = [];
  for (const resourceAddress of acceptedResources) {
    const balance2 = await getAccountResourceBalance(
      accountAddress,
      resourceAddress,
      { sdkInstance }
    );
    const resourceDetails = await requestResourceDetails(resourceAddress, { sdkInstance });
    const resource = resourceDetails instanceof Error ? {
      address: resourceAddress,
      type: "fungible",
      name: null,
      symbol: null,
      description: null,
      tags: [],
      icon_url: null,
      info_url: null
    } : resourceDetails;
    balances.push({
      resource,
      balance: balance2
    });
  }
  return { balances };
}
function checkAccountBondAffordability(balances, requiredAmount) {
  const sufficientBalances = [];
  const insufficientBalances = [];
  const requiredDecimal = new import_decimal7.default(requiredAmount);
  for (const item of balances) {
    const balanceDecimal = new import_decimal7.default(item.balance);
    const hasEnough = balanceDecimal.gte(requiredDecimal);
    if (hasEnough) {
      sufficientBalances.push({
        resource: item.resource,
        balance: item.balance
      });
    } else {
      const shortfall = requiredDecimal.minus(balanceDecimal);
      insufficientBalances.push({
        resource: item.resource,
        balance: item.balance,
        shortfall: shortfall.toFixed(6)
      });
    }
  }
  return {
    requiredAmount,
    sufficientBalances,
    insufficientBalances
  };
}

// src/utils/response.utils.ts
function feedbackStack(feedback) {
  if (Array.isArray(feedback)) {
    return {
      messages: feedback
    };
  }
  return {
    messages: [feedback]
  };
}
function errorStack(errors) {
  if (Array.isArray(errors)) {
    return {
      errors
    };
  }
  return {
    errors: [errors]
  };
}
function retrievalResponse(response) {
  return { data: response, errors: void 0 };
}
function retrievalError(error) {
  return { data: void 0, ...errorStack(error) };
}
function transactionResponse(feedback) {
  return { feedback: feedbackStack(feedback), errors: void 0 };
}
function transactionError(error) {
  return { feedback: void 0, ...errorStack(error) };
}
function generateAuthCheckProps({ domain: domain2, details }) {
  const domainTypeResult = deriveDomainType(domain2);
  const isSubdomain = domainTypeResult.isValid && domainTypeResult.type === "sub";
  if (isSubdomain) {
    const { root_domain } = details;
    return {
      domain: root_domain.name,
      accountAddress: root_domain.current_activated_owner
    };
  }
  const { name, current_activated_owner } = details;
  return {
    domain: name,
    accountAddress: current_activated_owner
  };
}

// src/dispatchers/domain/registration.ts
async function dispatchDomainRegistration({
  sdkInstance,
  domain: domain2,
  rdt,
  accountAddress,
  paymentResource,
  registrarId,
  callbacks
}) {
  try {
    if (!registrarId) {
      return transactionError(errors_default.registration.generic({
        domain: domain2,
        verbose: "Registrar ID is required for domain registration"
      }));
    }
    const registrarDetails = await requestRegistrarDetails({
      registrarId,
      sdkInstance
    });
    if (registrarDetails instanceof Error) {
      return transactionError(errors_default.registration.generic({
        domain: domain2,
        verbose: `Failed to fetch registrar details: ${registrarDetails.message}`
      }));
    }
    const selectedPaymentResource = paymentResource || sdkInstance.entities.rnsCore.acceptedPaymentResources[0];
    if (!selectedPaymentResource) {
      return transactionError(errors_default.registration.generic({
        domain: domain2,
        verbose: "No accepted payment resources configured in Radix Namespace"
      }));
    }
    const costBreakdown = getCostBreakdown(
      domain2,
      sdkInstance.entities.rnsCore.priceLadder,
      registrarDetails.fee_percentage,
      registrarId,
      registrarDetails.name,
      selectedPaymentResource
    );
    const balances = await getAccountBondBalances(
      accountAddress,
      sdkInstance.entities.rnsCore.acceptedPaymentResources,
      { sdkInstance }
    );
    const affordabilityCheck = checkAccountBondAffordability(balances.balances, costBreakdown.totalAmount);
    if (affordabilityCheck.sufficientBalances.length === 0) {
      const shortfalls = affordabilityCheck.insufficientBalances.map((r) => `${r.resource.name || r.resource.address}: have ${r.balance}, need ${affordabilityCheck.requiredAmount} (short ${r.shortfall})`).join("; ");
      return transactionError(errors_default.balance.insufficientFunds({
        requiredAmount: costBreakdown.totalAmount,
        verbose: `None of your accepted payment tokens have sufficient balance. ${shortfalls}`
      }));
    }
    const manifest = await registerDomainManifest({
      sdkInstance,
      domain: domain2,
      accountAddress,
      paymentResource: selectedPaymentResource,
      bondAmount: costBreakdown.bondAmount,
      registrarFee: costBreakdown.registrarFee,
      registrarId
    });
    await sendTransaction({
      rdt,
      message: `Register and bond ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "REGISTRATION_SUCCESSFUL",
      details: `${domain2} was successfully registered and bonded. Bond: ${costBreakdown.bondAmount}, Registrar fee: ${costBreakdown.registrarFee}, Total: ${costBreakdown.totalAmount}`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.registration.generic({ domain: domain2, verbose: message }));
  }
}

// src/manifests/records/create-record-manifest.ts
function createRecordManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName,
  context,
  directive,
  value
}) {
  const subdomainParam = subdomainName ? `Enum<1u8>("${subdomainName}")` : "Enum<0u8>()";
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "set_record"
            Proof("domain_proof")
            ${subdomainParam}
            "${context}"
            "${directive}"
            "${value}";
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/record/create-record.ts
async function dispatchRecordCreation({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  docket,
  callbacks
}) {
  try {
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
      subdomainName = void 0;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.creation({
        docket,
        verbose: `Domain does not have a subregistry component address. Keys: ${Object.keys(domainDetails).join(", ")}`
      }));
    }
    const value = typeof docket.value === "string" ? docket.value : "";
    if (!docket.directive) {
      return transactionError(errors_default.record.creation({
        docket,
        verbose: "Directive is required for record creation"
      }));
    }
    const manifest = createRecordManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      context: docket.context,
      directive: docket.directive,
      value
    });
    await sendTransaction({
      rdt,
      message: `Set record for ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "RECORD_SUCCESSFULLY_CREATED",
      details: `Record ${docket.context}:${docket.directive} was successfully set for ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.creation({ docket, verbose: message }));
  }
}

// src/manifests/records/delete-record-manifest.ts
function deleteRecordManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName,
  context,
  directive
}) {
  const subdomainParam = subdomainName ? `Enum<1u8>("${subdomainName}")` : "Enum<0u8>()";
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "delete_record"
            Proof("domain_proof")
            ${subdomainParam}
            "${context}"
            "${directive}";
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/record/delete-record.ts
async function dispatchRecordDeletion({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  docket,
  callbacks
}) {
  try {
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.deletion({
        docket,
        verbose: "Domain does not have a subregistry component address"
      }));
    }
    if (!docket.directive) {
      return transactionError(errors_default.record.deletion({
        docket,
        verbose: "Directive is required for record deletion"
      }));
    }
    const manifest = deleteRecordManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      context: docket.context,
      directive: docket.directive
    });
    await sendTransaction({
      rdt,
      message: `Delete record from ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "RECORD_SUCCESSFULLY_DELETED",
      details: `Record ${docket.context}:${docket.directive} was successfully deleted from ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.deletion({ docket, verbose: message }));
  }
}
async function dispatchRecordDeletionById({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  recordId,
  callbacks
}) {
  try {
    const [context, directive] = recordId.split(":");
    if (!context || !directive) {
      return transactionError(errors_default.record.deletionById({
        recordId,
        verbose: "Invalid record ID format. Expected 'context:directive'"
      }));
    }
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.deletionById({
        recordId,
        verbose: "Domain does not have a subregistry component address"
      }));
    }
    const manifest = deleteRecordManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      context,
      directive
    });
    await sendTransaction({
      rdt,
      message: `Delete record from ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "RECORD_SUCCESSFULLY_DELETED",
      details: `Record ${recordId} was successfully deleted from ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.deletionById({ recordId, verbose: message }));
  }
}

// src/dispatchers/record/amend-record.ts
async function dispatchRecordAmendment({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  docket,
  callbacks
}) {
  try {
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
      subdomainName = void 0;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.amendment({
        docket,
        verbose: "Domain does not have a subregistry component address"
      }));
    }
    const value = typeof docket.value === "string" ? docket.value : "";
    if (!docket.directive) {
      return transactionError(errors_default.record.amendment({
        docket,
        verbose: "Directive is required for record amendment"
      }));
    }
    const manifest = createRecordManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      context: docket.context,
      directive: docket.directive,
      value
    });
    await sendTransaction({
      rdt,
      message: `Update record for ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "RECORD_SUCCESSFULLY_AMENDED",
      details: `Record ${docket.context}:${docket.directive} was successfully updated for ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.amendment({ docket, verbose: message }));
  }
}

// src/manifests/records/create-records-manifest.ts
function createRecordsManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName,
  records
}) {
  const subdomainParam = subdomainName ? `Enum<1u8>("${subdomainName}")` : "Enum<0u8>()";
  const recordsByContext = {};
  for (const record2 of records) {
    if (!recordsByContext[record2.context]) {
      recordsByContext[record2.context] = [];
    }
    recordsByContext[record2.context].push({
      directive: record2.directive,
      value: record2.value
    });
  }
  const contextEntries = Object.entries(recordsByContext).map(([context, directives]) => {
    const directiveEntries = directives.map(
      (d) => `"${d.directive}" => "${d.value}"`
    ).join(", ");
    return `"${context}" => HashMap<String, String>(${directiveEntries})`;
  }).join(", ");
  const recordsMap = `HashMap<String, HashMap<String, String>>(${contextEntries})`;
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "set_records_batch"
            Proof("domain_proof")
            ${subdomainParam}
            ${recordsMap};
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/record/create-records.ts
async function dispatchCreateRecords({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  records,
  callbacks
}) {
  try {
    if (!records || records.length === 0) {
      return transactionError(errors_default.record.batchCreation({
        verbose: "No records provided for batch creation"
      }));
    }
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
      subdomainName = void 0;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.batchCreation({
        verbose: "Domain does not have a subregistry component address"
      }));
    }
    for (const record2 of records) {
      if (!record2.context || !record2.directive) {
        return transactionError(errors_default.record.batchCreation({
          verbose: "Each record must have a context and directive"
        }));
      }
    }
    const manifest = createRecordsManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      records
    });
    await sendTransaction({
      rdt,
      message: `Set ${records.length} record(s) for ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "RECORDS_SUCCESSFULLY_CREATED",
      details: `${records.length} record(s) were successfully set for ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.batchCreation({ verbose: message }));
  }
}

// src/manifests/records/delete-records-manifest.ts
function deleteRecordsManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName,
  records
}) {
  const subdomainParam = subdomainName ? `Enum<1u8>("${subdomainName}")` : "Enum<0u8>()";
  const tuples = records.map(
    (r) => `Tuple("${r.context}", "${r.directive}")`
  ).join(", ");
  const recordsArray = `Array<Tuple>(${tuples})`;
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "delete_records_batch"
            Proof("domain_proof")
            ${subdomainParam}
            ${recordsArray};
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/record/delete-records.ts
async function dispatchDeleteRecords({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  records,
  callbacks
}) {
  try {
    if (!records || records.length === 0) {
      return transactionError(errors_default.record.batchDeletion({
        verbose: "No records provided for batch deletion"
      }));
    }
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
      subdomainName = void 0;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.batchDeletion({
        verbose: "Domain does not have a subregistry component address"
      }));
    }
    for (const record2 of records) {
      if (!record2.context || !record2.directive) {
        return transactionError(errors_default.record.batchDeletion({
          verbose: "Each record must have a context and directive"
        }));
      }
    }
    const manifest = deleteRecordsManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      records
    });
    await sendTransaction({
      rdt,
      message: `Delete ${records.length} record(s) from ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "RECORDS_SUCCESSFULLY_DELETED",
      details: `${records.length} record(s) were successfully deleted from ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.batchDeletion({ verbose: message }));
  }
}

// src/manifests/records/delete-context-manifest.ts
function deleteContextRecordsManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName,
  context
}) {
  const subdomainParam = subdomainName ? `Enum<1u8>("${subdomainName}")` : "Enum<0u8>()";
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "delete_context_records"
            Proof("domain_proof")
            ${subdomainParam}
            "${context}";
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/record/delete-context.ts
async function dispatchDeleteContextRecords({
  sdkInstance,
  rdt,
  accountAddress,
  domainDetails,
  context,
  callbacks
}) {
  try {
    if (!context) {
      return transactionError(errors_default.record.contextDeletion({
        context: "",
        verbose: "Context is required"
      }));
    }
    const isSubdomain = "root_domain" in domainDetails && !!domainDetails.root_domain;
    let domainId;
    let subregistryAddress;
    let subdomainName;
    if (isSubdomain) {
      const subdomainDetails = domainDetails;
      domainId = subdomainDetails.root_domain.id;
      subregistryAddress = subdomainDetails.root_domain.subregistry_component_address;
      subdomainName = subdomainDetails.name;
    } else {
      const rootDomainDetails = domainDetails;
      domainId = rootDomainDetails.id;
      subregistryAddress = rootDomainDetails.subregistry_component_address;
      subdomainName = void 0;
    }
    if (!subregistryAddress) {
      return transactionError(errors_default.record.contextDeletion({
        context,
        verbose: "Domain does not have a subregistry component address"
      }));
    }
    const manifest = deleteContextRecordsManifest({
      sdkInstance,
      accountAddress,
      domainId,
      subregistryAddress,
      subdomainName,
      context
    });
    await sendTransaction({
      rdt,
      message: `Delete all records in context "${context}" from ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "CONTEXT_RECORDS_SUCCESSFULLY_DELETED",
      details: `All records in context "${context}" were successfully deleted from ${domainDetails.name}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.record.contextDeletion({ context, verbose: message }));
  }
}

// src/manifests/domains/domain-activation-manifest.ts
async function activateDomainManifest({
  sdkInstance,
  accountAddress,
  domainId
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "activate_domain_ownership"
            Proof("domain_proof")
            Address("${accountAddress}");
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/domain/activation.ts
async function dispatchDomainActivation({
  sdkInstance,
  domainDetails,
  rdt,
  accountAddress,
  callbacks
}) {
  try {
    if (domainDetails.current_activated_owner === accountAddress) {
      return transactionResponse({
        code: "ACTIVATION_NOT_NEEDED",
        details: `${domainDetails.name} is already activated for ${accountAddress}.`
      });
    }
    const manifest = await activateDomainManifest({
      sdkInstance,
      domainId: domainDetails.id,
      accountAddress
    });
    await sendTransaction({
      rdt,
      message: `Activate ownership of ${domainDetails.name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "ACTIVATION_SUCCESSFUL",
      details: `${domainDetails.name} ownership was successfully activated for ${accountAddress}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.activation.generic({ domain: domainDetails.name, verbose: message }));
  }
}

// src/manifests/domains/subdomain-creation-manifest.ts
async function subdomainCreationManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName,
  metadata = {}
}) {
  const metadataEntries = Object.entries(metadata).map(([key, value]) => `Tuple("${key}", "${value}")`).join(", ");
  const metadataMap = metadataEntries ? `Map<String, String>(${metadataEntries})` : "Map<String, String>()";
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "create_subdomain"
            Proof("domain_proof")
            "${subdomainName}"
            ${metadataMap};
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/domain/subdomain-creation.ts
async function dispatchSubdomainCreation({
  sdkInstance,
  subdomain: subdomain2,
  rootDomainDetails,
  rdt,
  accountAddress,
  callbacks
}) {
  try {
    const subdomainName = subdomain2.split(".")[0];
    if (!rootDomainDetails.subregistry_component_address) {
      return transactionError(errors_default.subdomain.generic({
        subdomain: subdomain2,
        verbose: "Root domain does not have a subregistry component address"
      }));
    }
    const metadata = {};
    const manifest = await subdomainCreationManifest({
      sdkInstance,
      accountAddress,
      domainId: rootDomainDetails.id,
      subregistryAddress: rootDomainDetails.subregistry_component_address,
      subdomainName,
      metadata
    });
    await sendTransaction({
      rdt,
      message: `Create subdomain ${subdomain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "SUBDOMAIN_CREATION_SUCCESSFUL",
      details: `Subdomain ${subdomain2} was successfully created.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.subdomain.creation({ subdomain: subdomain2, verbose: message }));
  }
}

// src/manifests/domains/subdomain-deletion-manifest.ts
async function subdomainDeletionManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  subdomainName
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "delete_subdomain"
            Proof("domain_proof")
            "${subdomainName}";
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/domain/subdomain-deletion.ts
async function dispatchSubdomainDeletion({
  sdkInstance,
  subdomain: subdomain2,
  rootDomainDetails,
  rdt,
  accountAddress,
  callbacks
}) {
  try {
    const subdomainName = subdomain2.split(".")[0];
    if (!rootDomainDetails.subregistry_component_address) {
      return transactionError(errors_default.subdomain.generic({
        subdomain: subdomain2,
        verbose: "Root domain does not have a subregistry component address"
      }));
    }
    const manifest = await subdomainDeletionManifest({
      sdkInstance,
      accountAddress,
      domainId: rootDomainDetails.id,
      subregistryAddress: rootDomainDetails.subregistry_component_address,
      subdomainName
    });
    await sendTransaction({
      rdt,
      message: `Delete subdomain ${subdomain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "SUBDOMAIN_DELETION_SUCCESSFUL",
      details: `Subdomain ${subdomain2} was successfully deleted.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.subdomain.deletion({ subdomain: subdomain2, verbose: message }));
  }
}

// src/manifests/domains/transfer-domain-manifest.ts
async function transferDomainManifest({
  sdkInstance,
  domainId,
  fromAddress,
  destinationAddress,
  cleanTransfer
}) {
  const domainResourceAddress = sdkInstance.entities.rnsCore.domainResource;
  const namespaceCoreAddress = sdkInstance.entities.rnsCore.rootAddr;
  let manifest = "";
  if (cleanTransfer) {
    manifest += `
        CALL_METHOD
            Address("${fromAddress}")
            "create_proof_of_non_fungibles"
            Address("${domainResourceAddress}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${namespaceCoreAddress}")
            "spawn_new_subregistry"
            Proof("domain_proof");
        `;
  }
  manifest += `
        CALL_METHOD
            Address("${fromAddress}")
            "withdraw_non_fungibles"
            Address("${domainResourceAddress}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        CALL_METHOD
            Address("${destinationAddress}")
            "try_deposit_batch_or_refund"
            Expression("ENTIRE_WORKTOP")
            Enum<0u8>();
    `;
  return manifest;
}

// src/utils/validation.utils.ts
var DOMAIN_ERRORS = {
  NOT_FOUND: "Domain not found or not registered",
  NO_SUBREGISTRY: "Domain does not have a subregistry component",
  NOT_OWNER: (currentOwner) => `Domain is not activated for this account. Current owner: ${currentOwner || "none"}`
};
async function validateDomainOwnership({
  domain: domain2,
  accountAddress,
  sdkInstance,
  requireSubregistry = false,
  errorFactory
}) {
  var _a;
  const domainDetails = await requestDomainDetails(domain2, { sdkInstance });
  if (domainDetails instanceof Error) {
    return {
      error: transactionError(errorFactory.generic({
        domain: domain2,
        verbose: `Failed to fetch domain details: ${domainDetails.message}`
      }))
    };
  }
  if (!domainDetails || !domainDetails.id) {
    return {
      error: transactionError(errorFactory.generic({
        domain: domain2,
        verbose: DOMAIN_ERRORS.NOT_FOUND
      }))
    };
  }
  if (requireSubregistry && !domainDetails.subregistry_component_address) {
    return {
      error: transactionError(errorFactory.generic({
        domain: domain2,
        verbose: DOMAIN_ERRORS.NO_SUBREGISTRY
      }))
    };
  }
  if (((_a = domainDetails.current_activated_owner) == null ? void 0 : _a.toLowerCase()) !== accountAddress.toLowerCase()) {
    const currentOwner = domainDetails.current_activated_owner || "none";
    if ("notOwner" in errorFactory && errorFactory.notOwner) {
      return {
        error: transactionError(errorFactory.notOwner({
          domain: domain2,
          accountAddress,
          currentOwner
        }))
      };
    } else {
      return {
        error: transactionError(errorFactory.generic({
          domain: domain2,
          verbose: DOMAIN_ERRORS.NOT_OWNER(currentOwner)
        }))
      };
    }
  }
  return { domainDetails };
}
function isValidationError(result) {
  return "error" in result;
}

// src/dispatchers/domain/transfer.ts
async function dispatchDomainTransfer({
  sdkInstance,
  domain: domain2,
  rdt,
  fromAddress,
  destinationAddress,
  preferences,
  callbacks
}) {
  var _a;
  try {
    const cleanTransfer = (_a = preferences == null ? void 0 : preferences.cleanTransfer) != null ? _a : false;
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress: fromAddress,
      sdkInstance,
      requireSubregistry: false,
      errorFactory: errors_default.transfer
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = await transferDomainManifest({
      sdkInstance,
      domainId: domainDetails.id,
      fromAddress,
      destinationAddress,
      cleanTransfer
    });
    const transferMessage = cleanTransfer ? `Transfer ${domain2} (clean slate)` : `Transfer ${domain2}`;
    await sendTransaction({
      rdt,
      message: transferMessage,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    const successMessage = cleanTransfer ? `${domain2} was successfully transferred with a new subregistry (all records and subdomains removed).` : `${domain2} was successfully transferred with existing records and subdomains.`;
    return transactionResponse({
      code: "TRANSFER_SUCCESSFUL",
      details: successMessage
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.transfer.generic({ domain: domain2, verbose: message }));
  }
}

// src/manifests/domains/unbond-domain-manifest.ts
async function unbondDomainManifest({
  sdkInstance,
  accountAddress,
  domainId,
  preserveSubregistryData = false
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        TAKE_NON_FUNGIBLES_FROM_WORKTOP
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            )
            Bucket("domain_bucket");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "unbond"
            Bucket("domain_bucket")
            ${preserveSubregistryData};
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/dispatchers/domain/unbond.ts
async function dispatchDomainUnbond({
  sdkInstance,
  domain: domain2,
  rdt,
  accountAddress,
  preserveSubregistryData = false,
  callbacks
}) {
  try {
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress,
      sdkInstance,
      requireSubregistry: false,
      errorFactory: errors_default.unbond
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = await unbondDomainManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id,
      preserveSubregistryData
    });
    const unbondMessage = preserveSubregistryData ? `Unbond ${domain2} (preserving records)` : `Unbond ${domain2}`;
    await sendTransaction({
      rdt,
      message: unbondMessage,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    const successDetails = preserveSubregistryData ? `${domain2} was successfully unbonded. The bonded value has been returned to your account. Subregistry data has been preserved.` : `${domain2} was successfully unbonded. The bonded value has been returned to your account. Subregistry data has been cleared.`;
    return transactionResponse({
      code: "UNBOND_SUCCESSFUL",
      details: successDetails
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.unbond.generic({ domain: domain2, verbose: message }));
  }
}

// src/manifests/domains/rebond-domain-manifest.ts
async function rebondDomainManifest({
  sdkInstance,
  accountAddress,
  domainId,
  newPaymentResource,
  newPaymentAmount
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw"
            Address("${newPaymentResource}")
            Decimal("${newPaymentAmount}");
        TAKE_FROM_WORKTOP
            Address("${newPaymentResource}")
            Decimal("${newPaymentAmount}")
            Bucket("payment_bucket");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "rebond"
            Proof("domain_proof")
            Bucket("payment_bucket");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/domain/rebond.ts
async function dispatchDomainRebond({
  sdkInstance,
  domain: domain2,
  accountAddress,
  newPaymentResource,
  rdt,
  callbacks
}) {
  try {
    const acceptedResources = sdkInstance.entities.rnsCore.acceptedPaymentResources;
    if (!acceptedResources.includes(newPaymentResource)) {
      return transactionError(errors_default.rebond.invalidResource({
        domain: domain2,
        resource: newPaymentResource,
        verbose: `Resource ${newPaymentResource} is not an accepted payment resource. Accepted: ${acceptedResources.join(", ")}`
      }));
    }
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress,
      sdkInstance,
      requireSubregistry: false,
      errorFactory: errors_default.rebond
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    if (domainDetails.bond.resource.address === newPaymentResource) {
      return transactionError(errors_default.rebond.sameResource({
        domain: domain2,
        resource: newPaymentResource,
        verbose: `Domain is already bonded with ${newPaymentResource}. No rebond necessary.`
      }));
    }
    const requiredAmount = getDomainPrice(domain2, sdkInstance.entities.rnsCore.priceLadder);
    const manifest = await rebondDomainManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id,
      newPaymentResource,
      newPaymentAmount: requiredAmount
    });
    await sendTransaction({
      rdt,
      message: `Rebond ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "REBOND_SUCCESSFUL",
      details: `${domain2} was successfully rebonded. Old bond (${domainDetails.bond.amount} ${domainDetails.bond.resource.symbol || domainDetails.bond.resource.address}) has been returned to your account. New bond: ${requiredAmount} of the new resource.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.rebond.generic({ domain: domain2, verbose: message }));
  }
}

// src/manifests/domains/import-domain-manifest.ts
async function importDomainManifest({
  sdkInstance,
  accountAddress,
  importDomainId,
  paymentResource,
  paymentAmount
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.importDomainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${importDomainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("import_domain_proof");
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw"
            Address("${paymentResource}")
            Decimal("${paymentAmount}");
        TAKE_FROM_WORKTOP
            Address("${paymentResource}")
            Decimal("${paymentAmount}")
            Bucket("payment_bucket");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "import_accepted_domain"
            Proof("import_domain_proof")
            Bucket("payment_bucket")
            Address("${accountAddress}");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/domain/import-domain.ts
async function dispatchImportDomain({
  sdkInstance,
  domain: domain2,
  rdt,
  accountAddress,
  paymentResource,
  callbacks
}) {
  try {
    const importDomainId = await domainToNonFungId(domain2);
    try {
      const registryResponse = await sdkInstance.state.innerClient.keyValueStoreData({
        stateKeyValueStoreDataRequest: {
          key_value_store_address: sdkInstance.entities.rnsCore.domainRegistry,
          keys: [{ key_json: { kind: "String", value: domain2 } }]
        }
      });
      if (registryResponse.entries && registryResponse.entries.length > 0) {
        return transactionError(errors_default.importDomain.alreadyImported({
          domain: domain2,
          verbose: "Domain has already been imported/registered"
        }));
      }
    } catch {
    }
    const selectedPaymentResource = paymentResource || sdkInstance.entities.rnsCore.acceptedPaymentResources[0];
    if (!selectedPaymentResource) {
      return transactionError(errors_default.importDomain.generic({
        domain: domain2,
        verbose: "No accepted payment resources configured"
      }));
    }
    const bondAmount = getDomainPrice(domain2, sdkInstance.entities.rnsCore.priceLadder);
    const balances = await getAccountBondBalances(
      accountAddress,
      sdkInstance.entities.rnsCore.acceptedPaymentResources,
      { sdkInstance }
    );
    const affordabilityCheck = checkAccountBondAffordability(balances.balances, bondAmount);
    if (affordabilityCheck.sufficientBalances.length === 0) {
      const shortfalls = affordabilityCheck.insufficientBalances.map((r) => `${r.resource.name || r.resource.address}: have ${r.balance}, need ${bondAmount} (short ${r.shortfall})`).join("; ");
      return transactionError(errors_default.balance.insufficientFunds({
        requiredAmount: bondAmount,
        verbose: `Insufficient balance for import bond. ${shortfalls}`
      }));
    }
    const manifest = await importDomainManifest({
      sdkInstance,
      accountAddress,
      importDomainId,
      paymentResource: selectedPaymentResource,
      paymentAmount: bondAmount
    });
    await sendTransaction({
      rdt,
      message: `Import ${domain2} into Radix Namespace`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "IMPORT_SUCCESSFUL",
      details: `${domain2} was successfully imported. Bond amount: ${bondAmount} (no registrar fees).`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.importDomain.generic({ domain: domain2, verbose: message }));
  }
}

// src/manifests/account/set-primary-domain-manifest.ts
async function setPrimaryDomainManifest({
  sdkInstance,
  accountAddress,
  domainId,
  domainName,
  enableDiscovery = false
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "set_primary_domain"
            Proof("domain_proof")
            "${domainName}"
            ${enableDiscovery}
            Address("${accountAddress}");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/manifests/account/update-discovery-manifest.ts
async function updateDiscoveryManifest({
  sdkInstance,
  accountAddress,
  configBadgeId,
  enableDiscovery
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.configBadgeResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${configBadgeId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("config_proof");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "update_discovery_settings"
            Proof("config_proof")
            ${enableDiscovery};
    `;
}

// src/dispatchers/account/account-settings.ts
async function dispatchUpdateAccountSettings({
  sdkInstance,
  rdt,
  accountAddress,
  primaryDomain,
  enableDiscovery,
  callbacks
}) {
  if (primaryDomain) {
    return setPrimaryDomain({
      sdkInstance,
      rdt,
      accountAddress,
      domain: primaryDomain,
      enableDiscovery: enableDiscovery != null ? enableDiscovery : false,
      callbacks
    });
  } else if (enableDiscovery !== void 0) {
    return updateDiscovery({
      sdkInstance,
      rdt,
      accountAddress,
      enableDiscovery,
      callbacks
    });
  } else {
    return transactionError(errors_default.accountSettings.nothingToUpdate({ accountAddress }));
  }
}
var accountSettingsErrorFactory = {
  generic: ({ verbose }) => errors_default.accountSettings.generic({ verbose })
};
async function setPrimaryDomain({
  sdkInstance,
  rdt,
  accountAddress,
  domain: domain2,
  enableDiscovery,
  callbacks
}) {
  var _a, _b;
  try {
    const domainTypeResult = deriveDomainType(domain2);
    if (!domainTypeResult.isValid) {
      return transactionError(errors_default.accountSettings.generic({
        verbose: ((_b = (_a = domainTypeResult.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.verbose) || "Invalid domain format"
      }));
    }
    const rootDomainName = domainTypeResult.type === "sub" ? deriveRootDomain(domain2) : domain2;
    if (!rootDomainName) {
      return transactionError(errors_default.accountSettings.generic({
        verbose: "Could not determine root domain"
      }));
    }
    const validation = await validateDomainOwnership({
      domain: rootDomainName,
      accountAddress,
      sdkInstance,
      requireSubregistry: false,
      errorFactory: accountSettingsErrorFactory
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = await setPrimaryDomainManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id,
      domainName: domain2,
      enableDiscovery
    });
    const discoveryStatus = enableDiscovery ? "enabled" : "disabled";
    await sendTransaction({
      rdt,
      message: `Set ${domain2} as primary domain`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "UPDATE_ACCOUNT_SETTINGS_SUCCESSFUL",
      details: `${domain2} has been set as the primary domain for ${accountAddress}. Discovery is ${discoveryStatus}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.accountSettings.generic({ verbose: message }));
  }
}
async function updateDiscovery({
  sdkInstance,
  rdt,
  accountAddress,
  enableDiscovery,
  callbacks
}) {
  var _a, _b, _c, _d, _e, _f;
  try {
    const configBadgeResource = sdkInstance.entities.rnsCore.configBadgeResource;
    const accountState = await sdkInstance.state.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: {
        addresses: [accountAddress],
        aggregation_level: "Vault",
        opt_ins: {
          non_fungible_include_nfids: true
        }
      }
    });
    const accountItem = (_a = accountState.items) == null ? void 0 : _a[0];
    if (!accountItem || !("non_fungible_resources" in accountItem)) {
      return transactionError(errors_default.accountSettings.noConfigBadge({ accountAddress }));
    }
    const configBadgeCollection = (_c = (_b = accountItem.non_fungible_resources) == null ? void 0 : _b.items) == null ? void 0 : _c.find(
      (nft) => nft.resource_address === configBadgeResource
    );
    if (!isNonFungibleVaultAggregated(configBadgeCollection)) {
      return transactionError(errors_default.accountSettings.noConfigBadge({ accountAddress }));
    }
    const configBadgeItems = (_f = (_e = (_d = configBadgeCollection.vaults) == null ? void 0 : _d.items) == null ? void 0 : _e[0]) == null ? void 0 : _f.items;
    if (!configBadgeItems || configBadgeItems.length === 0) {
      return transactionError(errors_default.accountSettings.noConfigBadge({ accountAddress }));
    }
    const configBadgeId = configBadgeItems[0];
    const manifest = await updateDiscoveryManifest({
      sdkInstance,
      accountAddress,
      configBadgeId,
      enableDiscovery
    });
    const discoveryStatus = enableDiscovery ? "enabled" : "disabled";
    await sendTransaction({
      rdt,
      message: `Updating discovery settings (${discoveryStatus}) for ${accountAddress}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "UPDATE_ACCOUNT_SETTINGS_SUCCESSFUL",
      details: `Discovery has been ${discoveryStatus} for ${accountAddress}.`
    });
  } catch (error) {
    logger.error("updateDiscovery", error);
    return transactionError(errors_default.accountSettings.generic({ verbose: error instanceof Error ? error.message : String(error) }));
  }
}

// src/manifests/domains/claim-reserved-domain-manifest.ts
function claimReservedDomainManifest({
  sdkInstance,
  accountAddress,
  domainName,
  paymentResource,
  paymentAmount
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw"
            Address("${paymentResource}")
            Decimal("${paymentAmount}");
        TAKE_FROM_WORKTOP
            Address("${paymentResource}")
            Decimal("${paymentAmount}")
            Bucket("payment_bucket");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "claim_reserved_domain"
            "${domainName}"
            Bucket("payment_bucket")
            Address("${accountAddress}");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/dispatchers/domain/claim-reserved.ts
async function dispatchClaimReservedDomain({
  sdkInstance,
  domain: domain2,
  rdt,
  accountAddress,
  paymentResource,
  callbacks
}) {
  try {
    const selectedPaymentResource = paymentResource || sdkInstance.entities.rnsCore.acceptedPaymentResources[0];
    if (!selectedPaymentResource) {
      return transactionError(errors_default.registration.generic({
        domain: domain2,
        verbose: "No accepted payment resources configured"
      }));
    }
    const bondAmount = getDomainPrice(domain2, sdkInstance.entities.rnsCore.priceLadder);
    const balances = await getAccountBondBalances(
      accountAddress,
      sdkInstance.entities.rnsCore.acceptedPaymentResources,
      { sdkInstance }
    );
    const affordabilityCheck = checkAccountBondAffordability(balances.balances, bondAmount);
    if (affordabilityCheck.sufficientBalances.length === 0) {
      const shortfalls = affordabilityCheck.insufficientBalances.map((r) => `${r.resource.name || r.resource.address}: have ${r.balance}, need ${bondAmount} (short ${r.shortfall})`).join("; ");
      return transactionError(errors_default.balance.insufficientFunds({
        requiredAmount: bondAmount,
        verbose: `Insufficient balance for reserved domain claim bond. ${shortfalls}`
      }));
    }
    const manifest = claimReservedDomainManifest({
      sdkInstance,
      accountAddress,
      domainName: domain2,
      paymentResource: selectedPaymentResource,
      paymentAmount: bondAmount
    });
    await sendTransaction({
      rdt,
      message: `Claim reserved domain ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "CLAIM_RESERVED_SUCCESSFUL",
      details: `${domain2} was successfully claimed. Bond amount: ${bondAmount} (no registrar fees).`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.registration.generic({ domain: domain2, verbose: message }));
  }
}

// src/manifests/account/claim-from-locker-manifest.ts
function claimNonFungiblesFromLockerManifest({
  sdkInstance,
  accountAddress,
  nftIds
}) {
  const idsArray = nftIds.map((id) => `NonFungibleLocalId("${id}")`).join(",\n                ");
  return `
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.accountLocker}")
            "claim_non_fungibles"
            Address("${accountAddress}")
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                ${idsArray}
            );
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}
function claimFromLockerByAmountManifest({
  sdkInstance,
  accountAddress,
  amount
}) {
  return `
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.accountLocker}")
            "claim"
            Address("${accountAddress}")
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Decimal("${amount}");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/dispatchers/account/claim-from-locker.ts
async function dispatchClaimFromLocker({
  sdkInstance,
  accountAddress,
  rdt,
  nftIds,
  callbacks
}) {
  try {
    if (!sdkInstance.entities.rnsCore.accountLocker) {
      return transactionError(errors_default.locker.noLocker({
        verbose: "AccountLocker address not available. The Radix Namespace component may not have been fully expanded."
      }));
    }
    let manifest;
    if (nftIds && nftIds.length > 0) {
      manifest = claimNonFungiblesFromLockerManifest({
        sdkInstance,
        accountAddress,
        nftIds
      });
    } else {
      manifest = claimFromLockerByAmountManifest({
        sdkInstance,
        accountAddress,
        amount: 100
      });
    }
    await sendTransaction({
      rdt,
      message: `Claim domain NFTs from locker`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    const claimedDesc = nftIds && nftIds.length > 0 ? `${nftIds.length} specific domain NFT(s)` : "domain NFTs";
    return transactionResponse({
      code: "LOCKER_CLAIM_SUCCESSFUL",
      details: `Successfully claimed ${claimedDesc} from the AccountLocker.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.locker.claimFailed({ verbose: message }));
  }
}

// src/manifests/registrar/registrar-registration-manifest.ts
async function registerAsRegistrarManifest({
  sdkInstance,
  name,
  iconUrl,
  websiteUrl,
  feePercentage,
  accountAddress
}) {
  return `
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "register_as_registrar"
            "${name}"
            "${iconUrl}"
            "${websiteUrl}"
            Decimal("${feePercentage}");
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/dispatchers/registrar/registration.ts
var import_decimal8 = __toESM(require("decimal.js"), 1);
async function dispatchRegistrarRegistration({
  sdkInstance,
  name,
  iconUrl,
  websiteUrl,
  feePercentage,
  accountAddress,
  rdt,
  callbacks
}) {
  try {
    const feePercentageDecimal = feePercentage instanceof import_decimal8.default ? feePercentage : new import_decimal8.default(feePercentage);
    if (!name || name.length < 1 || name.length > 100) {
      return transactionError({
        code: "VALIDATION_ERROR",
        error: "Registrar name must be between 1 and 100 characters",
        verbose: `Provided name: "${name}" (length: ${(name == null ? void 0 : name.length) || 0})`
      });
    }
    if (!iconUrl || !websiteUrl) {
      return transactionError({
        code: "VALIDATION_ERROR",
        error: "Icon URL and website URL are required",
        verbose: `Icon URL: "${iconUrl || "not provided"}", Website URL: "${websiteUrl || "not provided"}"`
      });
    }
    if (feePercentageDecimal.lessThan(0)) {
      return transactionError({
        code: "VALIDATION_ERROR",
        error: "Fee percentage must be >= 0",
        verbose: `Provided fee percentage: ${feePercentageDecimal.toString()}`
      });
    }
    const manifest = await registerAsRegistrarManifest({
      sdkInstance,
      name,
      iconUrl,
      websiteUrl,
      feePercentage: feePercentageDecimal.toString(),
      accountAddress
    });
    await sendTransaction({
      rdt,
      message: `Register as registrar: ${name}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "REGISTRAR_REGISTRATION_SUCCESSFUL",
      details: `Successfully registered as registrar: ${name} with ${feePercentageDecimal}% fee`
    });
  } catch (error) {
    return transactionError({
      code: "REGISTRAR_REGISTRATION_ERROR",
      error: "Failed to register as registrar",
      verbose: `Name: "${name}", Account: ${accountAddress}, Fee: ${feePercentage}. Error: ${error instanceof Error ? error.message : String(error)}`
    });
  }
}

// src/manifests/registrar/registrar-update-manifest.ts
async function updateRegistrarMetadataManifest({
  sdkInstance,
  accountAddress,
  registrarBadgeResource,
  registrarId,
  name,
  iconUrl,
  websiteUrl,
  feePercentage
}) {
  const formattedRegistrarId = formatNonFungibleLocalId(registrarId);
  const nameParam = name !== void 0 ? `Enum<1u8>("${name}")` : "Enum<0u8>()";
  const iconUrlParam = iconUrl !== void 0 ? `Enum<1u8>("${iconUrl}")` : "Enum<0u8>()";
  const websiteUrlParam = websiteUrl !== void 0 ? `Enum<1u8>("${websiteUrl}")` : "Enum<0u8>()";
  const feePercentageParam = feePercentage !== void 0 ? `Enum<1u8>(Decimal("${feePercentage}"))` : "Enum<0u8>()";
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${registrarBadgeResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${formattedRegistrarId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("registrar_proof");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "update_registrar_metadata"
            Proof("registrar_proof")
            ${nameParam}
            ${iconUrlParam}
            ${websiteUrlParam}
            ${feePercentageParam};
    `;
}

// src/dispatchers/registrar/update.ts
var import_decimal9 = __toESM(require("decimal.js"), 1);
async function dispatchRegistrarUpdate({
  sdkInstance,
  registrarId,
  accountAddress,
  name,
  iconUrl,
  websiteUrl,
  feePercentage,
  rdt,
  callbacks
}) {
  try {
    const feePercentageDecimal = feePercentage !== void 0 ? feePercentage instanceof import_decimal9.default ? feePercentage : new import_decimal9.default(feePercentage) : void 0;
    if (!name && !iconUrl && !websiteUrl && feePercentageDecimal === void 0) {
      return transactionError({
        code: "VALIDATION_ERROR",
        error: "At least one field must be provided for update",
        verbose: `Registrar ID: ${registrarId}, Account: ${accountAddress}. All update fields are undefined.`
      });
    }
    if (name !== void 0 && (name.length < 1 || name.length > 100)) {
      return transactionError({
        code: "VALIDATION_ERROR",
        error: "Registrar name must be between 1 and 100 characters",
        verbose: `Registrar ID: ${registrarId}, Provided name: "${name}" (length: ${name.length})`
      });
    }
    if (feePercentageDecimal !== void 0 && feePercentageDecimal.lessThan(0)) {
      return transactionError({
        code: "VALIDATION_ERROR",
        error: "Fee percentage must be >= 0",
        verbose: `Registrar ID: ${registrarId}, Provided fee percentage: ${feePercentageDecimal.toString()}`
      });
    }
    const manifest = await updateRegistrarMetadataManifest({
      sdkInstance,
      accountAddress,
      registrarBadgeResource: sdkInstance.entities.rnsCore.registrarBadgeResource,
      registrarId,
      name,
      iconUrl,
      websiteUrl,
      feePercentage: feePercentageDecimal == null ? void 0 : feePercentageDecimal.toString()
    });
    await sendTransaction({
      rdt,
      message: `Update registrar metadata: ${registrarId}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    const updatedFields = [];
    if (name) updatedFields.push(`name="${name}"`);
    if (iconUrl) updatedFields.push("icon");
    if (websiteUrl) updatedFields.push("website");
    if (feePercentageDecimal !== void 0) updatedFields.push(`fee=${feePercentageDecimal}%`);
    return transactionResponse({
      code: "REGISTRAR_UPDATE_SUCCESSFUL",
      details: `Successfully updated registrar: ${updatedFields.join(", ")}`
    });
  } catch (error) {
    return transactionError({
      code: "REGISTRAR_UPDATE_ERROR",
      error: "Failed to update registrar metadata",
      verbose: `Registrar ID: ${registrarId}, Account: ${accountAddress}, Fields: ${JSON.stringify({ name, iconUrl, websiteUrl, feePercentage })}. Error: ${error instanceof Error ? error.message : String(error)}`
    });
  }
}

// src/manifests/registrar/registrar-burn-manifest.ts
async function burnRegistrarBadgeManifest({
  sdkInstance,
  accountAddress,
  registrarBadgeResource,
  registrarId
}) {
  const formattedRegistrarId = formatNonFungibleLocalId(registrarId);
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "withdraw_non_fungibles"
            Address("${registrarBadgeResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${formattedRegistrarId}")
            );
        TAKE_NON_FUNGIBLES_FROM_WORKTOP
            Address("${registrarBadgeResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${formattedRegistrarId}")
            )
            Bucket("registrar_badge");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "burn_registrar_badge"
            Bucket("registrar_badge");
    `;
}

// src/dispatchers/registrar/burn.ts
async function dispatchRegistrarBurn({
  sdkInstance,
  registrarId,
  accountAddress,
  rdt,
  callbacks
}) {
  try {
    const manifest = await burnRegistrarBadgeManifest({
      sdkInstance,
      accountAddress,
      registrarBadgeResource: sdkInstance.entities.rnsCore.registrarBadgeResource,
      registrarId
    });
    await sendTransaction({
      rdt,
      message: `\u26A0\uFE0F Burn registrar badge: ${registrarId} (IRREVERSIBLE)`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "REGISTRAR_BURN_SUCCESSFUL",
      details: `Registrar badge ${registrarId} has been permanently burned. Service disabled.`
    });
  } catch (error) {
    return transactionError({
      code: "REGISTRAR_BURN_ERROR",
      error: "Failed to burn registrar badge",
      verbose: `Registrar ID: ${registrarId}, Account: ${accountAddress}. Error: ${error instanceof Error ? error.message : String(error)}`
    });
  }
}

// src/manifests/registrar/registrar-withdraw-fees-manifest.ts
async function withdrawRegistrarFeesManifest({
  sdkInstance,
  accountAddress,
  registrarBadgeResource,
  registrarId,
  resourceAddresses
}) {
  const formattedRegistrarId = formatNonFungibleLocalId(registrarId);
  const withdrawalCalls = resourceAddresses.map(
    (resourceAddress) => `
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "withdraw_registrar_fees"
            Proof("registrar_proof")
            Address("${resourceAddress}");`
  ).join("");
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${registrarBadgeResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${formattedRegistrarId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("registrar_proof");${withdrawalCalls}
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `;
}

// src/dispatchers/registrar/withdraw-fees.ts
async function dispatchRegistrarWithdrawFees({
  sdkInstance,
  registrarId,
  resourceAddress,
  accountAddress,
  rdt,
  callbacks
}) {
  try {
    let resourceAddresses;
    if (resourceAddress) {
      resourceAddresses = [resourceAddress];
    } else {
      const feeBalances = await requestRegistrarFeeBalances(registrarId, { sdkInstance });
      if (feeBalances instanceof Error) {
        return transactionError({
          code: "REGISTRAR_WITHDRAWAL_ERROR",
          error: "Failed to discover fee vaults",
          verbose: `Could not fetch fee balances for registrar ${registrarId}: ${feeBalances.message}`
        });
      }
      resourceAddresses = feeBalances.fees.filter((fee) => !fee.amount.isZero()).map((fee) => fee.resource_address);
      if (resourceAddresses.length === 0) {
        return transactionError({
          code: "REGISTRAR_NO_FEES_AVAILABLE",
          error: "No fees available to withdraw",
          verbose: `Registrar ${registrarId} has no accumulated fees in any vault`
        });
      }
    }
    const manifest = await withdrawRegistrarFeesManifest({
      sdkInstance,
      accountAddress,
      registrarBadgeResource: sdkInstance.entities.rnsCore.registrarBadgeResource,
      registrarId,
      resourceAddresses
    });
    await sendTransaction({
      rdt,
      message: `Withdraw registrar fees for registrar: ${registrarId}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    const resourceCount = resourceAddresses.length;
    const resourcesLabel = resourceCount === 1 ? "1 resource" : `${resourceCount} resources`;
    return transactionResponse({
      code: "REGISTRAR_WITHDRAWAL_SUCCESSFUL",
      details: `Successfully withdrew fees for registrar ${registrarId} from ${resourcesLabel}`
    });
  } catch (error) {
    return transactionError({
      code: "REGISTRAR_WITHDRAWAL_ERROR",
      error: "Failed to withdraw registrar fees",
      verbose: `Registrar ID: ${registrarId}, Account: ${accountAddress}. Error: ${error instanceof Error ? error.message : String(error)}`
    });
  }
}

// src/manifests/domains/subregistry-management-manifest.ts
function updateSubregistryIconManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  iconUrl
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "update_icon_url"
            Proof("domain_proof")
            "${iconUrl}";
        DROP_ALL_PROOFS;
    `;
}
function updateSubregistryDappDefinitionManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  dappDefinitionAddress
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "update_dapp_definition"
            Proof("domain_proof")
            Address("${dappDefinitionAddress}");
        DROP_ALL_PROOFS;
    `;
}
function updateDomainResourceManifest({
  sdkInstance,
  accountAddress,
  domainId,
  subregistryAddress,
  newDomainResourceAddress
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${subregistryAddress}")
            "update_domain_resource"
            Proof("domain_proof")
            Address("${newDomainResourceAddress}");
        DROP_ALL_PROOFS;
    `;
}
function replaceSubregistryManifest({
  sdkInstance,
  accountAddress,
  domainId
}) {
  return `
        CALL_METHOD
            Address("${accountAddress}")
            "create_proof_of_non_fungibles"
            Address("${sdkInstance.entities.rnsCore.domainResource}")
            Array<NonFungibleLocalId>(
                NonFungibleLocalId("${domainId}")
            );
        POP_FROM_AUTH_ZONE
            Proof("domain_proof");
        CALL_METHOD
            Address("${sdkInstance.entities.rnsCore.rootAddr}")
            "spawn_new_subregistry"
            Proof("domain_proof");
        DROP_ALL_PROOFS;
    `;
}

// src/dispatchers/domain/subregistry-management.ts
async function dispatchUpdateSubregistryIcon({
  sdkInstance,
  rdt,
  domain: domain2,
  iconUrl,
  accountAddress,
  callbacks
}) {
  try {
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress,
      sdkInstance,
      requireSubregistry: true,
      errorFactory: errors_default.subregistry
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = updateSubregistryIconManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id,
      subregistryAddress: domainDetails.subregistry_component_address,
      iconUrl
    });
    await sendTransaction({
      rdt,
      message: `Update icon for ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "SUBREGISTRY_ICON_UPDATED",
      details: `Icon URL for ${domain2} has been updated to ${iconUrl}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.subregistry.generic({ domain: domain2, verbose: message }));
  }
}
async function dispatchUpdateSubregistryDappDefinition({
  sdkInstance,
  rdt,
  domain: domain2,
  dappDefinitionAddress,
  accountAddress,
  callbacks
}) {
  try {
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress,
      sdkInstance,
      requireSubregistry: true,
      errorFactory: errors_default.subregistry
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = updateSubregistryDappDefinitionManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id,
      subregistryAddress: domainDetails.subregistry_component_address,
      dappDefinitionAddress
    });
    await sendTransaction({
      rdt,
      message: `Update dApp definition for ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "SUBREGISTRY_DAPP_DEFINITION_UPDATED",
      details: `dApp definition for ${domain2} has been updated to ${dappDefinitionAddress}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.subregistry.generic({ domain: domain2, verbose: message }));
  }
}
async function dispatchUpdateDomainResource({
  sdkInstance,
  rdt,
  domain: domain2,
  newDomainResourceAddress,
  accountAddress,
  callbacks
}) {
  try {
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress,
      sdkInstance,
      requireSubregistry: true,
      errorFactory: errors_default.subregistry
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = updateDomainResourceManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id,
      subregistryAddress: domainDetails.subregistry_component_address,
      newDomainResourceAddress
    });
    await sendTransaction({
      rdt,
      message: `Update domain resource for ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "DOMAIN_RESOURCE_UPDATED",
      details: `Domain resource for ${domain2} has been updated to ${newDomainResourceAddress}.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.subregistry.generic({ domain: domain2, verbose: message }));
  }
}
async function dispatchReplaceSubregistry({
  sdkInstance,
  rdt,
  domain: domain2,
  accountAddress,
  callbacks
}) {
  try {
    const validation = await validateDomainOwnership({
      domain: domain2,
      accountAddress,
      sdkInstance,
      requireSubregistry: false,
      errorFactory: errors_default.subregistry
    });
    if (isValidationError(validation)) {
      return validation.error;
    }
    const { domainDetails } = validation;
    const manifest = replaceSubregistryManifest({
      sdkInstance,
      accountAddress,
      domainId: domainDetails.id
    });
    await sendTransaction({
      rdt,
      message: `Replace subregistry for ${domain2}`,
      manifest,
      transaction: sdkInstance.transaction,
      callbacks
    });
    return transactionResponse({
      code: "SUBREGISTRY_REPLACED",
      details: `Subregistry for ${domain2} has been replaced with a new empty subregistry. All previous records and subdomains are now inaccessible.`
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return transactionError(errors_default.subregistry.generic({ domain: domain2, verbose: message }));
  }
}

// src/entities.config.ts
var config = {
  stokenet: {
    rnsCore: "component_tdx_2_1cq3hzzgwypv3494aprg76c3pvxwpxmwalm7ld257pudj8urzc6l5ap"
  },
  mainnet: {
    rnsCore: "component_rdx1cz2y8386y6hkxm06c48cyjqf7vlx6n8jeqx4dezr6vfavhk2j3lr8c"
  }
};
var entities_config_default = config;

// src/utils/address.utils.ts
var import_bech32 = require("bech32");
function validateAccountAddress(accountAddress, options) {
  if (!accountAddress.includes("account_"))
    return invalidResult(errors_default.account.invalidAddress({ accountAddress }));
  try {
    validateRadixAddress({ address: accountAddress, network: options == null ? void 0 : options.network });
  } catch (e) {
    return invalidResult(errors_default.account.invalidAddress({ accountAddress, verbose: e.message }));
  }
  return validResult();
}
function determineAddressNetwork(hrp) {
  let network;
  const mainnetRegex = /^([a-z]+)_rdx$/;
  const stokenetRegex = /^([a-z]+)_tdx_2_$/;
  let match = hrp.match(mainnetRegex);
  if (match) {
    network = "mainnet";
  } else {
    match = hrp.match(stokenetRegex);
    if (match) {
      network = "stokenet";
    } else {
      throw new Error("Invalid HRP format. Must match mainnet (e.g., account_rdx1) or stokenet (e.g., account_tdx_2_) pattern.");
    }
  }
  return network;
}
function determineAddressType(hrp) {
  let entityType;
  const mainnetRegex = /^([a-z]+)_rdx$/;
  const stokenetRegex = /^([a-z]+)_tdx_2_$/;
  let match = hrp.match(mainnetRegex);
  if (match) {
    entityType = match[1];
  } else {
    match = hrp.match(stokenetRegex);
    if (match) {
      entityType = match[1];
    } else {
      throw new Error("Invalid HRP format. Must match mainnet (e.g., account_rdx1) or stokenet (e.g., account_tdx_2_) pattern.");
    }
  }
  return entityType;
}
function validateRadixAddress({ address, network }) {
  let decoded;
  try {
    decoded = import_bech32.bech32m.decode(address);
  } catch (err) {
    throw new Error("Invalid Bech32m encoding or checksum");
  }
  const { prefix: hrp, words } = decoded;
  if (!network) {
    network = determineAddressNetwork(hrp);
  }
  const entityTypePrefix = determineAddressType(hrp);
  const allowedHrpPrefixes = /* @__PURE__ */ new Set([
    "account",
    "resource",
    "component",
    "package",
    "identity",
    "validator",
    "consensusmanager",
    "accesscontroller",
    "pool",
    "locker",
    "transactiontracker",
    "internal_vault",
    "internal_component",
    "internal_keyvaluestore",
    "txid",
    "signedintent",
    "subtxid",
    "notarizedtransaction",
    "roundupdatetransaction",
    "systemtransaction",
    "ledgertransaction"
  ]);
  if (!allowedHrpPrefixes.has(entityTypePrefix)) {
    throw new Error(`Invalid HRP prefix "${entityTypePrefix}" for Radix address`);
  }
  const data = import_bech32.bech32m.fromWords(words);
  if (data.length < 1) {
    throw new Error("Bech32 payload is empty or too short");
  }
  const entityType = data[0];
  const txPrefixes = /* @__PURE__ */ new Set([
    "txid",
    "signedintent",
    "subtxid",
    "notarizedtransaction",
    "roundupdatetransaction",
    "systemtransaction",
    "ledgertransaction"
  ]);
  if (txPrefixes.has(entityTypePrefix)) {
    if (data.length !== 32) {
      throw new Error("Invalid length for transaction hash (expected 32 bytes)");
    }
    return true;
  }
  const allowedEntityTypes = /* @__PURE__ */ new Set([
    13,
    // GlobalPackage
    134,
    // GlobalConsensusManager
    131,
    // GlobalValidator
    130,
    // GlobalTransactionTracker
    192,
    // GlobalGenericComponent
    193,
    // GlobalAccount
    194,
    // GlobalIdentity
    195,
    // GlobalAccessController
    196,
    197,
    198,
    // GlobalOneResourcePool, TwoResourcePool, MultiResourcePool
    104,
    // GlobalAccountLocker
    209,
    210,
    // GlobalPreallocated Secp256k1 Account / Identity
    81,
    82,
    // GlobalPreallocated Ed25519 Account / Identity
    93,
    // GlobalFungibleResourceManager
    154,
    // GlobalNonFungibleResourceManager
    88,
    // InternalFungibleVault
    152,
    // InternalNonFungibleVault
    248,
    // InternalGenericComponent
    176
    // InternalKeyValueStore
  ]);
  if (!allowedEntityTypes.has(entityType)) {
    throw new Error(`Unrecognized entity type byte 0x${entityType.toString(16)} in address`);
  }
  let expectedPrefix = null;
  switch (entityType) {
    case 13:
      expectedPrefix = "package";
      break;
    case 93:
    case 154:
      expectedPrefix = "resource";
      break;
    case 192:
      expectedPrefix = "component";
      break;
    case 193:
    case 209:
    case 81:
      expectedPrefix = "account";
      break;
    case 194:
    case 210:
    case 82:
      expectedPrefix = "identity";
      break;
    case 131:
      expectedPrefix = "validator";
      break;
    case 134:
      expectedPrefix = "consensusmanager";
      break;
    case 195:
      expectedPrefix = "accesscontroller";
      break;
    case 196:
    case 197:
    case 198:
      expectedPrefix = "pool";
      break;
    case 104:
      expectedPrefix = "locker";
      break;
    case 130:
      expectedPrefix = "transactiontracker";
      break;
    case 88:
    case 152:
      expectedPrefix = "internal_vault";
      break;
    case 248:
      expectedPrefix = "internal_component";
      break;
    case 176:
      expectedPrefix = "internal_keyvaluestore";
      break;
  }
  if (expectedPrefix && expectedPrefix !== entityTypePrefix) {
    throw new Error(`HRP prefix "${entityTypePrefix}" does not match entity type ${entityType}`);
  }
  return true;
}

// src/mappings/sdk-processors.ts
var defaultProcessors = {
  domain: {
    normalize: normaliseDomain,
    validate: validateDomain,
    missingError: errors_default.domain.generic
  },
  subdomain: {
    normalize: normaliseDomain,
    validate: validateSubdomain,
    missingError: errors_default.subdomain.generic
  },
  accountAddress: {
    normalize: (accountAddress) => accountAddress.toLowerCase(),
    validate: (accountAddress, instance) => validateAccountAddress(accountAddress, { network: instance.network }),
    missingError: errors_default.account.invalidAddress
  }
};
var domainEntityProcessor = {
  domain: {
    normalize: normaliseDomain,
    validate: validateDomainEntity,
    missingError: errors_default.domain.generic
  }
};
var processorOverrides = {
  getRecords: domainEntityProcessor,
  resolveRecord: domainEntityProcessor,
  createRecord: domainEntityProcessor,
  amendRecord: domainEntityProcessor,
  deleteRecord: domainEntityProcessor,
  deleteRecordById: domainEntityProcessor,
  createRecords: domainEntityProcessor,
  deleteRecords: domainEntityProcessor,
  deleteContextRecords: domainEntityProcessor,
  getDomainDetails: domainEntityProcessor,
  transferDomain: {
    domain: {
      normalize: normaliseDomain,
      validate: validateDomain,
      missingError: errors_default.domain.generic
    },
    fromAddress: {
      normalize: (accountAddress) => accountAddress.toLowerCase(),
      validate: (accountAddress, instance) => validateAccountAddress(accountAddress, { network: instance.network }),
      missingError: errors_default.account.invalidAddress
    },
    destinationAddress: {
      normalize: (accountAddress) => accountAddress.toLowerCase(),
      validate: (accountAddress, instance) => validateAccountAddress(accountAddress, { network: instance.network }),
      missingError: errors_default.account.invalidAddress
    }
  },
  updateAccountSettings: domainEntityProcessor
};
var parameterProcessMap = {
  _default: defaultProcessors,
  ...processorOverrides
};

// src/utils/entity.utils.ts
async function expandRNSCore(componentAddress, state, network) {
  var _a, _b;
  try {
    const componentDetailsResponse = await state.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: {
        addresses: [componentAddress],
        opt_ins: {
          explicit_metadata: ["*"]
          // Request all metadata
        }
      }
    });
    const componentDetails = (_a = componentDetailsResponse.items[0]) == null ? void 0 : _a.details;
    if (!componentDetails || !componentDetails.state) {
      throw new Error(`Failed to fetch component state for ${componentAddress}`);
    }
    const componentState = componentDetails.state;
    const domainResource = parseField(componentState, "domain_manager", parseResourceAddress) || "";
    const importDomainResource = parseField(componentState, "import_domain_manager", parseResourceAddress) || "";
    const adminBadgeResource = parseField(componentState, "admin_badge_manager", parseResourceAddress) || "";
    const configBadgeResource = parseField(componentState, "config_badge_manager", parseResourceAddress) || "";
    const registrarBadgeResource = parseField(componentState, "registrar_manager", parseResourceAddress) || "";
    const bondVaults = parseField(componentState, "bond_vaults", parseComponentAddress) || "";
    const domainRegistry = parseField(componentState, "domain_registry", parseComponentAddress) || "";
    const registrarStats = parseField(componentState, "registrar_stats", parseComponentAddress) || "";
    const registrarFeeVaults = parseField(componentState, "registrar_fee_vaults", parseComponentAddress) || "";
    const reservedDomainClaims = parseField(componentState, "reserved_domain_claims", parseComponentAddress) || "";
    const acceptedImportsUsed = parseField(componentState, "accepted_imports_used", parseComponentAddress) || "";
    const domainCounterKey = parseField(componentState, "domain_counter_key", (v) => ({ success: true, value: Number(v || 0) })) || 0;
    const registrarCounterKey = parseField(componentState, "registrar_counter_key", (v) => ({ success: true, value: Number(v || 0) })) || 0;
    const accountLocker = parseField(componentState, "account_locker", parseComponentAddress) || "";
    const dappDefinition = parseField(componentState, "dapp_definition", parseComponentAddress);
    const isRegistrationActive = (_b = parseField(componentState, "is_registration_active", parseBoolean)) != null ? _b : false;
    const priceLadder = {
      "1": "2250",
      "2": "240",
      "3": "120",
      "4": "40"
    };
    const subregistryConfig = {
      name: parseField(componentState, "subregistry_name", (v) => ({ success: true, value: String(v || "") })) || "",
      description: parseField(componentState, "subregistry_description", (v) => ({ success: true, value: String(v || "") })) || "",
      tags: parseField(componentState, "subregistry_tags", parseStringArray) || [],
      iconUrl: parseField(componentState, "subregistry_icon_url", (v) => ({ success: true, value: String(v || "") })) || ""
    };
    const acceptedPaymentResources = [];
    try {
      const bondVaultsKeys = await state.innerClient.keyValueStoreKeys({
        stateKeyValueStoreKeysRequest: {
          key_value_store_address: bondVaults
        }
      });
      if (bondVaultsKeys.items) {
        for (const item of bondVaultsKeys.items) {
          if (item.key.programmatic_json.kind === "Reference") {
            acceptedPaymentResources.push(item.key.programmatic_json.value);
          }
        }
      }
    } catch (e) {
      console.warn("[RNS SDK] Failed to fetch accepted payment resources:", e);
    }
    return {
      domainResource,
      importDomainResource,
      adminBadgeResource,
      configBadgeResource,
      registrarBadgeResource,
      bondVaults,
      domainRegistry,
      registrarStats,
      registrarFeeVaults,
      reservedDomainClaims,
      domainCounterKey,
      accountLocker,
      registrarCounterKey,
      acceptedImportsUsed,
      dappDefinition,
      isRegistrationActive,
      priceLadder,
      subregistryConfig,
      acceptedPaymentResources
    };
  } catch (error) {
    console.error("[RNS SDK] Failed to expand Radix Namespace component:", error);
    throw new Error(`Failed to auto-discover Radix Namespace resources: ${error instanceof Error ? error.message : String(error)}`);
  }
}
async function expandComponents(rnsCoreAddress, state, network) {
  if (!rnsCoreAddress) {
    throw new Error(`Radix Namespace component address not configured for network: ${network}`);
  }
  try {
    const expandedRnsCore = await expandRNSCore(rnsCoreAddress, state, network);
    return {
      rnsCore: {
        rootAddr: rnsCoreAddress,
        ...expandedRnsCore
      }
    };
  } catch (error) {
    console.error("[RNS SDK] Failed to expand Radix Namespace components:", error);
    throw error;
  }
}

// src/decorators/sdk.decorators.ts
function requireDependencies(mode) {
  return function(_target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args) {
      await this.fetchDependencies();
      this.checkInitialized();
      if (mode === "full" && !this.rdt) {
        throw new Error(
          "RNS SDK: RDT instance is required for this operation, but it wasn't provided within the constructor."
        );
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
function ProcessParameters(methodGuardMap) {
  return function(constructor) {
    return class extends constructor {
      constructor(...args) {
        super(...args);
        const methodNames = Object.getOwnPropertyNames(constructor.prototype);
        for (const methodName of methodNames) {
          if (methodName === "constructor") continue;
          const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, methodName);
          if (!descriptor) continue;
          if (typeof descriptor.value === "function") {
            const originalMethod = descriptor.value;
            descriptor.value = async function(...methodArgs) {
              if (methodArgs.length && typeof methodArgs[0] === "object") {
                const argObj = methodArgs[0];
                const validationErrors = [];
                const defaultMapping = methodGuardMap._default || {};
                const methodSpecificMapping = methodGuardMap[methodName] || {};
                const mergedMapping = { ...defaultMapping, ...methodSpecificMapping };
                for (const key in mergedMapping) {
                  const config2 = mergedMapping[key];
                  if (Object.prototype.hasOwnProperty.call(argObj, key)) {
                    if (config2.normalize) {
                      const normalizedValue = await config2.normalize(argObj[key], this);
                      argObj[key] = normalizedValue;
                    }
                    if (config2.validate) {
                      const result = await config2.validate(argObj[key], this);
                      if (!result.isValid && result.errors) {
                        validationErrors.push(...result.errors);
                      }
                    }
                  }
                }
                if (validationErrors.length > 0) {
                  return errorStack(validationErrors);
                }
              }
              return originalMethod.apply(this, methodArgs);
            };
            Object.defineProperty(constructor.prototype, methodName, descriptor);
          }
        }
      }
    };
  };
}

// src/utils/cache.utils.ts
function clearAllCaches() {
  clearResourceDetailsCache();
  clearAcceptedBondTokensCache();
}

// src/index.ts
var NamespaceSDK = class {
  constructor({ gateway, rdt, network = "mainnet" }) {
    this.utils = {
      validateDomain({ domain: domain2 }) {
        return validateDomain(domain2);
      },
      validateSubdomain({ subdomain: subdomain2 }) {
        return validateSubdomain(subdomain2);
      },
      validateAccountAddress: ({ accountAddress }) => {
        return validateAccountAddress(accountAddress, { network: this.network });
      },
      getRootFromSubdomain({ subdomain: subdomain2 }) {
        return deriveRootDomain(subdomain2);
      },
      isSubdomain(domainEntity) {
        const result = deriveDomainType(domainEntity);
        return result.isValid && result.type === "sub";
      },
      isRootDomain(domainEntity) {
        const result = deriveDomainType(domainEntity);
        return result.isValid && result.type === "root";
      },
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
      getCostBreakdown: async ({ domain: domain2, registrarId, paymentResource }) => {
        this.checkEntitiesLoaded();
        const registrarDetails = await requestRegistrarDetails({
          registrarId,
          sdkInstance: this
        });
        if (registrarDetails instanceof Error) {
          return retrievalError(errors_default.registration.generic({
            domain: domain2,
            verbose: `Failed to fetch registrar details: ${registrarDetails.message}`
          }));
        }
        const selectedPaymentResource = paymentResource || this.entities.rnsCore.acceptedPaymentResources[0];
        if (!selectedPaymentResource) {
          return retrievalError(errors_default.registration.generic({
            domain: domain2,
            verbose: "No accepted payment resources configured in Radix Namespace"
          }));
        }
        const costBreakdown = getCostBreakdown(
          domain2,
          this.entities.rnsCore.priceLadder,
          registrarDetails.fee_percentage,
          registrarId,
          registrarDetails.name,
          selectedPaymentResource
        );
        return retrievalResponse(costBreakdown);
      },
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
      getAcceptedBondTokens: async () => {
        this.checkEntitiesLoaded();
        const acceptedResources = this.entities.rnsCore.acceptedPaymentResources;
        if (!acceptedResources || acceptedResources.length === 0) {
          return retrievalResponse([]);
        }
        const tokens = await getAcceptedBondTokensWithMetadata(
          acceptedResources,
          { sdkInstance: this }
        );
        return retrievalResponse(tokens);
      },
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
      getAccountBondBalances: async ({ accountAddress }) => {
        this.checkEntitiesLoaded();
        const acceptedResources = this.entities.rnsCore.acceptedPaymentResources;
        if (!acceptedResources || acceptedResources.length === 0) {
          return retrievalError(errors_default.balance.noAcceptedResources({
            verbose: "No accepted payment resources configured in Radix Namespace"
          }));
        }
        const result = await getAccountBondBalances(
          accountAddress,
          acceptedResources,
          { sdkInstance: this }
        );
        return retrievalResponse(result);
      },
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
      checkAccountBondAffordability: async ({ accountAddress, requiredAmount }) => {
        this.checkEntitiesLoaded();
        const acceptedResources = this.entities.rnsCore.acceptedPaymentResources;
        if (!acceptedResources || acceptedResources.length === 0) {
          return retrievalError(errors_default.balance.noAcceptedResources({
            verbose: "No accepted payment resources configured in Radix Namespace"
          }));
        }
        const balancesResult = await getAccountBondBalances(
          accountAddress,
          acceptedResources,
          { sdkInstance: this }
        );
        const result = checkAccountBondAffordability(balancesResult.balances, requiredAmount);
        return retrievalResponse(result);
      }
    };
    this.network = network;
    this.rdt = rdt;
    this.initGateway({ gateway });
  }
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
  async fetchDependencies() {
    await this.dAppEntities();
  }
  initGateway({ gateway, gatewayEndpoint }) {
    const gatewayInstance = gateway != null ? gateway : import_babylon_gateway_api_sdk.GatewayApiClient.initialize({
      basePath: gatewayEndpoint != null ? gatewayEndpoint : getBasePath(this.network),
      applicationName: "The Radix Name Service"
    });
    const { status, state, transaction, stream } = gatewayInstance;
    this.state = state;
    this.status = status;
    this.transaction = transaction;
    this.stream = stream;
  }
  checkInitialized() {
    if (!this.state || !this.status || !this.transaction || !this.stream) {
      throw new Error("RNS SDK: The RNS SDK is not fully initialized.");
    }
  }
  checkEntitiesLoaded() {
    this.checkInitialized();
    if (!this.entities || !this.entities.rnsCore) {
      throw new Error("RNS SDK: Entities not loaded. Please call fetchDependencies() first.");
    }
  }
  async dAppEntities() {
    try {
      if (!this.entities) {
        const namespaceCoreAddress = entities_config_default[this.network].rnsCore;
        if (!namespaceCoreAddress) {
          throw new Error(`Radix Namespace component address not configured for network: ${this.network}`);
        }
        this.entities = await expandComponents(namespaceCoreAddress, this.state, this.network);
      }
      return this.entities;
    } catch (error) {
      throw new Error(`RNS SDK: Could not fetch RNS entities: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  async getDomainStatus({ domain: domain2 }) {
    const attributes = await requestDomainStatus(domain2, { sdkInstance: this });
    if (attributes instanceof Error)
      return retrievalError(errors_default.domain.generic({ domain: domain2, verbose: attributes.message }));
    return retrievalResponse(attributes);
  }
  async getDomainDetails({ domain: domain2 }) {
    const details = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (details instanceof Error)
      return retrievalError(errors_default.domain.generic({ domain: domain2, verbose: details.message }));
    if (!details)
      return retrievalError(errors_default.domain.empty({ domain: domain2 }));
    const authCheckProps = generateAuthCheckProps({ domain: domain2, details });
    const isAuthentic = await this.checkAuthenticity(authCheckProps);
    if (!isAuthentic)
      return retrievalError(errors_default.account.authenticityMismatch({ domain: authCheckProps.domain }));
    return retrievalResponse(details);
  }
  async getRecords({ domain: domain2, pagination }) {
    const details = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (details instanceof Error)
      return retrievalError(errors_default.domain.generic({ domain: domain2, verbose: details.message }));
    if (!details)
      return retrievalError(errors_default.domain.empty({ domain: domain2 }));
    const authCheckProps = generateAuthCheckProps({ domain: domain2, details });
    const isAuthentic = await this.checkAuthenticity(authCheckProps);
    if (!isAuthentic)
      return retrievalError(errors_default.account.authenticityMismatch({ domain: authCheckProps.domain }));
    const records = await requestRecords(domain2, { sdkInstance: this }, pagination);
    if (records instanceof Error)
      return retrievalError(errors_default.record.retrieval({ domain: domain2, verbose: records.message }));
    return retrievalResponse(records);
  }
  async resolveRecord({ domain: domain2, docket }) {
    const details = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (details instanceof Error)
      return retrievalError(errors_default.account.authenticityMismatch({ domain: domain2, verbose: details.message }));
    const authCheckProps = generateAuthCheckProps({ domain: domain2, details });
    const isAuthentic = await this.checkAuthenticity(authCheckProps);
    if (!isAuthentic)
      return retrievalError(errors_default.account.authenticityMismatch({ domain: authCheckProps.domain }));
    const record2 = await resolveRecord(domain2, { context: docket.context, directive: docket.directive }, { sdkInstance: this });
    if (record2 instanceof Error)
      return retrievalError(errors_default.record.retrieval({ domain: domain2, verbose: record2.message }));
    return retrievalResponse(record2);
  }
  async getAccountDomains({ accountAddress, pagination }) {
    const accountDomains = await requestAccountDomains(accountAddress, { sdkInstance: this }, pagination);
    if (accountDomains instanceof Error)
      return retrievalError(errors_default.account.retrieval({ accountAddress, verbose: accountDomains.message }));
    return retrievalResponse(accountDomains);
  }
  async getAccountImportDomains({ accountAddress, pagination }) {
    const importDomains = await requestAccountImportDomains({ accountAddress, sdkInstance: this, pagination });
    if (importDomains instanceof Error)
      return retrievalError(errors_default.account.retrieval({ accountAddress, verbose: importDomains.message }));
    return retrievalResponse(importDomains);
  }
  async checkAuthenticity({ domain: domain2, accountAddress }) {
    var _a, _b;
    const accountDomainsResponse = await requestAccountDomains(accountAddress, { sdkInstance: this });
    if (accountDomainsResponse instanceof Error)
      return retrievalError(errors_default.account.retrieval({ accountAddress, verbose: accountDomainsResponse.message }));
    const isAuthentic = ((_b = (_a = accountDomainsResponse.domains) == null ? void 0 : _a.find((interestDomain) => interestDomain.name === domain2)) == null ? void 0 : _b.current_activated_owner) === accountAddress;
    return retrievalResponse({ isAuthentic });
  }
  async getAccountSettings({ accountAddress }) {
    const accountSettings2 = await requestAccountSettings(accountAddress, { sdkInstance: this });
    if (accountSettings2 instanceof Error)
      return retrievalError(errors_default.account.retrieval({ accountAddress, verbose: accountSettings2.message }));
    return retrievalResponse(accountSettings2);
  }
  async getSubdomains({ domain: domain2, pagination }) {
    const subdomains = await getSubdomains(domain2, { sdkInstance: this }, pagination);
    if (subdomains instanceof Error)
      return retrievalError(errors_default.domain.generic({ domain: domain2, verbose: subdomains.message }));
    return retrievalResponse(subdomains);
  }
  async registerDomain({ domain: domain2, accountAddress, paymentResource, registrarId, callbacks }) {
    const attributes = await requestDomainStatus(domain2, { sdkInstance: this });
    if (attributes instanceof Error)
      return transactionError(errors_default.registration.generic({ domain: domain2, verbose: attributes.message }));
    if (attributes.status === "taken")
      return transactionError(errors_default.domain.unavailable({ domain: domain2 }));
    if (attributes.status === "reserved")
      return transactionError(errors_default.domain.unavailable({ domain: domain2, verbose: `Domain is reserved for a specific claimant.` }));
    return dispatchDomainRegistration({
      sdkInstance: this,
      domain: domain2,
      rdt: this.rdt,
      accountAddress,
      paymentResource,
      registrarId,
      callbacks
    });
  }
  async claimReservedDomain({ domain: domain2, accountAddress, paymentResource, callbacks }) {
    return dispatchClaimReservedDomain({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      accountAddress,
      paymentResource,
      callbacks
    });
  }
  async getReservedDomains({ accountAddress }) {
    const reserved = await requestReservedDomains(accountAddress, { sdkInstance: this });
    if (reserved instanceof Error)
      return retrievalError(errors_default.account.retrieval({ accountAddress, verbose: reserved.message }));
    return retrievalResponse(reserved);
  }
  async claimFromLocker({ accountAddress, nftIds, callbacks }) {
    return dispatchClaimFromLocker({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      nftIds,
      callbacks
    });
  }
  async activateDomain({ domain: domain2, accountAddress, callbacks }) {
    const domainDetails = await requestDomainDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchDomainActivation({
      sdkInstance: this,
      domainDetails,
      accountAddress,
      rdt: this.rdt,
      callbacks
    });
  }
  async createSubdomain({ subdomain: subdomain2, accountAddress, callbacks }) {
    const rootDomainDetails = await requestDomainDetails(deriveRootDomain(subdomain2), { sdkInstance: this });
    if (rootDomainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: rootDomainDetails.name, verbose: rootDomainDetails.message }));
    if (!rootDomainDetails)
      return transactionError(errors_default.domain.empty({ domain: rootDomainDetails.name }));
    return dispatchSubdomainCreation({
      sdkInstance: this,
      subdomain: subdomain2,
      rootDomainDetails,
      rdt: this.rdt,
      accountAddress,
      callbacks
    });
  }
  async deleteSubdomain({ subdomain: subdomain2, accountAddress, callbacks }) {
    const rootDomainDetails = await requestDomainDetails(deriveRootDomain(subdomain2), { sdkInstance: this });
    if (rootDomainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: rootDomainDetails.name, verbose: rootDomainDetails.message }));
    if (!rootDomainDetails)
      return transactionError(errors_default.domain.empty({ domain: rootDomainDetails.name }));
    return dispatchSubdomainDeletion({
      sdkInstance: this,
      subdomain: subdomain2,
      rootDomainDetails,
      rdt: this.rdt,
      accountAddress,
      callbacks
    });
  }
  async createRecord({ domain: domain2, accountAddress, docket, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchRecordCreation({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      docket,
      callbacks
    });
  }
  async amendRecord({ domain: domain2, accountAddress, docket, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchRecordAmendment({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      docket,
      callbacks
    });
  }
  async deleteRecord({ domain: domain2, accountAddress, docket, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchRecordDeletion({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      docket,
      callbacks
    });
  }
  async deleteRecordById({ domain: domain2, accountAddress, recordId, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchRecordDeletionById({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      recordId,
      callbacks
    });
  }
  async createRecords({ domain: domain2, accountAddress, records, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchCreateRecords({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      records,
      callbacks
    });
  }
  async deleteRecords({ domain: domain2, accountAddress, records, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchDeleteRecords({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      records,
      callbacks
    });
  }
  async deleteContextRecords({ domain: domain2, accountAddress, context, callbacks }) {
    const domainDetails = await requestDomainEntityDetails(domain2, { sdkInstance: this });
    if (domainDetails instanceof Error)
      return transactionError(errors_default.domain.generic({ domain: domain2, verbose: domainDetails.message }));
    if (!domainDetails)
      return transactionError(errors_default.domain.empty({ domain: domain2 }));
    return dispatchDeleteContextRecords({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      domainDetails,
      context,
      callbacks
    });
  }
  async transferDomain({ domain: domain2, fromAddress, destinationAddress, preferences, callbacks }) {
    return dispatchDomainTransfer({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      fromAddress,
      destinationAddress,
      preferences,
      callbacks
    });
  }
  async unbondDomain({ domain: domain2, accountAddress, preserveSubregistryData, callbacks }) {
    return dispatchDomainUnbond({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      accountAddress,
      preserveSubregistryData,
      callbacks
    });
  }
  async rebondDomain({ domain: domain2, accountAddress, newPaymentResource, callbacks }) {
    return dispatchDomainRebond({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      accountAddress,
      newPaymentResource,
      callbacks
    });
  }
  async importAcceptedDomain({ domain: domain2, accountAddress, paymentResource, callbacks }) {
    return dispatchImportDomain({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      accountAddress,
      paymentResource,
      callbacks
    });
  }
  async updateSubregistryIcon({ domain: domain2, iconUrl, accountAddress, callbacks }) {
    return dispatchUpdateSubregistryIcon({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      iconUrl,
      accountAddress,
      callbacks
    });
  }
  async updateSubregistryDappDefinition({ domain: domain2, dappDefinitionAddress, accountAddress, callbacks }) {
    return dispatchUpdateSubregistryDappDefinition({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      dappDefinitionAddress,
      accountAddress,
      callbacks
    });
  }
  async updateDomainResource({ domain: domain2, newDomainResourceAddress, accountAddress, callbacks }) {
    return dispatchUpdateDomainResource({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      newDomainResourceAddress,
      accountAddress,
      callbacks
    });
  }
  async replaceSubregistry({ domain: domain2, accountAddress, callbacks }) {
    return dispatchReplaceSubregistry({
      sdkInstance: this,
      rdt: this.rdt,
      domain: domain2,
      accountAddress,
      callbacks
    });
  }
  async updateAccountSettings({ accountAddress, primaryDomain, enableDiscovery, callbacks }) {
    return dispatchUpdateAccountSettings({
      sdkInstance: this,
      rdt: this.rdt,
      accountAddress,
      primaryDomain,
      enableDiscovery,
      callbacks
    });
  }
  async resolveAccountDomain({ accountAddress }) {
    const settings = await this.getAccountSettings({ accountAddress });
    if (settings.errors)
      return settings;
    if (!settings.data)
      return retrievalResponse(null);
    if (!settings.data.discoveryEnabled)
      return retrievalResponse(null);
    if (!settings.data.isAuthentic)
      return retrievalResponse(null);
    return retrievalResponse(settings.data.primaryDomain);
  }
  async registerAsRegistrar({ name, iconUrl, websiteUrl, feePercentage, accountAddress, callbacks }) {
    return dispatchRegistrarRegistration({
      sdkInstance: this,
      name,
      iconUrl,
      websiteUrl,
      feePercentage,
      accountAddress,
      rdt: this.rdt,
      callbacks
    });
  }
  async updateRegistrar({ registrarId, accountAddress, name, iconUrl, websiteUrl, feePercentage, callbacks }) {
    return dispatchRegistrarUpdate({
      sdkInstance: this,
      registrarId,
      accountAddress,
      name,
      iconUrl,
      websiteUrl,
      feePercentage,
      rdt: this.rdt,
      callbacks
    });
  }
  async burnRegistrarBadge({ registrarId, accountAddress, callbacks }) {
    return dispatchRegistrarBurn({
      sdkInstance: this,
      registrarId,
      accountAddress,
      rdt: this.rdt,
      callbacks
    });
  }
  async getAllRegistrars({ pagination } = {}) {
    const result = await requestAllRegistrars({ sdkInstance: this }, pagination);
    if (result instanceof Error)
      return retrievalError({
        code: "GATEWAY_ERROR",
        error: "Failed to fetch registrars",
        verbose: result.message
      });
    return retrievalResponse(result);
  }
  async getRegistrarDetails({ registrarId }) {
    const details = await requestRegistrarDetails({
      registrarId,
      sdkInstance: this
    });
    if (details instanceof Error)
      return retrievalError({
        code: details.message.includes("not found") ? "NOT_FOUND" : "GATEWAY_ERROR",
        error: "Failed to fetch registrar details",
        verbose: `Registrar ID: ${registrarId}. ${details.message}`
      });
    return retrievalResponse(details);
  }
  async getRegistrarStats({ registrarId }) {
    const stats = await requestRegistrarStats({
      registrarId,
      sdkInstance: this
    });
    if (stats instanceof Error)
      return retrievalError({
        code: "GATEWAY_ERROR",
        error: "Failed to fetch registrar stats",
        verbose: `Registrar ID: ${registrarId}. ${stats.message}`
      });
    return retrievalResponse(stats);
  }
  async getRegistrarFeeBalances({ registrarId, pagination }) {
    const feeBalances = await requestRegistrarFeeBalances(registrarId, { sdkInstance: this }, pagination);
    if (feeBalances instanceof Error)
      return retrievalError(errors_default.registrar.feeBalances({ registrarId, verbose: feeBalances.message }));
    return retrievalResponse(feeBalances);
  }
  async withdrawRegistrarFees({ registrarId, accountAddress, resourceAddress, callbacks }) {
    return dispatchRegistrarWithdrawFees({
      sdkInstance: this,
      registrarId,
      resourceAddress,
      accountAddress,
      rdt: this.rdt,
      callbacks
    });
  }
};
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getDomainStatus", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getDomainDetails", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getRecords", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "resolveRecord", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getAccountDomains", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getAccountImportDomains", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "checkAuthenticity", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getAccountSettings", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getSubdomains", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "registerDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "claimReservedDomain", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getReservedDomains", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "claimFromLocker", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "activateDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "createSubdomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "deleteSubdomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "createRecord", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "amendRecord", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "deleteRecord", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "deleteRecordById", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "createRecords", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "deleteRecords", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "deleteContextRecords", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "transferDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "unbondDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "rebondDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "importAcceptedDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "updateSubregistryIcon", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "updateSubregistryDappDefinition", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "updateDomainResource", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "replaceSubregistry", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "updateAccountSettings", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "resolveAccountDomain", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "registerAsRegistrar", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "updateRegistrar", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "burnRegistrarBadge", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getAllRegistrars", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getRegistrarDetails", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getRegistrarStats", 1);
__decorateClass([
  requireDependencies("read-only")
], NamespaceSDK.prototype, "getRegistrarFeeBalances", 1);
__decorateClass([
  requireDependencies("full")
], NamespaceSDK.prototype, "withdrawRegistrarFees", 1);
NamespaceSDK = __decorateClass([
  ProcessParameters(parameterProcessMap)
], NamespaceSDK);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clearAcceptedBondTokensCache,
  clearAllCaches,
  clearResourceDetailsCache
});
//# sourceMappingURL=index.cjs.map