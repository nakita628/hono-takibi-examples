import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
