import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHackathonsComingJsonRoute,
  getHackathonsIdJsonRoute,
  getSwaggerDocJsonRoute,
  getSwaggerDocNameJsonRoute,
} from './routes'
import {
  getHackathonsComingJsonRouteHandler,
  getHackathonsIdJsonRouteHandler,
  getSwaggerDocJsonRouteHandler,
  getSwaggerDocNameJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHackathonsComingJsonRoute, getHackathonsComingJsonRouteHandler)
  .openapi(getHackathonsIdJsonRoute, getHackathonsIdJsonRouteHandler)
  .openapi(getSwaggerDocJsonRoute, getSwaggerDocJsonRouteHandler)
  .openapi(getSwaggerDocNameJsonRoute, getSwaggerDocNameJsonRouteHandler)

export default app
