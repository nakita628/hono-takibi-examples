import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2InvoicesInvoiceIdRoute, getV2InvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesAPIHandler = app
  .openapi(getV2InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
