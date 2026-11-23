import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetDynamoDBStreams20120810DescribeStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDBStreams20120810GetRecords(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDBStreams20120810GetShardIterator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDBStreams20120810ListStreams(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams'].$post(args, options),
  )
}
