import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAddStickerToSet(
  args: InferRequestType<typeof client.addStickerToSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addStickerToSet.$post(args, options))
}

export async function postAnswerCallbackQuery(
  args: InferRequestType<typeof client.answerCallbackQuery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answerCallbackQuery.$post(args, options))
}

export async function postAnswerInlineQuery(
  args: InferRequestType<typeof client.answerInlineQuery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answerInlineQuery.$post(args, options))
}

export async function postAnswerPreCheckoutQuery(
  args: InferRequestType<typeof client.answerPreCheckoutQuery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answerPreCheckoutQuery.$post(args, options))
}

export async function postAnswerShippingQuery(
  args: InferRequestType<typeof client.answerShippingQuery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answerShippingQuery.$post(args, options))
}

export async function postClose(options?: ClientRequestOptions) {
  return await parseResponse(client.close.$post(undefined, options))
}

export async function postCopyMessage(
  args: InferRequestType<typeof client.copyMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.copyMessage.$post(args, options))
}

export async function postCreateNewStickerSet(
  args: InferRequestType<typeof client.createNewStickerSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createNewStickerSet.$post(args, options))
}

export async function postDeleteChatPhoto(
  args: InferRequestType<typeof client.deleteChatPhoto.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteChatPhoto.$post(args, options))
}

export async function postDeleteChatStickerSet(
  args: InferRequestType<typeof client.deleteChatStickerSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteChatStickerSet.$post(args, options))
}

export async function postDeleteMessage(
  args: InferRequestType<typeof client.deleteMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteMessage.$post(args, options))
}

export async function postDeleteStickerFromSet(
  args: InferRequestType<typeof client.deleteStickerFromSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteStickerFromSet.$post(args, options))
}

export async function postDeleteWebhook(
  args: InferRequestType<typeof client.deleteWebhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteWebhook.$post(args, options))
}

export async function postEditMessageCaption(
  args: InferRequestType<typeof client.editMessageCaption.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.editMessageCaption.$post(args, options))
}

export async function postEditMessageLiveLocation(
  args: InferRequestType<typeof client.editMessageLiveLocation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.editMessageLiveLocation.$post(args, options))
}

export async function postEditMessageMedia(
  args: InferRequestType<typeof client.editMessageMedia.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.editMessageMedia.$post(args, options))
}

export async function postEditMessageReplyMarkup(
  args: InferRequestType<typeof client.editMessageReplyMarkup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.editMessageReplyMarkup.$post(args, options))
}

export async function postEditMessageText(
  args: InferRequestType<typeof client.editMessageText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.editMessageText.$post(args, options))
}

export async function postExportChatInviteLink(
  args: InferRequestType<typeof client.exportChatInviteLink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exportChatInviteLink.$post(args, options))
}

export async function postForwardMessage(
  args: InferRequestType<typeof client.forwardMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forwardMessage.$post(args, options))
}

export async function postGetChat(
  args: InferRequestType<typeof client.getChat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChat.$post(args, options))
}

export async function postGetChatAdministrators(
  args: InferRequestType<typeof client.getChatAdministrators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatAdministrators.$post(args, options))
}

export async function postGetChatMember(
  args: InferRequestType<typeof client.getChatMember.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatMember.$post(args, options))
}

export async function postGetChatMembersCount(
  args: InferRequestType<typeof client.getChatMembersCount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatMembersCount.$post(args, options))
}

export async function postGetFile(
  args: InferRequestType<typeof client.getFile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getFile.$post(args, options))
}

export async function postGetGameHighScores(
  args: InferRequestType<typeof client.getGameHighScores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getGameHighScores.$post(args, options))
}

export async function postGetMe(options?: ClientRequestOptions) {
  return await parseResponse(client.getMe.$post(undefined, options))
}

export async function postGetMyCommands(options?: ClientRequestOptions) {
  return await parseResponse(client.getMyCommands.$post(undefined, options))
}

export async function postGetStickerSet(
  args: InferRequestType<typeof client.getStickerSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getStickerSet.$post(args, options))
}

export async function postGetUpdates(
  args: InferRequestType<typeof client.getUpdates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getUpdates.$post(args, options))
}

export async function postGetUserProfilePhotos(
  args: InferRequestType<typeof client.getUserProfilePhotos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getUserProfilePhotos.$post(args, options))
}

export async function postGetWebhookInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.getWebhookInfo.$post(undefined, options))
}

export async function postKickChatMember(
  args: InferRequestType<typeof client.kickChatMember.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kickChatMember.$post(args, options))
}

export async function postLeaveChat(
  args: InferRequestType<typeof client.leaveChat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leaveChat.$post(args, options))
}

export async function postLogOut(options?: ClientRequestOptions) {
  return await parseResponse(client.logOut.$post(undefined, options))
}

export async function postPinChatMessage(
  args: InferRequestType<typeof client.pinChatMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pinChatMessage.$post(args, options))
}

export async function postPromoteChatMember(
  args: InferRequestType<typeof client.promoteChatMember.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promoteChatMember.$post(args, options))
}

export async function postRestrictChatMember(
  args: InferRequestType<typeof client.restrictChatMember.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restrictChatMember.$post(args, options))
}

export async function postSendAnimation(
  args: InferRequestType<typeof client.sendAnimation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendAnimation.$post(args, options))
}

export async function postSendAudio(
  args: InferRequestType<typeof client.sendAudio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendAudio.$post(args, options))
}

export async function postSendChatAction(
  args: InferRequestType<typeof client.sendChatAction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendChatAction.$post(args, options))
}

export async function postSendContact(
  args: InferRequestType<typeof client.sendContact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendContact.$post(args, options))
}

export async function postSendDice(
  args: InferRequestType<typeof client.sendDice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendDice.$post(args, options))
}

export async function postSendDocument(
  args: InferRequestType<typeof client.sendDocument.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendDocument.$post(args, options))
}

export async function postSendGame(
  args: InferRequestType<typeof client.sendGame.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendGame.$post(args, options))
}

export async function postSendInvoice(
  args: InferRequestType<typeof client.sendInvoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendInvoice.$post(args, options))
}

export async function postSendLocation(
  args: InferRequestType<typeof client.sendLocation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendLocation.$post(args, options))
}

export async function postSendMediaGroup(
  args: InferRequestType<typeof client.sendMediaGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendMediaGroup.$post(args, options))
}

export async function postSendMessage(
  args: InferRequestType<typeof client.sendMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendMessage.$post(args, options))
}

export async function postSendPhoto(
  args: InferRequestType<typeof client.sendPhoto.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendPhoto.$post(args, options))
}

export async function postSendPoll(
  args: InferRequestType<typeof client.sendPoll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendPoll.$post(args, options))
}

export async function postSendSticker(
  args: InferRequestType<typeof client.sendSticker.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendSticker.$post(args, options))
}

export async function postSendVenue(
  args: InferRequestType<typeof client.sendVenue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendVenue.$post(args, options))
}

export async function postSendVideo(
  args: InferRequestType<typeof client.sendVideo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendVideo.$post(args, options))
}

export async function postSendVideoNote(
  args: InferRequestType<typeof client.sendVideoNote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendVideoNote.$post(args, options))
}

export async function postSendVoice(
  args: InferRequestType<typeof client.sendVoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendVoice.$post(args, options))
}

export async function postSetChatAdministratorCustomTitle(
  args: InferRequestType<typeof client.setChatAdministratorCustomTitle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setChatAdministratorCustomTitle.$post(args, options))
}

export async function postSetChatDescription(
  args: InferRequestType<typeof client.setChatDescription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setChatDescription.$post(args, options))
}

export async function postSetChatPermissions(
  args: InferRequestType<typeof client.setChatPermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setChatPermissions.$post(args, options))
}

export async function postSetChatPhoto(
  args: InferRequestType<typeof client.setChatPhoto.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setChatPhoto.$post(args, options))
}

export async function postSetChatStickerSet(
  args: InferRequestType<typeof client.setChatStickerSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setChatStickerSet.$post(args, options))
}

export async function postSetChatTitle(
  args: InferRequestType<typeof client.setChatTitle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setChatTitle.$post(args, options))
}

export async function postSetGameScore(
  args: InferRequestType<typeof client.setGameScore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setGameScore.$post(args, options))
}

export async function postSetMyCommands(
  args: InferRequestType<typeof client.setMyCommands.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setMyCommands.$post(args, options))
}

export async function postSetPassportDataErrors(
  args: InferRequestType<typeof client.setPassportDataErrors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setPassportDataErrors.$post(args, options))
}

export async function postSetStickerPositionInSet(
  args: InferRequestType<typeof client.setStickerPositionInSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setStickerPositionInSet.$post(args, options))
}

export async function postSetStickerSetThumb(
  args: InferRequestType<typeof client.setStickerSetThumb.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setStickerSetThumb.$post(args, options))
}

export async function postSetWebhook(
  args: InferRequestType<typeof client.setWebhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setWebhook.$post(args, options))
}

export async function postStopMessageLiveLocation(
  args: InferRequestType<typeof client.stopMessageLiveLocation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stopMessageLiveLocation.$post(args, options))
}

export async function postStopPoll(
  args: InferRequestType<typeof client.stopPoll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stopPoll.$post(args, options))
}

export async function postUnbanChatMember(
  args: InferRequestType<typeof client.unbanChatMember.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unbanChatMember.$post(args, options))
}

export async function postUnpinAllChatMessages(
  args: InferRequestType<typeof client.unpinAllChatMessages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unpinAllChatMessages.$post(args, options))
}

export async function postUnpinChatMessage(
  args: InferRequestType<typeof client.unpinChatMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unpinChatMessage.$post(args, options))
}

export async function postUploadStickerFile(
  args: InferRequestType<typeof client.uploadStickerFile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploadStickerFile.$post(args, options))
}
