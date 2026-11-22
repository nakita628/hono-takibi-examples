import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGetBlockRoute,
  postGetEthereumBalanceRoute,
  postGetExchangeRateRoute,
  postGetGasPriceRoute,
  postGetLastBlockNumberRoute,
  postGetTokenBalanceRoute,
  postGetTokenRoute,
  postGetTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const infoRequestsHandler = app
  .openapi(postGetBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetEthereumBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetGasPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetLastBlockNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTokenBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
