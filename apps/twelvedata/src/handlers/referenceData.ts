import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBondsRoute,
  getCommoditiesRoute,
  getCountriesRoute,
  getCrossListingsRoute,
  getCryptocurrenciesRoute,
  getCryptocurrencyExchangesRoute,
  getEarliestTimestampRoute,
  getEtfsRoute,
  getExchangeScheduleRoute,
  getExchangesRoute,
  getForexPairsRoute,
  getFundsRoute,
  getInstrumentTypeRoute,
  getIntervalsRoute,
  getMarketStateRoute,
  getStocksRoute,
  getSymbolSearchRoute,
  getTechnicalIndicatorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceDataHandler = app
  .openapi(getBondsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommoditiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrossListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCryptocurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCryptocurrencyExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarliestTimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExchangeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForexPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstrumentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntervalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSymbolSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechnicalIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
