import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1NotificationsWebhooks(
  args: InferRequestType<typeof client.v1.notifications.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.webhooks.$get(args, options))
}

export async function postV1NotificationsWebhooks(
  args: InferRequestType<typeof client.v1.notifications.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.webhooks.$post(args, options))
}

export async function getV1NotificationsWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.webhooks[':webhook_id'].$get(args, options))
}

export async function deleteV1NotificationsWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchV1NotificationsWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.webhooks[':webhook_id'].$patch(args, options))
}

export async function getV1NotificationsWebhooksWebhookIdEventTypes(
  args: InferRequestType<
    (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.notifications.webhooks[':webhook_id']['event-types'].$get(args, options),
  )
}

export async function getV1NotificationsWebhooksLookup(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.notifications['webhooks-lookup'].$get(undefined, options))
}

export async function postV1NotificationsWebhooksLookup(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.notifications['webhooks-lookup'].$post(undefined, options))
}

export async function getV1NotificationsWebhooksLookupWebhookLookupId(
  args: InferRequestType<
    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$get(args, options),
  )
}

export async function deleteV1NotificationsWebhooksLookupWebhookLookupId(
  args: InferRequestType<
    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$delete(args, options),
  )
}

export async function postV1NotificationsVerifyWebhookSignature(
  args: InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.notifications['verify-webhook-signature'].$post(args, options),
  )
}

export async function getV1NotificationsWebhooksEventTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.notifications['webhooks-event-types'].$get(undefined, options),
  )
}

export async function getV1NotificationsWebhooksEvents(
  args: InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications['webhooks-events'].$get(args, options))
}

export async function getV1NotificationsWebhooksEventsEventId(
  args: InferRequestType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.notifications['webhooks-events'][':event_id'].$get(args, options),
  )
}

export async function postV1NotificationsWebhooksEventsEventIdResend(
  args: InferRequestType<
    (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.notifications['webhooks-events'][':event_id'].resend.$post(args, options),
  )
}

export async function postV1NotificationsSimulateEvent(
  args: InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications['simulate-event'].$post(args, options))
}
