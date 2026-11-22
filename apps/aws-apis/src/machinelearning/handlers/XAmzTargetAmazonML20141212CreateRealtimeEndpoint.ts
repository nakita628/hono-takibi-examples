import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateRealtimeEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212CreateRealtimeEndpointHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateRealtimeEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
