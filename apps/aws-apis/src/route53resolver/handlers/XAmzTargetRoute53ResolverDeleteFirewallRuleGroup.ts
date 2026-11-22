import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDeleteFirewallRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverDeleteFirewallRuleGroupHandler = app.openapi(
  postXAmzTargetRoute53ResolverDeleteFirewallRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
