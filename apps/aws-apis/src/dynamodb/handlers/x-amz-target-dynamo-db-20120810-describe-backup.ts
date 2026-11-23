import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DescribeBackupHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
