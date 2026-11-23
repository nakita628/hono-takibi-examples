import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCity(
  args: InferRequestType<typeof client.city.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.city.$get(args, options))
}
