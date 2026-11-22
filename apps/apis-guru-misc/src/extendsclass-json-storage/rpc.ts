import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBin(options?: ClientRequestOptions) {
  return await parseResponse(client.bin.$post(undefined, options))
}

export async function getBinId(
  args: InferRequestType<(typeof client.bin)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bin[':id'].$get(args, options))
}

export async function putBinId(
  args: InferRequestType<(typeof client.bin)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bin[':id'].$put(args, options))
}

export async function deleteBinId(
  args: InferRequestType<(typeof client.bin)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bin[':id'].$delete(args, options))
}

export async function patchBinId(
  args: InferRequestType<(typeof client.bin)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bin[':id'].$patch(args, options))
}
