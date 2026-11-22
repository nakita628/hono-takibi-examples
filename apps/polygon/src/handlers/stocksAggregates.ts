import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1IndicatorsEmaStockTickerRoute,
  getV1IndicatorsMacdStockTickerRoute,
  getV1IndicatorsRsiStockTickerRoute,
  getV1IndicatorsSmaStockTickerRoute,
  getV2AggsGroupedLocaleUsMarketStocksDateRoute,
  getV2AggsTickerStocksTickerPrevRoute,
  getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stocksAggregatesHandler = app
  .openapi(getV1IndicatorsEmaStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsGroupedLocaleUsMarketStocksDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerStocksTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
