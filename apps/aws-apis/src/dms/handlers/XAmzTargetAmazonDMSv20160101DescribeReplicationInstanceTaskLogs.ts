import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
