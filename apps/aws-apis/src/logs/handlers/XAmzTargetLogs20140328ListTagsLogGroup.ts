import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328ListTagsLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328ListTagsLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328ListTagsLogGroupRoute,
  (c) => {},
)
