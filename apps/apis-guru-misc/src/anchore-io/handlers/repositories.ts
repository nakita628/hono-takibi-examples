import { OpenAPIHono } from '@hono/zod-openapi'
import { postRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app.openapi(postRepositoriesRoute, (c) => {
  throw new Error('Not implemented')
})
