import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListEndpointsHandler = app.openapi(
  postXAmzTargetAWSEventsListEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
