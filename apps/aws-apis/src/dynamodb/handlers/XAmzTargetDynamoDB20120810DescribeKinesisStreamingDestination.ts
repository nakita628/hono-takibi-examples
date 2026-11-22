import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
