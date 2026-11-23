import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$get(args, options))
}

export async function deleteV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$delete(args, options))
}

export async function patchV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$patch(args, options))
}

export async function getV1beta2NameDownload(
  args: InferRequestType<(typeof client.v1beta2)[':name:download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:download'].$get(args, options))
}

export async function getV1beta2ParentModels(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].models.$get(args, options))
}

export async function postV1beta2ParentModels(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].models.$post(args, options))
}
