import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetDynamoDbStreams20120810DescribeStreamHandler,
  xAmzTargetDynamoDbStreams20120810GetRecordsHandler,
  xAmzTargetDynamoDbStreams20120810GetShardIteratorHandler,
  xAmzTargetDynamoDbStreams20120810ListStreamsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetDynamoDbStreams20120810DescribeStreamHandler)
  .route('/', xAmzTargetDynamoDbStreams20120810GetRecordsHandler)
  .route('/', xAmzTargetDynamoDbStreams20120810GetShardIteratorHandler)
  .route('/', xAmzTargetDynamoDbStreams20120810ListStreamsHandler)

export default app
