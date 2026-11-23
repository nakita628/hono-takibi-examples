import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
