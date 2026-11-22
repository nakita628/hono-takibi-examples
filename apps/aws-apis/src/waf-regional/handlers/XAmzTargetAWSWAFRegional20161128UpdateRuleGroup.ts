import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
