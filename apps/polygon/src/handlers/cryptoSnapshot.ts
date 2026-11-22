import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SnapshotLocaleGlobalMarketsCryptoDirectionRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoSnapshotHandler = app
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
