import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AgentUserIdRoute,
  postV1DevicesQueryRoute,
  postV1DevicesReportStateAndNotificationRoute,
  postV1DevicesRequestSyncRoute,
  postV1DevicesSyncRoute,
} from './routes'
import {
  deleteV1AgentUserIdRouteHandler,
  postV1DevicesQueryRouteHandler,
  postV1DevicesReportStateAndNotificationRouteHandler,
  postV1DevicesRequestSyncRouteHandler,
  postV1DevicesSyncRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1DevicesQueryRoute, postV1DevicesQueryRouteHandler)
  .openapi(
    postV1DevicesReportStateAndNotificationRoute,
    postV1DevicesReportStateAndNotificationRouteHandler,
  )
  .openapi(postV1DevicesRequestSyncRoute, postV1DevicesRequestSyncRouteHandler)
  .openapi(postV1DevicesSyncRoute, postV1DevicesSyncRouteHandler)
  .openapi(deleteV1AgentUserIdRoute, deleteV1AgentUserIdRouteHandler)

export default app
