import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
