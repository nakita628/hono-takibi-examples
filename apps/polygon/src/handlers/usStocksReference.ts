import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStocksV1DividendsRoute,
  getStocksV1SplitsRoute,
  getV1ReferenceIposRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usStocksReferenceHandler = app
  .openapi(getStocksV1DividendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksV1SplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReferenceIposRoute, (c) => {
    throw new Error('Not implemented')
  })
