import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositoriesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app.openapi(getRepositoriesIdRoute, (c) => {
  throw new Error('Not implemented')
})
