import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAiNews(
  args: InferRequestType<typeof client.ai.news.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.news.$get(args, options))
}
