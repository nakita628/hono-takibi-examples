import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMarketingMarketingEvents202609(
  args: InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing['marketing-events']['2026-09'].$get(args, options))
}

export async function getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdLists(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
      ':externalEventId'
    ].lists.$get(args, options),
  )
}

export async function putMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
      ':externalEventId'
    ].lists[':listId'].$put(args, options),
  )
}

export async function deleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
      ':externalEventId'
    ].lists[':listId'].$delete(args, options),
  )
}

export async function getMarketingMarketingEvents202609AssociationsMarketingEventIdLists(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists.$get(
      args,
      options,
    ),
  )
}

export async function putMarketingMarketingEvents202609AssociationsMarketingEventIdListsListId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists[
      ':listId'
    ].$put(args, options),
  )
}

export async function deleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists[
      ':listId'
    ].$delete(args, options),
  )
}

export async function postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreate(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].attendance[':externalEventId'][
      ':subscriberState'
    ].create.$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreate(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].attendance[':externalEventId'][
      ':subscriberState'
    ]['email-create'].$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609BatchArchive(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].batch.archive.$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609BatchUpdate(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].batch.update.$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609Events(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events.$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609EventsDelete(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events.delete.$post(args, options),
  )
}

export async function getMarketingMarketingEvents202609EventsSearch(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events.search.$get(args, options),
  )
}

export async function postMarketingMarketingEvents202609EventsUpsert(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events.upsert.$post(args, options),
  )
}

export async function getMarketingMarketingEvents202609EventsExternalEventId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$get(args, options),
  )
}

export async function putMarketingMarketingEvents202609EventsExternalEventId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$put(args, options),
  )
}

export async function deleteMarketingMarketingEvents202609EventsExternalEventId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchMarketingMarketingEvents202609EventsExternalEventId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$patch(
      args,
      options,
    ),
  )
}

export async function postMarketingMarketingEvents202609EventsExternalEventIdCancel(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function postMarketingMarketingEvents202609EventsExternalEventIdComplete(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'].complete.$post(
      args,
      options,
    ),
  )
}

export async function postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsert(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'][':subscriberState'][
      'email-upsert'
    ].$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsert(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].events[':externalEventId'][
      ':subscriberState'
    ].upsert.$post(args, options),
  )
}

export async function getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdown(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].participations.contacts[
      ':contactIdentifier'
    ].breakdown.$get(args, options),
  )
}

export async function getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
      ':externalEventId'
    ].$get(args, options),
  )
}

export async function getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdown(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
      ':externalEventId'
    ].breakdown.$get(args, options),
  )
}

export async function getMarketingMarketingEvents202609ParticipationsMarketingEventId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].participations[':marketingEventId'].$get(
      args,
      options,
    ),
  )
}

export async function getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdown(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'].participations[
      ':marketingEventId'
    ].breakdown.$get(args, options),
  )
}

export async function getMarketingMarketingEvents202609AppIdSettings(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':appId'].settings.$get(args, options),
  )
}

export async function postMarketingMarketingEvents202609AppIdSettings(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':appId'].settings.$post(args, options),
  )
}

export async function getMarketingMarketingEvents202609ExternalEventIdIdentifiers(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':externalEventId'].identifiers.$get(
      args,
      options,
    ),
  )
}

export async function getMarketingMarketingEvents202609ObjectId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':objectId'].$get(args, options),
  )
}

export async function deleteMarketingMarketingEvents202609ObjectId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':objectId'].$delete(args, options),
  )
}

export async function patchMarketingMarketingEvents202609ObjectId(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':objectId'].$patch(args, options),
  )
}

export async function postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreate(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':objectId'].attendance[
      ':subscriberState'
    ].create.$post(args, options),
  )
}

export async function postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreate(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['marketing-events']['2026-09'][':objectId'].attendance[':subscriberState'][
      'email-create'
    ].$post(args, options),
  )
}
