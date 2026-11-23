import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
