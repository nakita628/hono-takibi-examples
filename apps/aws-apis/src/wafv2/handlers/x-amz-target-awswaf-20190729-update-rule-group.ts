import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UpdateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729UpdateRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UpdateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
