import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app.openapi(
  postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
