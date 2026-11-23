import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
