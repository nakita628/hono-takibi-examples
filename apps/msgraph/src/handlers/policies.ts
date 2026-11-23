import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  deletePoliciesAdminConsentRequestPolicyRoute,
  deletePoliciesAppManagementPoliciesAppManagementPolicyIdRoute,
  deletePoliciesAuthenticationFlowsPolicyRoute,
  deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  deletePoliciesAuthenticationMethodsPolicyRoute,
  deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  deletePoliciesAuthorizationPolicyRoute,
  deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
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
  deletePoliciesDefaultAppManagementPolicyRoute,
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRoute,
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute,
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  deletePoliciesFederatedTokenValidationPolicyRoute,
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
  getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToCountRoute,
  getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToRoute,
  getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  getPoliciesActivityBasedTimeoutPoliciesCountRoute,
  getPoliciesActivityBasedTimeoutPoliciesRoute,
  getPoliciesAdminConsentRequestPolicyRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToCountRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdRoute,
  getPoliciesAppManagementPoliciesCountRoute,
  getPoliciesAppManagementPoliciesRoute,
  getPoliciesAuthenticationFlowsPolicyRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
  getPoliciesAuthenticationMethodsPolicyRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRoute,
  getPoliciesAuthenticationStrengthPoliciesCountRoute,
  getPoliciesAuthenticationStrengthPoliciesRoute,
  getPoliciesAuthorizationPolicyRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToCountRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  getPoliciesClaimsMappingPoliciesCountRoute,
  getPoliciesClaimsMappingPoliciesRoute,
  getPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getPoliciesConditionalAccessPoliciesCountRoute,
  getPoliciesConditionalAccessPoliciesRoute,
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
  getPoliciesDefaultAppManagementPolicyRoute,
  getPoliciesDeviceRegistrationPolicyRoute,
  getPoliciesFeatureRolloutPoliciesCountRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToCountRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  getPoliciesFeatureRolloutPoliciesRoute,
  getPoliciesFederatedTokenValidationPolicyRoute,
  getPoliciesHomeRealmDiscoveryPoliciesCountRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToCountRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesRoute,
  getPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  getPoliciesOwnerlessGroupPolicyRoute,
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
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToCountRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  getPoliciesTokenLifetimePoliciesCountRoute,
  getPoliciesTokenLifetimePoliciesRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToCountRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  patchPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  patchPoliciesAdminConsentRequestPolicyRoute,
  patchPoliciesAppManagementPoliciesAppManagementPolicyIdRoute,
  patchPoliciesAuthenticationFlowsPolicyRoute,
  patchPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  patchPoliciesAuthenticationMethodsPolicyRoute,
  patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  patchPoliciesAuthorizationPolicyRoute,
  patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  patchPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  patchPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute,
  patchPoliciesCrossTenantAccessPolicyDefaultRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute,
  patchPoliciesCrossTenantAccessPolicyRoute,
  patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute,
  patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute,
  patchPoliciesCrossTenantAccessPolicyTemplatesRoute,
  patchPoliciesDefaultAppManagementPolicyRoute,
  patchPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  patchPoliciesFederatedTokenValidationPolicyRoute,
  patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  patchPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  patchPoliciesOwnerlessGroupPolicyRoute,
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
  postPoliciesAppManagementPoliciesRoute,
  postPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
  postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
  postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRoute,
  postPoliciesAuthenticationStrengthPoliciesRoute,
  postPoliciesClaimsMappingPoliciesRoute,
  postPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRestoreRoute,
  postPoliciesConditionalAccessPoliciesRoute,
  postPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute,
  postPoliciesCrossTenantAccessPolicyDefaultResetToSystemDefaultRoute,
  postPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute,
  postPoliciesCrossTenantAccessPolicyPartnersRoute,
  postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationResetToDefaultSettingsRoute,
  postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationResetToDefaultSettingsRoute,
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
  putPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute,
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

export const deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesActivityBasedTimeoutPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesActivityBasedTimeoutPoliciesCountRoute
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

export const deletePoliciesAdminConsentRequestPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAdminConsentRequestPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAppManagementPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesAppManagementPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesAppManagementPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesAppManagementPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAppManagementPoliciesAppManagementPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesAppManagementPoliciesAppManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAppManagementPoliciesAppManagementPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesAppManagementPoliciesAppManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAppManagementPoliciesAppManagementPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesAppManagementPoliciesAppManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAppManagementPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesAppManagementPoliciesCountRoute
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

export const deletePoliciesAuthenticationFlowsPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationFlowsPolicyRoute
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

export const deletePoliciesAuthenticationMethodsPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationMethodsPolicyRoute
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

export const deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesAuthenticationStrengthPoliciesRouteHandler: RouteHandler<
  typeof postPoliciesAuthenticationStrengthPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRouteHandler: RouteHandler<
  typeof patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRouteHandler: RouteHandler<
  typeof postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRouteHandler: RouteHandler<
  typeof patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRouteHandler: RouteHandler<
  typeof deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRouteHandler: RouteHandler<
  typeof postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesAuthenticationStrengthPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesAuthenticationStrengthPoliciesCountRoute
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

export const deletePoliciesAuthorizationPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesAuthorizationPolicyRoute
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

export const deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesClaimsMappingPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesClaimsMappingPoliciesCountRoute
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

export const deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRestoreRouteHandler: RouteHandler<
  typeof postPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesConditionalAccessPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesConditionalAccessPoliciesCountRoute
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

export const deletePoliciesCrossTenantAccessPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyRoute
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

export const deletePoliciesCrossTenantAccessPolicyDefaultRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesM365CapabilityBaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesCountRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyDefaultM365CapabilitiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyDefaultResetToSystemDefaultRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyDefaultResetToSystemDefaultRoute
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

export const deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRouteHandler: RouteHandler<
  typeof putPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdIdentitySynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesM365CapabilityBaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesCountRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdM365CapabilitiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdServiceProviderConstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyPartnersCountRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyPartnersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyTemplatesRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyTemplatesRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyTemplatesRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationResetToDefaultSettingsRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationIdentitySynchronizationResetToDefaultSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRouteHandler: RouteHandler<
  typeof getPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRouteHandler: RouteHandler<
  typeof patchPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRouteHandler: RouteHandler<
  typeof deletePoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationResetToDefaultSettingsRouteHandler: RouteHandler<
  typeof postPoliciesCrossTenantAccessPolicyTemplatesMultiTenantOrganizationPartnerConfigurationResetToDefaultSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesDefaultAppManagementPolicyRouteHandler: RouteHandler<
  typeof getPoliciesDefaultAppManagementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesDefaultAppManagementPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesDefaultAppManagementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesDefaultAppManagementPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesDefaultAppManagementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesDeviceRegistrationPolicyRouteHandler: RouteHandler<
  typeof getPoliciesDeviceRegistrationPolicyRoute
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

export const deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute
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

export const deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRoute
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

export const deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRouteHandler: RouteHandler<
  typeof deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFeatureRolloutPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesFeatureRolloutPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesFederatedTokenValidationPolicyRouteHandler: RouteHandler<
  typeof getPoliciesFederatedTokenValidationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesFederatedTokenValidationPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesFederatedTokenValidationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePoliciesFederatedTokenValidationPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesFederatedTokenValidationPolicyRoute
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

export const deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesHomeRealmDiscoveryPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesHomeRealmDiscoveryPoliciesCountRoute
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

export const deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRouteHandler: RouteHandler<
  typeof deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesOwnerlessGroupPolicyRouteHandler: RouteHandler<
  typeof getPoliciesOwnerlessGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesOwnerlessGroupPolicyRouteHandler: RouteHandler<
  typeof patchPoliciesOwnerlessGroupPolicyRoute
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

export const deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute
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

export const deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesCountRoute
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

export const deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRouteHandler: RouteHandler<
  typeof deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesPermissionGrantPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesPermissionGrantPoliciesCountRoute
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

export const deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute
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

export const deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesCountRoute
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

export const deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPoliciesCountRoute
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

export const deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRouteHandler: RouteHandler<
  typeof deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRoleManagementPolicyAssignmentsCountRouteHandler: RouteHandler<
  typeof getPoliciesRoleManagementPolicyAssignmentsCountRoute
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

export const deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenIssuancePoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesTokenIssuancePoliciesCountRoute
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

export const deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRouteHandler: RouteHandler<
  typeof deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToCountRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesTokenLifetimePoliciesCountRouteHandler: RouteHandler<
  typeof getPoliciesTokenLifetimePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
