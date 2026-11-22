import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutSubscriptionFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutSubscriptionFilterHandler = app.openapi(
  postXAmzTargetLogs20140328PutSubscriptionFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
