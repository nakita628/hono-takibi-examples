import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEstimatesPriceRoute,
  getEstimatesTimeRoute,
  getHistoryRoute,
  getMeRoute,
  getProductsRoute,
} from './routes'
import {
  getEstimatesPriceRouteHandler,
  getEstimatesTimeRouteHandler,
  getHistoryRouteHandler,
  getMeRouteHandler,
  getProductsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(getEstimatesPriceRoute, getEstimatesPriceRouteHandler)
  .openapi(getEstimatesTimeRoute, getEstimatesTimeRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getHistoryRoute, getHistoryRouteHandler)

export default app
