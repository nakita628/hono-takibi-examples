import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DescribeParameterGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DescribeParameterGroupsHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DescribeParameterGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
