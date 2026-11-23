import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiGetProfileRoute, getApiRequestTokenRoute } from './routes'
import { getApiGetProfileRouteHandler, getApiRequestTokenRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiGetProfileRoute, getApiGetProfileRouteHandler)
  .openapi(getApiRequestTokenRoute, getApiRequestTokenRouteHandler)

export default app
