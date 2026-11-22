import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRoute } from '../routes'

const app = new OpenAPIHono()

export const trackingHandler = app.openapi(
  putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
