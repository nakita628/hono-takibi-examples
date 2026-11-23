import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceListAvailableManagementCidrRangesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
