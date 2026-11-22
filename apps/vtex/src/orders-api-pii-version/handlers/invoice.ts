import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiOrdersPvtDocumentOrderIdInvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceHandler = app.openapi(postApiOrdersPvtDocumentOrderIdInvoicesRoute, (c) => {
  throw new Error('Not implemented')
})
