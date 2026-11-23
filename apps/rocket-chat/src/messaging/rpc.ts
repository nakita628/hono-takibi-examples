import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1ChatDelete(
  args: InferRequestType<(typeof client.api.v1)['chat.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.delete'].$post(args, options))
}

export async function postApiV1ChatReact(
  args: InferRequestType<(typeof client.api.v1)['chat.react']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.react'].$post(args, options))
}

export async function postApiV1ChatUpdate(
  args: InferRequestType<(typeof client.api.v1)['chat.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.update'].$post(args, options))
}

export async function postApiV1ChatReportMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.reportMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.reportMessage'].$post(args, options))
}

export async function postApiV1ChatFollowMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.followMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.followMessage'].$post(args, options))
}

export async function postApiV1ChatUnfollowMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.unfollowMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.unfollowMessage'].$post(args, options))
}

export async function getApiV1ChatGetMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getMessage'].$get(args, options))
}

export async function getApiV1ChatGetThreadsList(
  args: InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getThreadsList'].$get(args, options))
}

export async function getApiV1ChatGetDeletedMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getDeletedMessages'].$get(args, options))
}

export async function getApiV1ChatGetDiscussions(
  args: InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getDiscussions'].$get(args, options))
}

export async function getApiV1ChatGetMentionedMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getMentionedMessages'].$get(args, options))
}

export async function getApiV1ChatGetMessageReadReceipts(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getMessageReadReceipts'].$get(args, options))
}

export async function getApiV1ChatGetPinnedMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getPinnedMessages'].$get(args, options))
}

export async function postApiV1ChatGetMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getMessages'].$post(args, options))
}

export async function getApiV1ChatGetStarredMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getStarredMessages'].$get(args, options))
}

export async function getApiV1ChatGetThreadMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getThreadMessages'].$get(args, options))
}

export async function postApiV1ChatReadThread(
  args: InferRequestType<(typeof client.api.v1)['chat.readThread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.readThread'].$post(args, options))
}

export async function getApiV1ChatIgnoreUser(
  args: InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.ignoreUser'].$get(args, options))
}

export async function postApiV1ChatPinMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.pinMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.pinMessage'].$post(args, options))
}

export async function postApiV1ChatUnPinMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.unPinMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.unPinMessage'].$post(args, options))
}

export async function postApiV1ChatPostMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.postMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.postMessage'].$post(args, options))
}

export async function getApiV1ChatSearch(
  args: InferRequestType<(typeof client.api.v1)['chat.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.search'].$get(args, options))
}

export async function postApiV1ChatSendMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.sendMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.sendMessage'].$post(args, options))
}

export async function postApiV1ChatStarMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.starMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.starMessage'].$post(args, options))
}

export async function postApiV1ChatUnStarMessage(
  args: InferRequestType<(typeof client.api.v1)['chat.unStarMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.unStarMessage'].$post(args, options))
}

export async function getApiV1ChatSyncThreadsList(
  args: InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.syncThreadsList'].$get(args, options))
}

export async function getApiV1ChatSyncThreadMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.syncThreadMessages'].$get(args, options))
}

export async function getApiV1ChatSyncMessages(
  args: InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.syncMessages'].$get(args, options))
}

export async function getApiV1ChatGetURLPreview(
  args: InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['chat.getURLPreview'].$get(args, options))
}

export async function postApiV1ImBlockUser(
  args: InferRequestType<(typeof client.api.v1)['im.blockUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['im.blockUser'].$post(args, options))
}

export async function postApiV1DmClose(
  args: InferRequestType<(typeof client.api.v1)['dm.close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.close'].$post(args, options))
}

export async function getApiV1DmCounters(
  args: InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.counters'].$get(args, options))
}

export async function postApiV1DmCreate(
  args: InferRequestType<(typeof client.api.v1)['dm.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.create'].$post(args, options))
}

export async function postApiV1DmDelete(
  args: InferRequestType<(typeof client.api.v1)['dm.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.delete'].$post(args, options))
}

export async function getApiV1DmFiles(
  args: InferRequestType<(typeof client.api.v1)['dm.files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.files'].$get(args, options))
}

export async function getApiV1DmHistory(
  args: InferRequestType<(typeof client.api.v1)['dm.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.history'].$get(args, options))
}

export async function getApiV1DmListEveryone(
  args: InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.list.everyone'].$get(args, options))
}

export async function getApiV1DmList(
  args: InferRequestType<(typeof client.api.v1)['dm.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.list'].$get(args, options))
}

export async function getApiV1DmMembers(
  args: InferRequestType<(typeof client.api.v1)['dm.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.members'].$get(args, options))
}

export async function getApiV1DmMessages(
  args: InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.messages'].$get(args, options))
}

export async function getApiV1DmMessagesOthers(
  args: InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.messages.others'].$get(args, options))
}

export async function postApiV1DmOpen(
  args: InferRequestType<(typeof client.api.v1)['dm.open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.open'].$post(args, options))
}

export async function postApiV1DmSetTopic(
  args: InferRequestType<(typeof client.api.v1)['dm.setTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dm.setTopic'].$post(args, options))
}

export async function getApiV1AutotranslateGetProviderUiMetadata(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['autotranslate.getProviderUiMetadata'].$get(args, options),
  )
}

export async function getApiV1AutotranslateGetSupportedLanguages(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['autotranslate.getSupportedLanguages'].$get(args, options),
  )
}

export async function postApiV1AutotranslateSaveSettings(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['autotranslate.saveSettings'].$post(args, options))
}

export async function postApiV1AutotranslateTranslateMessage(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['autotranslate.translateMessage'].$post(args, options))
}
