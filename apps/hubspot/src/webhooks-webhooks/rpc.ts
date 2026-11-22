import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppWebhooks202609AppIdSettings(
  args: InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].settings.$get(args, options),
  )
}

export async function putAppWebhooks202609AppIdSettings(
  args: InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].settings.$put(args, options),
  )
}

export async function deleteAppWebhooks202609AppIdSettings(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].settings.$delete(args, options),
  )
}

export async function getAppWebhooks202609AppIdSubscriptions(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].subscriptions.$get(args, options),
  )
}

export async function postAppWebhooks202609AppIdSubscriptions(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].subscriptions.$post(args, options),
  )
}

export async function postAppWebhooks202609AppIdSubscriptionsBatchUpdate(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].subscriptions.batch.update.$post(args, options),
  )
}

export async function getAppWebhooks202609AppIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAppWebhooks202609AppIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAppWebhooks202609AppIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$patch(
      args,
      options,
    ),
  )
}

export async function getWebhooksJournalJournalLocal202609BatchEarliestCount(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].batch.earliest[':count'].$get(
      args,
      options,
    ),
  )
}

export async function getWebhooksJournalJournalLocal202609BatchLatestCount(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].batch.latest[':count'].$get(
      args,
      options,
    ),
  )
}

export async function postWebhooksJournalJournalLocal202609BatchRead(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].batch.read.$post(args, options),
  )
}

export async function getWebhooksJournalJournalLocal202609BatchOffsetNextCount(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].batch[':offset'].next[':count'].$get(
      args,
      options,
    ),
  )
}

export async function getWebhooksJournalJournalLocal202609Earliest(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].earliest.$get(args, options),
  )
}

export async function getWebhooksJournalJournalLocal202609Latest(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].latest.$get(args, options),
  )
}

export async function getWebhooksJournalJournalLocal202609OffsetOffsetNext(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].offset[':offset'].next.$get(
      args,
      options,
    ),
  )
}

export async function getWebhooksJournalJournalLocal202609StatusStatusId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal']['journal-local']['2026-09'].status[':statusId'].$get(args, options),
  )
}

export async function getWebhooksJournalJournal202609BatchEarliestCount(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].batch.earliest[':count'].$get(args, options),
  )
}

export async function getWebhooksJournalJournal202609BatchLatestCount(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].batch.latest[':count'].$get(args, options),
  )
}

export async function postWebhooksJournalJournal202609BatchRead(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].batch.read.$post(args, options),
  )
}

export async function getWebhooksJournalJournal202609BatchOffsetNextCount(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].batch[':offset'].next[':count'].$get(
      args,
      options,
    ),
  )
}

export async function getWebhooksJournalJournal202609Earliest(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].earliest.$get(args, options),
  )
}

export async function getWebhooksJournalJournal202609Latest(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].latest.$get(args, options),
  )
}

export async function getWebhooksJournalJournal202609OffsetOffsetNext(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].offset[':offset'].next.$get(args, options),
  )
}

export async function getWebhooksJournalJournal202609StatusStatusId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].journal['2026-09'].status[':statusId'].$get(args, options),
  )
}

export async function postWebhooksJournalSnapshots202609Crm(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].snapshots['2026-09'].crm.$post(args, options),
  )
}

export async function getWebhooksJournalSubscriptions202609(options?: ClientRequestOptions) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].$get(undefined, options),
  )
}

export async function postWebhooksJournalSubscriptions202609(
  args: InferRequestType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].$post(args, options),
  )
}

export async function postWebhooksJournalSubscriptions202609Filters(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].filters.$post(args, options),
  )
}

export async function getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].filters.subscription[
      ':subscriptionId'
    ].$get(args, options),
  )
}

export async function getWebhooksJournalSubscriptions202609FiltersFilterId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$get(args, options),
  )
}

export async function deleteWebhooksJournalSubscriptions202609FiltersFilterId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$delete(args, options),
  )
}

export async function deleteWebhooksJournalSubscriptions202609PortalsPortalId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'].portals[':portalId'].$delete(args, options),
  )
}

export async function getWebhooksJournalSubscriptions202609SubscriptionId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$get(args, options),
  )
}

export async function deleteWebhooksJournalSubscriptions202609SubscriptionId(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$delete(args, options),
  )
}
