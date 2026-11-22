import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeleteEndpointHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
