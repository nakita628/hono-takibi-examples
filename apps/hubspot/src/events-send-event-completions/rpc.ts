import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEvents202609Send(
  args: InferRequestType<(typeof client.events)['2026-09']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['2026-09'].send.$post(args, options))
}

export async function postEvents202609SendBatch(
  args: InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['2026-09'].send.batch.$post(args, options))
}
