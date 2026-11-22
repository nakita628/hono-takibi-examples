import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Orders(
  args: InferRequestType<typeof client.v1.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders.$get(args, options))
}

export async function getV1OrdersOrderId(
  args: InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders[':orderId'].$get(args, options))
}
