import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeEventSubscriptionsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
