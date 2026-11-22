import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDBStreams20120810DescribeStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDBStreams20120810DescribeStreamHandler = app.openapi(
  postXAmzTargetDynamoDBStreams20120810DescribeStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
