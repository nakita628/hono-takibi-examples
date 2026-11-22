import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteMeChatsChatIdLastMessagePreviewRoute,
  deleteMeChatsChatIdMembersConversationMemberIdRoute,
  deleteMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteMeChatsChatIdMessagesChatMessageIdRoute,
  deleteMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  deleteMeChatsChatIdRoute,
  deleteMeChatsChatIdTabsTeamsTabIdRoute,
  getMeChatsChatIdInstalledAppsRoute,
  getMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getMeChatsChatIdLastMessagePreviewRoute,
  getMeChatsChatIdMembersConversationMemberIdRoute,
  getMeChatsChatIdMembersRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getMeChatsChatIdMessagesChatMessageIdRepliesRoute,
  getMeChatsChatIdMessagesChatMessageIdRoute,
  getMeChatsChatIdMessagesRoute,
  getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute,
  getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getMeChatsChatIdPinnedMessagesRoute,
  getMeChatsChatIdRoute,
  getMeChatsChatIdTabsRoute,
  getMeChatsChatIdTabsTeamsTabIdRoute,
  getMeChatsChatIdTabsTeamsTabIdTeamsAppRoute,
  getMeChatsRoute,
  patchMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  patchMeChatsChatIdLastMessagePreviewRoute,
  patchMeChatsChatIdMembersConversationMemberIdRoute,
  patchMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchMeChatsChatIdMessagesChatMessageIdRoute,
  patchMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  patchMeChatsChatIdRoute,
  patchMeChatsChatIdTabsTeamsTabIdRoute,
  postMeChatsChatIdInstalledAppsRoute,
  postMeChatsChatIdMembersRoute,
  postMeChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesRoute,
  postMeChatsChatIdMessagesRoute,
  postMeChatsChatIdPinnedMessagesRoute,
  postMeChatsChatIdTabsRoute,
  postMeChatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meChatHandler = app
  .openapi(getMeChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
