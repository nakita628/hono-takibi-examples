import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceListAvailableManagementCidrRangesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
