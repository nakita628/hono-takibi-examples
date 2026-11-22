import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328TagLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328TagLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328TagLogGroupRoute,
  (c) => {},
)
