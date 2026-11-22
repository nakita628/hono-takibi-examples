import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceUpdateConnectClientAddInRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceUpdateConnectClientAddInHandler = app.openapi(
  postXAmzTargetWorkspacesServiceUpdateConnectClientAddInRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
