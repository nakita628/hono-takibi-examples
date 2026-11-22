import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getV2NameGetEffectivePolicy(
  args: InferRequestType<(typeof client.v2)[':name:getEffectivePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:getEffectivePolicy'].$get(args, options))
}

export async function getV2ParentConstraints(
  args: InferRequestType<(typeof client.v2)[':parent']['constraints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].constraints.$get(args, options))
}

export async function getV2ParentCustomConstraints(
  args: InferRequestType<(typeof client.v2)[':parent']['customConstraints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].customConstraints.$get(args, options))
}

export async function postV2ParentCustomConstraints(
  args: InferRequestType<(typeof client.v2)[':parent']['customConstraints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].customConstraints.$post(args, options))
}

export async function getV2ParentPolicies(
  args: InferRequestType<(typeof client.v2)[':parent']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].policies.$get(args, options))
}

export async function postV2ParentPolicies(
  args: InferRequestType<(typeof client.v2)[':parent']['policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].policies.$post(args, options))
}
