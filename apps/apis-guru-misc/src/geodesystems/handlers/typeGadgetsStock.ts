import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGadgetsStockRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGadgetsStockHandler = app.openapi(
  getRepositorySearchTypeGadgetsStockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
