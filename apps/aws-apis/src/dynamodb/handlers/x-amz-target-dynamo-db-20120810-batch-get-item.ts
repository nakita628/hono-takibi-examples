import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810BatchGetItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810BatchGetItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810BatchGetItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
