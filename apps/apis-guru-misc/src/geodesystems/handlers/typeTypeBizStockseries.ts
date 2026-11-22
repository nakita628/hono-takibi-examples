import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeBizStockseriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeBizStockseriesHandler = app.openapi(
  getRepositorySearchTypeTypeBizStockseriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
