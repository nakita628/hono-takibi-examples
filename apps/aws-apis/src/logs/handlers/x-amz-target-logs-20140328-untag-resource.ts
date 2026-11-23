import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328UntagResourceHandler = app.openapi(
  postXAmzTargetLogs20140328UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
