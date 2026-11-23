import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeRecommendationsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
