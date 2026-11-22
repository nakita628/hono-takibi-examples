import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionNetworkTransferPricesRoute } from '../routes'

const app = new OpenAPIHono()

export const networkTransferPricesHandler = app.openapi(
  getApiVersionNetworkTransferPricesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
