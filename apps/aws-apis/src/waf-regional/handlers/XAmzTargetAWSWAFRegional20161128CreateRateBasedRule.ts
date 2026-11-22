import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateRateBasedRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
