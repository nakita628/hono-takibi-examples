import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPoliciesActivityBasedTimeoutPoliciesCountRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute,
  getPoliciesClaimsMappingPoliciesCountRoute,
  getPoliciesConditionalAccessPoliciesCountRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCountRoute,
  getPoliciesFeatureRolloutPoliciesCountRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToCountRoute,
  getPoliciesHomeRealmDiscoveryPoliciesCountRoute,
  getPoliciesPermissionGrantPoliciesCountRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRoute,
  getPoliciesRoleManagementPoliciesCountRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRoute,
  getPoliciesRoleManagementPolicyAssignmentsCountRoute,
  getPoliciesTokenIssuancePoliciesCountRoute,
  getPoliciesTokenLifetimePoliciesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getPoliciesActivityBasedTimeoutPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesClaimsMappingPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesConditionalAccessPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesFeatureRolloutPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesHomeRealmDiscoveryPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPermissionGrantPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesRoleManagementPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesRoleManagementPolicyAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenIssuancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenLifetimePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
