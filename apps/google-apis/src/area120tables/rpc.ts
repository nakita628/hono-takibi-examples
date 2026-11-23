import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alpha1Tables(
  args: InferRequestType<typeof client.v1alpha1.tables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1.tables.$get(args, options))
}

export async function getV1alpha1Workspaces(
  args: InferRequestType<typeof client.v1alpha1.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1.workspaces.$get(args, options))
}

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}

export async function patchV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$patch(args, options))
}

export async function getV1alpha1ParentRows(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].rows.$get(args, options))
}

export async function postV1alpha1ParentRows(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].rows.$post(args, options))
}

export async function postV1alpha1ParentRowsBatchCreate(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent']['rows:batchCreate'].$post(args, options))
}

export async function postV1alpha1ParentRowsBatchDelete(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent']['rows:batchDelete'].$post(args, options))
}

export async function postV1alpha1ParentRowsBatchUpdate(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent']['rows:batchUpdate'].$post(args, options))
}
