import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePropertySalesRoute } from '../routes'

const app = new OpenAPIHono()

export const typePropertySalesHandler = app.openapi(
  getRepositorySearchTypePropertySalesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
