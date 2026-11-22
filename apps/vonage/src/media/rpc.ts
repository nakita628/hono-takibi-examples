import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function deleteId(options?: ClientRequestOptions) {
  return await parseResponse(client[':id'].$delete(undefined, options))
}

export async function getIdInfo(options?: ClientRequestOptions) {
  return await parseResponse(client[':id'].info.$get(undefined, options))
}

export async function putIdInfo(
  args: InferRequestType<(typeof client)[':id']['info']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].info.$put(args, options))
}
