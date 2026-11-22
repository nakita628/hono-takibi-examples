import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDBStreams20120810GetShardIteratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDBStreams20120810GetShardIteratorHandler = app.openapi(
  postXAmzTargetDynamoDBStreams20120810GetShardIteratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
