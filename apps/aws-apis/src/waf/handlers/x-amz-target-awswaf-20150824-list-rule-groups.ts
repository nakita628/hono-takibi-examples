import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824ListRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
