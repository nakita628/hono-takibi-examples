import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListFirewallRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListFirewallRulesHandler = app.openapi(
  postXAmzTargetRoute53ResolverListFirewallRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
