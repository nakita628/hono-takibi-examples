import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsUpdateApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateApiDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
