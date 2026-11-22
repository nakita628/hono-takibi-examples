import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGazeteerCensusTractsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGazeteerCensusTractsHandler = app.openapi(
  getRepositorySearchTypeGazeteerCensusTractsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
