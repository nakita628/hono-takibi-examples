import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CreateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729CreateRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CreateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
