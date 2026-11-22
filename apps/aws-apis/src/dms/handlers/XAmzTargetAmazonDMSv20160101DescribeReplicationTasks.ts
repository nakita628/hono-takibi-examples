import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeReplicationTasksHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeReplicationTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
