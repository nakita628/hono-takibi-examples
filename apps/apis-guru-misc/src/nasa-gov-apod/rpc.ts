import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApod(
  args: InferRequestType<typeof client.apod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apod.$get(args, options))
}
