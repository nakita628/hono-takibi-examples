import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function putV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$put(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function getV2Parent(
  args: InferRequestType<(typeof client.v2)[':parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].$get(args, options))
}

export async function postV2Parent(
  args: InferRequestType<(typeof client.v2)[':parent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].$post(args, options))
}
