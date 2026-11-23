import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}
