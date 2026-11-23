import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  deletePoliciesAdminConsentRequestPolicyRoute,
  deletePoliciesAuthenticationFlowsPolicyRoute,
  deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  deletePoliciesAuthenticationMethodsPolicyRoute,
  deletePoliciesAuthorizationPolicyRoute,
  deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  deletePoliciesCrossTenantAccessPolicyDefaultRoute,
  deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  deletePoliciesCrossTenantAccessPolicyRoute,
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRoute,
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
  deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
  deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute,
  deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
  deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute,
  deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
  deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
  deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  getPoliciesActivityBasedTimeoutPoliciesCountRoute,
  getPoliciesActivityBasedTimeoutPoliciesRoute,
  getPoliciesAdminConsentRequestPolicyRoute,
  getPoliciesAuthenticationFlowsPolicyRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
  getPoliciesAuthenticationMethodsPolicyRoute,
  getPoliciesAuthorizationPolicyRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  getPoliciesClaimsMappingPoliciesCountRoute,
  getPoliciesClaimsMappingPoliciesRoute,
  getPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getPoliciesConditionalAccessPoliciesCountRoute,
  getPoliciesConditionalAccessPoliciesRoute,
  getPoliciesCrossTenantAccessPolicyDefaultRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCountRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  getPoliciesCrossTenantAccessPolicyPartnersRoute,
  getPoliciesCrossTenantAccessPolicyRoute,
  getPoliciesFeatureRolloutPoliciesCountRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToCountRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  getPoliciesFeatureRolloutPoliciesRoute,
  getPoliciesHomeRealmDiscoveryPoliciesCountRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesRoute,
  getPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  getPoliciesPermissionGrantPoliciesCountRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute,
  getPoliciesPermissionGrantPoliciesRoute,
  getPoliciesRoleManagementPoliciesCountRoute,
  getPoliciesRoleManagementPoliciesRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
  getPoliciesRoleManagementPolicyAssignmentsCountRoute,
  getPoliciesRoleManagementPolicyAssignmentsRoute,
  getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRoute,
  getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
  getPoliciesRoute,
  getPoliciesTokenIssuancePoliciesCountRoute,
  getPoliciesTokenIssuancePoliciesRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  getPoliciesTokenLifetimePoliciesCountRoute,
  getPoliciesTokenLifetimePoliciesRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  patchPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  patchPoliciesAdminConsentRequestPolicyRoute,
  patchPoliciesAuthenticationFlowsPolicyRoute,
  patchPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  patchPoliciesAuthenticationMethodsPolicyRoute,
  patchPoliciesAuthorizationPolicyRoute,
  patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  patchPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  patchPoliciesCrossTenantAccessPolicyDefaultRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  patchPoliciesCrossTenantAccessPolicyRoute,
  patchPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  patchPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
  patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
  patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute,
  patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
  patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute,
  patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
  patchPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
  patchPoliciesRoute,
  patchPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  patchPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  postPoliciesActivityBasedTimeoutPoliciesRoute,
  postPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
  postPoliciesClaimsMappingPoliciesRoute,
  postPoliciesConditionalAccessPoliciesRoute,
  postPoliciesCrossTenantAccessPolicyDefaultMicrosoftGraphResetToSystemDefaultRoute,
  postPoliciesCrossTenantAccessPolicyPartnersRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetByIdsRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphValidatePropertiesRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute,
  postPoliciesFeatureRolloutPoliciesRoute,
  postPoliciesHomeRealmDiscoveryPoliciesRoute,
  postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute,
  postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute,
  postPoliciesPermissionGrantPoliciesRoute,
  postPoliciesRoleManagementPoliciesRoute,
  postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute,
  postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute,
  postPoliciesRoleManagementPolicyAssignmentsRoute,
  postPoliciesTokenIssuancePoliciesRoute,
  postPoliciesTokenLifetimePoliciesRoute,
} from '../routes'

export const getPoliciesRouteHandler: RouteHandler<typeof getPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesRouteHandler: RouteHandler<typeof patchPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesActivityBasedTimeoutPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesActivityBasedTimeoutPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAdminConsentRequestPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAdminConsentRequestPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAdminConsentRequestPolicyRouteHandler: RouteHandler<
  typeof getPoliciesAdminConsentRequestPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAdminConsentRequestPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesAdminConsentRequestPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAuthenticationFlowsPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationFlowsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationFlowsPolicyRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationFlowsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAuthenticationFlowsPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesAuthenticationFlowsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAuthenticationMethodsPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationMethodsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationMethodsPolicyRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationMethodsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAuthenticationMethodsPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesAuthenticationMethodsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRouteHandler: RouteHandler<
  typeof postPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRouteHandler: RouteHandler<
  typeof patchPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAuthorizationPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAuthorizationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthorizationPolicyRouteHandler: RouteHandler<
  typeof getPoliciesAuthorizationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAuthorizationPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesAuthorizationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesClaimsMappingPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesClaimsMappingPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesConditionalAccessPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesConditionalAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesConditionalAccessPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesConditionalAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesConditionalAccessPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesConditionalAccessPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyDefaultRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyDefaultRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyDefaultRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyDefaultMicrosoftGraphResetToSystemDefaultRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyDefaultMicrosoftGraphResetToSystemDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyPartnersRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyPartnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCountRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesFeatureRolloutPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesFeatureRolloutPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRouteHandler: RouteHandler<
  typeof postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRouteHandler: RouteHandler<
  typeof postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetAvailableExtensionPropertiesRouteHandler: RouteHandler<
  typeof postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetAvailableExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetByIdsRouteHandler: RouteHandler<
  typeof postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphValidatePropertiesRouteHandler: RouteHandler<
  typeof postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphValidatePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesHomeRealmDiscoveryPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesHomeRealmDiscoveryPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesIdentitySecurityDefaultsEnforcementPolicyRouteHandler: RouteHandler<
  typeof getPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesIdentitySecurityDefaultsEnforcementPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesPermissionGrantPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesPermissionGrantPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRouteHandler: RouteHandler<
  typeof postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRouteHandler: RouteHandler<
  typeof postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesRoleManagementPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesRoleManagementPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRouteHandler: RouteHandler<
  typeof postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRouteHandler: RouteHandler<
  typeof postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPolicyAssignmentsRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPolicyAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesRoleManagementPolicyAssignmentsRouteHandler: RouteHandler<
  typeof postPoliciesRoleManagementPolicyAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPolicyAssignmentsCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPolicyAssignmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRouteHandler: RouteHandler<
  typeof patchPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesTokenIssuancePoliciesRouteHandler: RouteHandler<
  typeof postPoliciesTokenIssuancePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesTokenLifetimePoliciesRouteHandler: RouteHandler<
  typeof postPoliciesTokenLifetimePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
