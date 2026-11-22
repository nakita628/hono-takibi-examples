import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectInvoiceItemAdjustmentIdRoute,
  getV1ObjectInvoiceItemAdjustmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceItemAdjustmentsHandler = app
  .openapi(deleteV1ObjectInvoiceItemAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceItemAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
