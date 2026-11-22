import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsUpdateArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateArchiveRoute,
  (c) => {},
)
