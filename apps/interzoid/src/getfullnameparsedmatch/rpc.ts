import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetfullnameparsedmatch(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getfullnameparsedmatch.$get(args, options))
}
