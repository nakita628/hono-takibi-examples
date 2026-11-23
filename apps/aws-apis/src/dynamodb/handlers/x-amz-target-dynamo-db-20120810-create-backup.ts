import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810CreateBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810CreateBackupHandler = app.openapi(
  postXAmzTargetDynamoDB20120810CreateBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
