import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Notes(
  args: InferRequestType<typeof client.v1.notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notes.$get(args, options))
}

export async function postV1Notes(
  args: InferRequestType<typeof client.v1.notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notes.$post(args, options))
}

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

export async function postV1ParentPermissionsBatchCreate(
  args: InferRequestType<(typeof client.v1)[':parent']['permissions:batchCreate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['permissions:batchCreate'].$post(args, options))
}

export async function postV1ParentPermissionsBatchDelete(
  args: InferRequestType<(typeof client.v1)[':parent']['permissions:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['permissions:batchDelete'].$post(args, options))
}
