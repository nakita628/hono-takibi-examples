import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DevicesQueryRoute,
  postV1DevicesReportStateAndNotificationRoute,
  postV1DevicesRequestSyncRoute,
  postV1DevicesSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
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
