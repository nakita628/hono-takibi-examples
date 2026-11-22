import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWellKnownMercure(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['.well-known'].mercure.$get(args, options))
}

export async function postWellKnownMercure(
  args: InferRequestType<(typeof client)['.well-known']['mercure']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['.well-known'].mercure.$post(args, options))
}

export async function getWellKnownMercureSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known'].mercure.subscriptions.$get(undefined, options))
}

export async function getWellKnownMercureSubscriptionsTopic(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['.well-known'].mercure.subscriptions[':topic'].$get(args, options),
  )
}

export async function getWellKnownMercureSubscriptionsTopicSubscriber(
  args: InferRequestType<
    (typeof client)['.well-known']['mercure']['subscriptions'][':topic'][':subscriber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['.well-known'].mercure.subscriptions[':topic'][':subscriber'].$get(args, options),
  )
}
