import { OpenAPIHono } from '@hono/zod-openapi'
import { postPaymentStoredPaymentTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const storedPaymentTransactionsHandler = app.openapi(
  postPaymentStoredPaymentTransactionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
