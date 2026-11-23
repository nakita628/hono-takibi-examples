import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDisableRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDisableRuleHandler = app.openapi(
  postXAmzTargetAWSEventsDisableRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
