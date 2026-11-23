import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824DeleteRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
