import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateEventBusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCreateEventBusHandler = app.openapi(
  postXAmzTargetAWSEventsCreateEventBusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
