import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectPaymentMethodTransactionLogIdRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentMethodTransactionLogsHandler = app.openapi(
  getV1ObjectPaymentMethodTransactionLogIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
