import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeFilterHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
