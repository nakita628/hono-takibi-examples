import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteSubscriptionFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DeleteSubscriptionFilterHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteSubscriptionFilterRoute,
  (c) => {},
)
