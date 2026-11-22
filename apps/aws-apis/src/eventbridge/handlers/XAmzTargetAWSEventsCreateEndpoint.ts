import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsCreateEndpointHandler = app.openapi(
  postXAmzTargetAWSEventsCreateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
