import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810RestoreTableFromBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810RestoreTableFromBackupHandler = app.openapi(
  postXAmzTargetDynamoDB20120810RestoreTableFromBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
