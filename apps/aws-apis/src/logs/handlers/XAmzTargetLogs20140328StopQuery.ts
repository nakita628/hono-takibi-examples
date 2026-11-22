import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328StopQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328StopQueryHandler = app.openapi(
  postXAmzTargetLogs20140328StopQueryRoute,
  (c) => {},
)
