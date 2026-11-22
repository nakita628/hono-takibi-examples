import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824UpdateRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
