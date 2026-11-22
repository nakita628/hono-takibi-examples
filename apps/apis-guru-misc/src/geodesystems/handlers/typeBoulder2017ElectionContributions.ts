import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulder2017ElectionContributionsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulder2017ElectionContributionsHandler = app.openapi(
  getRepositorySearchTypeBoulder2017ElectionContributionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
