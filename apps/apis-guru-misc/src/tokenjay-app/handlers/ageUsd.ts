import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgeusdInfoRoute,
  getSigrsvExchangeAmountInfoRoute,
  getSigrsvExchangeIndexRoute,
  getSigrsvPriceRoute,
  getSigusdExchangeAmountInfoRoute,
  getSigusdExchangeIndexRoute,
  getSigusdPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ageUsdHandler = app
  .openapi(getAgeusdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigrsvExchangeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigrsvExchangeAmountInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigrsvPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigusdExchangeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigusdExchangeAmountInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigusdPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
