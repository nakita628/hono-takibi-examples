import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenaiDetailsRoute, getOpenaiSearchRoute } from './routes'
import { getOpenaiDetailsRouteHandler, getOpenaiSearchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOpenaiDetailsRoute, getOpenaiDetailsRouteHandler)
  .openapi(getOpenaiSearchRoute, getOpenaiSearchRouteHandler)

export default app
