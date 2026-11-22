import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeEventCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeEventCategoriesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeEventCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
