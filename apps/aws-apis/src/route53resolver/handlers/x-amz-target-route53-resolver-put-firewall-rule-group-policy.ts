import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyHandler = app.openapi(
  postXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
