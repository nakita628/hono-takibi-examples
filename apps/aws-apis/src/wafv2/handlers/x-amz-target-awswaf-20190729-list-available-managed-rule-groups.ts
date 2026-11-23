import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListAvailableManagedRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
