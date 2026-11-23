import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEventNotifications(
  args: InferRequestType<(typeof client)['event-notifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-notifications'].$post(args, options))
}
