import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
