import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsStartReplayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsStartReplayHandler = app.openapi(
  postXAmzTargetAWSEventsStartReplayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
