import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
