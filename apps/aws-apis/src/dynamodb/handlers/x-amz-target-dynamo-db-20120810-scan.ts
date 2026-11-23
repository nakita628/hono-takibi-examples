import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ScanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ScanHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ScanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
