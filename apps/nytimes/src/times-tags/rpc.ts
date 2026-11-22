import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTimestags(
  args: InferRequestType<typeof client.timestags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timestags.$get(args, options))
}
