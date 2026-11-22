import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729DeleteRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
