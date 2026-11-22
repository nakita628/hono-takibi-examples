import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGridaggregationRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGridaggregationHandler = app.openapi(
  getRepositorySearchTypeGridaggregationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
