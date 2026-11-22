import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Route } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Handler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
