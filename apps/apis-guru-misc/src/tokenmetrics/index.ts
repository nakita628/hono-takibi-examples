import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CorrelationRoute,
  getV1IndicesRoute,
  getV1InvestorGradesRoute,
  getV1MarketIndicatorRoute,
  getV1PricePredictionRoute,
  getV1PriceRoute,
  getV1QuantmetricsTier1Route,
  getV1QuantmetricsTier2Route,
  getV1ResistanceSupportRoute,
  getV1ScenarioAnalysisRoute,
  getV1SentimentsRoute,
  getV1TokensRoute,
  getV1TraderGradesRoute,
  getV1TradingIndicatorRoute,
} from './routes'
import {
  getV1CorrelationRouteHandler,
  getV1IndicesRouteHandler,
  getV1InvestorGradesRouteHandler,
  getV1MarketIndicatorRouteHandler,
  getV1PricePredictionRouteHandler,
  getV1PriceRouteHandler,
  getV1QuantmetricsTier1RouteHandler,
  getV1QuantmetricsTier2RouteHandler,
  getV1ResistanceSupportRouteHandler,
  getV1ScenarioAnalysisRouteHandler,
  getV1SentimentsRouteHandler,
  getV1TokensRouteHandler,
  getV1TraderGradesRouteHandler,
  getV1TradingIndicatorRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1CorrelationRoute, getV1CorrelationRouteHandler)
  .openapi(getV1IndicesRoute, getV1IndicesRouteHandler)
  .openapi(getV1InvestorGradesRoute, getV1InvestorGradesRouteHandler)
  .openapi(getV1MarketIndicatorRoute, getV1MarketIndicatorRouteHandler)
  .openapi(getV1PriceRoute, getV1PriceRouteHandler)
  .openapi(getV1PricePredictionRoute, getV1PricePredictionRouteHandler)
  .openapi(getV1QuantmetricsTier1Route, getV1QuantmetricsTier1RouteHandler)
  .openapi(getV1QuantmetricsTier2Route, getV1QuantmetricsTier2RouteHandler)
  .openapi(getV1ResistanceSupportRoute, getV1ResistanceSupportRouteHandler)
  .openapi(getV1ScenarioAnalysisRoute, getV1ScenarioAnalysisRouteHandler)
  .openapi(getV1SentimentsRoute, getV1SentimentsRouteHandler)
  .openapi(getV1TokensRoute, getV1TokensRouteHandler)
  .openapi(getV1TraderGradesRoute, getV1TraderGradesRouteHandler)
  .openapi(getV1TradingIndicatorRoute, getV1TradingIndicatorRouteHandler)

export default app
