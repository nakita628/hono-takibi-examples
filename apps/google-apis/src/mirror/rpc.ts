import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountsUserTokenAccountTypeAccountName(
  args: InferRequestType<
    (typeof client.accounts)[':userToken'][':accountType'][':accountName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':userToken'][':accountType'][':accountName'].$post(args, options),
  )
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function getContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$get(args, options))
}

export async function putContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$put(args, options))
}

export async function deleteContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$delete(args, options))
}

export async function patchContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$patch(args, options))
}

export async function getLocations(
  args: InferRequestType<typeof client.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.$get(args, options))
}

export async function getLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$get(args, options))
}

export async function getSettingsId(
  args: InferRequestType<(typeof client.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings[':id'].$get(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function postSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$post(args, options))
}

export async function putSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$put(args, options))
}

export async function deleteSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$delete(args, options))
}

export async function getTimeline(
  args: InferRequestType<typeof client.timeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline.$get(args, options))
}

export async function postTimeline(
  args: InferRequestType<typeof client.timeline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline.$post(args, options))
}

export async function getTimelineId(
  args: InferRequestType<(typeof client.timeline)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline[':id'].$get(args, options))
}

export async function putTimelineId(
  args: InferRequestType<(typeof client.timeline)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline[':id'].$put(args, options))
}

export async function deleteTimelineId(
  args: InferRequestType<(typeof client.timeline)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline[':id'].$delete(args, options))
}

export async function patchTimelineId(
  args: InferRequestType<(typeof client.timeline)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline[':id'].$patch(args, options))
}

export async function getTimelineItemIdAttachments(
  args: InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline[':itemId'].attachments.$get(args, options))
}

export async function postTimelineItemIdAttachments(
  args: InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline[':itemId'].attachments.$post(args, options))
}

export async function getTimelineItemIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timeline[':itemId'].attachments[':attachmentId'].$get(args, options),
  )
}

export async function deleteTimelineItemIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timeline[':itemId'].attachments[':attachmentId'].$delete(args, options),
  )
}
