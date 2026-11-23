import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DeleteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DeleteTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DeleteTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
