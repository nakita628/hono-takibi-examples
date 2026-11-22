import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CurrenciesHistoryRoute,
  getApiV1CurrenciesHistorySupportedRoute,
  getApiV1CurrenciesRateRoute,
  getApiV1CurrenciesRateSupportedRoute,
  getApiV1CurrenciesSummaryRoute,
  getApiV1CurrenciesSummarySupportedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
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
