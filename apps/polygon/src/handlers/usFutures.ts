import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFuturesV1ContractsRoute,
  getFuturesV1ExchangesRoute,
  getFuturesV1MarketStatusRoute,
  getFuturesV1ProductsRoute,
  getFuturesV1QuotesTickerRoute,
  getFuturesV1SchedulesRoute,
  getFuturesV1SnapshotRoute,
  getFuturesV1TradesTickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usFuturesHandler = app
  .openapi(getFuturesV1ContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1ExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1MarketStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1QuotesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1SnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuturesV1TradesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
