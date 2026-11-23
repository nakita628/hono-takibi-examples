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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV1ChatDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatReactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatReportMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatFollowMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUnfollowMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetThreadsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetDeletedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetMentionedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetMessageReadReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatGetMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetStarredMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetThreadMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatReadThreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatIgnoreUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatPinMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUnPinMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatPostMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatSendMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatStarMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUnStarMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSyncThreadsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSyncThreadMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSyncMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetURLPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImBlockUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmListEveryoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmMessagesOthersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotranslateGetProviderUiMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotranslateGetSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AutotranslateSaveSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AutotranslateTranslateMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
