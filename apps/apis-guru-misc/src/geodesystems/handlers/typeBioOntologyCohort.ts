import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOntologyCohortRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOntologyCohortHandler = app.openapi(
  getRepositorySearchTypeBioOntologyCohortRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
