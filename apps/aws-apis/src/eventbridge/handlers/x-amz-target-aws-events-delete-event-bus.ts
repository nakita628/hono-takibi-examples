import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteEventBusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeleteEventBusHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteEventBusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
