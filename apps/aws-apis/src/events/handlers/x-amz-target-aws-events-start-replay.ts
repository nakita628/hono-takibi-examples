import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsStartReplayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsStartReplayHandler = app.openapi(
  postXAmzTargetAWSEventsStartReplayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
