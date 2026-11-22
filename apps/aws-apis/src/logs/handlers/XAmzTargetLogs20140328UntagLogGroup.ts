import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328UntagLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328UntagLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328UntagLogGroupRoute,
  (c) => {},
)
