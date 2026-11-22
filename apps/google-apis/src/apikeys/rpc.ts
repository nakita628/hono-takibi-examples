import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2KeysLookupKey(
  args: InferRequestType<(typeof client.v2)['keys:lookupKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['keys:lookupKey'].$get(args, options))
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function getV2NameKeyString(
  args: InferRequestType<(typeof client.v2)[':name']['keyString']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].keyString.$get(args, options))
}

export async function postV2NameUndelete(
  args: InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:undelete'].$post(args, options))
}

export async function getV2ParentKeys(
  args: InferRequestType<(typeof client.v2)[':parent']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].keys.$get(args, options))
}

export async function postV2ParentKeys(
  args: InferRequestType<(typeof client.v2)[':parent']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].keys.$post(args, options))
}
