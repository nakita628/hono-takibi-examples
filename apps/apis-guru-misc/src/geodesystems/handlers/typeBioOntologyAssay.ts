import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOntologyAssayRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOntologyAssayHandler = app.openapi(
  getRepositorySearchTypeBioOntologyAssayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
