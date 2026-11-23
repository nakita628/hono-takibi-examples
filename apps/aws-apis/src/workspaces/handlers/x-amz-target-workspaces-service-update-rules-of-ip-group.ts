import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceUpdateRulesOfIpGroupHandler = app.openapi(
  postXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
