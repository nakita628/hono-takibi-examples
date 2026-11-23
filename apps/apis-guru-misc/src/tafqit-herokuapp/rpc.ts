import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postConvert(
  args: InferRequestType<typeof client.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.$post(args, options))
}
