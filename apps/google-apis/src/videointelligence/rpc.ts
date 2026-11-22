import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1p3beta1VideosAnnotate(
  args: InferRequestType<(typeof client.v1p3beta1)['videos:annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p3beta1['videos:annotate'].$post(args, options))
}
