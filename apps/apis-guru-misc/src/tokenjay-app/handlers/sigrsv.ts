import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSigrsvExchangeAmountInfoRoute,
  getSigrsvExchangeIndexRoute,
  getSigrsvPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sigrsvHandler = app
  .openapi(getSigrsvExchangeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigrsvExchangeAmountInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigrsvPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
