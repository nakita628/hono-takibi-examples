import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsHandler =
  app.openapi(
    postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
