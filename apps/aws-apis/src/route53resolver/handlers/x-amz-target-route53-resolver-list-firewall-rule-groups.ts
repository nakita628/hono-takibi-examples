import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListFirewallRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListFirewallRuleGroupsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListFirewallRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
