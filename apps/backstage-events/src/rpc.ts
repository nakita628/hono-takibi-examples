import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBusV1Events(
  args: InferRequestType<typeof client.bus.v1.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bus.v1.events.$post(args, options))
}

export async function putBusV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bus.v1.subscriptions[':subscriptionId'].$put(args, options))
}

export async function getBusV1SubscriptionsSubscriptionIdEvents(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bus.v1.subscriptions[':subscriptionId'].events.$get(args, options),
  )
}
