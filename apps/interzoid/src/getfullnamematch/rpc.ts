import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetfullnamematch(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getfullnamematch.$get(args, options))
}
