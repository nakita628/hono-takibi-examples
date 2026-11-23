import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetKinesis20131202AddTagsToStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.AddTagsToStream'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202CreateStream(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.CreateStream'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DecreaseStreamRetentionPeriod(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DeleteStream(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DeleteStream'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DeregisterStreamConsumer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DescribeLimits(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DescribeLimits'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DescribeStream(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DescribeStream'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DescribeStreamConsumer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DescribeStreamSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202DisableEnhancedMonitoring(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202EnableEnhancedMonitoring(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202GetRecords(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.GetRecords'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202GetShardIterator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.GetShardIterator'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202IncreaseStreamRetentionPeriod(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202ListShards(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.ListShards'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202ListStreamConsumers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202ListStreams(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.ListStreams'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202ListTagsForStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.ListTagsForStream'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202MergeShards(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.MergeShards'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202PutRecord(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.PutRecord'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202PutRecords(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.PutRecords'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202RegisterStreamConsumer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202RemoveTagsFromStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202SplitShard(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.SplitShard'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202StartStreamEncryption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202StopStreamEncryption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202UpdateShardCount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.UpdateShardCount'].$post(args, options),
  )
}

export async function postXAmzTargetKinesis20131202UpdateStreamMode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode'].$post(args, options),
  )
}
