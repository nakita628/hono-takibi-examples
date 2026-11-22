import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.balance.$get(undefined, options))
}

export async function postSend(
  args: InferRequestType<typeof client.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.send.$post(args, options))
}

export async function postSendbatch(
  args: InferRequestType<typeof client.sendbatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendbatch.$post(args, options))
}
