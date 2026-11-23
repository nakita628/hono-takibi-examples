import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
