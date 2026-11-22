import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOptionsV1AdminMessagesRoute,
  getOptionsV1AnalyticsExpirationRoute,
  getOptionsV1AnalyticsRoute,
  getOptionsV1AnalyticsStrikeRoute,
  getOptionsV1AnalyticsUnderlyingRoute,
  getOptionsV1ExchangesRoute,
  getOptionsV1OpenInterestRoute,
  getOptionsV1OpenInterestUnderlyingRoute,
  getOptionsV1UnusualTradesRoute,
  getOptionsV3QuotesTickerRoute,
  getOptionsV3TradesTickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usOptionsHandler = app
  .openapi(getOptionsV1AdminMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1AnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1AnalyticsExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1AnalyticsStrikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1AnalyticsUnderlyingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1ExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1OpenInterestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1OpenInterestUnderlyingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV1UnusualTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV3QuotesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOptionsV3TradesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
