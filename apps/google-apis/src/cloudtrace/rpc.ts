import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2beta1Name(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].$get(args, options))
}

export async function deleteV2beta1Name(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].$delete(args, options))
}

export async function patchV2beta1Name(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].$patch(args, options))
}

export async function getV2beta1ParentTraceSinks(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':parent'].traceSinks.$get(args, options))
}

export async function postV2beta1ParentTraceSinks(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':parent'].traceSinks.$post(args, options))
}
