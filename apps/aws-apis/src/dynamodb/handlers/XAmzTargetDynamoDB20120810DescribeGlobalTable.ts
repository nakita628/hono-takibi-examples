import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeGlobalTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeGlobalTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeGlobalTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
