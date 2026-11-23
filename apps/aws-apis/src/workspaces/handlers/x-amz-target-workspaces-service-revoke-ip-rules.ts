import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRevokeIpRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceRevokeIpRulesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRevokeIpRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
