import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceStartWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceStartWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceStartWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
