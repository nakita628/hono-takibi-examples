import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsUpdateConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
