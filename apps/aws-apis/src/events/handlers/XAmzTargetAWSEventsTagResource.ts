import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsTagResourceHandler = app.openapi(
  postXAmzTargetAWSEventsTagResourceRoute,
  (c) => {},
)
