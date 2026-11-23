import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
