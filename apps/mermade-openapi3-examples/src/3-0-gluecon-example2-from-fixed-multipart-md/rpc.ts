import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSubmit(
  args: InferRequestType<typeof client.submit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submit.$post(args, options))
}
