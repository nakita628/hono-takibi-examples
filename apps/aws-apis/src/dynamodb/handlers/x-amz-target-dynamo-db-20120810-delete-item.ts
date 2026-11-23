import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DeleteItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DeleteItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DeleteItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
