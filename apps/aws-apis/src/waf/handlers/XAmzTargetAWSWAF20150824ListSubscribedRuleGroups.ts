import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListSubscribedRuleGroupsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
