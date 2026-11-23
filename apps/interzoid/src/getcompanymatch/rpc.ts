import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetcompanymatch(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getcompanymatch.$get(args, options))
}
