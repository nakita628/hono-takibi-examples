import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ViolatingSites(
  args: InferRequestType<typeof client.v1.violatingSites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.violatingSites.$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}
