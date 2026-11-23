import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsActivateEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsActivateEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsActivateEventSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
