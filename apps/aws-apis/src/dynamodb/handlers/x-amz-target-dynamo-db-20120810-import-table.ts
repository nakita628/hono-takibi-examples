import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ImportTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ImportTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ImportTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
