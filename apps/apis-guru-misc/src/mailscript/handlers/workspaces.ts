import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspacesRoute, postWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
