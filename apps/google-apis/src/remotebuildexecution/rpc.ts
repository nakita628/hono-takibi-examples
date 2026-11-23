import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alphaName(
  args: InferRequestType<(typeof client.v1alpha)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name'].$get(args, options))
}

export async function deleteV1alphaName(
  args: InferRequestType<(typeof client.v1alpha)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name'].$delete(args, options))
}

export async function patchV1alphaName(
  args: InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name'].$patch(args, options))
}

export async function postV1alphaNameTestNotify(
  args: InferRequestType<(typeof client.v1alpha)[':name:testNotify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name:testNotify'].$post(args, options))
}

export async function getV1alphaParentInstances(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].instances.$get(args, options))
}

export async function postV1alphaParentInstances(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].instances.$post(args, options))
}

export async function getV1alphaParentWorkerpools(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].workerpools.$get(args, options))
}

export async function postV1alphaParentWorkerpools(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].workerpools.$post(args, options))
}
