import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Subscriptions(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.$get(args, options))
}

export async function getV1SubscriptionsProductGroups(
  args: InferRequestType<typeof client.v1.subscriptions.productGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.productGroups.$get(args, options))
}

export async function getV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscriptionId'].$get(args, options))
}

export async function deleteV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscriptionId'].$delete(args, options))
}

export async function patchV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscriptionId'].$patch(args, options))
}
