import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328ListTagsLogGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328ListTagsLogGroupHandler = app.openapi(
  postXAmzTargetLogs20140328ListTagsLogGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
