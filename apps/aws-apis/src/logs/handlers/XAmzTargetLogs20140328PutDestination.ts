import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutDestinationHandler = app.openapi(
  postXAmzTargetLogs20140328PutDestinationRoute,
  (c) => {},
)
