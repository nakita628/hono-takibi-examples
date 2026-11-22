import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOntologyStudyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOntologyStudyHandler = app.openapi(
  getRepositorySearchTypeBioOntologyStudyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
