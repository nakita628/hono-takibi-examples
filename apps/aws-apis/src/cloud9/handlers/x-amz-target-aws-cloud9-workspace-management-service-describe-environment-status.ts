import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatusHandler =
  app.openapi(
    postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
