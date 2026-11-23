import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3QuotesFxTickerRoute,
  getV3QuotesOptionsTickerRoute,
  getV3QuotesStockTickerRoute,
  getV3ReferenceConditionsRoute,
  getV3ReferenceDividendsRoute,
  getV3ReferenceExchangesRoute,
  getV3ReferenceOptionsContractsOptionsTickerRoute,
  getV3ReferenceOptionsContractsRoute,
  getV3ReferenceSplitsRoute,
  getV3ReferenceTickersRoute,
  getV3ReferenceTickersTickerRoute,
  getV3ReferenceTickersTypesRoute,
  getV3SnapshotIndicesRoute,
  getV3SnapshotOptionsUnderlyingAssetOptionContractRoute,
  getV3SnapshotOptionsUnderlyingAssetRoute,
  getV3SnapshotRoute,
  getV3TradesCryptoTickerRoute,
  getV3TradesOptionsTickerRoute,
  getV3TradesStockTickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3QuotesFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3QuotesOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3QuotesStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceDividendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceOptionsContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceOptionsContractsOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceTickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceTickersTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ReferenceTickersTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SnapshotIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SnapshotOptionsUnderlyingAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SnapshotOptionsUnderlyingAssetOptionContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TradesCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TradesOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TradesStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
