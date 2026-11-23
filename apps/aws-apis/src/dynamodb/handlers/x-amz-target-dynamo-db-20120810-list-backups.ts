import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListBackupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ListBackupsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListBackupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
