import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListReplaysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListReplaysHandler = app.openapi(
  postXAmzTargetAWSEventsListReplaysRoute,
  (c) => {},
)
