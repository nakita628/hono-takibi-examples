import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsUntagResourceHandler = app.openapi(
  postXAmzTargetAWSEventsUntagResourceRoute,
  (c) => {},
)
