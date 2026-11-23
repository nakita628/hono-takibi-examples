import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328CreateLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328CreateLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328CreateLogGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
