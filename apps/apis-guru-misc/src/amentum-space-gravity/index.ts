import { OpenAPIHono } from '@hono/zod-openapi'
import { getEgm2008GeoidHeightRoute, getEgm2008GravityAnomalyRoute } from './routes'
import { getEgm2008GeoidHeightRouteHandler, getEgm2008GravityAnomalyRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEgm2008GeoidHeightRoute, getEgm2008GeoidHeightRouteHandler)
  .openapi(getEgm2008GravityAnomalyRoute, getEgm2008GravityAnomalyRouteHandler)

export default app
