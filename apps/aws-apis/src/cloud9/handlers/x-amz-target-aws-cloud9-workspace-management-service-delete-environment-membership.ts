import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipHandler =
  app.openapi(
    postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
