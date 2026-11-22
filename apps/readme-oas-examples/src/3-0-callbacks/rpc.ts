import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postStreams(
  args: InferRequestType<typeof client.streams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.$post(args, options))
}
