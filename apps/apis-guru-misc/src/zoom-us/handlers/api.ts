import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDownloadBillingInvoicesInvoiceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(getApiDownloadBillingInvoicesInvoiceIdRoute, (c) => {
  throw new Error('Not implemented')
})
