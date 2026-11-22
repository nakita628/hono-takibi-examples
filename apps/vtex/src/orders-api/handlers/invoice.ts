import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRoute,
  postApiOmsPvtOrdersOrderIdInvoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceHandler = app
  .openapi(postApiOmsPvtOrdersOrderIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
