import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824DeleteRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
