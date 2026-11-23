import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ListExportsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListExportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
