import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteConnectClientAddInRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDeleteConnectClientAddInHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteConnectClientAddInRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
