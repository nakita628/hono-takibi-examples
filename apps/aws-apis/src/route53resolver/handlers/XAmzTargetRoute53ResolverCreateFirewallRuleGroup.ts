import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateFirewallRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverCreateFirewallRuleGroupHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateFirewallRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
