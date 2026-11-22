import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceAuthorizeIpRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceAuthorizeIpRulesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceAuthorizeIpRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
