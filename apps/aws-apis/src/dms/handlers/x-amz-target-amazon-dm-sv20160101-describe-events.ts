import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeEventsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
