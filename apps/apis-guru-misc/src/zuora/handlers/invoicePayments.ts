import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ObjectInvoicePaymentIdRoute,
  postV1ObjectInvoicePaymentRoute,
  putV1ObjectInvoicePaymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicePaymentsHandler = app
  .openapi(postV1ObjectInvoicePaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoicePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectInvoicePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
