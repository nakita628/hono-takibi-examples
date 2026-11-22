import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Assets(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function getV1NameAssets(
  args: InferRequestType<(typeof client.v1)[':name']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].assets.$get(args, options))
}

export async function getV1NameLikedassets(
  args: InferRequestType<(typeof client.v1)[':name']['likedassets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].likedassets.$get(args, options))
}
