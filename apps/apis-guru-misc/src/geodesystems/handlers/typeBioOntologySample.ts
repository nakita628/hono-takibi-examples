import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOntologySampleRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOntologySampleHandler = app.openapi(
  getRepositorySearchTypeBioOntologySampleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
