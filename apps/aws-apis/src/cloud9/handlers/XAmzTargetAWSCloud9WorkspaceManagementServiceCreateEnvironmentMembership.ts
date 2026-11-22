import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipHandler =
  app.openapi(
    postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
