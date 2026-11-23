import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function deleteV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$delete(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function getV1ParentBackupPlans(
  args: InferRequestType<(typeof client.v1)[':parent']['backupPlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backupPlans.$get(args, options))
}

export async function postV1ParentBackupPlans(
  args: InferRequestType<(typeof client.v1)[':parent']['backupPlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backupPlans.$post(args, options))
}

export async function getV1ParentBackups(
  args: InferRequestType<(typeof client.v1)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backups.$get(args, options))
}

export async function postV1ParentBackups(
  args: InferRequestType<(typeof client.v1)[':parent']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backups.$post(args, options))
}

export async function getV1ParentRestorePlans(
  args: InferRequestType<(typeof client.v1)[':parent']['restorePlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].restorePlans.$get(args, options))
}

export async function postV1ParentRestorePlans(
  args: InferRequestType<(typeof client.v1)[':parent']['restorePlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].restorePlans.$post(args, options))
}

export async function getV1ParentRestores(
  args: InferRequestType<(typeof client.v1)[':parent']['restores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].restores.$get(args, options))
}

export async function postV1ParentRestores(
  args: InferRequestType<(typeof client.v1)[':parent']['restores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].restores.$post(args, options))
}

export async function getV1ParentVolumeBackups(
  args: InferRequestType<(typeof client.v1)[':parent']['volumeBackups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].volumeBackups.$get(args, options))
}

export async function getV1ParentVolumeRestores(
  args: InferRequestType<(typeof client.v1)[':parent']['volumeRestores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].volumeRestores.$get(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
