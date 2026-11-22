import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSEventsListTagsForResourceRoute,
  (c) => {},
)
