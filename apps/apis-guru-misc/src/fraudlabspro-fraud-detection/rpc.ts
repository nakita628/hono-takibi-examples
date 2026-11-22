import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1OrderFeedback(
  args: InferRequestType<typeof client.v1.order.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.order.feedback.$post(args, options))
}

export async function postV1OrderScreen(
  args: InferRequestType<typeof client.v1.order.screen.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.order.screen.$post(args, options))
}
