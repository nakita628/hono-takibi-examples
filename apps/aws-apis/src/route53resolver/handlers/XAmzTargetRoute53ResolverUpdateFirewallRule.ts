import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateFirewallRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverUpdateFirewallRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateFirewallRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
