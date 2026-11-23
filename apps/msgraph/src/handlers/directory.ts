import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  deleteDirectoryAttributeSetsAttributeSetIdRoute,
  deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
  deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
  deleteDirectoryDeletedItemsDirectoryObjectIdRoute,
  deleteDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute,
  deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
  deleteDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
  deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
  deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
  deleteDirectoryPublicKeyInfrastructureRoute,
  deleteDirectoryRecoveryJobsRecoveryJobBaseIdRoute,
  deleteDirectoryRecoveryRoute,
  deleteDirectoryRecoverySnapshotsSnapshotIdRoute,
  deleteDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute,
  deleteDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute,
  deleteDirectorySubscriptionsCompanySubscriptionIdRoute,
  deleteDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute,
  deleteDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
  deleteDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
  deleteDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute,
  deleteDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute,
  deleteDirectoryTenantGovernanceRoute,
  deleteDirectoryTenantGovernanceSettingsRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphApplicationRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphDeviceRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphGroupRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphOrgContactRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphServicePrincipalRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphUserRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  getDirectoryAdministrativeUnitsCountRoute,
  getDirectoryAdministrativeUnitsDeltaRoute,
  getDirectoryAdministrativeUnitsRoute,
  getDirectoryAttributeSetsAttributeSetIdRoute,
  getDirectoryAttributeSetsCountRoute,
  getDirectoryAttributeSetsRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCountRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesCountRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
  getDirectoryCustomSecurityAttributeDefinitionsRoute,
  getDirectoryDeletedItemsCountRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphAdministrativeUnitRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphApplicationRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphDeviceRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphGroupRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphServicePrincipalRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphUserRoute,
  getDirectoryDeletedItemsDirectoryObjectIdRoute,
  getDirectoryDeletedItemsGraphAdministrativeUnitCountRoute,
  getDirectoryDeletedItemsGraphAdministrativeUnitRoute,
  getDirectoryDeletedItemsGraphApplicationCountRoute,
  getDirectoryDeletedItemsGraphApplicationRoute,
  getDirectoryDeletedItemsGraphDeviceCountRoute,
  getDirectoryDeletedItemsGraphDeviceRoute,
  getDirectoryDeletedItemsGraphGroupCountRoute,
  getDirectoryDeletedItemsGraphGroupRoute,
  getDirectoryDeletedItemsGraphServicePrincipalCountRoute,
  getDirectoryDeletedItemsGraphServicePrincipalRoute,
  getDirectoryDeletedItemsGraphUserCountRoute,
  getDirectoryDeletedItemsGraphUserRoute,
  getDirectoryDeletedItemsRoute,
  getDirectoryDeviceLocalCredentialsCountRoute,
  getDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute,
  getDirectoryDeviceLocalCredentialsRoute,
  getDirectoryFederationConfigurationsAvailableProviderTypesRoute,
  getDirectoryFederationConfigurationsCountRoute,
  getDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
  getDirectoryFederationConfigurationsRoute,
  getDirectoryOnPremisesSynchronizationCountRoute,
  getDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
  getDirectoryOnPremisesSynchronizationRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCountRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCountRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute,
  getDirectoryPublicKeyInfrastructureRoute,
  getDirectoryRecoveryJobsCountRoute,
  getDirectoryRecoveryJobsRecoveryJobBaseIdRoute,
  getDirectoryRecoveryJobsRoute,
  getDirectoryRecoveryRoute,
  getDirectoryRecoverySnapshotsCountRoute,
  getDirectoryRecoverySnapshotsRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsCountRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRecoveryJobIdRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsCountRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRecoveryPreviewJobIdRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRoute,
  getDirectoryRemoteTenantGroupsCountRoute,
  getDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute,
  getDirectoryRemoteTenantGroupsRoute,
  getDirectoryRoute,
  getDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute,
  getDirectorySubscriptionsCompanySubscriptionIdRoute,
  getDirectorySubscriptionsCountRoute,
  getDirectorySubscriptionsRoute,
  getDirectoryTenantGovernanceGovernanceInvitationsCountRoute,
  getDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute,
  getDirectoryTenantGovernanceGovernanceInvitationsRoute,
  getDirectoryTenantGovernanceGovernancePolicyTemplatesCountRoute,
  getDirectoryTenantGovernanceGovernancePolicyTemplatesRoute,
  getDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
  getDirectoryTenantGovernanceGovernanceRelationshipsCountRoute,
  getDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
  getDirectoryTenantGovernanceGovernanceRelationshipsRoute,
  getDirectoryTenantGovernanceGovernanceRequestsCountRoute,
  getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdGovernancePolicyTemplateRoute,
  getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute,
  getDirectoryTenantGovernanceGovernanceRequestsRoute,
  getDirectoryTenantGovernanceRelatedTenantsCountRoute,
  getDirectoryTenantGovernanceRelatedTenantsRefreshStatusRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdAppB2BSignInActivityMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BRegistrationMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BSignInActivityMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdBillingMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdMultiTenantApplicationMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute,
  getDirectoryTenantGovernanceRelatedTenantsRoute,
  getDirectoryTenantGovernanceRoute,
  getDirectoryTenantGovernanceSettingsRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  patchDirectoryAttributeSetsAttributeSetIdRoute,
  patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
  patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
  patchDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute,
  patchDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
  patchDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
  patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
  patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
  patchDirectoryPublicKeyInfrastructureRoute,
  patchDirectoryRecoveryJobsRecoveryJobBaseIdRoute,
  patchDirectoryRecoveryRoute,
  patchDirectoryRecoverySnapshotsSnapshotIdRoute,
  patchDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute,
  patchDirectoryRoute,
  patchDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute,
  patchDirectorySubscriptionsCompanySubscriptionIdRoute,
  patchDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute,
  patchDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
  patchDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
  patchDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute,
  patchDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute,
  patchDirectoryTenantGovernanceRoute,
  patchDirectoryTenantGovernanceSettingsRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute,
  postDirectoryAdministrativeUnitsRoute,
  postDirectoryAttributeSetsRoute,
  postDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute,
  postDirectoryCustomSecurityAttributeDefinitionsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdCheckMemberGroupsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdCheckMemberObjectsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdGetMemberGroupsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdGetMemberObjectsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdRestoreRoute,
  postDirectoryDeletedItemsGetAvailableExtensionPropertiesRoute,
  postDirectoryDeletedItemsGetByIdsRoute,
  postDirectoryDeletedItemsValidatePropertiesRoute,
  postDirectoryDeviceLocalCredentialsRoute,
  postDirectoryFederationConfigurationsRoute,
  postDirectoryOnPremisesSynchronizationRoute,
  postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute,
  postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdUploadRoute,
  postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute,
  postDirectoryRecoveryJobsRecoveryJobBaseIdMicrosoftGraphEntraRecoveryServicesCancelRoute,
  postDirectoryRecoveryJobsRoute,
  postDirectoryRecoverySnapshotsRoute,
  postDirectoryRemoteTenantGroupsRoute,
  postDirectorySubscriptionsRoute,
  postDirectoryTenantGovernanceGovernanceInvitationsRoute,
  postDirectoryTenantGovernanceGovernancePolicyTemplatesRoute,
  postDirectoryTenantGovernanceGovernanceRelationshipsRoute,
  postDirectoryTenantGovernanceGovernanceRequestsRoute,
  postDirectoryTenantGovernanceRelatedTenantsRefreshRoute,
  postDirectoryTenantGovernanceRelatedTenantsRoute,
  postDirectoryTenantGovernanceSettingsEnableRelatedTenantsRoute,
} from '../routes'

export const getDirectoryRouteHandler: RouteHandler<typeof getDirectoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryRouteHandler: RouteHandler<typeof patchDirectoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryAdministrativeUnitsRouteHandler: RouteHandler<
  typeof postDirectoryAdministrativeUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryAdministrativeUnitsAdministrativeUnitIdRouteHandler: RouteHandler<
  typeof patchDirectoryAdministrativeUnitsAdministrativeUnitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRouteHandler: RouteHandler<
  typeof deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRouteHandler: RouteHandler<
  typeof postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRouteHandler: RouteHandler<
  typeof patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRouteHandler: RouteHandler<
  typeof deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRouteHandler: RouteHandler<
  typeof postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphApplicationRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphDeviceRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphGroupRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphOrgContactRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphUserRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRouteHandler: RouteHandler<
  typeof postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRouteHandler: RouteHandler<
  typeof deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRouteHandler: RouteHandler<
  typeof postDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRouteHandler: RouteHandler<
  typeof patchDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRouteHandler: RouteHandler<
  typeof deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsCountRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAdministrativeUnitsDeltaRouteHandler: RouteHandler<
  typeof getDirectoryAdministrativeUnitsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAttributeSetsRouteHandler: RouteHandler<
  typeof getDirectoryAttributeSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryAttributeSetsRouteHandler: RouteHandler<
  typeof postDirectoryAttributeSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof getDirectoryAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof patchDirectoryAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof deleteDirectoryAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryAttributeSetsCountRouteHandler: RouteHandler<
  typeof getDirectoryAttributeSetsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryCustomSecurityAttributeDefinitionsRouteHandler: RouteHandler<
  typeof getDirectoryCustomSecurityAttributeDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryCustomSecurityAttributeDefinitionsRouteHandler: RouteHandler<
  typeof postDirectoryCustomSecurityAttributeDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRouteHandler: RouteHandler<
  typeof getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRouteHandler: RouteHandler<
  typeof patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRouteHandler: RouteHandler<
  typeof deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRouteHandler: RouteHandler<
  typeof getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRouteHandler: RouteHandler<
  typeof postDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRouteHandler: RouteHandler<
  typeof getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRouteHandler: RouteHandler<
  typeof patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRouteHandler: RouteHandler<
  typeof deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesCountRouteHandler: RouteHandler<
  typeof getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryCustomSecurityAttributeDefinitionsCountRouteHandler: RouteHandler<
  typeof getDirectoryCustomSecurityAttributeDefinitionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryDeletedItemsDirectoryObjectIdRouteHandler: RouteHandler<
  typeof deleteDirectoryDeletedItemsDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdGraphAdministrativeUnitRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdGraphAdministrativeUnitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdGraphApplicationRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsDirectoryObjectIdCheckMemberGroupsRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsDirectoryObjectIdCheckMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsDirectoryObjectIdCheckMemberObjectsRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsDirectoryObjectIdCheckMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdGraphDeviceRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsDirectoryObjectIdGetMemberGroupsRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsDirectoryObjectIdGetMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsDirectoryObjectIdGetMemberObjectsRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsDirectoryObjectIdGetMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdGraphGroupRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsDirectoryObjectIdRestoreRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsDirectoryObjectIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsDirectoryObjectIdGraphUserRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsDirectoryObjectIdGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphAdministrativeUnitRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphAdministrativeUnitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphAdministrativeUnitCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphAdministrativeUnitCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphApplicationRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphApplicationCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphDeviceRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphDeviceCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphDeviceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsGetAvailableExtensionPropertiesRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsGetAvailableExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsGetByIdsRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsGetByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphGroupRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphGroupCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphUserRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeletedItemsGraphUserCountRouteHandler: RouteHandler<
  typeof getDirectoryDeletedItemsGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeletedItemsValidatePropertiesRouteHandler: RouteHandler<
  typeof postDirectoryDeletedItemsValidatePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeviceLocalCredentialsRouteHandler: RouteHandler<
  typeof getDirectoryDeviceLocalCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryDeviceLocalCredentialsRouteHandler: RouteHandler<
  typeof postDirectoryDeviceLocalCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRouteHandler: RouteHandler<
  typeof getDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRouteHandler: RouteHandler<
  typeof patchDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRouteHandler: RouteHandler<
  typeof deleteDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryDeviceLocalCredentialsCountRouteHandler: RouteHandler<
  typeof getDirectoryDeviceLocalCredentialsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryFederationConfigurationsRouteHandler: RouteHandler<
  typeof getDirectoryFederationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryFederationConfigurationsRouteHandler: RouteHandler<
  typeof postDirectoryFederationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryFederationConfigurationsIdentityProviderBaseIdRouteHandler: RouteHandler<
  typeof getDirectoryFederationConfigurationsIdentityProviderBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryFederationConfigurationsIdentityProviderBaseIdRouteHandler: RouteHandler<
  typeof patchDirectoryFederationConfigurationsIdentityProviderBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRouteHandler: RouteHandler<
  typeof deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryFederationConfigurationsCountRouteHandler: RouteHandler<
  typeof getDirectoryFederationConfigurationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryFederationConfigurationsAvailableProviderTypesRouteHandler: RouteHandler<
  typeof getDirectoryFederationConfigurationsAvailableProviderTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryOnPremisesSynchronizationRouteHandler: RouteHandler<
  typeof getDirectoryOnPremisesSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryOnPremisesSynchronizationRouteHandler: RouteHandler<
  typeof postDirectoryOnPremisesSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRouteHandler: RouteHandler<
  typeof getDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRouteHandler: RouteHandler<
  typeof patchDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRouteHandler: RouteHandler<
  typeof deleteDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryOnPremisesSynchronizationCountRouteHandler: RouteHandler<
  typeof getDirectoryOnPremisesSynchronizationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryPublicKeyInfrastructureRouteHandler: RouteHandler<
  typeof patchDirectoryPublicKeyInfrastructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryPublicKeyInfrastructureRouteHandler: RouteHandler<
  typeof deleteDirectoryPublicKeyInfrastructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRouteHandler: RouteHandler<
  typeof postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRouteHandler: RouteHandler<
  typeof patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRouteHandler: RouteHandler<
  typeof deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRouteHandler: RouteHandler<
  typeof postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRouteHandler: RouteHandler<
  typeof patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRouteHandler: RouteHandler<
  typeof deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCountRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdUploadRouteHandler: RouteHandler<
  typeof postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCountRouteHandler: RouteHandler<
  typeof getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoveryRouteHandler: RouteHandler<
  typeof getDirectoryRecoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryRecoveryRouteHandler: RouteHandler<
  typeof patchDirectoryRecoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryRecoveryRouteHandler: RouteHandler<
  typeof deleteDirectoryRecoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoveryJobsRouteHandler: RouteHandler<
  typeof getDirectoryRecoveryJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryRecoveryJobsRouteHandler: RouteHandler<
  typeof postDirectoryRecoveryJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoveryJobsRecoveryJobBaseIdRouteHandler: RouteHandler<
  typeof getDirectoryRecoveryJobsRecoveryJobBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryRecoveryJobsRecoveryJobBaseIdRouteHandler: RouteHandler<
  typeof patchDirectoryRecoveryJobsRecoveryJobBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryRecoveryJobsRecoveryJobBaseIdRouteHandler: RouteHandler<
  typeof deleteDirectoryRecoveryJobsRecoveryJobBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryRecoveryJobsRecoveryJobBaseIdMicrosoftGraphEntraRecoveryServicesCancelRouteHandler: RouteHandler<
  typeof postDirectoryRecoveryJobsRecoveryJobBaseIdMicrosoftGraphEntraRecoveryServicesCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoveryJobsCountRouteHandler: RouteHandler<
  typeof getDirectoryRecoveryJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryRecoverySnapshotsRouteHandler: RouteHandler<
  typeof postDirectoryRecoverySnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryRecoverySnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof patchDirectoryRecoverySnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryRecoverySnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof deleteDirectoryRecoverySnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRecoveryJobIdRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRecoveryJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsCountRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRecoveryPreviewJobIdRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRecoveryPreviewJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsCountRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRecoverySnapshotsCountRouteHandler: RouteHandler<
  typeof getDirectoryRecoverySnapshotsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRemoteTenantGroupsRouteHandler: RouteHandler<
  typeof getDirectoryRemoteTenantGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryRemoteTenantGroupsRouteHandler: RouteHandler<
  typeof postDirectoryRemoteTenantGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRemoteTenantGroupsRemoteTenantGroupIdRouteHandler: RouteHandler<
  typeof getDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryRemoteTenantGroupsRemoteTenantGroupIdRouteHandler: RouteHandler<
  typeof patchDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryRemoteTenantGroupsRemoteTenantGroupIdRouteHandler: RouteHandler<
  typeof deleteDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryRemoteTenantGroupsCountRouteHandler: RouteHandler<
  typeof getDirectoryRemoteTenantGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectorySubscriptionsRouteHandler: RouteHandler<
  typeof getDirectorySubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectorySubscriptionsRouteHandler: RouteHandler<
  typeof postDirectorySubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectorySubscriptionsCompanySubscriptionIdRouteHandler: RouteHandler<
  typeof getDirectorySubscriptionsCompanySubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectorySubscriptionsCompanySubscriptionIdRouteHandler: RouteHandler<
  typeof patchDirectorySubscriptionsCompanySubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectorySubscriptionsCompanySubscriptionIdRouteHandler: RouteHandler<
  typeof deleteDirectorySubscriptionsCompanySubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRouteHandler: RouteHandler<
  typeof getDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRouteHandler: RouteHandler<
  typeof patchDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectorySubscriptionsCountRouteHandler: RouteHandler<
  typeof getDirectorySubscriptionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceInvitationsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceGovernanceInvitationsRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceGovernanceInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceInvitationsCountRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceInvitationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernancePolicyTemplatesRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernancePolicyTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceGovernancePolicyTemplatesRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceGovernancePolicyTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernancePolicyTemplatesCountRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernancePolicyTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRelationshipsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceGovernanceRelationshipsRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceGovernanceRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRelationshipsCountRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRelationshipsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRequestsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceGovernanceRequestsRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceGovernanceRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdGovernancePolicyTemplateRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdGovernancePolicyTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceGovernanceRequestsCountRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceGovernanceRequestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceRelatedTenantsRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceRelatedTenantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdAppB2BSignInActivityMetricsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdAppB2BSignInActivityMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BRegistrationMetricsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BRegistrationMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BSignInActivityMetricsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BSignInActivityMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdBillingMetricsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdBillingMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdMultiTenantApplicationMetricsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdMultiTenantApplicationMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsCountRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceRelatedTenantsRefreshRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceRelatedTenantsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceRelatedTenantsRefreshStatusRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceRelatedTenantsRefreshStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoryTenantGovernanceSettingsRouteHandler: RouteHandler<
  typeof getDirectoryTenantGovernanceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDirectoryTenantGovernanceSettingsRouteHandler: RouteHandler<
  typeof patchDirectoryTenantGovernanceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectoryTenantGovernanceSettingsRouteHandler: RouteHandler<
  typeof deleteDirectoryTenantGovernanceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoryTenantGovernanceSettingsEnableRelatedTenantsRouteHandler: RouteHandler<
  typeof postDirectoryTenantGovernanceSettingsEnableRelatedTenantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
