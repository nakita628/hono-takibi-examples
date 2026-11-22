import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBalance(
  args: InferRequestType<typeof client.balance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balance.$get(args, options))
}

export async function getBin(
  args: InferRequestType<(typeof client)[':bin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':bin'].$get(args, options))
}
