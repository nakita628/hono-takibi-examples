import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectInvoiceSplitItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceSplitItemsHandler = app.openapi(getV1ObjectInvoiceSplitItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
