import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DescribeManagedRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729DescribeManagedRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DescribeManagedRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
