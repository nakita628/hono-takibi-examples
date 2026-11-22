import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2InvoicingSearchInvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const searchInvoicesHandler = app.openapi(postV2InvoicingSearchInvoicesRoute, (c) => {
  throw new Error('Not implemented')
})
