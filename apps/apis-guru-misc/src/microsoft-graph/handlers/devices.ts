import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevicesDeviceIdExtensionsExtensionIdRoute,
  deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRoute,
  deleteDevicesDeviceIdRoute,
  getDevicesCountRoute,
  getDevicesDeviceIdExtensionsCountRoute,
  getDevicesDeviceIdExtensionsExtensionIdRoute,
  getDevicesDeviceIdExtensionsRoute,
  getDevicesDeviceIdMemberOfCountRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphApplicationCountRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphDeviceCountRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphGroupCountRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphGroupRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactCountRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphUserCountRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphUserRoute,
  getDevicesDeviceIdMemberOfRoute,
  getDevicesDeviceIdRegisteredOwnersCountRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentCountRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointCountRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalCountRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserCountRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredOwnersRefRoute,
  getDevicesDeviceIdRegisteredOwnersRoute,
  getDevicesDeviceIdRegisteredUsersCountRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentCountRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointCountRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalCountRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserCountRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredUsersRoute,
  getDevicesDeviceIdRoute,
  getDevicesDeviceIdTransitiveMemberOfCountRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserRoute,
  getDevicesDeviceIdTransitiveMemberOfRoute,
  getDevicesMicrosoftGraphDeltaRoute,
  getDevicesRoute,
  patchDevicesDeviceIdExtensionsExtensionIdRoute,
  patchDevicesDeviceIdRoute,
  postDevicesDeviceIdExtensionsRoute,
  postDevicesDeviceIdMicrosoftGraphCheckMemberGroupsRoute,
  postDevicesDeviceIdMicrosoftGraphCheckMemberObjectsRoute,
  postDevicesDeviceIdMicrosoftGraphGetMemberGroupsRoute,
  postDevicesDeviceIdMicrosoftGraphGetMemberObjectsRoute,
  postDevicesDeviceIdMicrosoftGraphRestoreRoute,
  postDevicesDeviceIdRegisteredOwnersRefRoute,
  postDevicesMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postDevicesMicrosoftGraphGetByIdsRoute,
  postDevicesMicrosoftGraphValidatePropertiesRoute,
  postDevicesRoute,
} from '../routes'

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesRouteHandler: RouteHandler<typeof postDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesCountRouteHandler: RouteHandler<typeof getDevicesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesMicrosoftGraphDeltaRouteHandler: RouteHandler<
  typeof getDevicesMicrosoftGraphDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesMicrosoftGraphGetAvailableExtensionPropertiesRouteHandler: RouteHandler<
  typeof postDevicesMicrosoftGraphGetAvailableExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesMicrosoftGraphGetByIdsRouteHandler: RouteHandler<
  typeof postDevicesMicrosoftGraphGetByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesMicrosoftGraphValidatePropertiesRouteHandler: RouteHandler<
  typeof postDevicesMicrosoftGraphValidatePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRouteHandler: RouteHandler<typeof getDevicesDeviceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDevicesDeviceIdRouteHandler: RouteHandler<
  typeof patchDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdExtensionsRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdExtensionsRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdExtensionsCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdExtensionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesDeviceIdExtensionsExtensionIdRouteHandler: RouteHandler<
  typeof deleteDevicesDeviceIdExtensionsExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdExtensionsExtensionIdRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdExtensionsExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDevicesDeviceIdExtensionsExtensionIdRouteHandler: RouteHandler<
  typeof patchDevicesDeviceIdExtensionsExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphApplicationCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphDeviceCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphDeviceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphGroupCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdMicrosoftGraphCheckMemberGroupsRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdMicrosoftGraphCheckMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdMicrosoftGraphCheckMemberObjectsRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdMicrosoftGraphCheckMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdMicrosoftGraphGetMemberGroupsRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdMicrosoftGraphGetMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdMicrosoftGraphGetMemberObjectsRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdMicrosoftGraphGetMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdMicrosoftGraphRestoreRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdMicrosoftGraphRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersRefRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdRegisteredOwnersRefRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdRegisteredOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphEndpointRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserCountRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
