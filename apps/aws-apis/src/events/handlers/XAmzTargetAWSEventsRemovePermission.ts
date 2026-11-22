import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsRemovePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsRemovePermissionHandler = app.openapi(
  postXAmzTargetAWSEventsRemovePermissionRoute,
  (c) => {},
)
