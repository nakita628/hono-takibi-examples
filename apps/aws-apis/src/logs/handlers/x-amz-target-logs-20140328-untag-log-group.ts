import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328UntagLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328UntagLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328UntagLogGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
