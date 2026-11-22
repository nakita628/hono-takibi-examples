import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
