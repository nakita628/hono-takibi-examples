import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPluginsRoute, getPluginsRoute } from './routes'
import { getApiPluginsRouteHandler, getPluginsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiPluginsRoute, getApiPluginsRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)

export default app
