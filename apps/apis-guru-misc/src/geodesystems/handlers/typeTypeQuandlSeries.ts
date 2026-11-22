import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeQuandlSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeQuandlSeriesHandler = app.openapi(
  getRepositorySearchTypeTypeQuandlSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
