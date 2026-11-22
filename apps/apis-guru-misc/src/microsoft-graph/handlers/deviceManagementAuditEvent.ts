import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementAuditEventsAuditEventIdRoute,
  getDeviceManagementAuditEventsAuditEventIdRoute,
  getDeviceManagementAuditEventsRoute,
  patchDeviceManagementAuditEventsAuditEventIdRoute,
  postDeviceManagementAuditEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementAuditEventHandler = app
  .openapi(getDeviceManagementAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementAuditEventsAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementAuditEventsAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementAuditEventsAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
