import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConvertCurrencyRoute,
  postFormatCurrencyRoute,
  postMarketIndexRoute,
  postStockPricesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const financeHandler = app
  .openapi(postConvertCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormatCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStockPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
