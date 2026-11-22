import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceConnectionDetailsHandler = app.openapi(
  getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
