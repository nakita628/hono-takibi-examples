import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetDynamoDBStreams20120810DescribeStreamRoute,
  postXAmzTargetDynamoDBStreams20120810GetRecordsRoute,
  postXAmzTargetDynamoDBStreams20120810GetShardIteratorRoute,
  postXAmzTargetDynamoDBStreams20120810ListStreamsRoute,
} from './routes'
import {
  postXAmzTargetDynamoDBStreams20120810DescribeStreamRouteHandler,
  postXAmzTargetDynamoDBStreams20120810GetRecordsRouteHandler,
  postXAmzTargetDynamoDBStreams20120810GetShardIteratorRouteHandler,
  postXAmzTargetDynamoDBStreams20120810ListStreamsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetDynamoDBStreams20120810DescribeStreamRoute,
    postXAmzTargetDynamoDBStreams20120810DescribeStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetDynamoDBStreams20120810GetRecordsRoute,
    postXAmzTargetDynamoDBStreams20120810GetRecordsRouteHandler,
  )
  .openapi(
    postXAmzTargetDynamoDBStreams20120810GetShardIteratorRoute,
    postXAmzTargetDynamoDBStreams20120810GetShardIteratorRouteHandler,
  )
  .openapi(
    postXAmzTargetDynamoDBStreams20120810ListStreamsRoute,
    postXAmzTargetDynamoDBStreams20120810ListStreamsRouteHandler,
  )

export default app
