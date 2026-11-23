import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteSubscriptionFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteSubscriptionFilterHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteSubscriptionFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
