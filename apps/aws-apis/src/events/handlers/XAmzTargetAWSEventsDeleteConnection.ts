import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeleteConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteConnectionRoute,
  (c) => {},
)
