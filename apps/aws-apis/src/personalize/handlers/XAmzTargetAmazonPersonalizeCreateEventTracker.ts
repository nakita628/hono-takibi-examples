import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateEventTrackerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateEventTrackerHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateEventTrackerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
