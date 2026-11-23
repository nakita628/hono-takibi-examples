import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeReplicationSubnetGroupsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
