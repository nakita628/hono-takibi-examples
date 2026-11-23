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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1CurrenciesHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CurrenciesHistorySupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CurrenciesRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CurrenciesRateSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CurrenciesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CurrenciesSummarySupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsBenchmarkHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsBenchmarkSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsBenchmarkSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotPerformanceAnnualRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotRatioHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotRatioSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSpotSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetalsSupportedCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
