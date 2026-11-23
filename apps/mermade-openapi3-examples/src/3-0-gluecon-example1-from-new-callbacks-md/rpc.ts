import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSubscribe(
  args: InferRequestType<typeof client.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribe.$post(args, options))
}
