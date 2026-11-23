import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ExecuteTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ExecuteTransactionHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ExecuteTransactionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
