import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartRoute, getQrRoute, postChartRoute, postQrRoute } from './routes'
import {
  getChartRouteHandler,
  getQrRouteHandler,
  postChartRouteHandler,
  postQrRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getChartRoute, getChartRouteHandler)
  .openapi(postChartRoute, postChartRouteHandler)
  .openapi(getQrRoute, getQrRouteHandler)
  .openapi(postQrRoute, postQrRouteHandler)

export default app
