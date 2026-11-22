import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeFredSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeFredSeriesHandler = app.openapi(
  getRepositorySearchTypeTypeFredSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
