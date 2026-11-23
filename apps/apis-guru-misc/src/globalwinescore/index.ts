import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalwinescoresIndexRoute, getGlobalwinescoresLatestIndexRoute } from './routes'
import {
  getGlobalwinescoresIndexRouteHandler,
  getGlobalwinescoresLatestIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGlobalwinescoresIndexRoute, getGlobalwinescoresIndexRouteHandler)
  .openapi(getGlobalwinescoresLatestIndexRoute, getGlobalwinescoresLatestIndexRouteHandler)

export default app
