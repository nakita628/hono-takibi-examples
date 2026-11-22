import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendInvoiceRoute } from '../routes'

const app = new OpenAPIHono()

export const sendInvoiceHandler = app.openapi(postSendInvoiceRoute, (c) => {
  throw new Error('Not implemented')
})
