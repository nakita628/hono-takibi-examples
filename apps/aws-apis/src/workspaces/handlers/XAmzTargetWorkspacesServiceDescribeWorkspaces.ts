import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeWorkspacesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
