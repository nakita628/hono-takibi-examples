import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationAdminApiKeysKeyIdRoute,
  deleteOrganizationExternalKeysExternalKeyIdRoute,
  deleteOrganizationExternalStorageExternalStorageIdRoute,
  deleteOrganizationProjectsProjectIdSpendLimitRoute,
  deleteOrganizationSpendLimitRoute,
  deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  getOrganizationAdminApiKeysKeyIdRoute,
  getOrganizationAdminApiKeysRoute,
  getOrganizationExternalKeysExternalKeyIdRoute,
  getOrganizationExternalKeysRoute,
  getOrganizationExternalStorageExternalStorageIdRoute,
  getOrganizationExternalStorageRoute,
  getOrganizationProjectsProjectIdServiceTierSettingsRoute,
  getOrganizationProjectsProjectIdSpendLimitRoute,
  getOrganizationSpendLimitRoute,
  getOrganizationUsageDecisionsRoute,
  getOrganizationWorkloadIdentityProvidersRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  postOrganizationAdminApiKeysRoute,
  postOrganizationExternalKeysExternalKeyIdValidateRoute,
  postOrganizationExternalKeysRoute,
  postOrganizationExternalStorageExternalStorageIdValidateRoute,
  postOrganizationExternalStorageRoute,
  postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRoute,
  postOrganizationProjectsProjectIdServiceTierSettingsRoute,
  postOrganizationProjectsProjectIdSpendLimitRoute,
  postOrganizationSpendLimitRoute,
  postOrganizationWorkloadIdentityProvidersRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getOrganizationAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationAdminApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationAdminApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalKeysExternalKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationExternalKeysExternalKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalKeysExternalKeyIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationWorkloadIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationWorkloadIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationUsageDecisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalStorageExternalStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationExternalStorageExternalStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalStorageExternalStorageIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdServiceTierSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceTierSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
