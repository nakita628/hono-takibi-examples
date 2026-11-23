import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeleteApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteApiDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
