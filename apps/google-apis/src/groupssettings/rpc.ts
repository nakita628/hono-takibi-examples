import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGroupUniqueId(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':groupUniqueId'].$get(args, options))
}

export async function putGroupUniqueId(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':groupUniqueId'].$put(args, options))
}

export async function patchGroupUniqueId(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':groupUniqueId'].$patch(args, options))
}
