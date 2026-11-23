import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQueryJson(
  args: InferRequestType<(typeof client)['query.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query.json'].$get(args, options))
}
