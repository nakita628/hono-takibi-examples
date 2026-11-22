import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRoute,
  deleteDevicesDeviceIdRegisteredOwnersRefRoute,
  deleteDevicesDeviceIdRegisteredUsersDirectoryObjectIdRefRoute,
  deleteDevicesDeviceIdRegisteredUsersRefRoute,
  getDevicesDeviceIdMemberOfCountRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdGraphGroupRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdRoute,
  getDevicesDeviceIdMemberOfGraphAdministrativeUnitCountRoute,
  getDevicesDeviceIdMemberOfGraphAdministrativeUnitRoute,
  getDevicesDeviceIdMemberOfGraphGroupCountRoute,
  getDevicesDeviceIdMemberOfGraphGroupRoute,
  getDevicesDeviceIdMemberOfRoute,
  getDevicesDeviceIdRegisteredOwnersCountRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphEndpointRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphUserRoute,
  getDevicesDeviceIdRegisteredOwnersGraphAppRoleAssignmentCountRoute,
  getDevicesDeviceIdRegisteredOwnersGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredOwnersGraphEndpointCountRoute,
  getDevicesDeviceIdRegisteredOwnersGraphEndpointRoute,
  getDevicesDeviceIdRegisteredOwnersGraphServicePrincipalCountRoute,
  getDevicesDeviceIdRegisteredOwnersGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredOwnersGraphUserCountRoute,
  getDevicesDeviceIdRegisteredOwnersGraphUserRoute,
  getDevicesDeviceIdRegisteredOwnersRefRoute,
  getDevicesDeviceIdRegisteredOwnersRoute,
  getDevicesDeviceIdRegisteredUsersCountRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphEndpointRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphUserRoute,
  getDevicesDeviceIdRegisteredUsersGraphAppRoleAssignmentCountRoute,
  getDevicesDeviceIdRegisteredUsersGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredUsersGraphEndpointCountRoute,
  getDevicesDeviceIdRegisteredUsersGraphEndpointRoute,
  getDevicesDeviceIdRegisteredUsersGraphServicePrincipalCountRoute,
  getDevicesDeviceIdRegisteredUsersGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredUsersGraphUserCountRoute,
  getDevicesDeviceIdRegisteredUsersGraphUserRoute,
  getDevicesDeviceIdRegisteredUsersRefRoute,
  getDevicesDeviceIdRegisteredUsersRoute,
  getDevicesDeviceIdTransitiveMemberOfCountRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRoute,
  getDevicesDeviceIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getDevicesDeviceIdTransitiveMemberOfGraphAdministrativeUnitRoute,
  getDevicesDeviceIdTransitiveMemberOfGraphGroupCountRoute,
  getDevicesDeviceIdTransitiveMemberOfGraphGroupRoute,
  getDevicesDeviceIdTransitiveMemberOfRoute,
  postDevicesDeviceIdRegisteredOwnersRefRoute,
  postDevicesDeviceIdRegisteredUsersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesDirectoryObjectHandler = app
  .openapi(getDevicesDeviceIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdRegisteredOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRegisteredOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRegisteredUsersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdRegisteredUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRegisteredUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
