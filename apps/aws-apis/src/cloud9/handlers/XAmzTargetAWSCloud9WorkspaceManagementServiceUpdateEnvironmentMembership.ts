import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipHandler =
  app.openapi(
    postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
