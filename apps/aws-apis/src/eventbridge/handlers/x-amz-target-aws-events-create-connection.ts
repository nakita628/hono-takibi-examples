import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCreateConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
