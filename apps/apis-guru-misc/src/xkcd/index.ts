import { OpenAPIHono } from '@hono/zod-openapi'
import { getComicIdInfo0JsonRoute, getInfo0JsonRoute } from './routes'
import { getComicIdInfo0JsonRouteHandler, getInfo0JsonRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getInfo0JsonRoute, getInfo0JsonRouteHandler)
  .openapi(getComicIdInfo0JsonRoute, getComicIdInfo0JsonRouteHandler)

export default app
