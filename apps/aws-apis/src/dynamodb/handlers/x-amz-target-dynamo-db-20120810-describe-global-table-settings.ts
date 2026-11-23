import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DescribeGlobalTableSettingsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
