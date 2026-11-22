import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOntologySeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOntologySeriesHandler = app.openapi(
  getRepositorySearchTypeBioOntologySeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
