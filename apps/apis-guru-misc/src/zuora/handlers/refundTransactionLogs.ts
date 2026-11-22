import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectRefundTransactionLogIdRoute } from '../routes'

const app = new OpenAPIHono()

export const refundTransactionLogsHandler = app.openapi(
  getV1ObjectRefundTransactionLogIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
