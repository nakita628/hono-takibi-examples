import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioStockholmRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioStockholmHandler = app.openapi(
  getRepositorySearchTypeBioStockholmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
