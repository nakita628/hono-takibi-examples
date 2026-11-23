import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
