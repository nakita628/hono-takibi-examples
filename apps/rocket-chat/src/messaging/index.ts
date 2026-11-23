import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AutotranslateGetProviderUiMetadataRoute,
  getApiV1AutotranslateGetSupportedLanguagesRoute,
  getApiV1ChatGetDeletedMessagesRoute,
  getApiV1ChatGetDiscussionsRoute,
  getApiV1ChatGetMentionedMessagesRoute,
  getApiV1ChatGetMessageReadReceiptsRoute,
  getApiV1ChatGetMessageRoute,
  getApiV1ChatGetPinnedMessagesRoute,
  getApiV1ChatGetStarredMessagesRoute,
  getApiV1ChatGetThreadMessagesRoute,
  getApiV1ChatGetThreadsListRoute,
  getApiV1ChatGetURLPreviewRoute,
  getApiV1ChatIgnoreUserRoute,
  getApiV1ChatSearchRoute,
  getApiV1ChatSyncMessagesRoute,
  getApiV1ChatSyncThreadMessagesRoute,
  getApiV1ChatSyncThreadsListRoute,
  getApiV1DmCountersRoute,
  getApiV1DmFilesRoute,
  getApiV1DmHistoryRoute,
  getApiV1DmListEveryoneRoute,
  getApiV1DmListRoute,
  getApiV1DmMembersRoute,
  getApiV1DmMessagesOthersRoute,
  getApiV1DmMessagesRoute,
  postApiV1AutotranslateSaveSettingsRoute,
  postApiV1AutotranslateTranslateMessageRoute,
  postApiV1ChatDeleteRoute,
  postApiV1ChatFollowMessageRoute,
  postApiV1ChatGetMessagesRoute,
  postApiV1ChatPinMessageRoute,
  postApiV1ChatPostMessageRoute,
  postApiV1ChatReactRoute,
  postApiV1ChatReadThreadRoute,
  postApiV1ChatReportMessageRoute,
  postApiV1ChatSendMessageRoute,
  postApiV1ChatStarMessageRoute,
  postApiV1ChatUnfollowMessageRoute,
  postApiV1ChatUnPinMessageRoute,
  postApiV1ChatUnStarMessageRoute,
  postApiV1ChatUpdateRoute,
  postApiV1DmCloseRoute,
  postApiV1DmCreateRoute,
  postApiV1DmDeleteRoute,
  postApiV1DmOpenRoute,
  postApiV1DmSetTopicRoute,
  postApiV1ImBlockUserRoute,
} from './routes'
import {
  getApiV1AutotranslateGetProviderUiMetadataRouteHandler,
  getApiV1AutotranslateGetSupportedLanguagesRouteHandler,
  getApiV1ChatGetDeletedMessagesRouteHandler,
  getApiV1ChatGetDiscussionsRouteHandler,
  getApiV1ChatGetMentionedMessagesRouteHandler,
  getApiV1ChatGetMessageReadReceiptsRouteHandler,
  getApiV1ChatGetMessageRouteHandler,
  getApiV1ChatGetPinnedMessagesRouteHandler,
  getApiV1ChatGetStarredMessagesRouteHandler,
  getApiV1ChatGetThreadMessagesRouteHandler,
  getApiV1ChatGetThreadsListRouteHandler,
  getApiV1ChatGetURLPreviewRouteHandler,
  getApiV1ChatIgnoreUserRouteHandler,
  getApiV1ChatSearchRouteHandler,
  getApiV1ChatSyncMessagesRouteHandler,
  getApiV1ChatSyncThreadMessagesRouteHandler,
  getApiV1ChatSyncThreadsListRouteHandler,
  getApiV1DmCountersRouteHandler,
  getApiV1DmFilesRouteHandler,
  getApiV1DmHistoryRouteHandler,
  getApiV1DmListEveryoneRouteHandler,
  getApiV1DmListRouteHandler,
  getApiV1DmMembersRouteHandler,
  getApiV1DmMessagesOthersRouteHandler,
  getApiV1DmMessagesRouteHandler,
  postApiV1AutotranslateSaveSettingsRouteHandler,
  postApiV1AutotranslateTranslateMessageRouteHandler,
  postApiV1ChatDeleteRouteHandler,
  postApiV1ChatFollowMessageRouteHandler,
  postApiV1ChatGetMessagesRouteHandler,
  postApiV1ChatPinMessageRouteHandler,
  postApiV1ChatPostMessageRouteHandler,
  postApiV1ChatReactRouteHandler,
  postApiV1ChatReadThreadRouteHandler,
  postApiV1ChatReportMessageRouteHandler,
  postApiV1ChatSendMessageRouteHandler,
  postApiV1ChatStarMessageRouteHandler,
  postApiV1ChatUnfollowMessageRouteHandler,
  postApiV1ChatUnPinMessageRouteHandler,
  postApiV1ChatUnStarMessageRouteHandler,
  postApiV1ChatUpdateRouteHandler,
  postApiV1DmCloseRouteHandler,
  postApiV1DmCreateRouteHandler,
  postApiV1DmDeleteRouteHandler,
  postApiV1DmOpenRouteHandler,
  postApiV1DmSetTopicRouteHandler,
  postApiV1ImBlockUserRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1ChatDeleteRoute, postApiV1ChatDeleteRouteHandler)
  .openapi(postApiV1ChatReactRoute, postApiV1ChatReactRouteHandler)
  .openapi(postApiV1ChatUpdateRoute, postApiV1ChatUpdateRouteHandler)
  .openapi(postApiV1ChatReportMessageRoute, postApiV1ChatReportMessageRouteHandler)
  .openapi(postApiV1ChatFollowMessageRoute, postApiV1ChatFollowMessageRouteHandler)
  .openapi(postApiV1ChatUnfollowMessageRoute, postApiV1ChatUnfollowMessageRouteHandler)
  .openapi(getApiV1ChatGetMessageRoute, getApiV1ChatGetMessageRouteHandler)
  .openapi(getApiV1ChatGetThreadsListRoute, getApiV1ChatGetThreadsListRouteHandler)
  .openapi(getApiV1ChatGetDeletedMessagesRoute, getApiV1ChatGetDeletedMessagesRouteHandler)
  .openapi(getApiV1ChatGetDiscussionsRoute, getApiV1ChatGetDiscussionsRouteHandler)
  .openapi(getApiV1ChatGetMentionedMessagesRoute, getApiV1ChatGetMentionedMessagesRouteHandler)
  .openapi(getApiV1ChatGetMessageReadReceiptsRoute, getApiV1ChatGetMessageReadReceiptsRouteHandler)
  .openapi(getApiV1ChatGetPinnedMessagesRoute, getApiV1ChatGetPinnedMessagesRouteHandler)
  .openapi(postApiV1ChatGetMessagesRoute, postApiV1ChatGetMessagesRouteHandler)
  .openapi(getApiV1ChatGetStarredMessagesRoute, getApiV1ChatGetStarredMessagesRouteHandler)
  .openapi(getApiV1ChatGetThreadMessagesRoute, getApiV1ChatGetThreadMessagesRouteHandler)
  .openapi(postApiV1ChatReadThreadRoute, postApiV1ChatReadThreadRouteHandler)
  .openapi(getApiV1ChatIgnoreUserRoute, getApiV1ChatIgnoreUserRouteHandler)
  .openapi(postApiV1ChatPinMessageRoute, postApiV1ChatPinMessageRouteHandler)
  .openapi(postApiV1ChatUnPinMessageRoute, postApiV1ChatUnPinMessageRouteHandler)
  .openapi(postApiV1ChatPostMessageRoute, postApiV1ChatPostMessageRouteHandler)
  .openapi(getApiV1ChatSearchRoute, getApiV1ChatSearchRouteHandler)
  .openapi(postApiV1ChatSendMessageRoute, postApiV1ChatSendMessageRouteHandler)
  .openapi(postApiV1ChatStarMessageRoute, postApiV1ChatStarMessageRouteHandler)
  .openapi(postApiV1ChatUnStarMessageRoute, postApiV1ChatUnStarMessageRouteHandler)
  .openapi(getApiV1ChatSyncThreadsListRoute, getApiV1ChatSyncThreadsListRouteHandler)
  .openapi(getApiV1ChatSyncThreadMessagesRoute, getApiV1ChatSyncThreadMessagesRouteHandler)
  .openapi(getApiV1ChatSyncMessagesRoute, getApiV1ChatSyncMessagesRouteHandler)
  .openapi(getApiV1ChatGetURLPreviewRoute, getApiV1ChatGetURLPreviewRouteHandler)
  .openapi(postApiV1ImBlockUserRoute, postApiV1ImBlockUserRouteHandler)
  .openapi(postApiV1DmCloseRoute, postApiV1DmCloseRouteHandler)
  .openapi(getApiV1DmCountersRoute, getApiV1DmCountersRouteHandler)
  .openapi(postApiV1DmCreateRoute, postApiV1DmCreateRouteHandler)
  .openapi(postApiV1DmDeleteRoute, postApiV1DmDeleteRouteHandler)
  .openapi(getApiV1DmFilesRoute, getApiV1DmFilesRouteHandler)
  .openapi(getApiV1DmHistoryRoute, getApiV1DmHistoryRouteHandler)
  .openapi(getApiV1DmListEveryoneRoute, getApiV1DmListEveryoneRouteHandler)
  .openapi(getApiV1DmListRoute, getApiV1DmListRouteHandler)
  .openapi(getApiV1DmMembersRoute, getApiV1DmMembersRouteHandler)
  .openapi(getApiV1DmMessagesRoute, getApiV1DmMessagesRouteHandler)
  .openapi(getApiV1DmMessagesOthersRoute, getApiV1DmMessagesOthersRouteHandler)
  .openapi(postApiV1DmOpenRoute, postApiV1DmOpenRouteHandler)
  .openapi(postApiV1DmSetTopicRoute, postApiV1DmSetTopicRouteHandler)
  .openapi(
    getApiV1AutotranslateGetProviderUiMetadataRoute,
    getApiV1AutotranslateGetProviderUiMetadataRouteHandler,
  )
  .openapi(
    getApiV1AutotranslateGetSupportedLanguagesRoute,
    getApiV1AutotranslateGetSupportedLanguagesRouteHandler,
  )
  .openapi(postApiV1AutotranslateSaveSettingsRoute, postApiV1AutotranslateSaveSettingsRouteHandler)
  .openapi(
    postApiV1AutotranslateTranslateMessageRoute,
    postApiV1AutotranslateTranslateMessageRouteHandler,
  )

export default app
