import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdManagerRefRoute,
  deleteUsersUserIdSponsorsDirectoryObjectIdRefRoute,
  deleteUsersUserIdSponsorsRefRoute,
  getUsersUserIdCreatedObjectsCountRoute,
  getUsersUserIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getUsersUserIdCreatedObjectsDirectoryObjectIdRoute,
  getUsersUserIdCreatedObjectsGraphServicePrincipalCountRoute,
  getUsersUserIdCreatedObjectsGraphServicePrincipalRoute,
  getUsersUserIdCreatedObjectsRoute,
  getUsersUserIdDirectReportsCountRoute,
  getUsersUserIdDirectReportsDirectoryObjectIdGraphOrgContactRoute,
  getUsersUserIdDirectReportsDirectoryObjectIdGraphUserRoute,
  getUsersUserIdDirectReportsDirectoryObjectIdRoute,
  getUsersUserIdDirectReportsGraphOrgContactCountRoute,
  getUsersUserIdDirectReportsGraphOrgContactRoute,
  getUsersUserIdDirectReportsGraphUserCountRoute,
  getUsersUserIdDirectReportsGraphUserRoute,
  getUsersUserIdDirectReportsRoute,
  getUsersUserIdManagerRefRoute,
  getUsersUserIdManagerRoute,
  getUsersUserIdMemberOfCountRoute,
  getUsersUserIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getUsersUserIdMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getUsersUserIdMemberOfDirectoryObjectIdGraphGroupRoute,
  getUsersUserIdMemberOfDirectoryObjectIdRoute,
  getUsersUserIdMemberOfGraphAdministrativeUnitCountRoute,
  getUsersUserIdMemberOfGraphAdministrativeUnitRoute,
  getUsersUserIdMemberOfGraphDirectoryRoleCountRoute,
  getUsersUserIdMemberOfGraphDirectoryRoleRoute,
  getUsersUserIdMemberOfGraphGroupCountRoute,
  getUsersUserIdMemberOfGraphGroupRoute,
  getUsersUserIdMemberOfRoute,
  getUsersUserIdOwnedDevicesCountRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdGraphDeviceRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdGraphEndpointRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdRoute,
  getUsersUserIdOwnedDevicesGraphAppRoleAssignmentCountRoute,
  getUsersUserIdOwnedDevicesGraphAppRoleAssignmentRoute,
  getUsersUserIdOwnedDevicesGraphDeviceCountRoute,
  getUsersUserIdOwnedDevicesGraphDeviceRoute,
  getUsersUserIdOwnedDevicesGraphEndpointCountRoute,
  getUsersUserIdOwnedDevicesGraphEndpointRoute,
  getUsersUserIdOwnedDevicesRoute,
  getUsersUserIdOwnedObjectsCountRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdGraphApplicationRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdGraphGroupRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdRoute,
  getUsersUserIdOwnedObjectsGraphApplicationCountRoute,
  getUsersUserIdOwnedObjectsGraphApplicationRoute,
  getUsersUserIdOwnedObjectsGraphGroupCountRoute,
  getUsersUserIdOwnedObjectsGraphGroupRoute,
  getUsersUserIdOwnedObjectsGraphServicePrincipalCountRoute,
  getUsersUserIdOwnedObjectsGraphServicePrincipalRoute,
  getUsersUserIdOwnedObjectsRoute,
  getUsersUserIdRegisteredDevicesCountRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdGraphDeviceRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdGraphEndpointRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdRoute,
  getUsersUserIdRegisteredDevicesGraphAppRoleAssignmentCountRoute,
  getUsersUserIdRegisteredDevicesGraphAppRoleAssignmentRoute,
  getUsersUserIdRegisteredDevicesGraphDeviceCountRoute,
  getUsersUserIdRegisteredDevicesGraphDeviceRoute,
  getUsersUserIdRegisteredDevicesGraphEndpointCountRoute,
  getUsersUserIdRegisteredDevicesGraphEndpointRoute,
  getUsersUserIdRegisteredDevicesRoute,
  getUsersUserIdSponsorOfCountRoute,
  getUsersUserIdSponsorOfDirectoryObjectIdRoute,
  getUsersUserIdSponsorOfRoute,
  getUsersUserIdSponsorsCountRoute,
  getUsersUserIdSponsorsRefRoute,
  getUsersUserIdSponsorsRoute,
  getUsersUserIdTransitiveMemberOfCountRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdRoute,
  getUsersUserIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getUsersUserIdTransitiveMemberOfGraphAdministrativeUnitRoute,
  getUsersUserIdTransitiveMemberOfGraphDirectoryRoleCountRoute,
  getUsersUserIdTransitiveMemberOfGraphDirectoryRoleRoute,
  getUsersUserIdTransitiveMemberOfGraphGroupCountRoute,
  getUsersUserIdTransitiveMemberOfGraphGroupRoute,
  getUsersUserIdTransitiveMemberOfRoute,
  postUsersUserIdSponsorsRefRoute,
  putUsersUserIdManagerRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersDirectoryObjectHandler = app
  .openapi(getUsersUserIdCreatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfGraphDirectoryRoleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSponsorOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSponsorOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSponsorOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSponsorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSponsorsDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSponsorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSponsorsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSponsorsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSponsorsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfGraphDirectoryRoleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
