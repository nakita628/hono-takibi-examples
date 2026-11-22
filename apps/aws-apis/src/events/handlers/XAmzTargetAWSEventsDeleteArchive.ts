import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeleteArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteArchiveRoute,
  (c) => {},
)
