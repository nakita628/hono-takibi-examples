import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  getDeviceManagementTroubleshootingEventsCountRoute,
  getDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  getDeviceManagementTroubleshootingEventsRoute,
  patchDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  postDeviceManagementTroubleshootingEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementTroubleshootingEventHandler = app
  .openapi(getDeviceManagementTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementTroubleshootingEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
