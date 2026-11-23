import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCreateApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsCreateApiDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
