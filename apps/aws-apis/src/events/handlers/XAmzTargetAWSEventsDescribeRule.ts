import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribeRuleHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
