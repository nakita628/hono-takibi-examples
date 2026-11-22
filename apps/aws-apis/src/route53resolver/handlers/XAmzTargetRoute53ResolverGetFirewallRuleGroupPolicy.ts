import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
