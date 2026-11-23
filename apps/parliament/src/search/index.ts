import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescriptionRoute, getQueryExtensionRoute, getQueryRoute } from './routes'
import {
  getDescriptionRouteHandler,
  getQueryExtensionRouteHandler,
  getQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDescriptionRoute, getDescriptionRouteHandler)
  .openapi(getQueryRoute, getQueryRouteHandler)
  .openapi(getQueryExtensionRoute, getQueryExtensionRouteHandler)

export default app
