import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':index_name'].$get(args, options))
}

export async function deleteIndexesIndexName(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':index_name'].$delete(args, options))
}

export async function patchIndexesIndexName(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':index_name'].$patch(args, options))
}

export async function getIndexesIndexNameBackups(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':index_name'].backups.$get(args, options))
}

export async function postIndexesIndexNameBackups(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':index_name'].backups.$post(args, options))
}

export async function getCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.$get(undefined, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$post(args, options))
}

export async function postIndexesCreateForModel(
  args: InferRequestType<(typeof client.indexes)['create-for-model']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes['create-for-model'].$post(args, options))
}

export async function getBackups(
  args: InferRequestType<typeof client.backups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups.$get(args, options))
}

export async function getBackupsBackupId(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':backup_id'].$get(args, options))
}

export async function deleteBackupsBackupId(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':backup_id'].$delete(args, options))
}

export async function postBackupsBackupIdCreateIndex(
  args: InferRequestType<(typeof client.backups)[':backup_id']['create-index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':backup_id']['create-index'].$post(args, options))
}

export async function getRestoreJobs(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restore-jobs'].$get(args, options))
}

export async function getRestoreJobsJobId(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restore-jobs'][':job_id'].$get(args, options))
}

export async function getCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].$get(args, options))
}

export async function deleteCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].$delete(args, options))
}
