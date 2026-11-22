import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentRoute,
  getMeOwnedDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getMeOwnedDevicesMicrosoftGraphAppRoleAssignmentRoute,
  getMeRegisteredDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getMeRegisteredDevicesMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getUsersUserIdOwnedDevicesMicrosoftGraphAppRoleAssignmentRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
  getUsersUserIdRegisteredDevicesMicrosoftGraphAppRoleAssignmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectAppRoleAssignmentHandler = app
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdRegisteredOwnersMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdRegisteredUsersMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOwnedDevicesMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOwnedDevicesMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesMicrosoftGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdRegisteredDevicesDirectoryObjectIdMicrosoftGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
