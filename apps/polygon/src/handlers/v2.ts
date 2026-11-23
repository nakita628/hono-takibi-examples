import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2AggsGroupedLocaleGlobalMarketCryptoDateRoute,
  getV2AggsGroupedLocaleGlobalMarketFxDateRoute,
  getV2AggsGroupedLocaleUsMarketStocksDateRoute,
  getV2AggsTickerCryptoTickerPrevRoute,
  getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerForexTickerPrevRoute,
  getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerIndicesTickerPrevRoute,
  getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerOptionsTickerPrevRoute,
  getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerStocksTickerPrevRoute,
  getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRoute,
  getV2LastNbboStocksTickerRoute,
  getV2LastTradeOptionsTickerRoute,
  getV2LastTradeStocksTickerRoute,
  getV2ReferenceNewsRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoDirectionRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRoute,
  getV2SnapshotLocaleGlobalMarketsForexDirectionRoute,
  getV2SnapshotLocaleGlobalMarketsForexTickersRoute,
  getV2SnapshotLocaleGlobalMarketsForexTickersTickerRoute,
  getV2SnapshotLocaleUsMarketsStocksDirectionRoute,
  getV2SnapshotLocaleUsMarketsStocksTickersRoute,
  getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRoute,
  getV2TicksStocksNbboTickerDateRoute,
  getV2TicksStocksTradesTickerDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AggsGroupedLocaleGlobalMarketCryptoDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsGroupedLocaleGlobalMarketFxDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsGroupedLocaleUsMarketStocksDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerCryptoTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerForexTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerIndicesTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerOptionsTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerStocksTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LastNbboStocksTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LastTradeOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LastTradeStocksTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReferenceNewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsCryptoTickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsCryptoDirectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsForexTickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsForexTickersTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsForexDirectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleUsMarketsStocksTickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleUsMarketsStocksDirectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TicksStocksNbboTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TicksStocksTradesTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
