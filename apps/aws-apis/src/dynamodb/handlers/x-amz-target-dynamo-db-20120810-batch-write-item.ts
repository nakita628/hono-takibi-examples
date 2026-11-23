import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810BatchWriteItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810BatchWriteItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810BatchWriteItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
