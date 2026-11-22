import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteEventTrackerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteEventTrackerHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteEventTrackerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
