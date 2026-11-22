import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulderCrimesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulderCrimesHandler = app.openapi(
  getRepositorySearchTypeBoulderCrimesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
