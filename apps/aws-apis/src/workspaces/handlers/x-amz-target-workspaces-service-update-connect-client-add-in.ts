import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceUpdateConnectClientAddInRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceUpdateConnectClientAddInHandler = app.openapi(
  postXAmzTargetWorkspacesServiceUpdateConnectClientAddInRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
