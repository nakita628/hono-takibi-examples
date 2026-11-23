import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListApiDestinationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListApiDestinationsHandler = app.openapi(
  postXAmzTargetAWSEventsListApiDestinationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
