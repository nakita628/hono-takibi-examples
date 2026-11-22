import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulderEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulderEmailsHandler = app.openapi(
  getRepositorySearchTypeBoulderEmailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
