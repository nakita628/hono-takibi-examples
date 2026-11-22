import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectInvoiceSplitIdRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceSplitsHandler = app.openapi(getV1ObjectInvoiceSplitIdRoute, (c) => {
  throw new Error('Not implemented')
})
