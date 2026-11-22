import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWebhookLogs(
  args: InferRequestType<typeof client.webhook.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.logs.$get(args, options))
}

export async function postWebhookWIdServiceId(
  args: InferRequestType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.w[':id'][':serviceId'].$post(args, options))
}

export async function getWebhookWebhooks(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.webhooks.$get(args, options))
}

export async function postWebhookWebhooks(
  args: InferRequestType<typeof client.webhook.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.webhooks.$post(args, options))
}

export async function getWebhookWebhooksId(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.webhooks[':id'].$get(args, options))
}

export async function deleteWebhookWebhooksId(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.webhooks[':id'].$delete(args, options))
}

export async function patchWebhookWebhooksId(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.webhooks[':id'].$patch(args, options))
}

export async function postWebhookWebhooksIdExecuteServiceId(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhook.webhooks[':id'].execute[':serviceId'].$post(args, options),
  )
}

export async function postWebhookWebhooksIdXServiceId(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.webhooks[':id'].x[':serviceId'].$post(args, options))
}
