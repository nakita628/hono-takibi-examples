import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPersonalizeRanking(
  args: InferRequestType<(typeof client)['personalize-ranking']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['personalize-ranking'].$post(args, options))
}

export async function postRecommendations(
  args: InferRequestType<typeof client.recommendations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.$post(args, options))
}
