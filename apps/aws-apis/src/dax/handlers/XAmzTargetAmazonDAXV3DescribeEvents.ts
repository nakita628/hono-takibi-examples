import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DescribeEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3DescribeEventsHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DescribeEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
