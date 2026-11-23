import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceDeleteEnvironmentHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
