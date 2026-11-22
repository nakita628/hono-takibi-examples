import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListEventSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListEventSourcesHandler = app.openapi(
  postXAmzTargetAWSEventsListEventSourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
