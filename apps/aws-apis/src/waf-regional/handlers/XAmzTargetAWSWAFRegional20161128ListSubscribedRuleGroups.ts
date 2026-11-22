import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
