import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810GetItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810GetItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810GetItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
