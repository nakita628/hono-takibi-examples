import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get2Account(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].account.$get(undefined, options))
}

export async function post2Account(
  args: InferRequestType<(typeof client)['2']['account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].account.$post(args, options))
}

export async function get2AccountActivitySubscriptionsCount(options?: ClientRequestOptions) {
  return await parseResponse(
    client['2'].account_activity.subscriptions.count.$get(undefined, options),
  )
}

export async function get2AccountActivityWebhooksWebhookIdSubscriptionsAll(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$get(args, options),
  )
}

export async function post2AccountActivityWebhooksWebhookIdSubscriptionsAll(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$post(args, options),
  )
}

export async function get2AccountActivityWebhooksWebhookIdSubscriptionsAllList(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.list.$get(args, options),
  )
}

export async function delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAll(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].account_activity.webhooks[':webhook_id'].subscriptions[':user_id'].all.$delete(
      args,
      options,
    ),
  )
}

export async function get2ActivityStream(
  args: InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].activity.stream.$get(args, options))
}

export async function get2ActivitySubscriptions(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].activity.subscriptions.$get(args, options))
}

export async function post2ActivitySubscriptions(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].activity.subscriptions.$post(args, options))
}

export async function delete2ActivitySubscriptions(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].activity.subscriptions.$delete(args, options))
}

export async function put2ActivitySubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].activity.subscriptions[':subscription_id'].$put(args, options),
  )
}

export async function delete2ActivitySubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].activity.subscriptions[':subscription_id'].$delete(args, options),
  )
}

export async function post2ArticlesDraft(
  args: InferRequestType<(typeof client)['2']['articles']['draft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].articles.draft.$post(args, options))
}

export async function post2ArticlesArticleIdPublish(
  args: InferRequestType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].articles[':article_id'].publish.$post(args, options))
}

export async function get2Bots(
  args: InferRequestType<(typeof client)['2']['bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].bots.$get(args, options))
}

export async function post2Bots(
  args: InferRequestType<(typeof client)['2']['bots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].bots.$post(args, options))
}

export async function put2BotsId(
  args: InferRequestType<(typeof client)['2']['bots'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].bots[':id'].$put(args, options))
}

export async function delete2BotsId(
  args: InferRequestType<(typeof client)['2']['bots'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].bots[':id'].$delete(args, options))
}

export async function post2BotsIdToken(
  args: InferRequestType<(typeof client)['2']['bots'][':id']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].bots[':id'].token.$post(args, options))
}

export async function delete2BotsIdToken(
  args: InferRequestType<(typeof client)['2']['bots'][':id']['token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].bots[':id'].token.$delete(args, options))
}

export async function get2Broadcasts(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.$get(args, options))
}

export async function post2Broadcasts(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.$post(args, options))
}

export async function get2BroadcastsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].broadcasts.categories.$get(undefined, options))
}

export async function get2BroadcastsChatModerators(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.chat.moderators.$get(args, options))
}

export async function post2BroadcastsChatModerators(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.chat.moderators.$post(args, options))
}

export async function delete2BroadcastsChatModeratorsUserId(
  args: InferRequestType<
    (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].broadcasts.chat.moderators[':user_id'].$delete(args, options),
  )
}

export async function get2BroadcastsChatMutes(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.chat.mutes.$get(args, options))
}

export async function post2BroadcastsChatMutes(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.chat.mutes.$post(args, options))
}

export async function delete2BroadcastsChatMutesUserId(
  args: InferRequestType<
    (typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.chat.mutes[':user_id'].$delete(args, options))
}

export async function get2BroadcastsScheduled(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.scheduled.$get(args, options))
}

export async function post2BroadcastsScheduled(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.scheduled.$post(args, options))
}

export async function get2BroadcastsScheduledId(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.scheduled[':id'].$get(args, options))
}

export async function put2BroadcastsScheduledId(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.scheduled[':id'].$put(args, options))
}

export async function delete2BroadcastsScheduledId(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.scheduled[':id'].$delete(args, options))
}

export async function post2BroadcastsScheduledIdLive(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts.scheduled[':id'].live.$post(args, options))
}

export async function get2BroadcastsId(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].$get(args, options))
}

export async function put2BroadcastsId(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].$put(args, options))
}

export async function delete2BroadcastsId(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].$delete(args, options))
}

export async function get2BroadcastsIdChat(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].chat.$get(args, options))
}

export async function post2BroadcastsIdChat(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].chat.$post(args, options))
}

export async function post2BroadcastsIdChatMutes(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].chat.mutes.$post(args, options))
}

export async function delete2BroadcastsIdChatMutesUserId(
  args: InferRequestType<
    (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].broadcasts[':id'].chat.mutes[':user_id'].$delete(args, options),
  )
}

export async function delete2BroadcastsIdChatMessageId(
  args: InferRequestType<
    (typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].broadcasts[':id'].chat[':message_id'].$delete(args, options),
  )
}

export async function put2BroadcastsIdState(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].broadcasts[':id'].state.$put(args, options))
}

export async function post2Calls(
  args: InferRequestType<(typeof client)['2']['calls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.$post(args, options))
}

export async function get2CallsScheduled(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.scheduled.$get(args, options))
}

export async function post2CallsScheduled(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.scheduled.$post(args, options))
}

export async function get2CallsScheduledId(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.scheduled[':id'].$get(args, options))
}

export async function put2CallsScheduledId(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.scheduled[':id'].$put(args, options))
}

export async function delete2CallsScheduledId(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.scheduled[':id'].$delete(args, options))
}

export async function post2CallsScheduledIdRsvp(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls.scheduled[':id'].rsvp.$post(args, options))
}

export async function get2CallsId(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls[':id'].$get(args, options))
}

export async function post2CallsIdJoin(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls[':id'].join.$post(args, options))
}

export async function post2CallsIdLeave(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].calls[':id'].leave.$post(args, options))
}

export async function get2ChatConversations(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations.$get(args, options))
}

export async function post2ChatConversationsGroup(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations.group.$post(args, options))
}

export async function post2ChatConversationsGroupInitialize(options?: ClientRequestOptions) {
  return await parseResponse(
    client['2'].chat.conversations.group.initialize.$post(undefined, options),
  )
}

export async function get2ChatConversationsId(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].$get(args, options))
}

export async function put2ChatConversationsId(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].$put(args, options))
}

export async function delete2ChatConversationsId(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].$delete(args, options))
}

export async function get2ChatConversationsIdAdminRequests(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].admin_requests.$get(args, options),
  )
}

export async function post2ChatConversationsIdAdminRequests(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].admin_requests.$post(args, options),
  )
}

export async function post2ChatConversationsIdAdminRequestsUserIdApprove(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].admin_requests[':user_id'].approve.$post(args, options),
  )
}

export async function post2ChatConversationsIdAdminRequestsUserIdReject(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].admin_requests[':user_id'].reject.$post(args, options),
  )
}

export async function put2ChatConversationsIdAdminSettings(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].admin_settings.$put(args, options),
  )
}

export async function post2ChatConversationsIdAdmins(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].admins.$post(args, options))
}

export async function post2ChatConversationsIdAdminsRemove(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].admins.remove.$post(args, options),
  )
}

export async function post2ChatConversationsIdArchive(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].archive.$post(args, options))
}

export async function delete2ChatConversationsIdArchive(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].archive.$delete(args, options))
}

export async function get2ChatConversationsIdEvents(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].events.$get(args, options))
}

export async function post2ChatConversationsIdInvite(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].invite.$post(args, options))
}

export async function delete2ChatConversationsIdInvite(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].invite.$delete(args, options))
}

export async function get2ChatConversationsIdInvitesToken(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].invites[':token'].$get(args, options),
  )
}

export async function post2ChatConversationsIdJoinRequests(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].join_requests.$post(args, options),
  )
}

export async function post2ChatConversationsIdJoinRequestsReject(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].join_requests.reject.$post(args, options),
  )
}

export async function post2ChatConversationsIdKeys(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].keys.$post(args, options))
}

export async function post2ChatConversationsIdMembers(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].members.$post(args, options))
}

export async function post2ChatConversationsIdMembersRemove(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].members.remove.$post(args, options),
  )
}

export async function put2ChatConversationsIdMessageTtl(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].message_ttl.$put(args, options))
}

export async function delete2ChatConversationsIdMessageTtl(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].message_ttl.$delete(args, options),
  )
}

export async function post2ChatConversationsIdMessages(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].messages.$post(args, options))
}

export async function post2ChatConversationsIdMessagesDelete(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].messages.delete.$post(args, options),
  )
}

export async function post2ChatConversationsIdMute(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].mute.$post(args, options))
}

export async function delete2ChatConversationsIdMute(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].mute.$delete(args, options))
}

export async function get2ChatConversationsIdPinnedMessages(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].pinned_messages.$get(args, options),
  )
}

export async function post2ChatConversationsIdRead(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].read.$post(args, options))
}

export async function put2ChatConversationsIdScreenCapture(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].chat.conversations[':id'].screen_capture.$put(args, options),
  )
}

export async function post2ChatConversationsIdTyping(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].typing.$post(args, options))
}

export async function post2ChatConversationsIdUnread(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.conversations[':id'].unread.$post(args, options))
}

export async function post2ChatMediaUploadInitialize(
  args: InferRequestType<(typeof client)['2']['chat']['media']['upload']['initialize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.media.upload.initialize.$post(args, options))
}

export async function post2ChatMediaUploadIdAppend(
  args: InferRequestType<(typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.media.upload[':id'].append.$post(args, options))
}

export async function post2ChatMediaUploadIdFinalize(
  args: InferRequestType<
    (typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.media.upload[':id'].finalize.$post(args, options))
}

export async function get2ChatMediaIdMediaHashKey(
  args: InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.media[':id'][':media_hash_key'].$get(args, options))
}

export async function get2ChatMessageRequests(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.message_requests.$get(args, options))
}

export async function get2ChatMessageRequestsId(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.message_requests[':id'].$get(args, options))
}

export async function post2ChatMessageRequestsIdAccept(
  args: InferRequestType<
    (typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.message_requests[':id'].accept.$post(args, options))
}

export async function get2ChatSettings(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.settings.$get(args, options))
}

export async function put2ChatSettings(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].chat.settings.$put(args, options))
}

export async function get2CommunitiesSearch(
  args: InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].communities.search.$get(args, options))
}

export async function get2CommunitiesId(
  args: InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].communities[':id'].$get(args, options))
}

export async function get2ComplianceJobs(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs.$get(args, options))
}

export async function post2ComplianceJobs(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs.$post(args, options))
}

export async function get2ComplianceJobsId(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs[':id'].$get(args, options))
}

export async function delete2ComplianceJobsId(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs[':id'].$delete(args, options))
}

export async function get2ComplianceJobsIdDownload(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs[':id'].download.$get(args, options))
}

export async function put2ComplianceJobsIdUpload(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs[':id'].upload.$put(args, options))
}

export async function get2Connections(
  args: InferRequestType<(typeof client)['2']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].connections.$get(args, options))
}

export async function delete2Connections(
  args: InferRequestType<(typeof client)['2']['connections']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].connections.$delete(args, options))
}

export async function delete2ConnectionsAll(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].connections.all.$delete(undefined, options))
}

export async function delete2ConnectionsEndpointId(
  args: InferRequestType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].connections[':endpoint_id'].$delete(args, options))
}

export async function post2DmConversations(
  args: InferRequestType<(typeof client)['2']['dm_conversations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_conversations.$post(args, options))
}

export async function get2DmConversationsMediaDmIdMediaIdResourceId(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations.media[':dm_id'][':media_id'][':resource_id'].$get(args, options),
  )
}

export async function get2DmConversationsWithParticipantIdDmEvents(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, options),
  )
}

export async function post2DmConversationsWithParticipantIdMessages(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations.with[':participant_id'].messages.$post(args, options),
  )
}

export async function post2DmConversationsDmConversationIdMessages(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations[':dm_conversation_id'].messages.$post(args, options),
  )
}

export async function get2DmConversationsIdDmEvents(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_conversations[':id'].dm_events.$get(args, options))
}

export async function get2DmEvents(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_events.$get(args, options))
}

export async function get2DmEventsEventId(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_events[':event_id'].$get(args, options))
}

export async function delete2DmEventsEventId(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_events[':event_id'].$delete(args, options))
}

export async function get2LikesComplianceStream(
  args: InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].likes.compliance.stream.$get(args, options))
}

export async function get2LikesFirehoseStream(
  args: InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].likes.firehose.stream.$get(args, options))
}

export async function get2LikesSample10Stream(
  args: InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].likes.sample10.stream.$get(args, options))
}

export async function post2Lists(
  args: InferRequestType<(typeof client)['2']['lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists.$post(args, options))
}

export async function get2ListsId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].$get(args, options))
}

export async function put2ListsId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].$put(args, options))
}

export async function delete2ListsId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].$delete(args, options))
}

export async function get2ListsIdFollowers(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].followers.$get(args, options))
}

export async function get2ListsIdMembers(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].members.$get(args, options))
}

export async function post2ListsIdMembers(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].members.$post(args, options))
}

export async function delete2ListsIdMembersUserId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].members[':user_id'].$delete(args, options))
}

export async function get2ListsIdTweets(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].tweets.$get(args, options))
}

export async function get2Media(
  args: InferRequestType<(typeof client)['2']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.$get(args, options))
}

export async function post2MediaAmplifyPosts(
  args: InferRequestType<(typeof client)['2']['media']['amplify']['posts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.amplify.posts.$post(args, options))
}

export async function get2MediaAmplifyPrograms(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].media.amplify.programs.$get(undefined, options))
}

export async function get2MediaAmplifyProgramsProgramId(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.amplify.programs[':program_id'].$get(args, options))
}

export async function get2MediaAmplifyProgramsProgramIdPosts(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].media.amplify.programs[':program_id'].posts.$get(args, options),
  )
}

export async function get2MediaAnalytics(
  args: InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.analytics.$get(args, options))
}

export async function post2MediaLibrary(
  args: InferRequestType<(typeof client)['2']['media']['library']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.library.$post(args, options))
}

export async function get2MediaLibraryCategories(
  args: InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.library.categories.$get(args, options))
}

export async function put2MediaLibraryMediaKey(
  args: InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.library[':media_key'].$put(args, options))
}

export async function delete2MediaLibraryMediaKey(
  args: InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.library[':media_key'].$delete(args, options))
}

export async function post2MediaMetadata(
  args: InferRequestType<(typeof client)['2']['media']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.metadata.$post(args, options))
}

export async function post2MediaSubtitles(
  args: InferRequestType<(typeof client)['2']['media']['subtitles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.subtitles.$post(args, options))
}

export async function delete2MediaSubtitles(
  args: InferRequestType<(typeof client)['2']['media']['subtitles']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.subtitles.$delete(args, options))
}

export async function get2MediaUpload(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.upload.$get(args, options))
}

export async function post2MediaUpload(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.upload.$post(args, options))
}

export async function post2MediaUploadInitialize(
  args: InferRequestType<(typeof client)['2']['media']['upload']['initialize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.upload.initialize.$post(args, options))
}

export async function post2MediaUploadIdAppend(
  args: InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.upload[':id'].append.$post(args, options))
}

export async function post2MediaUploadIdFinalize(
  args: InferRequestType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media.upload[':id'].finalize.$post(args, options))
}

export async function get2MediaMediaKey(
  args: InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].media[':media_key'].$get(args, options))
}

export async function get2NewsSearch(
  args: InferRequestType<(typeof client)['2']['news']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].news.search.$get(args, options))
}

export async function get2NewsId(
  args: InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].news[':id'].$get(args, options))
}

export async function post2Notes(
  args: InferRequestType<(typeof client)['2']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].notes.$post(args, options))
}

export async function post2NotesEvaluate(
  args: InferRequestType<(typeof client)['2']['notes']['evaluate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].notes.evaluate.$post(args, options))
}

export async function get2NotesSearchNotesWritten(
  args: InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].notes.search.notes_written.$get(args, options))
}

export async function get2NotesSearchPostsEligibleForNotes(
  args: InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].notes.search.posts_eligible_for_notes.$get(args, options))
}

export async function delete2NotesId(
  args: InferRequestType<(typeof client)['2']['notes'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].notes[':id'].$delete(args, options))
}

export async function get2OpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['2']['openapi.json'].$get(undefined, options))
}

export async function get2PostsDrafts(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].posts.drafts.$get(args, options))
}

export async function post2PostsDrafts(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].posts.drafts.$post(args, options))
}

export async function delete2PostsDraftsId(
  args: InferRequestType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].posts.drafts[':id'].$delete(args, options))
}

export async function get2Region(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].region.$get(undefined, options))
}

export async function get2Sources(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].sources.$get(undefined, options))
}

export async function post2Sources(
  args: InferRequestType<(typeof client)['2']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].sources.$post(args, options))
}

export async function get2SourcesId(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].sources[':id'].$get(args, options))
}

export async function put2SourcesId(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].sources[':id'].$put(args, options))
}

export async function delete2SourcesId(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].sources[':id'].$delete(args, options))
}

export async function get2SourcesIdStreamKey(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].sources[':id'].stream_key.$get(args, options))
}

export async function get2Spaces(
  args: InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces.$get(args, options))
}

export async function get2SpacesByCreatorIds(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces.by.creator_ids.$get(args, options))
}

export async function get2SpacesSearch(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces.search.$get(args, options))
}

export async function get2SpacesId(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces[':id'].$get(args, options))
}

export async function get2SpacesIdBuyers(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces[':id'].buyers.$get(args, options))
}

export async function get2SpacesIdTweets(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces[':id'].tweets.$get(args, options))
}

export async function get2TrendsByWoeidWoeid(
  args: InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].trends.by.woeid[':woeid'].$get(args, options))
}

export async function get2TrendsLocations(
  args: InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].trends.locations.$get(args, options))
}

export async function get2Tweets(
  args: InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.$get(args, options))
}

export async function post2Tweets(
  args: InferRequestType<(typeof client)['2']['tweets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.$post(args, options))
}

export async function get2TweetsAnalytics(
  args: InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.analytics.$get(args, options))
}

export async function get2TweetsComplianceStream(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.compliance.stream.$get(args, options))
}

export async function get2TweetsCountsAll(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.counts.all.$get(args, options))
}

export async function get2TweetsCountsRecent(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.counts.recent.$get(args, options))
}

export async function get2TweetsFirehoseStream(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.firehose.stream.$get(args, options))
}

export async function get2TweetsFirehoseStreamLangEn(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.firehose.stream.lang.en.$get(args, options))
}

export async function get2TweetsFirehoseStreamLangJa(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.firehose.stream.lang.ja.$get(args, options))
}

export async function get2TweetsFirehoseStreamLangKo(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.firehose.stream.lang.ko.$get(args, options))
}

export async function get2TweetsFirehoseStreamLangPt(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.firehose.stream.lang.pt.$get(args, options))
}

export async function get2TweetsLabelStream(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.label.stream.$get(args, options))
}

export async function get2TweetsSampleStream(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.sample.stream.$get(args, options))
}

export async function get2TweetsSample10Stream(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.sample10.stream.$get(args, options))
}

export async function get2TweetsSearchAll(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.all.$get(args, options))
}

export async function get2TweetsSearchRecent(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.recent.$get(args, options))
}

export async function get2TweetsSearchStream(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.$get(args, options))
}

export async function get2TweetsSearchStreamRules(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.rules.$get(args, options))
}

export async function post2TweetsSearchStreamRules(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.rules.$post(args, options))
}

export async function get2TweetsSearchStreamRulesCounts(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.rules.counts.$get(args, options))
}

export async function get2TweetsSearchWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].tweets.search.webhooks.$get(undefined, options))
}

export async function post2TweetsSearchWebhooksWebhookId(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.webhooks[':webhook_id'].$post(args, options))
}

export async function delete2TweetsSearchWebhooksWebhookId(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].tweets.search.webhooks[':webhook_id'].$delete(args, options),
  )
}

export async function get2TweetsId(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].$get(args, options))
}

export async function delete2TweetsId(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].$delete(args, options))
}

export async function get2TweetsIdLikingUsers(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].liking_users.$get(args, options))
}

export async function get2TweetsIdQuoteTweets(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].quote_tweets.$get(args, options))
}

export async function get2TweetsIdRetweetedBy(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].retweeted_by.$get(args, options))
}

export async function get2TweetsIdRetweets(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].retweets.$get(args, options))
}

export async function put2TweetsTweetIdHidden(
  args: InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':tweet_id'].hidden.$put(args, options))
}

export async function get2UsageCredits(options?: ClientRequestOptions) {
  return await parseResponse(client['2'].usage.credits.$get(undefined, options))
}

export async function get2UsageTweets(
  args: InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].usage.tweets.$get(args, options))
}

export async function get2Users(
  args: InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.$get(args, options))
}

export async function get2UsersBy(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.by.$get(args, options))
}

export async function get2UsersByUsernameUsername(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.by.username[':username'].$get(args, options))
}

export async function get2UsersComplianceStream(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.compliance.stream.$get(args, options))
}

export async function get2UsersMe(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.me.$get(args, options))
}

export async function get2UsersMeFollowers(
  args: InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.me.followers.$get(args, options))
}

export async function get2UsersMeFollowing(
  args: InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.me.following.$get(args, options))
}

export async function get2UsersPersonalizedTrends(
  args: InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.personalized_trends.$get(args, options))
}

export async function get2UsersPublicKeys(
  args: InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.public_keys.$get(args, options))
}

export async function get2UsersRepostsOfMe(
  args: InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.reposts_of_me.$get(args, options))
}

export async function get2UsersSearch(
  args: InferRequestType<(typeof client)['2']['users']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.search.$get(args, options))
}

export async function get2UsersId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].$get(args, options))
}

export async function get2UsersIdAffiliates(
  args: InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].affiliates.$get(args, options))
}

export async function get2UsersIdBlocking(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].blocking.$get(args, options))
}

export async function post2UsersIdBlocking(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].blocking.$post(args, options))
}

export async function get2UsersIdBookmarks(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks.$get(args, options))
}

export async function post2UsersIdBookmarks(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks.$post(args, options))
}

export async function get2UsersIdBookmarksFolders(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks.folders.$get(args, options))
}

export async function post2UsersIdBookmarksFolders(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks.folders.$post(args, options))
}

export async function get2UsersIdBookmarksFoldersFolderId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].bookmarks.folders[':folder_id'].$get(args, options),
  )
}

export async function delete2UsersIdBookmarksTweetId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks[':tweet_id'].$delete(args, options))
}

export async function get2UsersIdBroadcasts(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].broadcasts.$get(args, options))
}

export async function post2UsersIdBroadcasts(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].broadcasts.$post(args, options))
}

export async function get2UsersIdBroadcastsBroadcastId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].broadcasts[':broadcast_id'].$get(args, options),
  )
}

export async function delete2UsersIdBroadcastsBroadcastId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].broadcasts[':broadcast_id'].$delete(args, options),
  )
}

export async function put2UsersIdBroadcastsBroadcastIdState(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].broadcasts[':broadcast_id'].state.$put(args, options),
  )
}

export async function post2UsersIdDmBlock(
  args: InferRequestType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].dm.block.$post(args, options))
}

export async function post2UsersIdDmUnblock(
  args: InferRequestType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].dm.unblock.$post(args, options))
}

export async function get2UsersIdFollowedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].followed_lists.$get(args, options))
}

export async function post2UsersIdFollowedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].followed_lists.$post(args, options))
}

export async function delete2UsersIdFollowedListsListId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].followed_lists[':list_id'].$delete(args, options),
  )
}

export async function get2UsersIdFollowers(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].followers.$get(args, options))
}

export async function get2UsersIdFollowing(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].following.$get(args, options))
}

export async function post2UsersIdFollowing(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].following.$post(args, options))
}

export async function get2UsersIdLikedTweets(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].liked_tweets.$get(args, options))
}

export async function post2UsersIdLikes(
  args: InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].likes.$post(args, options))
}

export async function delete2UsersIdLikesTweetId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].likes[':tweet_id'].$delete(args, options))
}

export async function get2UsersIdListMemberships(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].list_memberships.$get(args, options))
}

export async function get2UsersIdMentions(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].mentions.$get(args, options))
}

export async function get2UsersIdMuting(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].muting.$get(args, options))
}

export async function post2UsersIdMuting(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].muting.$post(args, options))
}

export async function get2UsersIdOwnedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].owned_lists.$get(args, options))
}

export async function get2UsersIdPinnedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].pinned_lists.$get(args, options))
}

export async function post2UsersIdPinnedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].pinned_lists.$post(args, options))
}

export async function delete2UsersIdPinnedListsListId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].pinned_lists[':list_id'].$delete(args, options),
  )
}

export async function get2UsersIdPublicKeys(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].public_keys.$get(args, options))
}

export async function post2UsersIdPublicKeys(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].public_keys.$post(args, options))
}

export async function post2UsersIdRetweets(
  args: InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].retweets.$post(args, options))
}

export async function delete2UsersIdRetweetsSourceTweetId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].retweets[':source_tweet_id'].$delete(args, options),
  )
}

export async function get2UsersIdSources(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].sources.$get(args, options))
}

export async function post2UsersIdSources(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].sources.$post(args, options))
}

export async function get2UsersIdSourcesSourceId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].sources[':source_id'].$get(args, options))
}

export async function put2UsersIdSourcesSourceId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].sources[':source_id'].$put(args, options))
}

export async function delete2UsersIdSourcesSourceId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].sources[':source_id'].$delete(args, options))
}

export async function get2UsersIdTimelinesReverseChronological(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].timelines.reverse_chronological.$get(args, options),
  )
}

export async function get2UsersIdTweets(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].tweets.$get(args, options))
}

export async function delete2UsersSourceUserIdBlockingTargetUserId(
  args: InferRequestType<
    (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':source_user_id'].blocking[':target_user_id'].$delete(args, options),
  )
}

export async function delete2UsersSourceUserIdFollowingTargetUserId(
  args: InferRequestType<
    (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':source_user_id'].following[':target_user_id'].$delete(args, options),
  )
}

export async function delete2UsersSourceUserIdMutingTargetUserId(
  args: InferRequestType<
    (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':source_user_id'].muting[':target_user_id'].$delete(args, options),
  )
}

export async function get2Webhooks(
  args: InferRequestType<(typeof client)['2']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].webhooks.$get(args, options))
}

export async function post2Webhooks(
  args: InferRequestType<(typeof client)['2']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].webhooks.$post(args, options))
}

export async function post2WebhooksReplay(
  args: InferRequestType<(typeof client)['2']['webhooks']['replay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].webhooks.replay.$post(args, options))
}

export async function put2WebhooksWebhookId(
  args: InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].webhooks[':webhook_id'].$put(args, options))
}

export async function delete2WebhooksWebhookId(
  args: InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].webhooks[':webhook_id'].$delete(args, options))
}
