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

export async function getV1ParentLineageEvents(
  args: InferRequestType<(typeof client.v1)[':parent']['lineageEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].lineageEvents.$get(args, options))
}

export async function postV1ParentLineageEvents(
  args: InferRequestType<(typeof client.v1)[':parent']['lineageEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].lineageEvents.$post(args, options))
}

export async function getV1ParentProcesses(
  args: InferRequestType<(typeof client.v1)[':parent']['processes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].processes.$get(args, options))
}

export async function postV1ParentProcesses(
  args: InferRequestType<(typeof client.v1)[':parent']['processes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].processes.$post(args, options))
}

export async function getV1ParentRuns(
  args: InferRequestType<(typeof client.v1)[':parent']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].runs.$get(args, options))
}

export async function postV1ParentRuns(
  args: InferRequestType<(typeof client.v1)[':parent']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].runs.$post(args, options))
}

export async function postV1ParentBatchSearchLinkProcesses(
  args: InferRequestType<(typeof client.v1)[':parent:batchSearchLinkProcesses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:batchSearchLinkProcesses'].$post(args, options))
}

export async function postV1ParentSearchLinks(
  args: InferRequestType<(typeof client.v1)[':parent:searchLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:searchLinks'].$post(args, options))
}
