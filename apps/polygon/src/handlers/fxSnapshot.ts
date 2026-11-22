import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SnapshotLocaleGlobalMarketsForexDirectionRoute,
  getV2SnapshotLocaleGlobalMarketsForexTickersRoute,
  getV2SnapshotLocaleGlobalMarketsForexTickersTickerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fxSnapshotHandler = app
  .openapi(getV2SnapshotLocaleGlobalMarketsForexTickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsForexTickersTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotLocaleGlobalMarketsForexDirectionRoute, (c) => {
    throw new Error('Not implemented')
  })
