import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901StartAccessLoggingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901StartAccessLoggingHandler = app.openapi(
  postXAmzTargetMediaStore20170901StartAccessLoggingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
