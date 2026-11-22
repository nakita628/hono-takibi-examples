import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
