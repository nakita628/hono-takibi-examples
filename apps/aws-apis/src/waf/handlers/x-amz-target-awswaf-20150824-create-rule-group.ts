import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
