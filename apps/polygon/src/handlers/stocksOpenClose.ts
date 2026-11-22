import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OpenCloseIndicesTickerDateRoute,
  getV1OpenCloseStocksTickerDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stocksOpenCloseHandler = app
  .openapi(getV1OpenCloseIndicesTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenCloseStocksTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
