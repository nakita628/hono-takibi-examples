import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810RestoreTableToPointInTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810RestoreTableToPointInTimeHandler = app.openapi(
  postXAmzTargetDynamoDB20120810RestoreTableToPointInTimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
