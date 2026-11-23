import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCreateEndpointHandler = app.openapi(
  postXAmzTargetAWSEventsCreateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
