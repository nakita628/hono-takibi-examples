import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeConnectionsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
