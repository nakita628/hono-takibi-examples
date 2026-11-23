import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvoicesInvoiceNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app.openapi(getInvoicesInvoiceNumberRoute, (c) => {
  throw new Error('Not implemented')
})
