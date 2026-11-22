import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3StocksFeedBarsRoute,
  getV3StocksFeedLatestBarsRoute,
  getV3StocksFeedLatestQuotesRoute,
  getV3StocksFeedLatestTradesRoute,
  getV3StocksFeedQuotesRoute,
  getV3StocksFeedSnapshotsRoute,
  getV3StocksFeedTradesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stockV3Handler = app
  .openapi(getV3StocksFeedBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StocksFeedLatestBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StocksFeedLatestQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StocksFeedLatestTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StocksFeedQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StocksFeedSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StocksFeedTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
