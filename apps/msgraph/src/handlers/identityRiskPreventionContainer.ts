import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityRiskPreventionFraudProtectionProvidersFraudProtectionProviderIdRoute,
  deleteIdentityRiskPreventionRoute,
  deleteIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdRoute,
  deleteIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdRoute,
  getIdentityRiskPreventionFraudProtectionProvidersCountRoute,
  getIdentityRiskPreventionFraudProtectionProvidersFraudProtectionProviderIdRoute,
  getIdentityRiskPreventionFraudProtectionProvidersRoute,
  getIdentityRiskPreventionRoute,
  getIdentityRiskPreventionWebApplicationFirewallProvidersCountRoute,
  getIdentityRiskPreventionWebApplicationFirewallProvidersRoute,
  getIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdRoute,
  getIdentityRiskPreventionWebApplicationFirewallVerificationsCountRoute,
  getIdentityRiskPreventionWebApplicationFirewallVerificationsRoute,
  getIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdProviderRoute,
  getIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdRoute,
  patchIdentityRiskPreventionFraudProtectionProvidersFraudProtectionProviderIdRoute,
  patchIdentityRiskPreventionRoute,
  patchIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdRoute,
  patchIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdRoute,
  postIdentityRiskPreventionFraudProtectionProvidersRoute,
  postIdentityRiskPreventionWebApplicationFirewallProvidersRoute,
  postIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdVerifyRoute,
  postIdentityRiskPreventionWebApplicationFirewallVerificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityRiskPreventionContainerHandler = app
  .openapi(getIdentityRiskPreventionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityRiskPreventionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityRiskPreventionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityRiskPreventionFraudProtectionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityRiskPreventionFraudProtectionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityRiskPreventionFraudProtectionProvidersFraudProtectionProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchIdentityRiskPreventionFraudProtectionProvidersFraudProtectionProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityRiskPreventionFraudProtectionProvidersFraudProtectionProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityRiskPreventionFraudProtectionProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityRiskPreventionWebApplicationFirewallProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityRiskPreventionWebApplicationFirewallProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityRiskPreventionWebApplicationFirewallProvidersWebApplicationFirewallProviderIdVerifyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityRiskPreventionWebApplicationFirewallProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityRiskPreventionWebApplicationFirewallVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityRiskPreventionWebApplicationFirewallVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityRiskPreventionWebApplicationFirewallVerificationsWebApplicationFirewallVerificationModelIdProviderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityRiskPreventionWebApplicationFirewallVerificationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
