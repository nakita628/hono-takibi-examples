import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getMigrateResult(options?: ClientRequestOptions) {
  return await parseResponse(client.migrate.result.$get(undefined, options))
}

export async function getDocs(options?: ClientRequestOptions) {
  return await parseResponse(client.docs.$get(undefined, options))
}

export async function getDocsOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client.docs['openapi.json'].$get(undefined, options))
}

export async function getDocsHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.docs.health.$get(undefined, options))
}

export async function getRoute(
  args: InferRequestType<typeof client.route.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.$get(args, options))
}

export async function postRouteBatch(
  args: InferRequestType<typeof client.route.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.batch.$post(args, options))
}

export async function postUserToken(
  args: InferRequestType<typeof client.user.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.token.$post(args, options))
}

export async function postUserDeviceQuit(
  args: InferRequestType<typeof client.user.device_quit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.device_quit.$post(args, options))
}

export async function postUserOnlinestatus(
  args: InferRequestType<typeof client.user.onlinestatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.onlinestatus.$post(args, options))
}

export async function getUserSystemuids(options?: ClientRequestOptions) {
  return await parseResponse(client.user.systemuids.$get(undefined, options))
}

export async function postUserSystemuidsAdd(
  args: InferRequestType<typeof client.user.systemuids_add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.systemuids_add.$post(args, options))
}

export async function postUserSystemuidsRemove(
  args: InferRequestType<typeof client.user.systemuids_remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.systemuids_remove.$post(args, options))
}

export async function postUserSystemuidsAddToCache(
  args: InferRequestType<typeof client.user.systemuids_add_to_cache.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.systemuids_add_to_cache.$post(args, options))
}

export async function postUserSystemuidsRemoveFromCache(
  args: InferRequestType<typeof client.user.systemuids_remove_from_cache.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.systemuids_remove_from_cache.$post(args, options))
}

export async function postUserUpdatePluginNo(
  args: InferRequestType<typeof client.user.update_plugin_no.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.update_plugin_no.$post(args, options))
}

export async function postConnRemove(
  args: InferRequestType<typeof client.conn.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conn.remove.$post(args, options))
}

export async function postConnKick(
  args: InferRequestType<typeof client.conn.kick.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conn.kick.$post(args, options))
}

export async function postChannel(
  args: InferRequestType<typeof client.channel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.$post(args, options))
}

export async function postChannelInfo(
  args: InferRequestType<typeof client.channel.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.info.$post(args, options))
}

export async function postChannelDelete(
  args: InferRequestType<typeof client.channel.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.delete.$post(args, options))
}

export async function postChannelSubscriberAdd(
  args: InferRequestType<typeof client.channel.subscriber_add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.subscriber_add.$post(args, options))
}

export async function postChannelSubscriberRemove(
  args: InferRequestType<typeof client.channel.subscriber_remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.subscriber_remove.$post(args, options))
}

export async function postChannelSubscriberRemoveAll(
  args: InferRequestType<typeof client.channel.subscriber_remove_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.subscriber_remove_all.$post(args, options))
}

export async function postTmpchannelSubscriberSet(
  args: InferRequestType<typeof client.tmpchannel.subscriber_set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tmpchannel.subscriber_set.$post(args, options))
}

export async function postMessageSend(
  args: InferRequestType<typeof client.message.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.send.$post(args, options))
}

export async function postMessageSendbatch(
  args: InferRequestType<typeof client.message.sendbatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.sendbatch.$post(args, options))
}

export async function postMessageSync(
  args: InferRequestType<typeof client.message.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.sync.$post(args, options))
}

export async function postMessageSyncack(
  args: InferRequestType<typeof client.message.syncack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.syncack.$post(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function postMessage(
  args: InferRequestType<typeof client.message.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.$post(args, options))
}

export async function postMessageEvent(
  args: InferRequestType<typeof client.message.event.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.event.$post(args, options))
}

export async function postMessageEventsync(
  args: InferRequestType<typeof client.message.eventsync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message.eventsync.$post(args, options))
}

export async function postChannelMessagesync(
  args: InferRequestType<typeof client.channel.messagesync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.messagesync.$post(args, options))
}

export async function getChannelMaxMessageSeq(
  args: InferRequestType<typeof client.channel.max_message_seq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.max_message_seq.$get(args, options))
}

export async function getChannelLastMessage(
  args: InferRequestType<typeof client.channel.last_message.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.last_message.$get(args, options))
}

export async function postConversationsClearUnread(
  args: InferRequestType<typeof client.conversations.clearUnread.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.clearUnread.$post(args, options))
}

export async function postConversationsSetUnread(
  args: InferRequestType<typeof client.conversations.setUnread.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.setUnread.$post(args, options))
}

export async function postConversationsDelete(
  args: InferRequestType<typeof client.conversations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.delete.$post(args, options))
}

export async function postConversationList(
  args: InferRequestType<typeof client.conversation.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversation.list.$post(args, options))
}

export async function postConversationSync(
  args: InferRequestType<typeof client.conversation.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversation.sync.$post(args, options))
}

export async function postConversationsActivate(
  args: InferRequestType<typeof client.conversations.activate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.activate.$post(args, options))
}

export async function getConnz(
  args: InferRequestType<typeof client.connz.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connz.$get(args, options))
}

export async function getVarz(
  args: InferRequestType<typeof client.varz.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.varz.$get(args, options))
}

export async function postChannelBlacklistAdd(
  args: InferRequestType<typeof client.channel.blacklist_add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.blacklist_add.$post(args, options))
}

export async function postChannelBlacklistSet(
  args: InferRequestType<typeof client.channel.blacklist_set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.blacklist_set.$post(args, options))
}

export async function postChannelBlacklistRemove(
  args: InferRequestType<typeof client.channel.blacklist_remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.blacklist_remove.$post(args, options))
}

export async function postChannelBlacklistRemoveAll(
  args: InferRequestType<typeof client.channel.blacklist_remove_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.blacklist_remove_all.$post(args, options))
}

export async function postChannelWhitelistAdd(
  args: InferRequestType<typeof client.channel.whitelist_add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.whitelist_add.$post(args, options))
}

export async function postChannelWhitelistSet(
  args: InferRequestType<typeof client.channel.whitelist_set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.whitelist_set.$post(args, options))
}

export async function postChannelWhitelistRemove(
  args: InferRequestType<typeof client.channel.whitelist_remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.whitelist_remove.$post(args, options))
}

export async function postChannelWhitelistRemoveAll(
  args: InferRequestType<typeof client.channel.whitelist_remove_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.whitelist_remove_all.$post(args, options))
}

export async function getChannelWhitelist(
  args: InferRequestType<typeof client.channel.whitelist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.whitelist.$get(args, options))
}

export async function getTag(
  args: InferRequestType<typeof client.tag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tag.$get(args, options))
}

export async function postTagRemove(
  args: InferRequestType<typeof client.tag.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tag.remove.$post(args, options))
}

export async function getTags(options?: ClientRequestOptions) {
  return await parseResponse(client.tags.$get(undefined, options))
}

export async function postManagerLogin(
  args: InferRequestType<typeof client.manager.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manager.login.$post(args, options))
}

export async function getVarzSetting(options?: ClientRequestOptions) {
  return await parseResponse(client.varz.setting.$get(undefined, options))
}
