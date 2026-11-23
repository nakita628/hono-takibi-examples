import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Clips(
  args: InferRequestType<typeof client.api.v1.clips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clips.$get(args, options))
}

export async function postApiV1Clips(
  args: InferRequestType<typeof client.api.v1.clips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clips.$post(args, options))
}

export async function getApiV1ClipsId(
  args: InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clips[':id'].$get(args, options))
}

export async function putApiV1ClipsId(
  args: InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clips[':id'].$put(args, options))
}

export async function deleteApiV1ClipsId(
  args: InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clips[':id'].$delete(args, options))
}

export async function getApiV1DirectUploads(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.direct_uploads.$get(undefined, options))
}

export async function getApiV1Medias(
  args: InferRequestType<typeof client.api.v1.medias.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.medias.$get(args, options))
}

export async function postApiV1Medias(
  args: InferRequestType<typeof client.api.v1.medias.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.medias.$post(args, options))
}

export async function getApiV1MediasId(
  args: InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.medias[':id'].$get(args, options))
}

export async function putApiV1MediasId(
  args: InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.medias[':id'].$put(args, options))
}

export async function deleteApiV1MediasId(
  args: InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.medias[':id'].$delete(args, options))
}

export async function getApiV1WebhookSubscriptions(
  args: InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhook_subscriptions.$get(args, options))
}

export async function postApiV1WebhookSubscriptions(
  args: InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhook_subscriptions.$post(args, options))
}

export async function getApiV1WebhookSubscriptionsId(
  args: InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhook_subscriptions[':id'].$get(args, options))
}

export async function deleteApiV1WebhookSubscriptionsId(
  args: InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhook_subscriptions[':id'].$delete(args, options))
}
