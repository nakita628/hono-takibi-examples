import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetTimestream20181101CancelQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.CancelQuery'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101CreateScheduledQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DeleteScheduledQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DescribeEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DescribeScheduledQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101ExecuteScheduledQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101ListScheduledQueries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ListScheduledQueries'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101PrepareQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.PrepareQuery'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101Query(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Timestream_20181101.Query'].$post(args, options))
}

export async function postXAmzTargetTimestream20181101TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101UpdateScheduledQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery'].$post(args, options),
  )
}
