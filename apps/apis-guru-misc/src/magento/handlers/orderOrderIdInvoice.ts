import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrderOrderIdInvoiceRoute } from '../routes'

const app = new OpenAPIHono()

export const orderOrderIdInvoiceHandler = app.openapi(postV1OrderOrderIdInvoiceRoute, (c) => {
  throw new Error('Not implemented')
})
