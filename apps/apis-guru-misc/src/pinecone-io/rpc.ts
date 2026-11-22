import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.$get(undefined, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$post(args, options))
}

export async function getCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].$get(args, options))
}

export async function deleteCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].$delete(args, options))
}

export async function postDescribeIndexStats(
  args: InferRequestType<typeof client.describe_index_stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describe_index_stats.$post(args, options))
}

export async function getIndexes(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.$get(undefined, options))
}

export async function postIndexes(
  args: InferRequestType<typeof client.indexes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.$post(args, options))
}

export async function getIndexesIndexName(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexName'].$get(args, options))
}

export async function deleteIndexesIndexName(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexName'].$delete(args, options))
}

export async function patchIndexesIndexName(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexName'].$patch(args, options))
}

export async function postQuery(
  args: InferRequestType<typeof client.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$post(args, options))
}

export async function postVectorsDelete(
  args: InferRequestType<typeof client.vectors.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vectors.delete.$post(args, options))
}

export async function postVectorsFetch(
  args: InferRequestType<typeof client.vectors.fetch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vectors.fetch.$post(args, options))
}

export async function postVectorsUpdate(
  args: InferRequestType<typeof client.vectors.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vectors.update.$post(args, options))
}

export async function postVectorsUpsert(
  args: InferRequestType<typeof client.vectors.upsert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vectors.upsert.$post(args, options))
}
