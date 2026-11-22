import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeReplicationInstancesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
