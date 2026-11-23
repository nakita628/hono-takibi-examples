import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsListConnectionsHandler = app.openapi(
  postXAmzTargetAWSEventsListConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
