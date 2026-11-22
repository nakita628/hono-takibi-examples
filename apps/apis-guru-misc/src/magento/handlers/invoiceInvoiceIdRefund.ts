import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InvoiceInvoiceIdRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceInvoiceIdRefundHandler = app.openapi(postV1InvoiceInvoiceIdRefundRoute, (c) => {
  throw new Error('Not implemented')
})
