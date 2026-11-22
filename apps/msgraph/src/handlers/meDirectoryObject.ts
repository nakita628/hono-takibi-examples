import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeManagerRefRoute,
  deleteMeSponsorsDirectoryObjectIdRefRoute,
  deleteMeSponsorsRefRoute,
  getMeCreatedObjectsCountRoute,
  getMeCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getMeCreatedObjectsDirectoryObjectIdRoute,
  getMeCreatedObjectsGraphServicePrincipalCountRoute,
  getMeCreatedObjectsGraphServicePrincipalRoute,
  getMeCreatedObjectsRoute,
  getMeDirectReportsCountRoute,
  getMeDirectReportsDirectoryObjectIdGraphOrgContactRoute,
  getMeDirectReportsDirectoryObjectIdGraphUserRoute,
  getMeDirectReportsDirectoryObjectIdRoute,
  getMeDirectReportsGraphOrgContactCountRoute,
  getMeDirectReportsGraphOrgContactRoute,
  getMeDirectReportsGraphUserCountRoute,
  getMeDirectReportsGraphUserRoute,
  getMeDirectReportsRoute,
  getMeManagerRefRoute,
  getMeManagerRoute,
  getMeMemberOfCountRoute,
  getMeMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getMeMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getMeMemberOfDirectoryObjectIdGraphGroupRoute,
  getMeMemberOfDirectoryObjectIdRoute,
  getMeMemberOfGraphAdministrativeUnitCountRoute,
  getMeMemberOfGraphAdministrativeUnitRoute,
  getMeMemberOfGraphDirectoryRoleCountRoute,
  getMeMemberOfGraphDirectoryRoleRoute,
  getMeMemberOfGraphGroupCountRoute,
  getMeMemberOfGraphGroupRoute,
  getMeMemberOfRoute,
  getMeOwnedDevicesCountRoute,
  getMeOwnedDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getMeOwnedDevicesDirectoryObjectIdGraphDeviceRoute,
  getMeOwnedDevicesDirectoryObjectIdGraphEndpointRoute,
  getMeOwnedDevicesDirectoryObjectIdRoute,
  getMeOwnedDevicesGraphAppRoleAssignmentCountRoute,
  getMeOwnedDevicesGraphAppRoleAssignmentRoute,
  getMeOwnedDevicesGraphDeviceCountRoute,
  getMeOwnedDevicesGraphDeviceRoute,
  getMeOwnedDevicesGraphEndpointCountRoute,
  getMeOwnedDevicesGraphEndpointRoute,
  getMeOwnedDevicesRoute,
  getMeOwnedObjectsCountRoute,
  getMeOwnedObjectsDirectoryObjectIdGraphApplicationRoute,
  getMeOwnedObjectsDirectoryObjectIdGraphGroupRoute,
  getMeOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getMeOwnedObjectsDirectoryObjectIdRoute,
  getMeOwnedObjectsGraphApplicationCountRoute,
  getMeOwnedObjectsGraphApplicationRoute,
  getMeOwnedObjectsGraphGroupCountRoute,
  getMeOwnedObjectsGraphGroupRoute,
  getMeOwnedObjectsGraphServicePrincipalCountRoute,
  getMeOwnedObjectsGraphServicePrincipalRoute,
  getMeOwnedObjectsRoute,
  getMeRegisteredDevicesCountRoute,
  getMeRegisteredDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getMeRegisteredDevicesDirectoryObjectIdGraphDeviceRoute,
  getMeRegisteredDevicesDirectoryObjectIdGraphEndpointRoute,
  getMeRegisteredDevicesDirectoryObjectIdRoute,
  getMeRegisteredDevicesGraphAppRoleAssignmentCountRoute,
  getMeRegisteredDevicesGraphAppRoleAssignmentRoute,
  getMeRegisteredDevicesGraphDeviceCountRoute,
  getMeRegisteredDevicesGraphDeviceRoute,
  getMeRegisteredDevicesGraphEndpointCountRoute,
  getMeRegisteredDevicesGraphEndpointRoute,
  getMeRegisteredDevicesRoute,
  getMeSponsorOfCountRoute,
  getMeSponsorOfDirectoryObjectIdRoute,
  getMeSponsorOfRoute,
  getMeSponsorsCountRoute,
  getMeSponsorsRefRoute,
  getMeSponsorsRoute,
  getMeTransitiveMemberOfCountRoute,
  getMeTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getMeTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getMeTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getMeTransitiveMemberOfDirectoryObjectIdRoute,
  getMeTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getMeTransitiveMemberOfGraphAdministrativeUnitRoute,
  getMeTransitiveMemberOfGraphDirectoryRoleCountRoute,
  getMeTransitiveMemberOfGraphDirectoryRoleRoute,
  getMeTransitiveMemberOfGraphGroupCountRoute,
  getMeTransitiveMemberOfGraphGroupRoute,
  getMeTransitiveMemberOfRoute,
  postMeSponsorsRefRoute,
  putMeManagerRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meDirectoryObjectHandler = app
  .openapi(getMeCreatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfGraphDirectoryRoleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSponsorOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSponsorOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSponsorOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSponsorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSponsorsDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSponsorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSponsorsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSponsorsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSponsorsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfGraphDirectoryRoleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
