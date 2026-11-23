import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListEventSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListEventSourcesHandler = app.openapi(
  postXAmzTargetAWSEventsListEventSourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
