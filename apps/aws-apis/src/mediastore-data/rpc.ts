import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPath(
  args: InferRequestType<(typeof client)[':Path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Path'].$get(args, options))
}

export async function putPath(
  args: InferRequestType<(typeof client)[':Path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Path'].$put(args, options))
}

export async function deletePath(
  args: InferRequestType<(typeof client)[':Path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Path'].$delete(args, options))
}

export async function headPath(
  args: InferRequestType<(typeof client)[':Path']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Path'].$head(args, options))
}

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}
