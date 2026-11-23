import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(
  args: InferRequestType<typeof client.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$get(args, options))
}

export async function patchAccount(
  args: InferRequestType<typeof client.account.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$patch(args, options))
}

export async function getActivitySession(
  args: InferRequestType<typeof client.activity.session.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity.session.$get(args, options))
}

export async function getActivityWebhooks(
  args: InferRequestType<typeof client.activity.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity.webhooks.$get(args, options))
}

export async function getEmailLists(
  args: InferRequestType<(typeof client)['email-lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-lists'].$get(args, options))
}

export async function postEmailLists(
  args: InferRequestType<(typeof client)['email-lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-lists'].$post(args, options))
}

export async function getEmailListsId(
  args: InferRequestType<(typeof client)['email-lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-lists'][':id'].$get(args, options))
}

export async function deleteEmailListsId(
  args: InferRequestType<(typeof client)['email-lists'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-lists'][':id'].$delete(args, options))
}

export async function patchEmailListsId(
  args: InferRequestType<(typeof client)['email-lists'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-lists'][':id'].$patch(args, options))
}

export async function postEmailReferral(
  args: InferRequestType<typeof client.email.referral.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.referral.$post(args, options))
}

export async function postEmailWelcomeUsername(
  args: InferRequestType<(typeof client.email.welcome)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.welcome[':username'].$post(args, options))
}

export async function getForms(
  args: InferRequestType<typeof client.forms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms.$get(args, options))
}

export async function getFormsEntriesId(
  args: InferRequestType<(typeof client.forms.entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms.entries[':id'].$get(args, options))
}

export async function deleteFormsEntriesId(
  args: InferRequestType<(typeof client.forms.entries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms.entries[':id'].$delete(args, options))
}

export async function getFormsId(
  args: InferRequestType<(typeof client.forms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms[':id'].$get(args, options))
}

export async function patchFormsId(
  args: InferRequestType<(typeof client.forms)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms[':id'].$patch(args, options))
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

export async function getNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$get(args, options))
}

export async function deleteNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$delete(args, options))
}

export async function patchNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$patch(args, options))
}

export async function postRecipientsSharesInvitesShareId(
  args: InferRequestType<(typeof client.recipients.shares.invites)[':shareId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipients.shares.invites[':shareId'].$post(args, options))
}

export async function getResources(
  args: InferRequestType<typeof client.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$get(args, options))
}

export async function postResources(
  args: InferRequestType<typeof client.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$post(args, options))
}

export async function deleteResources(
  args: InferRequestType<typeof client.resources.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$delete(args, options))
}

export async function postResourcesCompress(
  args: InferRequestType<typeof client.resources.compress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.compress.$post(args, options))
}

export async function postResourcesCopy(
  args: InferRequestType<typeof client.resources.copy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.copy.$post(args, options))
}

export async function getResourcesDownload(
  args: InferRequestType<typeof client.resources.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.download.$get(args, options))
}

export async function postResourcesExtract(
  args: InferRequestType<typeof client.resources.extract.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.extract.$post(args, options))
}

export async function getResourcesList(
  args: InferRequestType<typeof client.resources.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.list.$get(args, options))
}

export async function getResourcesListId(
  args: InferRequestType<(typeof client.resources.list)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.list[':id'].$get(args, options))
}

export async function postResourcesMove(
  args: InferRequestType<typeof client.resources.move.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.move.$post(args, options))
}

export async function getResourcesPreview(
  args: InferRequestType<typeof client.resources.preview.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.preview.$get(args, options))
}

export async function postResourcesUpload(
  args: InferRequestType<typeof client.resources.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.upload.$post(args, options))
}

export async function getResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$get(args, options))
}

export async function deleteResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$delete(args, options))
}

export async function patchResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$patch(args, options))
}

export async function getShares(
  args: InferRequestType<typeof client.shares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shares.$get(args, options))
}

export async function postShares(
  args: InferRequestType<typeof client.shares.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shares.$post(args, options))
}

export async function postSharesCompleteSendId(
  args: InferRequestType<(typeof client.shares)['complete-send'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shares['complete-send'][':id'].$post(args, options))
}

export async function getSharesId(
  args: InferRequestType<(typeof client.shares)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shares[':id'].$get(args, options))
}

export async function deleteSharesId(
  args: InferRequestType<(typeof client.shares)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shares[':id'].$delete(args, options))
}

export async function patchSharesId(
  args: InferRequestType<(typeof client.shares)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shares[':id'].$patch(args, options))
}

export async function getSshKeys(
  args: InferRequestType<(typeof client)['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'].$get(args, options))
}

export async function postSshKeys(
  args: InferRequestType<(typeof client)['ssh-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'].$post(args, options))
}

export async function getSshKeysId(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'][':id'].$get(args, options))
}

export async function deleteSshKeysId(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'][':id'].$delete(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}

export async function patchUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$patch(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function postWebhooksRegenerateTokenId(
  args: InferRequestType<(typeof client.webhooks)['regenerate-token'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks['regenerate-token'][':id'].$post(args, options))
}

export async function postWebhooksResendActivityId(
  args: InferRequestType<(typeof client.webhooks.resend)[':activityId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.resend[':activityId'].$post(args, options))
}

export async function getWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$get(args, options))
}

export async function deleteWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$delete(args, options))
}

export async function patchWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$patch(args, options))
}
