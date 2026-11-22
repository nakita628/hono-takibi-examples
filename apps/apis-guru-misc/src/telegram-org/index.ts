import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addStickerToSetHandler,
  answerCallbackQueryHandler,
  answerInlineQueryHandler,
  answerPreCheckoutQueryHandler,
  answerShippingQueryHandler,
  closeHandler,
  copyMessageHandler,
  createNewStickerSetHandler,
  deleteChatPhotoHandler,
  deleteChatStickerSetHandler,
  deleteMessageHandler,
  deleteStickerFromSetHandler,
  deleteWebhookHandler,
  editMessageCaptionHandler,
  editMessageLiveLocationHandler,
  editMessageMediaHandler,
  editMessageReplyMarkupHandler,
  editMessageTextHandler,
  exportChatInviteLinkHandler,
  forwardMessageHandler,
  getChatAdministratorsHandler,
  getChatHandler,
  getChatMemberHandler,
  getChatMembersCountHandler,
  getFileHandler,
  getGameHighScoresHandler,
  getMeHandler,
  getMyCommandsHandler,
  getStickerSetHandler,
  getUpdatesHandler,
  getUserProfilePhotosHandler,
  getWebhookInfoHandler,
  kickChatMemberHandler,
  leaveChatHandler,
  logOutHandler,
  pinChatMessageHandler,
  promoteChatMemberHandler,
  restrictChatMemberHandler,
  sendAnimationHandler,
  sendAudioHandler,
  sendChatActionHandler,
  sendContactHandler,
  sendDiceHandler,
  sendDocumentHandler,
  sendGameHandler,
  sendInvoiceHandler,
  sendLocationHandler,
  sendMediaGroupHandler,
  sendMessageHandler,
  sendPhotoHandler,
  sendPollHandler,
  sendStickerHandler,
  sendVenueHandler,
  sendVideoHandler,
  sendVideoNoteHandler,
  sendVoiceHandler,
  setChatAdministratorCustomTitleHandler,
  setChatDescriptionHandler,
  setChatPermissionsHandler,
  setChatPhotoHandler,
  setChatStickerSetHandler,
  setChatTitleHandler,
  setGameScoreHandler,
  setMyCommandsHandler,
  setPassportDataErrorsHandler,
  setStickerPositionInSetHandler,
  setStickerSetThumbHandler,
  setWebhookHandler,
  stopMessageLiveLocationHandler,
  stopPollHandler,
  unbanChatMemberHandler,
  unpinAllChatMessagesHandler,
  unpinChatMessageHandler,
  uploadStickerFileHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addStickerToSetHandler)
  .route('/', answerCallbackQueryHandler)
  .route('/', answerInlineQueryHandler)
  .route('/', answerPreCheckoutQueryHandler)
  .route('/', answerShippingQueryHandler)
  .route('/', closeHandler)
  .route('/', copyMessageHandler)
  .route('/', createNewStickerSetHandler)
  .route('/', deleteChatPhotoHandler)
  .route('/', deleteChatStickerSetHandler)
  .route('/', deleteMessageHandler)
  .route('/', deleteStickerFromSetHandler)
  .route('/', deleteWebhookHandler)
  .route('/', editMessageCaptionHandler)
  .route('/', editMessageLiveLocationHandler)
  .route('/', editMessageMediaHandler)
  .route('/', editMessageReplyMarkupHandler)
  .route('/', editMessageTextHandler)
  .route('/', exportChatInviteLinkHandler)
  .route('/', forwardMessageHandler)
  .route('/', getChatHandler)
  .route('/', getChatAdministratorsHandler)
  .route('/', getChatMemberHandler)
  .route('/', getChatMembersCountHandler)
  .route('/', getFileHandler)
  .route('/', getGameHighScoresHandler)
  .route('/', getMeHandler)
  .route('/', getMyCommandsHandler)
  .route('/', getStickerSetHandler)
  .route('/', getUpdatesHandler)
  .route('/', getUserProfilePhotosHandler)
  .route('/', getWebhookInfoHandler)
  .route('/', kickChatMemberHandler)
  .route('/', leaveChatHandler)
  .route('/', logOutHandler)
  .route('/', pinChatMessageHandler)
  .route('/', promoteChatMemberHandler)
  .route('/', restrictChatMemberHandler)
  .route('/', sendAnimationHandler)
  .route('/', sendAudioHandler)
  .route('/', sendChatActionHandler)
  .route('/', sendContactHandler)
  .route('/', sendDiceHandler)
  .route('/', sendDocumentHandler)
  .route('/', sendGameHandler)
  .route('/', sendInvoiceHandler)
  .route('/', sendLocationHandler)
  .route('/', sendMediaGroupHandler)
  .route('/', sendMessageHandler)
  .route('/', sendPhotoHandler)
  .route('/', sendPollHandler)
  .route('/', sendStickerHandler)
  .route('/', sendVenueHandler)
  .route('/', sendVideoHandler)
  .route('/', sendVideoNoteHandler)
  .route('/', sendVoiceHandler)
  .route('/', setChatAdministratorCustomTitleHandler)
  .route('/', setChatDescriptionHandler)
  .route('/', setChatPermissionsHandler)
  .route('/', setChatPhotoHandler)
  .route('/', setChatStickerSetHandler)
  .route('/', setChatTitleHandler)
  .route('/', setGameScoreHandler)
  .route('/', setMyCommandsHandler)
  .route('/', setPassportDataErrorsHandler)
  .route('/', setStickerPositionInSetHandler)
  .route('/', setStickerSetThumbHandler)
  .route('/', setWebhookHandler)
  .route('/', stopMessageLiveLocationHandler)
  .route('/', stopPollHandler)
  .route('/', unbanChatMemberHandler)
  .route('/', unpinAllChatMessagesHandler)
  .route('/', unpinChatMessageHandler)
  .route('/', uploadStickerFileHandler)

export default app
