import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceUpdateEnvironmentHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
