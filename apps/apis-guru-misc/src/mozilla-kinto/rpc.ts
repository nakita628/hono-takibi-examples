import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getApi(options?: ClientRequestOptions) {
  return await parseResponse(client.__api__.$get(undefined, options))
}

export async function getHeartbeat(options?: ClientRequestOptions) {
  return await parseResponse(client.__heartbeat__.$get(undefined, options))
}

export async function getLbheartbeat(options?: ClientRequestOptions) {
  return await parseResponse(client.__lbheartbeat__.$get(undefined, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.__version__.$get(undefined, options))
}

export async function postBatch(
  args: InferRequestType<typeof client.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.$post(args, options))
}

export async function getBuckets(
  args: InferRequestType<typeof client.buckets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets.$get(args, options))
}

export async function getBucketsMonitorCollectionsChangesRecords(
  args: InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets.monitor.collections.changes.records.$get(args, options))
}

export async function getBucketsBidCollectionsCidChangeset(
  args: InferRequestType<
    (typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.buckets[':bid'].collections[':cid'].changeset.$get(args, options),
  )
}

export async function getBucketsBucketIdCollections(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucket_id'].collections.$get(args, options))
}

export async function getBucketsBucketIdCollectionsCollectionIdRecords(
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.buckets[':bucket_id'].collections[':collection_id'].records.$get(args, options),
  )
}

export async function getBucketsBucketIdCollectionsCollectionIdRecordsId(
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].$get(args, options),
  )
}

export async function postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachment(
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].attachment.$post(
      args,
      options,
    ),
  )
}

export async function deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachment(
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].attachment.$delete(
      args,
      options,
    ),
  )
}

export async function getBucketsBucketIdCollectionsId(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucket_id'].collections[':id'].$get(args, options))
}

export async function getBucketsBucketIdGroups(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucket_id'].groups.$get(args, options))
}

export async function getBucketsBucketIdGroupsId(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucket_id'].groups[':id'].$get(args, options))
}

export async function getBucketsId(
  args: InferRequestType<(typeof client.buckets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':id'].$get(args, options))
}

export async function getContributeJson(options?: ClientRequestOptions) {
  return await parseResponse(client['contribute.json'].$get(undefined, options))
}
