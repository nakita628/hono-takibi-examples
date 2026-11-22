import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectInvoiceItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceItemsHandler = app.openapi(getV1ObjectInvoiceItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
