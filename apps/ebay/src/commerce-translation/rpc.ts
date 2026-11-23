import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTranslate(
  args: InferRequestType<typeof client.translate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.translate.$post(args, options))
}
