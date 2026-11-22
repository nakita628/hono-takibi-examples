import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2InvoicingAccountingSyncMerchantConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app.openapi(
  getV2InvoicingAccountingSyncMerchantConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
