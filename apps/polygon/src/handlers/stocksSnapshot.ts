import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SnapshotLocaleUsMarketsStocksDirectionRoute,
  getV2SnapshotLocaleUsMarketsStocksTickersRoute,
  getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stocksSnapshotHandler = app
  .openapi(getV2SnapshotLocaleUsMarketsStocksTickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleUsMarketsStocksDirectionRoute, (c) => {
    throw new Error('Not implemented')
  })
