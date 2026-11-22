import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDBStreams20120810ListStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDBStreams20120810ListStreamsHandler = app.openapi(
  postXAmzTargetDynamoDBStreams20120810ListStreamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
