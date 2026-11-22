import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeEndpointsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
