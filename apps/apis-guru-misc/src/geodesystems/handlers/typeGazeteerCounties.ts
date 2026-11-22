import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGazeteerCountiesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGazeteerCountiesHandler = app.openapi(
  getRepositorySearchTypeGazeteerCountiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
