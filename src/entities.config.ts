import { EntitiesConfigT } from "./common/entities.types";

/**
 * Radix Namespace Configuration
 * 
 * This config only specifies the main Radix Namespace component address.
 * All resources (domains, badges, etc.) are auto-discovered from the component state
 * upon SDK initialization via the Gateway API.
 * See NamespaceCoreExpansionI interface for full list of available fields.
 */
const config: EntitiesConfigT = {

    stokenet: {
        rnsCore: "component_tdx_2_1cq3hzzgwypv3494aprg76c3pvxwpxmwalm7ld257pudj8urzc6l5ap"
    },

    mainnet: {
        rnsCore: "component_rdx1cz2y8386y6hkxm06c48cyjqf7vlx6n8jeqx4dezr6vfavhk2j3lr8c"
    }

};

export default config;