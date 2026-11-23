import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteConnectClientAddInRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDeleteConnectClientAddInHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteConnectClientAddInRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
