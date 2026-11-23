import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiProjectsFormatRoute, getApiProjectsIdFormatRoute, getApiRoute } from './routes'
import {
  getApiProjectsFormatRouteHandler,
  getApiProjectsIdFormatRouteHandler,
  getApiRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getApiProjectsIdFormatRoute, getApiProjectsIdFormatRouteHandler)
  .openapi(getApiProjectsFormatRoute, getApiProjectsFormatRouteHandler)

export default app
