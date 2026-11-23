import { OpenAPIHono } from '@hono/zod-openapi'
import { getSegmentsRoute, getSessionsRoute, patchSessionsRoute, postSessionsRoute } from './routes'
import {
  getSegmentsRouteHandler,
  getSessionsRouteHandler,
  patchSessionsRouteHandler,
  postSessionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSegmentsRoute, getSegmentsRouteHandler)
  .openapi(getSessionsRoute, getSessionsRouteHandler)
  .openapi(patchSessionsRoute, patchSessionsRouteHandler)
  .openapi(postSessionsRoute, postSessionsRouteHandler)

export default app
