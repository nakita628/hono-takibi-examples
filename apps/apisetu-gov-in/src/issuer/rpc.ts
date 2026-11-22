import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postYourPullDOCRequestAPIPath(
  args: InferRequestType<(typeof client)['Your Pull DOC Request API Path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['Your Pull DOC Request API Path'].$post(args, options))
}

export async function postYourPullURIRequestAPIPath(
  args: InferRequestType<(typeof client)['Your Pull URI Request API Path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['Your Pull URI Request API Path'].$post(args, options))
}
