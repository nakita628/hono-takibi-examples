import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328TagResourceHandler = app.openapi(
  postXAmzTargetLogs20140328TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
