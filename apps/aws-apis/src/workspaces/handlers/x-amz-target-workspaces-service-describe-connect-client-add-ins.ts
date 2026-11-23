import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeConnectClientAddInsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeConnectClientAddInsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeConnectClientAddInsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
