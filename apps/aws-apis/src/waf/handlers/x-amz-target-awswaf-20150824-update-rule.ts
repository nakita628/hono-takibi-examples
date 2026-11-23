import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
