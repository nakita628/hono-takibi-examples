import { OpenAPIHono } from '@hono/zod-openapi'
import { getAboutRoute, getEcRoute } from './routes'
import { getAboutRouteHandler, getEcRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAboutRoute, getAboutRouteHandler)
  .openapi(getEcRoute, getEcRouteHandler)

export default app
