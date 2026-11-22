import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeBlsSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeBlsSeriesHandler = app.openapi(
  getRepositorySearchTypeTypeBlsSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
