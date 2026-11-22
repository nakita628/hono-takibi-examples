import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
  deletePoliciesCrossTenantAccessPolicyDefaultRoute,
  deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
  deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
  deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
  deletePoliciesCrossTenantAccessPolicyRoute,
  deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
  deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
  deletePoliciesCrossTenantAccessPolicyTemplatesRoute,
  getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesCountRoute,
  getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
  getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute,
  getPoliciesCrossTenantAccessPolicyDefaultRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCountRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesCountRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
  getPoliciesCrossTenantAccessPolicyPartnersRoute,
  getPoliciesCrossTenantAccessPolicyRoute,
  getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
  getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
  getPoliciesCrossTenantAccessPolicyTemplatesRoute,
  patchPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
  patchPoliciesCrossTenantAccessPolicyDefaultRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
  patchPoliciesCrossTenantAccessPolicyRoute,
  patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
  patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
  patchPoliciesCrossTenantAccessPolicyTemplatesRoute,
  postPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute,
  postPoliciesCrossTenantAccessPolicyDefaultResetToSystemDefaultRoute,
  postPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute,
  postPoliciesCrossTenantAccessPolicyPartnersRoute,
  postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationResetToDefaultSettingsRoute,
  postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationResetToDefaultSettingsRoute,
  putPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesCrossTenantAccessPolicyHandler = app
  .openapi(getPoliciesCrossTenantAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesCrossTenantAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesCrossTenantAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesCrossTenantAccessPolicyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesCrossTenantAccessPolicyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesCrossTenantAccessPolicyDefaultResetToSystemDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesCrossTenantAccessPolicyPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesCrossTenantAccessPolicyPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesCrossTenantAccessPolicyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesCrossTenantAccessPolicyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationResetToDefaultSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationResetToDefaultSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
