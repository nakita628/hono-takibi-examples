import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeWorkspaceBundlesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
