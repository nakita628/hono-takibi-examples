import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspaceImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeWorkspaceImagesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspaceImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
