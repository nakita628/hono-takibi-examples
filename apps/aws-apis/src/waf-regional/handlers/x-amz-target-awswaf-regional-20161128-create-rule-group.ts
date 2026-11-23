import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
