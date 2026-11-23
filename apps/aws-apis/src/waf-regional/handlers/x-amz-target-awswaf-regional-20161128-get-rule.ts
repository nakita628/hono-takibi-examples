import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
