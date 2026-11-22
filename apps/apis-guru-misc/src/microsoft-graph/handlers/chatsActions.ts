import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChatsChatIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postChatsChatIdMembersMicrosoftGraphAddRoute,
  postChatsChatIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postChatsChatIdMicrosoftGraphHideForUserRoute,
  postChatsChatIdMicrosoftGraphMarkChatReadForUserRoute,
  postChatsChatIdMicrosoftGraphMarkChatUnreadForUserRoute,
  postChatsChatIdMicrosoftGraphSendActivityNotificationRoute,
  postChatsChatIdMicrosoftGraphUnhideForUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsActionsHandler = app
  .openapi(postChatsChatIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postChatsChatIdMicrosoftGraphHideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMicrosoftGraphMarkChatReadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMicrosoftGraphMarkChatUnreadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMicrosoftGraphUnhideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
