import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvoicingRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicingHandler = app.openapi(getInvoicingRoute, (c) => {
  throw new Error('Not implemented')
})
