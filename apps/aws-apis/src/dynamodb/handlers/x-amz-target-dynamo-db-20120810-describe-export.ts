import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DescribeExportHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
