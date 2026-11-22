import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
