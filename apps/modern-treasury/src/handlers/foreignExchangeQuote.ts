import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiForeignExchangeQuotesIdRoute,
  getApiForeignExchangeQuotesRoute,
  postApiForeignExchangeQuotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foreignExchangeQuoteHandler = app
  .openapi(getApiForeignExchangeQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiForeignExchangeQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiForeignExchangeQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
