import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointRoute,
  getMeOwnedDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getMeOwnedDevicesMicrosoftGraphEndpointRoute,
  getMeRegisteredDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getMeRegisteredDevicesMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getUsersUserIdOwnedDevicesMicrosoftGraphEndpointRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute,
  getUsersUserIdRegisteredDevicesMicrosoftGraphEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectEndpointHandler = app
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOwnedDevicesMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdMicrosoftGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
