import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
