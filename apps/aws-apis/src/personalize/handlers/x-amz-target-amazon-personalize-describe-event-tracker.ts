import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeEventTrackerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeEventTrackerHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeEventTrackerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
