import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreatePermitRoute,
  postDisablePermitRoute,
  postDisableRoute,
  postListRecurringDetailsRoute,
  postNotifyShopperRoute,
  postScheduleAccountUpdaterRoute,
} from './routes'
import {
  postCreatePermitRouteHandler,
  postDisablePermitRouteHandler,
  postDisableRouteHandler,
  postListRecurringDetailsRouteHandler,
  postNotifyShopperRouteHandler,
  postScheduleAccountUpdaterRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreatePermitRoute, postCreatePermitRouteHandler)
  .openapi(postDisableRoute, postDisableRouteHandler)
  .openapi(postDisablePermitRoute, postDisablePermitRouteHandler)
  .openapi(postListRecurringDetailsRoute, postListRecurringDetailsRouteHandler)
  .openapi(postNotifyShopperRoute, postNotifyShopperRouteHandler)
  .openapi(postScheduleAccountUpdaterRoute, postScheduleAccountUpdaterRouteHandler)

export default app
