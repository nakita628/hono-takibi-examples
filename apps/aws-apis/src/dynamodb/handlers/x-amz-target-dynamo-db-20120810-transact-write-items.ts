import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810TransactWriteItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810TransactWriteItemsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810TransactWriteItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
