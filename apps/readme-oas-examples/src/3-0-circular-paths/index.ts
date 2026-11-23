import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingRoute, postAnythingRoute, putAnythingRoute } from './routes'
import {
  getAnythingRouteHandler,
  postAnythingRouteHandler,
  putAnythingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnythingRoute, getAnythingRouteHandler)
  .openapi(postAnythingRoute, postAnythingRouteHandler)
  .openapi(putAnythingRoute, putAnythingRouteHandler)

export default app
