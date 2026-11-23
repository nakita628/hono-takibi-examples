import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeEndpointsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
