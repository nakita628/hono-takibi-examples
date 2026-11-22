import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectInvoiceAdjustmentIdRoute,
  getV1ObjectInvoiceAdjustmentIdRoute,
  postV1ObjectInvoiceAdjustmentRoute,
  putV1ObjectInvoiceAdjustmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceAdjustmentsHandler = app
  .openapi(postV1ObjectInvoiceAdjustmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectInvoiceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectInvoiceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
