import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getX402CreditAccountPaymentsIdRoute,
  getX402CreditAccountPaymentsRoute,
  postX402CreditAccountQuoteRoute,
  postX402CreditAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const x402PaymentTransactionsHandler = app
  .openapi(postX402CreditAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getX402CreditAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getX402CreditAccountPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postX402CreditAccountQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
