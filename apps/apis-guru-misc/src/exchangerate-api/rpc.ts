import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLatestBaseCurrency(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.latest[':base_currency'].$get(args, options))
}
