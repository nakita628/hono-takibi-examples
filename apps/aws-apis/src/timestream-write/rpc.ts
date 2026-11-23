import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetTimestream20181101CreateBatchLoadTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101CreateDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.CreateDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101CreateTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.CreateTable'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DeleteDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DeleteDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DeleteTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DeleteTable'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DescribeBatchLoadTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101DescribeDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DescribeDatabase'].$post(args, options),
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

export async function postXAmzTargetTimestream20181101DescribeTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.DescribeTable'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101ListBatchLoadTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101ListDatabases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ListDatabases'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101ListTables(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ListTables'].$post(args, options),
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

export async function postXAmzTargetTimestream20181101ResumeBatchLoadTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask'].$post(args, options),
  )
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

export async function postXAmzTargetTimestream20181101UpdateDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.UpdateDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101UpdateTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.UpdateTable'].$post(args, options),
  )
}

export async function postXAmzTargetTimestream20181101WriteRecords(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Timestream_20181101.WriteRecords'].$post(args, options),
  )
}
