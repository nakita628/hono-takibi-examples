import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeleteRuleHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
