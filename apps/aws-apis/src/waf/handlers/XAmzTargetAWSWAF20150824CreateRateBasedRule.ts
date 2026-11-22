import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
