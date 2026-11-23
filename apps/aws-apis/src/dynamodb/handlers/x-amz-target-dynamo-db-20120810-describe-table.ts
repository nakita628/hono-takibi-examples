import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DescribeTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
