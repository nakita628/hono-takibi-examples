import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
