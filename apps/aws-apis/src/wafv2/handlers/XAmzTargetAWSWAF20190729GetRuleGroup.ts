import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
