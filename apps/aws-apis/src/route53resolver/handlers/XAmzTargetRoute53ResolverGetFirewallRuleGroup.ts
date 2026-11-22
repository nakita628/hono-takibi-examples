import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetFirewallRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetFirewallRuleGroupHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetFirewallRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
