import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAddStickerToSetRoute,
  postAnswerCallbackQueryRoute,
  postAnswerInlineQueryRoute,
  postAnswerPreCheckoutQueryRoute,
  postAnswerShippingQueryRoute,
  postCloseRoute,
  postCopyMessageRoute,
  postCreateNewStickerSetRoute,
  postDeleteChatPhotoRoute,
  postDeleteChatStickerSetRoute,
  postDeleteMessageRoute,
  postDeleteStickerFromSetRoute,
  postDeleteWebhookRoute,
  postEditMessageCaptionRoute,
  postEditMessageLiveLocationRoute,
  postEditMessageMediaRoute,
  postEditMessageReplyMarkupRoute,
  postEditMessageTextRoute,
  postExportChatInviteLinkRoute,
  postForwardMessageRoute,
  postGetChatAdministratorsRoute,
  postGetChatMemberRoute,
  postGetChatMembersCountRoute,
  postGetChatRoute,
  postGetFileRoute,
  postGetGameHighScoresRoute,
  postGetMeRoute,
  postGetMyCommandsRoute,
  postGetStickerSetRoute,
  postGetUpdatesRoute,
  postGetUserProfilePhotosRoute,
  postGetWebhookInfoRoute,
  postKickChatMemberRoute,
  postLeaveChatRoute,
  postLogOutRoute,
  postPinChatMessageRoute,
  postPromoteChatMemberRoute,
  postRestrictChatMemberRoute,
  postSendAnimationRoute,
  postSendAudioRoute,
  postSendChatActionRoute,
  postSendContactRoute,
  postSendDiceRoute,
  postSendDocumentRoute,
  postSendGameRoute,
  postSendInvoiceRoute,
  postSendLocationRoute,
  postSendMediaGroupRoute,
  postSendMessageRoute,
  postSendPhotoRoute,
  postSendPollRoute,
  postSendStickerRoute,
  postSendVenueRoute,
  postSendVideoNoteRoute,
  postSendVideoRoute,
  postSendVoiceRoute,
  postSetChatAdministratorCustomTitleRoute,
  postSetChatDescriptionRoute,
  postSetChatPermissionsRoute,
  postSetChatPhotoRoute,
  postSetChatStickerSetRoute,
  postSetChatTitleRoute,
  postSetGameScoreRoute,
  postSetMyCommandsRoute,
  postSetPassportDataErrorsRoute,
  postSetStickerPositionInSetRoute,
  postSetStickerSetThumbRoute,
  postSetWebhookRoute,
  postStopMessageLiveLocationRoute,
  postStopPollRoute,
  postUnbanChatMemberRoute,
  postUnpinAllChatMessagesRoute,
  postUnpinChatMessageRoute,
  postUploadStickerFileRoute,
} from './routes'
import {
  postAddStickerToSetRouteHandler,
  postAnswerCallbackQueryRouteHandler,
  postAnswerInlineQueryRouteHandler,
  postAnswerPreCheckoutQueryRouteHandler,
  postAnswerShippingQueryRouteHandler,
  postCloseRouteHandler,
  postCopyMessageRouteHandler,
  postCreateNewStickerSetRouteHandler,
  postDeleteChatPhotoRouteHandler,
  postDeleteChatStickerSetRouteHandler,
  postDeleteMessageRouteHandler,
  postDeleteStickerFromSetRouteHandler,
  postDeleteWebhookRouteHandler,
  postEditMessageCaptionRouteHandler,
  postEditMessageLiveLocationRouteHandler,
  postEditMessageMediaRouteHandler,
  postEditMessageReplyMarkupRouteHandler,
  postEditMessageTextRouteHandler,
  postExportChatInviteLinkRouteHandler,
  postForwardMessageRouteHandler,
  postGetChatAdministratorsRouteHandler,
  postGetChatMemberRouteHandler,
  postGetChatMembersCountRouteHandler,
  postGetChatRouteHandler,
  postGetFileRouteHandler,
  postGetGameHighScoresRouteHandler,
  postGetMeRouteHandler,
  postGetMyCommandsRouteHandler,
  postGetStickerSetRouteHandler,
  postGetUpdatesRouteHandler,
  postGetUserProfilePhotosRouteHandler,
  postGetWebhookInfoRouteHandler,
  postKickChatMemberRouteHandler,
  postLeaveChatRouteHandler,
  postLogOutRouteHandler,
  postPinChatMessageRouteHandler,
  postPromoteChatMemberRouteHandler,
  postRestrictChatMemberRouteHandler,
  postSendAnimationRouteHandler,
  postSendAudioRouteHandler,
  postSendChatActionRouteHandler,
  postSendContactRouteHandler,
  postSendDiceRouteHandler,
  postSendDocumentRouteHandler,
  postSendGameRouteHandler,
  postSendInvoiceRouteHandler,
  postSendLocationRouteHandler,
  postSendMediaGroupRouteHandler,
  postSendMessageRouteHandler,
  postSendPhotoRouteHandler,
  postSendPollRouteHandler,
  postSendStickerRouteHandler,
  postSendVenueRouteHandler,
  postSendVideoNoteRouteHandler,
  postSendVideoRouteHandler,
  postSendVoiceRouteHandler,
  postSetChatAdministratorCustomTitleRouteHandler,
  postSetChatDescriptionRouteHandler,
  postSetChatPermissionsRouteHandler,
  postSetChatPhotoRouteHandler,
  postSetChatStickerSetRouteHandler,
  postSetChatTitleRouteHandler,
  postSetGameScoreRouteHandler,
  postSetMyCommandsRouteHandler,
  postSetPassportDataErrorsRouteHandler,
  postSetStickerPositionInSetRouteHandler,
  postSetStickerSetThumbRouteHandler,
  postSetWebhookRouteHandler,
  postStopMessageLiveLocationRouteHandler,
  postStopPollRouteHandler,
  postUnbanChatMemberRouteHandler,
  postUnpinAllChatMessagesRouteHandler,
  postUnpinChatMessageRouteHandler,
  postUploadStickerFileRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAddStickerToSetRoute, postAddStickerToSetRouteHandler)
  .openapi(postAnswerCallbackQueryRoute, postAnswerCallbackQueryRouteHandler)
  .openapi(postAnswerInlineQueryRoute, postAnswerInlineQueryRouteHandler)
  .openapi(postAnswerPreCheckoutQueryRoute, postAnswerPreCheckoutQueryRouteHandler)
  .openapi(postAnswerShippingQueryRoute, postAnswerShippingQueryRouteHandler)
  .openapi(postCloseRoute, postCloseRouteHandler)
  .openapi(postCopyMessageRoute, postCopyMessageRouteHandler)
  .openapi(postCreateNewStickerSetRoute, postCreateNewStickerSetRouteHandler)
  .openapi(postDeleteChatPhotoRoute, postDeleteChatPhotoRouteHandler)
  .openapi(postDeleteChatStickerSetRoute, postDeleteChatStickerSetRouteHandler)
  .openapi(postDeleteMessageRoute, postDeleteMessageRouteHandler)
  .openapi(postDeleteStickerFromSetRoute, postDeleteStickerFromSetRouteHandler)
  .openapi(postDeleteWebhookRoute, postDeleteWebhookRouteHandler)
  .openapi(postEditMessageCaptionRoute, postEditMessageCaptionRouteHandler)
  .openapi(postEditMessageLiveLocationRoute, postEditMessageLiveLocationRouteHandler)
  .openapi(postEditMessageMediaRoute, postEditMessageMediaRouteHandler)
  .openapi(postEditMessageReplyMarkupRoute, postEditMessageReplyMarkupRouteHandler)
  .openapi(postEditMessageTextRoute, postEditMessageTextRouteHandler)
  .openapi(postExportChatInviteLinkRoute, postExportChatInviteLinkRouteHandler)
  .openapi(postForwardMessageRoute, postForwardMessageRouteHandler)
  .openapi(postGetChatRoute, postGetChatRouteHandler)
  .openapi(postGetChatAdministratorsRoute, postGetChatAdministratorsRouteHandler)
  .openapi(postGetChatMemberRoute, postGetChatMemberRouteHandler)
  .openapi(postGetChatMembersCountRoute, postGetChatMembersCountRouteHandler)
  .openapi(postGetFileRoute, postGetFileRouteHandler)
  .openapi(postGetGameHighScoresRoute, postGetGameHighScoresRouteHandler)
  .openapi(postGetMeRoute, postGetMeRouteHandler)
  .openapi(postGetMyCommandsRoute, postGetMyCommandsRouteHandler)
  .openapi(postGetStickerSetRoute, postGetStickerSetRouteHandler)
  .openapi(postGetUpdatesRoute, postGetUpdatesRouteHandler)
  .openapi(postGetUserProfilePhotosRoute, postGetUserProfilePhotosRouteHandler)
  .openapi(postGetWebhookInfoRoute, postGetWebhookInfoRouteHandler)
  .openapi(postKickChatMemberRoute, postKickChatMemberRouteHandler)
  .openapi(postLeaveChatRoute, postLeaveChatRouteHandler)
  .openapi(postLogOutRoute, postLogOutRouteHandler)
  .openapi(postPinChatMessageRoute, postPinChatMessageRouteHandler)
  .openapi(postPromoteChatMemberRoute, postPromoteChatMemberRouteHandler)
  .openapi(postRestrictChatMemberRoute, postRestrictChatMemberRouteHandler)
  .openapi(postSendAnimationRoute, postSendAnimationRouteHandler)
  .openapi(postSendAudioRoute, postSendAudioRouteHandler)
  .openapi(postSendChatActionRoute, postSendChatActionRouteHandler)
  .openapi(postSendContactRoute, postSendContactRouteHandler)
  .openapi(postSendDiceRoute, postSendDiceRouteHandler)
  .openapi(postSendDocumentRoute, postSendDocumentRouteHandler)
  .openapi(postSendGameRoute, postSendGameRouteHandler)
  .openapi(postSendInvoiceRoute, postSendInvoiceRouteHandler)
  .openapi(postSendLocationRoute, postSendLocationRouteHandler)
  .openapi(postSendMediaGroupRoute, postSendMediaGroupRouteHandler)
  .openapi(postSendMessageRoute, postSendMessageRouteHandler)
  .openapi(postSendPhotoRoute, postSendPhotoRouteHandler)
  .openapi(postSendPollRoute, postSendPollRouteHandler)
  .openapi(postSendStickerRoute, postSendStickerRouteHandler)
  .openapi(postSendVenueRoute, postSendVenueRouteHandler)
  .openapi(postSendVideoRoute, postSendVideoRouteHandler)
  .openapi(postSendVideoNoteRoute, postSendVideoNoteRouteHandler)
  .openapi(postSendVoiceRoute, postSendVoiceRouteHandler)
  .openapi(
    postSetChatAdministratorCustomTitleRoute,
    postSetChatAdministratorCustomTitleRouteHandler,
  )
  .openapi(postSetChatDescriptionRoute, postSetChatDescriptionRouteHandler)
  .openapi(postSetChatPermissionsRoute, postSetChatPermissionsRouteHandler)
  .openapi(postSetChatPhotoRoute, postSetChatPhotoRouteHandler)
  .openapi(postSetChatStickerSetRoute, postSetChatStickerSetRouteHandler)
  .openapi(postSetChatTitleRoute, postSetChatTitleRouteHandler)
  .openapi(postSetGameScoreRoute, postSetGameScoreRouteHandler)
  .openapi(postSetMyCommandsRoute, postSetMyCommandsRouteHandler)
  .openapi(postSetPassportDataErrorsRoute, postSetPassportDataErrorsRouteHandler)
  .openapi(postSetStickerPositionInSetRoute, postSetStickerPositionInSetRouteHandler)
  .openapi(postSetStickerSetThumbRoute, postSetStickerSetThumbRouteHandler)
  .openapi(postSetWebhookRoute, postSetWebhookRouteHandler)
  .openapi(postStopMessageLiveLocationRoute, postStopMessageLiveLocationRouteHandler)
  .openapi(postStopPollRoute, postStopPollRouteHandler)
  .openapi(postUnbanChatMemberRoute, postUnbanChatMemberRouteHandler)
  .openapi(postUnpinAllChatMessagesRoute, postUnpinAllChatMessagesRouteHandler)
  .openapi(postUnpinChatMessageRoute, postUnpinChatMessageRouteHandler)
  .openapi(postUploadStickerFileRoute, postUploadStickerFileRouteHandler)

export default app
