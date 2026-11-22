import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alpha2Name(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].$get(args, options))
}

export async function deleteV1alpha2Name(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].$delete(args, options))
}

export async function patchV1alpha2Name(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].$patch(args, options))
}

export async function postV1alpha2NameCancel(
  args: InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name:cancel'].$post(args, options))
}

export async function getV1alpha2ParentWorkerPools(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':parent'].workerPools.$get(args, options))
}

export async function postV1alpha2ParentWorkerPools(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':parent'].workerPools.$post(args, options))
}
