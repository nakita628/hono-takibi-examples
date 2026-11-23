import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ListFederationsRoute,
  getApiV2ListMarketsRoute,
  getApiV2PerformanceStatsRoute,
  getApiV2PredictionsIdRoute,
  getApiV2PredictionsRoute,
} from './routes'
import {
  getApiV2ListFederationsRouteHandler,
  getApiV2ListMarketsRouteHandler,
  getApiV2PerformanceStatsRouteHandler,
  getApiV2PredictionsIdRouteHandler,
  getApiV2PredictionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV2ListFederationsRoute, getApiV2ListFederationsRouteHandler)
  .openapi(getApiV2ListMarketsRoute, getApiV2ListMarketsRouteHandler)
  .openapi(getApiV2PerformanceStatsRoute, getApiV2PerformanceStatsRouteHandler)
  .openapi(getApiV2PredictionsRoute, getApiV2PredictionsRouteHandler)
  .openapi(getApiV2PredictionsIdRoute, getApiV2PredictionsIdRouteHandler)

export default app
