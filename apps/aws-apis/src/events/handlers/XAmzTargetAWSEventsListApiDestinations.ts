import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListApiDestinationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListApiDestinationsHandler = app.openapi(
  postXAmzTargetAWSEventsListApiDestinationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
