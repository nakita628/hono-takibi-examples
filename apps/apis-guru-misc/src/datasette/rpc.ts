import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getContentJson(
  args: InferRequestType<(typeof client)['content.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['content.json'].$get(args, options))
}
