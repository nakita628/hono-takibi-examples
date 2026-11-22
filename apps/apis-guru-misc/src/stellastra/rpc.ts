import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPostReview(
  args: InferRequestType<(typeof client)['post-review']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['post-review'].$post(args, options))
}
