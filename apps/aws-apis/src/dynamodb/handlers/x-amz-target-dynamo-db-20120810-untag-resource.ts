import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810UntagResourceHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
