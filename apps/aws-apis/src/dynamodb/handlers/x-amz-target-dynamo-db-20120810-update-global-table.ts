import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateGlobalTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810UpdateGlobalTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateGlobalTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
