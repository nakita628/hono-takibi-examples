import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsRemoveTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsRemoveTargetsHandler = app.openapi(
  postXAmzTargetAWSEventsRemoveTargetsRoute,
  (c) => {},
)
