import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOntologyPersonRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOntologyPersonHandler = app.openapi(
  getRepositorySearchTypeBioOntologyPersonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
