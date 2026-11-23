import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiNotificationsArchiveSelectedJson(
  args: InferRequestType<(typeof client.api.notifications)['archive_selected.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications['archive_selected.json'].$post(args, options))
}

export async function deleteApiNotificationsDeleteSelectedJson(
  args: InferRequestType<(typeof client.api.notifications)['delete_selected.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.notifications['delete_selected.json'].$delete(args, options),
  )
}

export async function getApiNotificationsJson(
  args: InferRequestType<(typeof client.api)['notifications.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['notifications.json'].$get(args, options))
}

export async function getApiNotificationsLookupJson(
  args: InferRequestType<(typeof client.api.notifications)['lookup.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications['lookup.json'].$get(args, options))
}

export async function getApiNotificationsMarkReadSelectedJson(
  args: InferRequestType<(typeof client.api.notifications)['mark_read_selected.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.notifications['mark_read_selected.json'].$get(args, options),
  )
}

export async function postApiNotificationsMuteSelectedJson(
  args: InferRequestType<(typeof client.api.notifications)['mute_selected.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications['mute_selected.json'].$post(args, options))
}

export async function postApiNotificationsIdStarJson(
  args: InferRequestType<(typeof client.api.notifications)[':id']['star.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications[':id']['star.json'].$post(args, options))
}

export async function postApiNotificationsSyncJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.notifications['sync.json'].$post(undefined, options))
}

export async function getApiNotificationsSyncingJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.notifications['syncing.json'].$get(undefined, options))
}

export async function getApiNotificationsUnreadCountJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.notifications['unread_count.json'].$get(undefined, options))
}

export async function getApiPinnedSearchesJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api['pinned_searches.json'].$get(undefined, options))
}

export async function postApiPinnedSearchesJson(
  args: InferRequestType<(typeof client.api)['pinned_searches.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['pinned_searches.json'].$post(args, options))
}

export async function getApiPinnedSearchesIdJson(
  args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pinned_searches[':id.json'].$get(args, options))
}

export async function deleteApiPinnedSearchesIdJson(
  args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pinned_searches[':id.json'].$delete(args, options))
}

export async function patchApiPinnedSearchesIdJson(
  args: InferRequestType<(typeof client.api.pinned_searches)[':id.json']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pinned_searches[':id.json'].$patch(args, options))
}

export async function getApiUsersProfileJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.users['profile.json'].$get(undefined, options))
}

export async function deleteApiUsersIdJson(
  args: InferRequestType<(typeof client.api.users)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id.json'].$delete(args, options))
}

export async function patchApiUsersIdJson(
  args: InferRequestType<(typeof client.api.users)[':id.json']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id.json'].$patch(args, options))
}
