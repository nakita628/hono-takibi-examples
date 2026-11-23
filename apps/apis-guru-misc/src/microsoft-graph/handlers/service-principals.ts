import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdRoute,
  getServicePrincipalsCountRoute,
  getServicePrincipalsMicrosoftGraphDeltaRoute,
  getServicePrincipalsRoute,
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
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute,
  getServicePrincipalsServicePrincipalIdEndpointsCountRoute,
  getServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  getServicePrincipalsServicePrincipalIdEndpointsRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRoute,
  getServicePrincipalsServicePrincipalIdMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdMemberOfRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsRoute,
  getServicePrincipalsServicePrincipalIdOwnersCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersRefRoute,
  getServicePrincipalsServicePrincipalIdOwnersRoute,
  getServicePrincipalsServicePrincipalIdRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute,
  patchServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  patchServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  patchServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  patchServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  patchServicePrincipalsServicePrincipalIdRoute,
  postServicePrincipalsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postServicePrincipalsMicrosoftGraphGetByIdsRoute,
  postServicePrincipalsMicrosoftGraphValidatePropertiesRoute,
  postServicePrincipalsRoute,
  postServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute,
  postServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute,
  postServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute,
  postServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute,
  postServicePrincipalsServicePrincipalIdEndpointsRoute,
  postServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
  postServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphAddKeyRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphAddPasswordRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphAddTokenSigningCertificateRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphRemoveKeyRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphRemovePasswordRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphRestoreRoute,
  postServicePrincipalsServicePrincipalIdOwnersRefRoute,
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

export const getServicePrincipalsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsMicrosoftGraphDeltaRouteHandler: RouteHandler<
  typeof getServicePrincipalsMicrosoftGraphDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsMicrosoftGraphGetAvailableExtensionPropertiesRouteHandler: RouteHandler<
  typeof postServicePrincipalsMicrosoftGraphGetAvailableExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsMicrosoftGraphGetByIdsRouteHandler: RouteHandler<
  typeof postServicePrincipalsMicrosoftGraphGetByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsMicrosoftGraphValidatePropertiesRouteHandler: RouteHandler<
  typeof postServicePrincipalsMicrosoftGraphValidatePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdRoute
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

export const getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute
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

export const getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute
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

export const getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRoute
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

export const deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
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

export const getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute
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

export const getServicePrincipalsServicePrincipalIdEndpointsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdEndpointsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute
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

export const getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
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

export const getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRoute
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

export const deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphAddKeyRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphAddKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphAddPasswordRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphAddPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphAddTokenSigningCertificateRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphAddTokenSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberGroupsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberObjectsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberGroupsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberObjectsRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphRemoveKeyRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphRemoveKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphRemovePasswordRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphRemovePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServicePrincipalsServicePrincipalIdMicrosoftGraphRestoreRouteHandler: RouteHandler<
  typeof postServicePrincipalsServicePrincipalIdMicrosoftGraphRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersRoute
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

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
