import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThingyrefRoute,
  getThingRoute,
  patchThingRoute,
  deleteThingRoute,
  putThingRoute,
  postThingRoute,
} from './routes'
import {
  getThingyrefRouteHandler,
  getThingRouteHandler,
  patchThingRouteHandler,
  deleteThingRouteHandler,
  putThingRouteHandler,
  postThingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getThingyrefRoute, getThingyrefRouteHandler)
  .openapi(getThingRoute, getThingRouteHandler)
  .openapi(patchThingRoute, patchThingRouteHandler)
  .openapi(deleteThingRoute, deleteThingRouteHandler)
  .openapi(putThingRoute, putThingRouteHandler)
  .openapi(postThingRoute, postThingRouteHandler)

export default app
