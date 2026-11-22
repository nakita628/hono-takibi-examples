import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function postNotifications(
  args: InferRequestType<typeof client.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$post(args, options))
}

export async function postUpdate(
  args: InferRequestType<typeof client.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.update.$post(args, options))
}

export async function postNotificationsUpdate(
  args: InferRequestType<typeof client.notifications.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.update.$post(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.$get(undefined, options))
}

export async function postSettings(
  args: InferRequestType<typeof client.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$post(args, options))
}

export async function getTopics(
  args: InferRequestType<typeof client.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics.$get(args, options))
}

export async function getId(
  args: InferRequestType<(typeof client)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$get(args, options))
}

export async function getNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$get(args, options))
}
