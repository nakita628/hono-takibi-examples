import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQuery(
  args: InferRequestType<typeof client.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$get(args, options))
}
