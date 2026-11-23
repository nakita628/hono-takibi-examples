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

export async function getV1NameAuthString(
  args: InferRequestType<(typeof client.v1)[':name']['authString']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].authString.$get(args, options))
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

export async function postV1NameExport(
  args: InferRequestType<(typeof client.v1)[':name:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:export'].$post(args, options))
}

export async function postV1NameFailover(
  args: InferRequestType<(typeof client.v1)[':name:failover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:failover'].$post(args, options))
}

export async function postV1NameImport(
  args: InferRequestType<(typeof client.v1)[':name:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:import'].$post(args, options))
}

export async function postV1NameRescheduleMaintenance(
  args: InferRequestType<(typeof client.v1)[':name:rescheduleMaintenance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:rescheduleMaintenance'].$post(args, options))
}

export async function postV1NameUpgrade(
  args: InferRequestType<(typeof client.v1)[':name:upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:upgrade'].$post(args, options))
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
