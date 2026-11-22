import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDMonetaryAccountMonetaryAccountIDCurrencyCloudPaymentQuoteRoute } from '../routes'

const app = new OpenAPIHono()

export const currencyCloudPaymentQuoteHandler = app.openapi(
  postUserUserIDMonetaryAccountMonetaryAccountIDCurrencyCloudPaymentQuoteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
