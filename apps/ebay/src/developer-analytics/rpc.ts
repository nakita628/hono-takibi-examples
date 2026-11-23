import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRateLimitIndex(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rate_limit.index.$get(args, options))
}

export async function getUserRateLimitIndex(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_rate_limit.index.$get(args, options))
}
