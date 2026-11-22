import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetDynamoDBStreams20120810DescribeStreamHandler,
  XAmzTargetDynamoDBStreams20120810GetRecordsHandler,
  XAmzTargetDynamoDBStreams20120810GetShardIteratorHandler,
  XAmzTargetDynamoDBStreams20120810ListStreamsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetDynamoDBStreams20120810DescribeStreamHandler)
  .route('/', XAmzTargetDynamoDBStreams20120810GetRecordsHandler)
  .route('/', XAmzTargetDynamoDBStreams20120810GetShardIteratorHandler)
  .route('/', XAmzTargetDynamoDBStreams20120810ListStreamsHandler)

export default app
