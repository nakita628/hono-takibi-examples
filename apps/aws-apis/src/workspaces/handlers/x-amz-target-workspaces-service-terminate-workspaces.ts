import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceTerminateWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceTerminateWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceTerminateWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
