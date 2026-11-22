import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPublicHistory(
  args: InferRequestType<typeof client.public.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.history.$get(args, options))
}
