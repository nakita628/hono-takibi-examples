import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute,
  deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
  deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdOwnersRefRoute,
  deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
  deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
  deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
  deleteServicePrincipalsServicePrincipalIdRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute,
  deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute,
  deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute,
  deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute,
  getServicePrincipalsCountRoute,
  getServicePrincipalsDeltaRoute,
  getServicePrincipalsRoute,
  getServicePrincipalsServicePrincipalIdAppManagementPoliciesAppManagementPolicyIdRoute,
  getServicePrincipalsServicePrincipalIdAppManagementPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdAppManagementPoliciesRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute,
  getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute,
  getServicePrincipalsServicePrincipalIdEndpointsCountRoute,
  getServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  getServicePrincipalsServicePrincipalIdEndpointsRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRoute,
  getServicePrincipalsServicePrincipalIdMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsRoute,
  getServicePrincipalsServicePrincipalIdOwnersCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersRefRoute,
  getServicePrincipalsServicePrincipalIdOwnersRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsCountRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsCountRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
  getServicePrincipalsServicePrincipalIdRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsCountRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesCountRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaFilterOperatorsRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaFunctionsRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationSecretsCountRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesCountRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesCountRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFilterOperatorsRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFunctionsRoute,
  getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute,
  patchServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  patchServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  patchServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  patchServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
  patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
  patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
  patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
  patchServicePrincipalsServicePrincipalIdRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute,
  postServicePrincipalsGetAvailableExtensionPropertiesRoute,
  postServicePrincipalsGetByIdsRoute,
  postServicePrincipalsRoute,
  postServicePrincipalsServicePrincipalIdAddKeyRoute,
  postServicePrincipalsServicePrincipalIdAddPasswordRoute,
  postServicePrincipalsServicePrincipalIdAddTokenSigningCertificateRoute,
  postServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute,
  postServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute,
  postServicePrincipalsServicePrincipalIdCheckMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdCheckMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute,
  postServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute,
  postServicePrincipalsServicePrincipalIdEndpointsRoute,
  postServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
  postServicePrincipalsServicePrincipalIdGetMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdGetMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  postServicePrincipalsServicePrincipalIdOwnersRefRoute,
  postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute,
  postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute,
  postServicePrincipalsServicePrincipalIdRemoveKeyRoute,
  postServicePrincipalsServicePrincipalIdRemovePasswordRoute,
  postServicePrincipalsServicePrincipalIdRestoreRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationAcquireAccessTokenRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdPauseRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdProvisionOnDemandRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRestartRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaParseExpressionRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdStartRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdValidateCredentialsRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationJobsValidateCredentialsRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationTemplatesRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute,
  postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaParseExpressionRoute,
  postServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute,
  postServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute,
  postServicePrincipalsValidatePropertiesRoute,
  putServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute,
  putServicePrincipalsServicePrincipalIdSynchronizationRoute,
  putServicePrincipalsServicePrincipalIdSynchronizationSecretsRoute,
} from '../routes'

export const getServicePrincipalsRouteHandler: RouteHandler<
  typeof getServicePrincipalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsRouteHandler: RouteHandler<
  typeof postServicePrincipalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppManagementPoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppManagementPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppManagementPoliciesAppManagementPolicyIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppManagementPoliciesAppManagementPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppManagementPoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppManagementPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppRoleAssignedToRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdAppRoleAssignedToRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppRoleAssignmentsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdAppRoleAssignmentsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdEndpointsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdEndpointsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdEndpointsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdEndpointsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphDirectoryRoleRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphDirectoryRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfGraphGroupCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdAddKeyRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdAddKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdAddPasswordRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdAddPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdAddTokenSigningCertificateRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdAddTokenSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdCheckMemberGroupsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdCheckMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdCheckMemberObjectsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdCheckMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdGetMemberGroupsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdGetMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdGetMemberObjectsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdGetMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdRemoveKeyRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdRemoveKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdRemovePasswordRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdRemovePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdRestoreRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersRefRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdOwnersRefRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdOwnersRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphEndpointCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersGraphUserCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putServicePrincipalsServicePrincipalIdSynchronizationRouteHandler: RouteHandler<
  typeof putServicePrincipalsServicePrincipalIdSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRouteHandler: RouteHandler<
  typeof putServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdPauseRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdProvisionOnDemandRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdProvisionOnDemandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRestartRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdStartRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdValidateCredentialsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdValidateCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaFilterOperatorsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaFilterOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaFunctionsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaParseExpressionRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsSynchronizationJobIdSchemaParseExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationJobsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationJobsValidateCredentialsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationJobsValidateCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationAcquireAccessTokenRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationAcquireAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putServicePrincipalsServicePrincipalIdSynchronizationSecretsRouteHandler: RouteHandler<
  typeof putServicePrincipalsServicePrincipalIdSynchronizationSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationSecretsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationSecretsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationTemplatesRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof patchServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFilterOperatorsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFilterOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFunctionsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaParseExpressionRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdSynchronizationTemplatesSynchronizationTemplateIdSchemaParseExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdSynchronizationTemplatesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdSynchronizationTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsDeltaRouteHandler: RouteHandler<
  typeof getServicePrincipalsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsGetAvailableExtensionPropertiesRouteHandler: RouteHandler<
  typeof postServicePrincipalsGetAvailableExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsGetByIdsRouteHandler: RouteHandler<
  typeof postServicePrincipalsGetByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsValidatePropertiesRouteHandler: RouteHandler<
  typeof postServicePrincipalsValidatePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
