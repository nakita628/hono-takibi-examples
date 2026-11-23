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

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameRestore(
  args: InferRequestType<(typeof client.v1)[':name:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:restore'].$post(args, options))
}

export async function postV1NameRevert(
  args: InferRequestType<(typeof client.v1)[':name:revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:revert'].$post(args, options))
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

export async function getV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$get(args, options))
}

export async function postV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$post(args, options))
}

export async function getV1ParentSnapshots(
  args: InferRequestType<(typeof client.v1)[':parent']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].snapshots.$get(args, options))
}

export async function postV1ParentSnapshots(
  args: InferRequestType<(typeof client.v1)[':parent']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].snapshots.$post(args, options))
}
