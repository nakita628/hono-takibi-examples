import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRoute,
  deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRoute,
  getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute,
  getOcsV2PhpAppsUserStatusApiV1StatusesRoute,
  getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute,
  getOcsV2PhpAppsUserStatusApiV1UserStatusRoute,
  putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute,
  putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRoute,
  putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRoute,
  putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRoute,
} from './routes'
import {
  deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRouteHandler,
  deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRouteHandler,
  getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRouteHandler,
  getOcsV2PhpAppsUserStatusApiV1StatusesRouteHandler,
  getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRouteHandler,
  getOcsV2PhpAppsUserStatusApiV1UserStatusRouteHandler,
  putOcsV2PhpAppsUserStatusApiV1HeartbeatRouteHandler,
  putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRouteHandler,
  putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRouteHandler,
  putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute,
    putOcsV2PhpAppsUserStatusApiV1HeartbeatRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute,
    getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsUserStatusApiV1StatusesRoute,
    getOcsV2PhpAppsUserStatusApiV1StatusesRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute,
    getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsUserStatusApiV1UserStatusRoute,
    getOcsV2PhpAppsUserStatusApiV1UserStatusRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRoute,
    putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRoute,
    putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRoute,
    putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRoute,
    deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRoute,
    deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRouteHandler,
  )

export default app
