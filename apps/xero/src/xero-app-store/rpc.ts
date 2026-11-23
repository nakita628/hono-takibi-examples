import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$get(args, options))
}

export async function postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecords(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].items[':subscriptionItemId']['usage-records'].$post(
      args,
      options,
    ),
  )
}

export async function putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordId(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId'].items[':subscriptionItemId']['usage-records'][
      ':usageRecordId'
    ].$put(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdUsageRecords(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId']['usage-records'].$get(args, options),
  )
}
