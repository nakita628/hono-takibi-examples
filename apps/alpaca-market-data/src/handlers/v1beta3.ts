import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta3CryptoLocBarsRoute,
  getV1beta3CryptoLocLatestBarsRoute,
  getV1beta3CryptoLocLatestOrderbooksRoute,
  getV1beta3CryptoLocLatestQuotesRoute,
  getV1beta3CryptoLocLatestTradesRoute,
  getV1beta3CryptoLocQuotesRoute,
  getV1beta3CryptoLocSnapshotsRoute,
  getV1beta3CryptoLocTradesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta3Handler = app
  .openapi(getV1beta3CryptoLocBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocLatestBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocLatestOrderbooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocLatestQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocLatestTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3CryptoLocTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
