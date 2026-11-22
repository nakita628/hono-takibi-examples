import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsTestEventPatternRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsTestEventPatternHandler = app.openapi(
  postXAmzTargetAWSEventsTestEventPatternRoute,
  (c) => {},
)
