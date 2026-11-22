import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectRefundInvoicePaymentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const refundInvoicePaymentsHandler = app.openapi(
  getV1ObjectRefundInvoicePaymentIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
