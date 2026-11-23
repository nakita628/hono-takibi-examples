import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function putSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$put(args, options))
}

export async function getSubscriptionsMe(
  args: InferRequestType<typeof client.subscriptions.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.me.$get(args, options))
}

export async function getSubscriptionsSettings(
  args: InferRequestType<typeof client.subscriptions.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.settings.$get(args, options))
}

export async function putSubscriptionsSettings(
  args: InferRequestType<typeof client.subscriptions.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.settings.$put(args, options))
}

export async function getSubscriptionsRecurrenceId(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':recurrenceId'].$get(args, options))
}

export async function patchSubscriptionsRecurrenceId(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':recurrenceId'].$patch(args, options))
}

export async function getSubscriptionsRecurrenceIdAddresses(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':recurrenceId'].addresses.$get(args, options))
}

export async function postSubscriptionsRecurrenceIdItems(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':recurrenceId'].items.$post(args, options))
}

export async function patchSubscriptionsRecurrenceIdReindex(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':recurrenceId'].reindex.$patch(args, options))
}

export async function getSubscriptionsRecurrenceidAccounts(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':recurrenceid'].accounts.$get(args, options))
}
