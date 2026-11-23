import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postFetchApiKey(
  args: InferRequestType<typeof client.fetch_api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fetch_api_key.$post(args, options))
}

export async function postJwtFetchApiKey(
  args: InferRequestType<typeof client.jwt.fetch_api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jwt.fetch_api_key.$post(args, options))
}

export async function postDevFetchApiKey(
  args: InferRequestType<typeof client.dev_fetch_api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dev_fetch_api_key.$post(args, options))
}

export async function getDevListUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.dev_list_users.$get(undefined, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function deleteEvents(
  args: InferRequestType<typeof client.events.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$delete(args, options))
}

export async function getGetStreamId(
  args: InferRequestType<typeof client.get_stream_id.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_stream_id.$get(args, options))
}

export async function postMarkAllAsRead(options?: ClientRequestOptions) {
  return await parseResponse(client.mark_all_as_read.$post(undefined, options))
}

export async function postMarkStreamAsRead(
  args: InferRequestType<typeof client.mark_stream_as_read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mark_stream_as_read.$post(args, options))
}

export async function postMarkTopicAsRead(
  args: InferRequestType<typeof client.mark_topic_as_read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mark_topic_as_read.$post(args, options))
}

export async function getAttachments(options?: ClientRequestOptions) {
  return await parseResponse(client.attachments.$get(undefined, options))
}

export async function deleteAttachmentsAttachmentId(
  args: InferRequestType<(typeof client.attachments)[':attachment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':attachment_id'].$delete(args, options))
}

export async function getBotStorage(
  args: InferRequestType<typeof client.bot_storage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_storage.$get(args, options))
}

export async function putBotStorage(
  args: InferRequestType<typeof client.bot_storage.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_storage.$put(args, options))
}

export async function deleteBotStorage(
  args: InferRequestType<typeof client.bot_storage.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_storage.$delete(args, options))
}

export async function getDrafts(options?: ClientRequestOptions) {
  return await parseResponse(client.drafts.$get(undefined, options))
}

export async function postDrafts(
  args: InferRequestType<typeof client.drafts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drafts.$post(args, options))
}

export async function deleteDraftsDraftId(
  args: InferRequestType<(typeof client.drafts)[':draft_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drafts[':draft_id'].$delete(args, options))
}

export async function patchDraftsDraftId(
  args: InferRequestType<(typeof client.drafts)[':draft_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drafts[':draft_id'].$patch(args, options))
}

export async function getNavigationViews(options?: ClientRequestOptions) {
  return await parseResponse(client.navigation_views.$get(undefined, options))
}

export async function postNavigationViews(
  args: InferRequestType<typeof client.navigation_views.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.navigation_views.$post(args, options))
}

export async function deleteNavigationViewsFragment(
  args: InferRequestType<(typeof client.navigation_views)[':fragment']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.navigation_views[':fragment'].$delete(args, options))
}

export async function patchNavigationViewsFragment(
  args: InferRequestType<(typeof client.navigation_views)[':fragment']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.navigation_views[':fragment'].$patch(args, options))
}

export async function getSavedSnippets(options?: ClientRequestOptions) {
  return await parseResponse(client.saved_snippets.$get(undefined, options))
}

export async function postSavedSnippets(
  args: InferRequestType<typeof client.saved_snippets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_snippets.$post(args, options))
}

export async function deleteSavedSnippetsSavedSnippetId(
  args: InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_snippets[':saved_snippet_id'].$delete(args, options))
}

export async function patchSavedSnippetsSavedSnippetId(
  args: InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_snippets[':saved_snippet_id'].$patch(args, options))
}

export async function getReminders(options?: ClientRequestOptions) {
  return await parseResponse(client.reminders.$get(undefined, options))
}

export async function postReminders(
  args: InferRequestType<typeof client.reminders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reminders.$post(args, options))
}

export async function deleteRemindersReminderId(
  args: InferRequestType<(typeof client.reminders)[':reminder_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reminders[':reminder_id'].$delete(args, options))
}

export async function getScheduledMessages(options?: ClientRequestOptions) {
  return await parseResponse(client.scheduled_messages.$get(undefined, options))
}

export async function postScheduledMessages(
  args: InferRequestType<typeof client.scheduled_messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scheduled_messages.$post(args, options))
}

export async function deleteScheduledMessagesScheduledMessageId(
  args: InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scheduled_messages[':scheduled_message_id'].$delete(args, options),
  )
}

export async function patchScheduledMessagesScheduledMessageId(
  args: InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scheduled_messages[':scheduled_message_id'].$patch(args, options),
  )
}

export async function postDefaultStreams(
  args: InferRequestType<typeof client.default_streams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.default_streams.$post(args, options))
}

export async function deleteDefaultStreams(
  args: InferRequestType<typeof client.default_streams.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.default_streams.$delete(args, options))
}

export async function getMessages(
  args: InferRequestType<typeof client.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$get(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function getMessagesMessageIdHistory(
  args: InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].history.$get(args, options))
}

export async function postMessagesFlags(
  args: InferRequestType<typeof client.messages.flags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.flags.$post(args, options))
}

export async function postMessagesFlagsNarrow(
  args: InferRequestType<typeof client.messages.flags.narrow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.flags.narrow.$post(args, options))
}

export async function postMessagesRender(
  args: InferRequestType<typeof client.messages.render.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.render.$post(args, options))
}

export async function postMessagesMessageIdReactions(
  args: InferRequestType<(typeof client.messages)[':message_id']['reactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].reactions.$post(args, options))
}

export async function deleteMessagesMessageIdReactions(
  args: InferRequestType<(typeof client.messages)[':message_id']['reactions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].reactions.$delete(args, options))
}

export async function getMessagesMessageIdReadReceipts(
  args: InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].read_receipts.$get(args, options))
}

export async function getMessagesMatchesNarrow(
  args: InferRequestType<typeof client.messages.matches_narrow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.matches_narrow.$get(args, options))
}

export async function getMessagesMessageId(
  args: InferRequestType<(typeof client.messages)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].$get(args, options))
}

export async function deleteMessagesMessageId(
  args: InferRequestType<(typeof client.messages)[':message_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].$delete(args, options))
}

export async function patchMessagesMessageId(
  args: InferRequestType<(typeof client.messages)[':message_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].$patch(args, options))
}

export async function postMessagesMessageIdReport(
  args: InferRequestType<(typeof client.messages)[':message_id']['report']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].report.$post(args, options))
}

export async function postUserUploads(
  args: InferRequestType<typeof client.user_uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_uploads.$post(args, options))
}

export async function getThumbnailStatusRealmIdStrFilename(
  args: InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.thumbnail.status[':realm_id_str'][':filename'].$get(args, options),
  )
}

export async function getUserUploadsRealmIdStrFilename(
  args: InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_uploads[':realm_id_str'][':filename'].$get(args, options))
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

export async function postUsersUserIdReactivate(
  args: InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].reactivate.$post(args, options))
}

export async function getUsersUserIdStatus(
  args: InferRequestType<(typeof client.users)[':user_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].status.$get(args, options))
}

export async function postUsersUserIdStatus(
  args: InferRequestType<(typeof client.users)[':user_id']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].status.$post(args, options))
}

export async function getUsersUserIdOrEmailPresence(
  args: InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id_or_email'].presence.$get(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function deleteUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$delete(undefined, options))
}

export async function postUsersMeApiKeyRegenerate(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.api_key.regenerate.$post(undefined, options))
}

export async function getUsersMeAlertWords(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.alert_words.$get(undefined, options))
}

export async function postUsersMeAlertWords(
  args: InferRequestType<typeof client.users.me.alert_words.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.alert_words.$post(args, options))
}

export async function deleteUsersMeAlertWords(
  args: InferRequestType<typeof client.users.me.alert_words.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.alert_words.$delete(args, options))
}

export async function postUsersMePresence(
  args: InferRequestType<typeof client.users.me.presence.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.presence.$post(args, options))
}

export async function deleteUsersMeProfileData(
  args: InferRequestType<typeof client.users.me.profile_data.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.profile_data.$delete(args, options))
}

export async function patchUsersMeProfileData(
  args: InferRequestType<typeof client.users.me.profile_data.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.profile_data.$patch(args, options))
}

export async function postUsersMeStatus(
  args: InferRequestType<typeof client.users.me.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.status.$post(args, options))
}

export async function getUsersMeStreamIdTopics(
  args: InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me[':stream_id'].topics.$get(args, options))
}

export async function getUsersMeSubscriptions(
  args: InferRequestType<typeof client.users.me.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.subscriptions.$get(args, options))
}

export async function postUsersMeSubscriptions(
  args: InferRequestType<typeof client.users.me.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.subscriptions.$post(args, options))
}

export async function deleteUsersMeSubscriptions(
  args: InferRequestType<typeof client.users.me.subscriptions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.subscriptions.$delete(args, options))
}

export async function patchUsersMeSubscriptionsMutedTopics(
  args: InferRequestType<typeof client.users.me.subscriptions.muted_topics.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.subscriptions.muted_topics.$patch(args, options))
}

export async function postMobilePushTestNotification(
  args: InferRequestType<typeof client.mobile_push.test_notification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_push.test_notification.$post(args, options))
}

export async function postMobilePushE2eeTestNotification(
  args: InferRequestType<typeof client.mobile_push.e2ee.test_notification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_push.e2ee.test_notification.$post(args, options))
}

export async function postMobilePushRegister(
  args: InferRequestType<typeof client.mobile_push.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_push.register.$post(args, options))
}

export async function postRemotesPushE2eeRegister(
  args: InferRequestType<typeof client.remotes.push.e2ee.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotes.push.e2ee.register.$post(args, options))
}

export async function postRegisterClientDevice(options?: ClientRequestOptions) {
  return await parseResponse(client.register_client_device.$post(undefined, options))
}

export async function postRemoveClientDevice(
  args: InferRequestType<typeof client.remove_client_device.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remove_client_device.$post(args, options))
}

export async function postUserTopics(
  args: InferRequestType<typeof client.user_topics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_topics.$post(args, options))
}

export async function postUsersMeMutedUsersMutedUserId(
  args: InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.muted_users[':muted_user_id'].$post(args, options))
}

export async function deleteUsersMeMutedUsersMutedUserId(
  args: InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.muted_users[':muted_user_id'].$delete(args, options))
}

export async function postUsersMeApnsDeviceToken(
  args: InferRequestType<typeof client.users.me.apns_device_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.apns_device_token.$post(args, options))
}

export async function deleteUsersMeApnsDeviceToken(
  args: InferRequestType<typeof client.users.me.apns_device_token.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.apns_device_token.$delete(args, options))
}

export async function postUsersMeAndroidGcmRegId(
  args: InferRequestType<typeof client.users.me.android_gcm_reg_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.android_gcm_reg_id.$post(args, options))
}

export async function deleteUsersMeAndroidGcmRegId(
  args: InferRequestType<typeof client.users.me.android_gcm_reg_id.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.android_gcm_reg_id.$delete(args, options))
}

export async function getUsersUserIdSubscriptionsStreamId(
  args: InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].subscriptions[':stream_id'].$get(args, options),
  )
}

export async function getUsersUserIdChannels(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].channels.$get(args, options))
}

export async function postRealmEmojiEmojiName(
  args: InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.emoji[':emoji_name'].$post(args, options))
}

export async function deleteRealmEmojiEmojiName(
  args: InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.emoji[':emoji_name'].$delete(args, options))
}

export async function getRealmEmoji(options?: ClientRequestOptions) {
  return await parseResponse(client.realm.emoji.$get(undefined, options))
}

export async function getRealmPresence(options?: ClientRequestOptions) {
  return await parseResponse(client.realm.presence.$get(undefined, options))
}

export async function getRealmDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.realm.domains.$get(undefined, options))
}

export async function postRealmDomains(
  args: InferRequestType<typeof client.realm.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.domains.$post(args, options))
}

export async function deleteRealmDomainsDomain(
  args: InferRequestType<(typeof client.realm.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.domains[':domain'].$delete(args, options))
}

export async function patchRealmDomainsDomain(
  args: InferRequestType<(typeof client.realm.domains)[':domain']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.domains[':domain'].$patch(args, options))
}

export async function postRealmDeactivate(
  args: InferRequestType<typeof client.realm.deactivate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.deactivate.$post(args, options))
}

export async function getRealmProfileFields(options?: ClientRequestOptions) {
  return await parseResponse(client.realm.profile_fields.$get(undefined, options))
}

export async function postRealmProfileFields(
  args: InferRequestType<typeof client.realm.profile_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.profile_fields.$post(args, options))
}

export async function patchRealmProfileFields(
  args: InferRequestType<typeof client.realm.profile_fields.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.profile_fields.$patch(args, options))
}

export async function deleteRealmProfileFieldsFieldId(
  args: InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.profile_fields[':field_id'].$delete(args, options))
}

export async function patchRealmProfileFieldsFieldId(
  args: InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.profile_fields[':field_id'].$patch(args, options))
}

export async function patchRealmUserSettingsDefaults(
  args: InferRequestType<typeof client.realm.user_settings_defaults.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.user_settings_defaults.$patch(args, options))
}

export async function postUsersMeAvatar(
  args: InferRequestType<typeof client.users.me.avatar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.avatar.$post(args, options))
}

export async function deleteUsersMeAvatar(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.avatar.$delete(undefined, options))
}

export async function postUsersMeSubscriptionsProperties(
  args: InferRequestType<typeof client.users.me.subscriptions.properties.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.subscriptions.properties.$post(args, options))
}

export async function patchUsersMeSubscriptionsStreamId(
  args: InferRequestType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.subscriptions[':stream_id'].$patch(args, options))
}

export async function getUsersEmail(
  args: InferRequestType<(typeof client.users)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':email'].$get(args, options))
}

export async function patchUsersEmail(
  args: InferRequestType<(typeof client.users)[':email']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':email'].$patch(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$delete(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$patch(args, options))
}

export async function getRealmLinkifiers(options?: ClientRequestOptions) {
  return await parseResponse(client.realm.linkifiers.$get(undefined, options))
}

export async function patchRealmLinkifiers(
  args: InferRequestType<typeof client.realm.linkifiers.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.linkifiers.$patch(args, options))
}

export async function postRealmFilters(
  args: InferRequestType<typeof client.realm.filters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.filters.$post(args, options))
}

export async function deleteRealmFiltersFilterId(
  args: InferRequestType<(typeof client.realm.filters)[':filter_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.filters[':filter_id'].$delete(args, options))
}

export async function patchRealmFiltersFilterId(
  args: InferRequestType<(typeof client.realm.filters)[':filter_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.filters[':filter_id'].$patch(args, options))
}

export async function postRealmPlaygrounds(
  args: InferRequestType<typeof client.realm.playgrounds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.playgrounds.$post(args, options))
}

export async function deleteRealmPlaygroundsPlaygroundId(
  args: InferRequestType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.playgrounds[':playground_id'].$delete(args, options))
}

export async function deleteExportRealmExportId(
  args: InferRequestType<(typeof client.export.realm)[':export_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.realm[':export_id'].$delete(args, options))
}

export async function getExportRealm(options?: ClientRequestOptions) {
  return await parseResponse(client.export.realm.$get(undefined, options))
}

export async function postExportRealm(
  args: InferRequestType<typeof client.export.realm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.realm.$post(args, options))
}

export async function getExportRealmConsents(options?: ClientRequestOptions) {
  return await parseResponse(client.export.realm.consents.$get(undefined, options))
}

export async function getInvites(options?: ClientRequestOptions) {
  return await parseResponse(client.invites.$get(undefined, options))
}

export async function postInvites(
  args: InferRequestType<typeof client.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites.$post(args, options))
}

export async function postInvitesMultiuse(
  args: InferRequestType<typeof client.invites.multiuse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites.multiuse.$post(args, options))
}

export async function deleteInvitesInviteId(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':invite_id'].$delete(args, options))
}

export async function deleteInvitesMultiuseInviteId(
  args: InferRequestType<(typeof client.invites.multiuse)[':invite_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites.multiuse[':invite_id'].$delete(args, options))
}

export async function postInvitesInviteIdResend(
  args: InferRequestType<(typeof client.invites)[':invite_id']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':invite_id'].resend.$post(args, options))
}

export async function postRealmTestWelcomeBotCustomMessage(
  args: InferRequestType<typeof client.realm.test_welcome_bot_custom_message.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realm.test_welcome_bot_custom_message.$post(args, options))
}

export async function postRegister(
  args: InferRequestType<typeof client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.register.$post(args, options))
}

export async function getServerSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.server_settings.$get(undefined, options))
}

export async function patchSettings(
  args: InferRequestType<typeof client.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$patch(args, options))
}

export async function getStreamsStreamIdMembers(
  args: InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':stream_id'].members.$get(args, options))
}

export async function getStreams(
  args: InferRequestType<typeof client.streams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.$get(args, options))
}

export async function getStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':stream_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':stream_id'].$get(args, options))
}

export async function deleteStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':stream_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':stream_id'].$delete(args, options))
}

export async function patchStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':stream_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':stream_id'].$patch(args, options))
}

export async function getStreamsStreamIdEmailAddress(
  args: InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':stream_id'].email_address.$get(args, options))
}

export async function postStreamsStreamIdDeleteTopic(
  args: InferRequestType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':stream_id'].delete_topic.$post(args, options))
}

export async function postTyping(
  args: InferRequestType<typeof client.typing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.typing.$post(args, options))
}

export async function postMessagesMessageIdTyping(
  args: InferRequestType<(typeof client.messages)[':message_id']['typing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':message_id'].typing.$post(args, options))
}

export async function postChannelsCreate(
  args: InferRequestType<typeof client.channels.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.create.$post(args, options))
}

export async function postUserGroupsCreate(
  args: InferRequestType<typeof client.user_groups.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups.create.$post(args, options))
}

export async function getUserGroupsUserGroupIdMembers(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups[':user_group_id'].members.$get(args, options))
}

export async function postUserGroupsUserGroupIdMembers(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups[':user_group_id'].members.$post(args, options))
}

export async function patchUserGroupsUserGroupId(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups[':user_group_id'].$patch(args, options))
}

export async function getUserGroups(
  args: InferRequestType<typeof client.user_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups.$get(args, options))
}

export async function getUserGroupsUserGroupIdSubgroups(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups[':user_group_id'].subgroups.$get(args, options))
}

export async function postUserGroupsUserGroupIdSubgroups(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups[':user_group_id'].subgroups.$post(args, options))
}

export async function getUserGroupsUserGroupIdMembersUserId(
  args: InferRequestType<
    (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_groups[':user_group_id'].members[':user_id'].$get(args, options),
  )
}

export async function postUserGroupsUserGroupIdDeactivate(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_groups[':user_group_id'].deactivate.$post(args, options))
}

export async function postChannelFoldersCreate(
  args: InferRequestType<typeof client.channel_folders.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_folders.create.$post(args, options))
}

export async function getChannelFolders(
  args: InferRequestType<typeof client.channel_folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_folders.$get(args, options))
}

export async function patchChannelFolders(
  args: InferRequestType<typeof client.channel_folders.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_folders.$patch(args, options))
}

export async function patchChannelFoldersChannelFolderId(
  args: InferRequestType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_folders[':channel_folder_id'].$patch(args, options))
}

export async function getBotsBotIdApiKey(
  args: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].api_key.$get(args, options))
}

export async function postBotsBotIdApiKeyRegenerate(
  args: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].api_key.regenerate.$post(args, options))
}

export async function postRealTime(
  args: InferRequestType<(typeof client)['real-time']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['real-time'].$post(args, options))
}

export async function postRestErrorHandling(options?: ClientRequestOptions) {
  return await parseResponse(client['rest-error-handling'].$post(undefined, options))
}

export async function postZulipOutgoingWebhook(options?: ClientRequestOptions) {
  return await parseResponse(client['zulip-outgoing-webhook'].$post(undefined, options))
}

export async function getCallsBigbluebuttonCreate(
  args: InferRequestType<typeof client.calls.bigbluebutton.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.bigbluebutton.create.$get(args, options))
}

export async function postCallsNextcloudTalkCreate(
  args: InferRequestType<typeof client.calls.nextcloud_talk.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.nextcloud_talk.create.$post(args, options))
}

export async function postCallsWebexCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.calls.webex.create.$post(undefined, options))
}

export async function postCallsGoogleMeetCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.calls.google_meet.create.$post(undefined, options))
}

export async function postCallsConstructorgroupsCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.calls.constructorgroups.create.$post(undefined, options))
}
