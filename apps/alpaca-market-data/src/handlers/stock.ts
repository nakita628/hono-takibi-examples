import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2StocksAuctionsRoute,
  getV2StocksBarsLatestRoute,
  getV2StocksBarsRoute,
  getV2StocksMetaConditionsTicktypeRoute,
  getV2StocksMetaExchangesRoute,
  getV2StocksQuotesLatestRoute,
  getV2StocksQuotesRoute,
  getV2StocksSnapshotsRoute,
  getV2StocksSymbolAuctionsRoute,
  getV2StocksSymbolBarsLatestRoute,
  getV2StocksSymbolBarsRoute,
  getV2StocksSymbolQuotesLatestRoute,
  getV2StocksSymbolQuotesRoute,
  getV2StocksSymbolSnapshotRoute,
  getV2StocksSymbolTradesLatestRoute,
  getV2StocksSymbolTradesRoute,
  getV2StocksTradesLatestRoute,
  getV2StocksTradesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stockHandler = app
  .openapi(getV2StocksSymbolAuctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolBarsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolQuotesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSymbolTradesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksAuctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksBarsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksMetaConditionsTicktypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksMetaExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksQuotesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StocksTradesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
