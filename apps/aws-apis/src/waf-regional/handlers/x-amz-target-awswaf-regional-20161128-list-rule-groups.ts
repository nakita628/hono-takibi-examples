import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
