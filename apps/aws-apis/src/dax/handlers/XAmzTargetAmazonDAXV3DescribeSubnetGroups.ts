import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DescribeSubnetGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3DescribeSubnetGroupsHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DescribeSubnetGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
