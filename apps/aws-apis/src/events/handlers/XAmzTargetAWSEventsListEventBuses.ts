import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListEventBusesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListEventBusesHandler = app.openapi(
  postXAmzTargetAWSEventsListEventBusesRoute,
  (c) => {},
)
