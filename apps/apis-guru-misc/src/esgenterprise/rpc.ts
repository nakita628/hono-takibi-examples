import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}
