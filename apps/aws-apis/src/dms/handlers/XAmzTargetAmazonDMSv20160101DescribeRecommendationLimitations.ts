import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
