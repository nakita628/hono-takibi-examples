import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729DeleteFirewallManagerRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
