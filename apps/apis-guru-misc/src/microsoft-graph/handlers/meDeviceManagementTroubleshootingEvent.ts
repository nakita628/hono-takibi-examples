import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  getMeDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  getMeDeviceManagementTroubleshootingEventsRoute,
  patchMeDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
  postMeDeviceManagementTroubleshootingEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meDeviceManagementTroubleshootingEventHandler = app
  .openapi(getMeDeviceManagementTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDeviceManagementTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeDeviceManagementTroubleshootingEventsDeviceManagementTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
