import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
