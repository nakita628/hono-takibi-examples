import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeConnectClientAddInsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeConnectClientAddInsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeConnectClientAddInsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
