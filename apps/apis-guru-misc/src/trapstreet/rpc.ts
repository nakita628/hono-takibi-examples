import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAddress(
  args: InferRequestType<(typeof client)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':address'].$get(args, options))
}
