import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsEnableRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsEnableRuleHandler = app.openapi(
  postXAmzTargetAWSEventsEnableRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
