import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteLogGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
