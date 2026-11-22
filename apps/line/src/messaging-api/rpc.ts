import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2BotChannelWebhookEndpoint(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.channel.webhook.endpoint.$get(undefined, options))
}

export async function putV2BotChannelWebhookEndpoint(
  args: InferRequestType<typeof client.v2.bot.channel.webhook.endpoint.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.channel.webhook.endpoint.$put(args, options))
}

export async function postV2BotChannelWebhookTest(
  args: InferRequestType<typeof client.v2.bot.channel.webhook.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.channel.webhook.test.$post(args, options))
}

export async function getV2BotMessageMessageIdContent(
  args: InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message[':messageId'].content.$get(args, options))
}

export async function getV2BotMessageMessageIdContentPreview(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.message[':messageId'].content.preview.$get(args, options),
  )
}

export async function getV2BotMessageMessageIdContentTranscoding(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.message[':messageId'].content.transcoding.$get(args, options),
  )
}

export async function postV2BotMessageReply(
  args: InferRequestType<typeof client.v2.bot.message.reply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.reply.$post(args, options))
}

export async function postV2BotMessagePush(
  args: InferRequestType<typeof client.v2.bot.message.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.push.$post(args, options))
}

export async function postV2BotMessageMulticast(
  args: InferRequestType<typeof client.v2.bot.message.multicast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.multicast.$post(args, options))
}

export async function postV2BotMessageNarrowcast(
  args: InferRequestType<typeof client.v2.bot.message.narrowcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.narrowcast.$post(args, options))
}

export async function getV2BotMessageProgressNarrowcast(
  args: InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.progress.narrowcast.$get(args, options))
}

export async function postV2BotMessageBroadcast(
  args: InferRequestType<typeof client.v2.bot.message.broadcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.broadcast.$post(args, options))
}

export async function getV2BotMessageQuota(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.message.quota.$get(undefined, options))
}

export async function getV2BotMessageQuotaConsumption(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.message.quota.consumption.$get(undefined, options))
}

export async function getV2BotMessageDeliveryReply(
  args: InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.delivery.reply.$get(args, options))
}

export async function getV2BotMessageDeliveryPush(
  args: InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.delivery.push.$get(args, options))
}

export async function getV2BotMessageDeliveryMulticast(
  args: InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.delivery.multicast.$get(args, options))
}

export async function getV2BotMessageDeliveryBroadcast(
  args: InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.delivery.broadcast.$get(args, options))
}

export async function postV2BotMessageValidateReply(
  args: InferRequestType<typeof client.v2.bot.message.validate.reply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.validate.reply.$post(args, options))
}

export async function postV2BotMessageValidatePush(
  args: InferRequestType<typeof client.v2.bot.message.validate.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.validate.push.$post(args, options))
}

export async function postV2BotMessageValidateMulticast(
  args: InferRequestType<typeof client.v2.bot.message.validate.multicast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.validate.multicast.$post(args, options))
}

export async function postV2BotMessageValidateNarrowcast(
  args: InferRequestType<typeof client.v2.bot.message.validate.narrowcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.validate.narrowcast.$post(args, options))
}

export async function postV2BotMessageValidateBroadcast(
  args: InferRequestType<typeof client.v2.bot.message.validate.broadcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.validate.broadcast.$post(args, options))
}

export async function getV2BotMessageAggregationInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.message.aggregation.info.$get(undefined, options))
}

export async function getV2BotMessageAggregationList(
  args: InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.aggregation.list.$get(args, options))
}

export async function getV2BotProfileUserId(
  args: InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.profile[':userId'].$get(args, options))
}

export async function getV2BotFollowersIds(
  args: InferRequestType<typeof client.v2.bot.followers.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.followers.ids.$get(args, options))
}

export async function getV2BotInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.info.$get(undefined, options))
}

export async function getV2BotGroupGroupIdMemberUserId(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.group[':groupId'].member[':userId'].$get(args, options))
}

export async function getV2BotRoomRoomIdMemberUserId(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.room[':roomId'].member[':userId'].$get(args, options))
}

export async function getV2BotGroupGroupIdMembersIds(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.group[':groupId'].members.ids.$get(args, options))
}

export async function getV2BotRoomRoomIdMembersIds(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.room[':roomId'].members.ids.$get(args, options))
}

export async function postV2BotGroupGroupIdLeave(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.group[':groupId'].leave.$post(args, options))
}

export async function postV2BotRoomRoomIdLeave(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.room[':roomId'].leave.$post(args, options))
}

export async function getV2BotGroupGroupIdSummary(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.group[':groupId'].summary.$get(args, options))
}

export async function getV2BotGroupGroupIdMembersCount(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.group[':groupId'].members.count.$get(args, options))
}

export async function getV2BotRoomRoomIdMembersCount(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.room[':roomId'].members.count.$get(args, options))
}

export async function postV2BotRichmenu(
  args: InferRequestType<typeof client.v2.bot.richmenu.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.$post(args, options))
}

export async function postV2BotRichmenuValidate(
  args: InferRequestType<typeof client.v2.bot.richmenu.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.validate.$post(args, options))
}

export async function getV2BotRichmenuRichMenuIdContent(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu[':richMenuId'].content.$get(args, options))
}

export async function postV2BotRichmenuRichMenuIdContent(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu[':richMenuId'].content.$post(args, options))
}

export async function getV2BotRichmenuRichMenuId(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu[':richMenuId'].$get(args, options))
}

export async function deleteV2BotRichmenuRichMenuId(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu[':richMenuId'].$delete(args, options))
}

export async function getV2BotRichmenuList(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.richmenu.list.$get(undefined, options))
}

export async function postV2BotUserAllRichmenuRichMenuId(
  args: InferRequestType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.user.all.richmenu[':richMenuId'].$post(args, options))
}

export async function getV2BotUserAllRichmenu(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.user.all.richmenu.$get(undefined, options))
}

export async function deleteV2BotUserAllRichmenu(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.user.all.richmenu.$delete(undefined, options))
}

export async function postV2BotRichmenuAlias(
  args: InferRequestType<typeof client.v2.bot.richmenu.alias.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.alias.$post(args, options))
}

export async function getV2BotRichmenuAliasRichMenuAliasId(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$get(args, options))
}

export async function postV2BotRichmenuAliasRichMenuAliasId(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$post(args, options))
}

export async function deleteV2BotRichmenuAliasRichMenuAliasId(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.richmenu.alias[':richMenuAliasId'].$delete(args, options),
  )
}

export async function getV2BotRichmenuAliasList(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.richmenu.alias.list.$get(undefined, options))
}

export async function getV2BotUserUserIdRichmenu(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.user[':userId'].richmenu.$get(args, options))
}

export async function deleteV2BotUserUserIdRichmenu(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.user[':userId'].richmenu.$delete(args, options))
}

export async function postV2BotUserUserIdRichmenuRichMenuId(
  args: InferRequestType<
    (typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.user[':userId'].richmenu[':richMenuId'].$post(args, options),
  )
}

export async function postV2BotRichmenuBulkLink(
  args: InferRequestType<typeof client.v2.bot.richmenu.bulk.link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.bulk.link.$post(args, options))
}

export async function postV2BotRichmenuBulkUnlink(
  args: InferRequestType<typeof client.v2.bot.richmenu.bulk.unlink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.bulk.unlink.$post(args, options))
}

export async function postV2BotRichmenuBatch(
  args: InferRequestType<typeof client.v2.bot.richmenu.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.batch.$post(args, options))
}

export async function postV2BotRichmenuValidateBatch(
  args: InferRequestType<typeof client.v2.bot.richmenu.validate.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.validate.batch.$post(args, options))
}

export async function getV2BotRichmenuProgressBatch(
  args: InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.richmenu.progress.batch.$get(args, options))
}

export async function postV2BotUserUserIdLinkToken(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.user[':userId'].linkToken.$post(args, options))
}

export async function postV2BotMessageMarkAsRead(
  args: InferRequestType<typeof client.v2.bot.message.markAsRead.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.markAsRead.$post(args, options))
}

export async function postBotPnpPush(
  args: InferRequestType<typeof client.bot.pnp.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot.pnp.push.$post(args, options))
}

export async function postV2BotMessagePnpTemplatedPush(
  args: InferRequestType<typeof client.v2.bot.message.pnp.templated.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.pnp.templated.push.$post(args, options))
}

export async function getV2BotMessageDeliveryPnp(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.delivery.pnp.$get(args, options))
}

export async function getV2BotMessageDeliveryPnpTemplated(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.message.delivery.pnp.templated.$get(args, options))
}

export async function getV2BotMembershipSubscriptionUserId(
  args: InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.membership.subscription[':userId'].$get(args, options))
}

export async function getV2BotMembershipList(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.membership.list.$get(undefined, options))
}

export async function getV2BotMembershipMembershipIdUsersIds(
  args: InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.membership[':membershipId'].users.ids.$get(args, options),
  )
}

export async function getV2BotCoupon(
  args: InferRequestType<typeof client.v2.bot.coupon.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.coupon.$get(args, options))
}

export async function postV2BotCoupon(
  args: InferRequestType<typeof client.v2.bot.coupon.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.coupon.$post(args, options))
}

export async function getV2BotCouponCouponId(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.coupon[':couponId'].$get(args, options))
}

export async function putV2BotCouponCouponIdClose(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.coupon[':couponId'].close.$put(args, options))
}

export async function postV2BotChatLoadingStart(
  args: InferRequestType<typeof client.v2.bot.chat.loading.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.chat.loading.start.$post(args, options))
}

export async function postV2BotChatMarkAsRead(
  args: InferRequestType<typeof client.v2.bot.chat.markAsRead.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.chat.markAsRead.$post(args, options))
}
