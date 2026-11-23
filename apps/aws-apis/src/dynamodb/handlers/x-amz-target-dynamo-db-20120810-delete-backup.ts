import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DeleteBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DeleteBackupHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DeleteBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
