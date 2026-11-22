import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328TagResourceHandler = app.openapi(
  postXAmzTargetLogs20140328TagResourceRoute,
  (c) => {},
)
