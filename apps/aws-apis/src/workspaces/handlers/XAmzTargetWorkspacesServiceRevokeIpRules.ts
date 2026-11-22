import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRevokeIpRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceRevokeIpRulesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRevokeIpRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
