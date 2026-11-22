import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810PutItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810PutItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810PutItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
