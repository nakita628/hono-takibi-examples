import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currencyConversionHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
