import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  getUsersUserIdDeviceManagementTroubleshootingEventsCountRoute,
  getUsersUserIdDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  getUsersUserIdDeviceManagementTroubleshootingEventsRoute,
  patchUsersUserIdDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  postUsersUserIdDeviceManagementTroubleshootingEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersDeviceManagementTroubleshootingEventHandler = app
  .openapi(getUsersUserIdDeviceManagementTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDeviceManagementTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdDeviceManagementTroubleshootingEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
