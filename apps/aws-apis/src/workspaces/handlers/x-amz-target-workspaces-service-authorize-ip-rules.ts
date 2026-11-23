import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceAuthorizeIpRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceAuthorizeIpRulesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceAuthorizeIpRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
