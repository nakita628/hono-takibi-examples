import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsUpdateEndpointHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
