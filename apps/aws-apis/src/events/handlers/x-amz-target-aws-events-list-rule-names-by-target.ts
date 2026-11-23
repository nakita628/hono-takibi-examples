import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListRuleNamesByTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListRuleNamesByTargetHandler = app.openapi(
  postXAmzTargetAWSEventsListRuleNamesByTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
