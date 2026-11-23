import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getArticlesearchJson(
  args: InferRequestType<(typeof client)['articlesearch.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['articlesearch.json'].$get(args, options))
}
