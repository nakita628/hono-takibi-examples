import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1ViolatingSitesRoute } from './routes'
import { getV1NameRouteHandler, getV1ViolatingSitesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ViolatingSitesRoute, getV1ViolatingSitesRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)

export default app
