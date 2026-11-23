import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGetMedia(
  args: InferRequestType<typeof client.getMedia.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getMedia.$post(args, options))
}
