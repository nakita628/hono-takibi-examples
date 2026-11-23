import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateEventTrackerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateEventTrackerHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateEventTrackerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
