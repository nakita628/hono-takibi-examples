import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeImportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DescribeImportHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeImportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
