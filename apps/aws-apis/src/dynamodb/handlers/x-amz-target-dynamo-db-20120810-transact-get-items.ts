import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810TransactGetItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810TransactGetItemsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810TransactGetItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
