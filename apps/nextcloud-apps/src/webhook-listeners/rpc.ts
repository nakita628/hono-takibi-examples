import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsWebhookListenersApiV1Webhooks(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$get(args, options),
  )
}

export async function postOcsV2PhpAppsWebhookListenersApiV1Webhooks(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$post(args, options),
  )
}

export async function getOcsV2PhpAppsWebhookListenersApiV1WebhooksId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsWebhookListenersApiV1WebhooksId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$delete(args, options),
  )
}

export async function deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppid(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.byappid[':appid'].$delete(
      args,
      options,
    ),
  )
}
