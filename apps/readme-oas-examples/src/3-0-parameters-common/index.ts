import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingIdActionIdRoute,
  getAnythingIdActionRoute,
  getAnythingIdOverrideRoute,
  getAnythingIdRoute,
  postAnythingIdRoute,
} from './routes'
import {
  getAnythingIdActionIdRouteHandler,
  getAnythingIdActionRouteHandler,
  getAnythingIdOverrideRouteHandler,
  getAnythingIdRouteHandler,
  postAnythingIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnythingIdRoute, getAnythingIdRouteHandler)
  .openapi(postAnythingIdRoute, postAnythingIdRouteHandler)
  .openapi(getAnythingIdActionRoute, getAnythingIdActionRouteHandler)
  .openapi(getAnythingIdActionIdRoute, getAnythingIdActionIdRouteHandler)
  .openapi(getAnythingIdOverrideRoute, getAnythingIdOverrideRouteHandler)

export default app
