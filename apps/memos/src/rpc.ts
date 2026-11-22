import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiAiTranscribe(
  args: InferRequestType<(typeof client.api)['ai:transcribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ai:transcribe'].$post(args, options))
}

export async function getApiAttachments(
  args: InferRequestType<typeof client.api.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.attachments.$get(args, options))
}

export async function postApiAttachments(
  args: InferRequestType<typeof client.api.attachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.attachments.$post(args, options))
}

export async function getApiAttachmentsAttachment(
  args: InferRequestType<(typeof client.api.attachments)[':attachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.attachments[':attachment'].$get(args, options))
}

export async function deleteApiAttachmentsAttachment(
  args: InferRequestType<(typeof client.api.attachments)[':attachment']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.attachments[':attachment'].$delete(args, options))
}

export async function patchApiAttachmentsAttachment(
  args: InferRequestType<(typeof client.api.attachments)[':attachment']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.attachments[':attachment'].$patch(args, options))
}

export async function postApiAttachmentsBatchDelete(
  args: InferRequestType<(typeof client.api)['attachments:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['attachments:batchDelete'].$post(args, options))
}

export async function postApiAttachmentsUpload(
  args: InferRequestType<(typeof client.api)['attachments:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['attachments:upload'].$post(args, options))
}

export async function getApiAuthMe(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth.me.$get(undefined, options))
}

export async function postApiAuthRefresh(
  args: InferRequestType<typeof client.api.auth.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.refresh.$post(args, options))
}

export async function postApiAuthSignin(
  args: InferRequestType<typeof client.api.auth.signin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.signin.$post(args, options))
}

export async function postApiAuthSignout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth.signout.$post(undefined, options))
}

export async function getApiIdentityProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.api['identity-providers'].$get(undefined, options))
}

export async function postApiIdentityProviders(
  args: InferRequestType<(typeof client.api)['identity-providers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-providers'].$post(args, options))
}

export async function getApiIdentityProvidersIdentityProvider(
  args: InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-providers'][':identity-provider'].$get(args, options),
  )
}

export async function deleteApiIdentityProvidersIdentityProvider(
  args: InferRequestType<
    (typeof client.api)['identity-providers'][':identity-provider']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-providers'][':identity-provider'].$delete(args, options),
  )
}

export async function patchApiIdentityProvidersIdentityProvider(
  args: InferRequestType<(typeof client.api)['identity-providers'][':identity-provider']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-providers'][':identity-provider'].$patch(args, options),
  )
}

export async function getApiInstanceConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.api.instance.configuration.$get(undefined, options))
}

export async function getApiInstanceProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.instance.profile.$get(undefined, options))
}

export async function postApiInstanceSettingsNotificationTestEmail(
  args: InferRequestType<(typeof client.api.instance.settings)['notification:testEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.instance.settings['notification:testEmail'].$post(args, options),
  )
}

export async function postApiInstanceSettingsBatchGet(
  args: InferRequestType<(typeof client.api.instance)['settings:batchGet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.instance['settings:batchGet'].$post(args, options))
}

export async function getApiInstanceStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.instance.stats.$get(undefined, options))
}

export async function getApiInstanceInstanceStar(
  args: InferRequestType<(typeof client.api.instance)[':instance']['*']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.instance[':instance']['*'].$get(args, options))
}

export async function patchApiInstanceInstanceStar(
  args: InferRequestType<(typeof client.api.instance)[':instance']['*']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.instance[':instance']['*'].$patch(args, options))
}

export async function getApiMemos(
  args: InferRequestType<typeof client.api.memos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos.$get(args, options))
}

export async function postApiMemos(
  args: InferRequestType<typeof client.api.memos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos.$post(args, options))
}

export async function getApiMemosDashLinkMetadata(
  args: InferRequestType<(typeof client.api.memos)['-']['linkMetadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos['-'].linkMetadata.$get(args, options))
}

export async function postApiMemosDashLinkMetadataBatchGet(
  args: InferRequestType<(typeof client.api.memos)['-']['linkMetadata:batchGet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos['-']['linkMetadata:batchGet'].$post(args, options))
}

export async function getApiMemosMemo(
  args: InferRequestType<(typeof client.api.memos)[':memo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].$get(args, options))
}

export async function deleteApiMemosMemo(
  args: InferRequestType<(typeof client.api.memos)[':memo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].$delete(args, options))
}

export async function patchApiMemosMemo(
  args: InferRequestType<(typeof client.api.memos)[':memo']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].$patch(args, options))
}

export async function getApiMemosMemoAttachments(
  args: InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].attachments.$get(args, options))
}

export async function patchApiMemosMemoAttachments(
  args: InferRequestType<(typeof client.api.memos)[':memo']['attachments']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].attachments.$patch(args, options))
}

export async function getApiMemosMemoReactions(
  args: InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].reactions.$get(args, options))
}

export async function postApiMemosMemoReactions(
  args: InferRequestType<(typeof client.api.memos)[':memo']['reactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].reactions.$post(args, options))
}

export async function deleteApiMemosMemoReactionsReaction(
  args: InferRequestType<(typeof client.api.memos)[':memo']['reactions'][':reaction']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.memos[':memo'].reactions[':reaction'].$delete(args, options),
  )
}

export async function getApiMemosMemoRelations(
  args: InferRequestType<(typeof client.api.memos)[':memo']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].relations.$get(args, options))
}

export async function patchApiMemosMemoRelations(
  args: InferRequestType<(typeof client.api.memos)[':memo']['relations']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].relations.$patch(args, options))
}

export async function getApiMemosMemoShares(
  args: InferRequestType<(typeof client.api.memos)[':memo']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].shares.$get(args, options))
}

export async function postApiMemosMemoShares(
  args: InferRequestType<(typeof client.api.memos)[':memo']['shares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].shares.$post(args, options))
}

export async function deleteApiMemosMemoSharesShare(
  args: InferRequestType<(typeof client.api.memos)[':memo']['shares'][':share']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memos[':memo'].shares[':share'].$delete(args, options))
}

export async function getApiSharesShareTokenMemo(
  args: InferRequestType<(typeof client.api.shares)[':shareToken']['memo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.shares[':shareToken'].memo.$get(args, options))
}

export async function getApiSpaces(
  args: InferRequestType<typeof client.api.spaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces.$get(args, options))
}

export async function postApiSpaces(
  args: InferRequestType<typeof client.api.spaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces.$post(args, options))
}

export async function getApiSpacesSpace(
  args: InferRequestType<(typeof client.api.spaces)[':space']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].$get(args, options))
}

export async function deleteApiSpacesSpace(
  args: InferRequestType<(typeof client.api.spaces)[':space']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].$delete(args, options))
}

export async function patchApiSpacesSpace(
  args: InferRequestType<(typeof client.api.spaces)[':space']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].$patch(args, options))
}

export async function getApiSpacesSpaceInvitations(
  args: InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].invitations.$get(args, options))
}

export async function postApiSpacesSpaceInvitations(
  args: InferRequestType<(typeof client.api.spaces)[':space']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].invitations.$post(args, options))
}

export async function getApiSpacesSpaceInvitationsInvitation(
  args: InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':space'].invitations[':invitation'].$get(args, options),
  )
}

export async function deleteApiSpacesSpaceInvitationsInvitation(
  args: InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':space'].invitations[':invitation'].$delete(args, options),
  )
}

export async function postApiSpacesSpaceInvitationsInvitationAccept(
  args: InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation:accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':space'].invitations[':invitation:accept'].$post(args, options),
  )
}

export async function postApiSpacesSpaceInvitationsInvitationDecline(
  args: InferRequestType<
    (typeof client.api.spaces)[':space']['invitations'][':invitation:decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':space'].invitations[':invitation:decline'].$post(args, options),
  )
}

export async function getApiSpacesSpaceMembers(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].members.$get(args, options))
}

export async function getApiSpacesSpaceMembersMember(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].members[':member'].$get(args, options))
}

export async function deleteApiSpacesSpaceMembersMember(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].members[':member'].$delete(args, options))
}

export async function patchApiSpacesSpaceMembersMember(
  args: InferRequestType<(typeof client.api.spaces)[':space']['members'][':member']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':space'].members[':member'].$patch(args, options))
}

export async function getApiUsers(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$get(args, options))
}

export async function postApiUsers(
  args: InferRequestType<typeof client.api.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$post(args, options))
}

export async function getApiUsersUser(
  args: InferRequestType<(typeof client.api.users)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].$get(args, options))
}

export async function deleteApiUsersUser(
  args: InferRequestType<(typeof client.api.users)[':user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].$delete(args, options))
}

export async function patchApiUsersUser(
  args: InferRequestType<(typeof client.api.users)[':user']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].$patch(args, options))
}

export async function getApiUsersUserLinkedIdentities(
  args: InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].linkedIdentities.$get(args, options))
}

export async function postApiUsersUserLinkedIdentities(
  args: InferRequestType<(typeof client.api.users)[':user']['linkedIdentities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].linkedIdentities.$post(args, options))
}

export async function getApiUsersUserLinkedIdentitiesLinkedIdentity(
  args: InferRequestType<
    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':user'].linkedIdentities[':linkedIdentity'].$get(args, options),
  )
}

export async function deleteApiUsersUserLinkedIdentitiesLinkedIdentity(
  args: InferRequestType<
    (typeof client.api.users)[':user']['linkedIdentities'][':linkedIdentity']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':user'].linkedIdentities[':linkedIdentity'].$delete(args, options),
  )
}

export async function getApiUsersUserNotifications(
  args: InferRequestType<(typeof client.api.users)[':user']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].notifications.$get(args, options))
}

export async function deleteApiUsersUserNotificationsNotification(
  args: InferRequestType<
    (typeof client.api.users)[':user']['notifications'][':notification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':user'].notifications[':notification'].$delete(args, options),
  )
}

export async function patchApiUsersUserNotificationsNotification(
  args: InferRequestType<
    (typeof client.api.users)[':user']['notifications'][':notification']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':user'].notifications[':notification'].$patch(args, options),
  )
}

export async function getApiUsersUserPersonalAccessTokens(
  args: InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].personalAccessTokens.$get(args, options))
}

export async function postApiUsersUserPersonalAccessTokens(
  args: InferRequestType<(typeof client.api.users)[':user']['personalAccessTokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].personalAccessTokens.$post(args, options))
}

export async function deleteApiUsersUserPersonalAccessTokensPersonalAccessToken(
  args: InferRequestType<
    (typeof client.api.users)[':user']['personalAccessTokens'][':personalAccessToken']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':user'].personalAccessTokens[':personalAccessToken'].$delete(args, options),
  )
}

export async function getApiUsersUserSettings(
  args: InferRequestType<(typeof client.api.users)[':user']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].settings.$get(args, options))
}

export async function getApiUsersUserSettingsSetting(
  args: InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].settings[':setting'].$get(args, options))
}

export async function patchApiUsersUserSettingsSetting(
  args: InferRequestType<(typeof client.api.users)[':user']['settings'][':setting']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].settings[':setting'].$patch(args, options))
}

export async function getApiUsersUserSpaceInvitations(
  args: InferRequestType<(typeof client.api.users)[':user']['spaceInvitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].spaceInvitations.$get(args, options))
}

export async function getApiUsersUserStats(
  args: InferRequestType<(typeof client.api.users)[':user']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].stats.$get(args, options))
}

export async function getApiUsersUserUsage(
  args: InferRequestType<(typeof client.api.users)[':user']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].usage.$get(args, options))
}

export async function getApiUsersUserViews(
  args: InferRequestType<(typeof client.api.users)[':user']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].views.$get(args, options))
}

export async function postApiUsersUserViews(
  args: InferRequestType<(typeof client.api.users)[':user']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].views.$post(args, options))
}

export async function getApiUsersUserViewsView(
  args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].views[':view'].$get(args, options))
}

export async function deleteApiUsersUserViewsView(
  args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].views[':view'].$delete(args, options))
}

export async function patchApiUsersUserViewsView(
  args: InferRequestType<(typeof client.api.users)[':user']['views'][':view']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].views[':view'].$patch(args, options))
}

export async function postApiUsersUserViewsReorder(
  args: InferRequestType<(typeof client.api.users)[':user']['views:reorder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user']['views:reorder'].$post(args, options))
}

export async function getApiUsersUserWebhooks(
  args: InferRequestType<(typeof client.api.users)[':user']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].webhooks.$get(args, options))
}

export async function postApiUsersUserWebhooks(
  args: InferRequestType<(typeof client.api.users)[':user']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].webhooks.$post(args, options))
}

export async function deleteApiUsersUserWebhooksWebhook(
  args: InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].webhooks[':webhook'].$delete(args, options))
}

export async function patchApiUsersUserWebhooksWebhook(
  args: InferRequestType<(typeof client.api.users)[':user']['webhooks'][':webhook']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user'].webhooks[':webhook'].$patch(args, options))
}

export async function getApiUsersUserWebhooksWebhookGetSigningSecret(
  args: InferRequestType<
    (typeof client.api.users)[':user']['webhooks'][':webhook:getSigningSecret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':user'].webhooks[':webhook:getSigningSecret'].$get(args, options),
  )
}

export async function getApiUsersUserGetStats(
  args: InferRequestType<(typeof client.api.users)[':user:getStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user:getStats'].$get(args, options))
}

export async function postApiUsersUserImportMemos(
  args: InferRequestType<(typeof client.api.users)[':user:importMemos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':user:importMemos'].$post(args, options))
}

export async function postApiUsersBatchGet(
  args: InferRequestType<(typeof client.api)['users:batchGet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['users:batchGet'].$post(args, options))
}
