import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Subscriptions(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].subscriptions.$get(args, options))
}

export async function postCrmObjects202609Subscriptions(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].subscriptions.$post(args, options))
}

export async function postCrmObjects202609SubscriptionsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609SubscriptionsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609SubscriptionsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609SubscriptionsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609SubscriptionsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609SubscriptionsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609SubscriptionsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['subscriptions']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].subscriptions.merge.$post(args, options))
}

export async function postCrmObjects202609SubscriptionsSearch(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions.search.$post(args, options),
  )
}

export async function getCrmObjects202609SubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions[':subscriptionId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609SubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions'][':subscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions[':subscriptionId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609SubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions'][':subscriptionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions[':subscriptionId'].$patch(args, options),
  )
}

export async function getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['subscriptions'][':subscriptionId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].subscriptions[':subscriptionId'].associations[
      ':toObjectType'
    ].$get(args, options),
  )
}

export async function putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
      ':toObjectType'
    ][':toObjectId'].$put(args, options),
  )
}

export async function putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$put(args, options),
  )
}

export async function deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$delete(args, options),
  )
}
