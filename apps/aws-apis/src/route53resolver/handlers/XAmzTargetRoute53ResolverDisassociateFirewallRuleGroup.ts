import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverDisassociateFirewallRuleGroupHandler = app.openapi(
  postXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
