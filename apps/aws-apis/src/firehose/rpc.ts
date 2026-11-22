import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetFirehose20150804CreateDeliveryStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804DeleteDeliveryStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804DescribeDeliveryStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804ListDeliveryStreams(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804ListTagsForDeliveryStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804PutRecord(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.PutRecord'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804PutRecordBatch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.PutRecordBatch'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804StartDeliveryStreamEncryption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804StopDeliveryStreamEncryption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804TagDeliveryStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.TagDeliveryStream'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804UntagDeliveryStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream'].$post(args, options),
  )
}

export async function postXAmzTargetFirehose20150804UpdateDestination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Firehose_20150804.UpdateDestination'].$post(args, options),
  )
}
