import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormsFormNameRoute, getFormsRoute } from './routes'
import { getFormsFormNameRouteHandler, getFormsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormsRoute, getFormsRouteHandler)
  .openapi(getFormsFormNameRoute, getFormsFormNameRouteHandler)

export default app
