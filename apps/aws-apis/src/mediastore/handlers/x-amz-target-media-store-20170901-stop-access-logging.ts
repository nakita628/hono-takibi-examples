import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901StopAccessLoggingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901StopAccessLoggingHandler = app.openapi(
  postXAmzTargetMediaStore20170901StopAccessLoggingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
