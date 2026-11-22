import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
