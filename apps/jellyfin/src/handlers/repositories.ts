import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositoriesRoute, postRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app
  .openapi(getRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
