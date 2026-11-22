import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DeleteItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DeleteItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DeleteItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
