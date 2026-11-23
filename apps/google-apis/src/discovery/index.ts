import { OpenAPIHono } from '@hono/zod-openapi'
import { getApisApiVersionRestRoute, getApisRoute } from './routes'
import { getApisApiVersionRestRouteHandler, getApisRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisRoute, getApisRouteHandler)
  .openapi(getApisApiVersionRestRoute, getApisApiVersionRestRouteHandler)

export default app
