import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
