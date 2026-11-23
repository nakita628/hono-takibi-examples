import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
