import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CurrenciesHistoryRoute,
  getApiV1CurrenciesHistorySupportedRoute,
  getApiV1CurrenciesRateRoute,
  getApiV1CurrenciesRateSupportedRoute,
  getApiV1CurrenciesSummaryRoute,
  getApiV1CurrenciesSummarySupportedRoute,
  getApiV1MetalsBenchmarkHistoryRoute,
  getApiV1MetalsBenchmarkSummaryRoute,
  getApiV1MetalsBenchmarkSupportedRoute,
  getApiV1MetalsSpotHistoryRoute,
  getApiV1MetalsSpotPerformanceAnnualRoute,
  getApiV1MetalsSpotPerformanceRoute,
  getApiV1MetalsSpotRatioHistoryRoute,
  getApiV1MetalsSpotRatioSummaryRoute,
  getApiV1MetalsSpotSummaryRoute,
  getApiV1MetalsSpotSupportedRoute,
  getApiV1MetalsSupportedCurrencyRoute,
} from './routes'
import {
  getApiV1CurrenciesHistoryRouteHandler,
  getApiV1CurrenciesHistorySupportedRouteHandler,
  getApiV1CurrenciesRateRouteHandler,
  getApiV1CurrenciesRateSupportedRouteHandler,
  getApiV1CurrenciesSummaryRouteHandler,
  getApiV1CurrenciesSummarySupportedRouteHandler,
  getApiV1MetalsBenchmarkHistoryRouteHandler,
  getApiV1MetalsBenchmarkSummaryRouteHandler,
  getApiV1MetalsBenchmarkSupportedRouteHandler,
  getApiV1MetalsSpotHistoryRouteHandler,
  getApiV1MetalsSpotPerformanceAnnualRouteHandler,
  getApiV1MetalsSpotPerformanceRouteHandler,
  getApiV1MetalsSpotRatioHistoryRouteHandler,
  getApiV1MetalsSpotRatioSummaryRouteHandler,
  getApiV1MetalsSpotSummaryRouteHandler,
  getApiV1MetalsSpotSupportedRouteHandler,
  getApiV1MetalsSupportedCurrencyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1CurrenciesHistoryRoute, getApiV1CurrenciesHistoryRouteHandler)
  .openapi(getApiV1CurrenciesHistorySupportedRoute, getApiV1CurrenciesHistorySupportedRouteHandler)
  .openapi(getApiV1CurrenciesRateRoute, getApiV1CurrenciesRateRouteHandler)
  .openapi(getApiV1CurrenciesRateSupportedRoute, getApiV1CurrenciesRateSupportedRouteHandler)
  .openapi(getApiV1CurrenciesSummaryRoute, getApiV1CurrenciesSummaryRouteHandler)
  .openapi(getApiV1CurrenciesSummarySupportedRoute, getApiV1CurrenciesSummarySupportedRouteHandler)
  .openapi(getApiV1MetalsBenchmarkHistoryRoute, getApiV1MetalsBenchmarkHistoryRouteHandler)
  .openapi(getApiV1MetalsBenchmarkSummaryRoute, getApiV1MetalsBenchmarkSummaryRouteHandler)
  .openapi(getApiV1MetalsBenchmarkSupportedRoute, getApiV1MetalsBenchmarkSupportedRouteHandler)
  .openapi(getApiV1MetalsSpotHistoryRoute, getApiV1MetalsSpotHistoryRouteHandler)
  .openapi(getApiV1MetalsSpotPerformanceRoute, getApiV1MetalsSpotPerformanceRouteHandler)
  .openapi(
    getApiV1MetalsSpotPerformanceAnnualRoute,
    getApiV1MetalsSpotPerformanceAnnualRouteHandler,
  )
  .openapi(getApiV1MetalsSpotRatioHistoryRoute, getApiV1MetalsSpotRatioHistoryRouteHandler)
  .openapi(getApiV1MetalsSpotRatioSummaryRoute, getApiV1MetalsSpotRatioSummaryRouteHandler)
  .openapi(getApiV1MetalsSpotSummaryRoute, getApiV1MetalsSpotSummaryRouteHandler)
  .openapi(getApiV1MetalsSpotSupportedRoute, getApiV1MetalsSpotSupportedRouteHandler)
  .openapi(getApiV1MetalsSupportedCurrencyRoute, getApiV1MetalsSupportedCurrencyRouteHandler)

export default app
