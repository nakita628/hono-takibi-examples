import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AgentUserIdRoute,
  postV1DevicesQueryRoute,
  postV1DevicesReportStateAndNotificationRoute,
  postV1DevicesRequestSyncRoute,
  postV1DevicesSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1DevicesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevicesReportStateAndNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevicesRequestSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevicesSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AgentUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
