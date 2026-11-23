import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSigusdExchangeAmountInfoRoute,
  getSigusdExchangeIndexRoute,
  getSigusdPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sigusdHandler = app
  .openapi(getSigusdExchangeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigusdExchangeAmountInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigusdPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
