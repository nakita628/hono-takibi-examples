import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListTargetsByRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListTargetsByRuleHandler = app.openapi(
  postXAmzTargetAWSEventsListTargetsByRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
