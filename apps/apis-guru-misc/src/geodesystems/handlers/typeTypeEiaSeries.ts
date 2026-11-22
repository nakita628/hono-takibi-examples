import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEiaSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEiaSeriesHandler = app.openapi(
  getRepositorySearchTypeTypeEiaSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
