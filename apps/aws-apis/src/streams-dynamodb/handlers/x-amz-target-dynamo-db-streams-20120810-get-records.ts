import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDBStreams20120810GetRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDbStreams20120810GetRecordsHandler = app.openapi(
  postXAmzTargetDynamoDBStreams20120810GetRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
