import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverAssociateFirewallRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverAssociateFirewallRuleGroupHandler = app.openapi(
  postXAmzTargetRoute53ResolverAssociateFirewallRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
