import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOpinions(
  args: InferRequestType<typeof client.opinions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.opinions.$post(args, options))
}
