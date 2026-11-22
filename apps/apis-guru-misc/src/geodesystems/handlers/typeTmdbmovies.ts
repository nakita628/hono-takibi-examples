import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTmdbmoviesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTmdbmoviesHandler = app.openapi(getRepositorySearchTypeTmdbmoviesRoute, (c) => {
  throw new Error('Not implemented')
})
