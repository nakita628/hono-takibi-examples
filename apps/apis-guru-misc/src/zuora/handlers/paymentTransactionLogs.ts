import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectPaymentTransactionLogIdRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentTransactionLogsHandler = app.openapi(
  getV1ObjectPaymentTransactionLogIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
