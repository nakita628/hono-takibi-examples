import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsPutEventsHandler = app.openapi(
  postXAmzTargetAWSEventsPutEventsRoute,
  (c) => {},
)
