import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2ActivityQuery(
  args: InferRequestType<(typeof client.v2)['activity:query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['activity:query'].$post(args, options))
}
