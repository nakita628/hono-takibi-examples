import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
