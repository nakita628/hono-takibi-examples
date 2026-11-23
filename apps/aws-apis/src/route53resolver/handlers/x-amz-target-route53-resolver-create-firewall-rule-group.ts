import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateFirewallRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverCreateFirewallRuleGroupHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateFirewallRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
