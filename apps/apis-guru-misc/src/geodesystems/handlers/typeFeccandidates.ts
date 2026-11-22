import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFeccandidatesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFeccandidatesHandler = app.openapi(
  getRepositorySearchTypeFeccandidatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
