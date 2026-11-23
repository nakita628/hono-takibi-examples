import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ListImportsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListImportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
