import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGlobalpageload(
  args: InferRequestType<typeof client.globalpageload.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.globalpageload.$get(args, options))
}
