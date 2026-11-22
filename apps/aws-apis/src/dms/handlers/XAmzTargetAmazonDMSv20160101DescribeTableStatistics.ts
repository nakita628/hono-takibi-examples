import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeTableStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeTableStatisticsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeTableStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
