import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app.openapi(getRepositoriesRoute, (c) => {
  throw new Error('Not implemented')
})
