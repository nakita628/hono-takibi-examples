import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsPutPermissionHandler = app.openapi(
  postXAmzTargetAWSEventsPutPermissionRoute,
  (c) => {},
)
