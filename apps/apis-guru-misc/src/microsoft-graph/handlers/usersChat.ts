import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteUsersUserIdChatsChatIdLastMessagePreviewRoute,
  deleteUsersUserIdChatsChatIdMembersConversationMemberIdRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRoute,
  deleteUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  deleteUsersUserIdChatsChatIdRoute,
  deleteUsersUserIdChatsChatIdTabsTeamsTabIdRoute,
  getUsersUserIdChatsChatIdInstalledAppsRoute,
  getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getUsersUserIdChatsChatIdLastMessagePreviewRoute,
  getUsersUserIdChatsChatIdMembersConversationMemberIdRoute,
  getUsersUserIdChatsChatIdMembersRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRoute,
  getUsersUserIdChatsChatIdMessagesRoute,
  getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute,
  getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getUsersUserIdChatsChatIdPinnedMessagesRoute,
  getUsersUserIdChatsChatIdRoute,
  getUsersUserIdChatsChatIdTabsRoute,
  getUsersUserIdChatsChatIdTabsTeamsTabIdRoute,
  getUsersUserIdChatsChatIdTabsTeamsTabIdTeamsAppRoute,
  getUsersUserIdChatsRoute,
  patchUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  patchUsersUserIdChatsChatIdLastMessagePreviewRoute,
  patchUsersUserIdChatsChatIdMembersConversationMemberIdRoute,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdRoute,
  patchUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  patchUsersUserIdChatsChatIdRoute,
  patchUsersUserIdChatsChatIdTabsTeamsTabIdRoute,
  postUsersUserIdChatsChatIdInstalledAppsRoute,
  postUsersUserIdChatsChatIdMembersRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute,
  postUsersUserIdChatsChatIdMessagesRoute,
  postUsersUserIdChatsChatIdPinnedMessagesRoute,
  postUsersUserIdChatsChatIdTabsRoute,
  postUsersUserIdChatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersChatHandler = app
  .openapi(getUsersUserIdChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteUsersUserIdChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
