import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateConnectClientAddInRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateConnectClientAddInHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateConnectClientAddInRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
