import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteItemIdRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currencyConversionQuoteHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
