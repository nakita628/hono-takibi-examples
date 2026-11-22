import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1ParentMessagesSend(
  args: InferRequestType<(typeof client.v1)[':parent']['messages:send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['messages:send'].$post(args, options))
}
