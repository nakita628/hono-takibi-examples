import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAiAlphaSearchMessages(
  args: InferRequestType<(typeof client)['ai.alpha.search.messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai.alpha.search.messages'].$post(args, options))
}
