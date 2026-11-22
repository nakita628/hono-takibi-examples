import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMetaNetworkOrigins202609IpRanges(
  args: InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta['network-origins']['2026-09']['ip-ranges'].$get(args, options),
  )
}

export async function getMetaNetworkOrigins202609IpRangesSimple(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta['network-origins']['2026-09']['ip-ranges'].simple.$get(args, options),
  )
}

export async function getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'].$get(
      args,
      options,
    ),
  )
}

export async function postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionId(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][
      ':subscription-id'
    ].$delete(args, options),
  )
}

export async function postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTest(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][
      ':subscription-id'
    ].test.$post(args, options),
  )
}
