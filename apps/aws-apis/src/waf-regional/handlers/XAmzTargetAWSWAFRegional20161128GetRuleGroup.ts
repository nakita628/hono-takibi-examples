import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
