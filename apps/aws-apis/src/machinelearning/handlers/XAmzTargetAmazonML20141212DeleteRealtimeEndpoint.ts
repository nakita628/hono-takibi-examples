import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DeleteRealtimeEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212DeleteRealtimeEndpointHandler = app.openapi(
  postXAmzTargetAmazonML20141212DeleteRealtimeEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
