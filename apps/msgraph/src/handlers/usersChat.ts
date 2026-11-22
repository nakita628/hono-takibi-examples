import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteUsersUserIdChatsChatIdLastMessagePreviewRoute,
  deleteUsersUserIdChatsChatIdMembersConversationMemberIdRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteUsersUserIdChatsChatIdMessagesChatMessageIdRoute,
  deleteUsersUserIdChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  deleteUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  deleteUsersUserIdChatsChatIdRoute,
  deleteUsersUserIdChatsChatIdTabsTeamsTabIdRoute,
  deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getUsersUserIdChatsChatIdInstalledAppsCountRoute,
  getUsersUserIdChatsChatIdInstalledAppsRoute,
  getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getUsersUserIdChatsChatIdLastMessagePreviewRoute,
  getUsersUserIdChatsChatIdMembersConversationMemberIdRoute,
  getUsersUserIdChatsChatIdMembersCountRoute,
  getUsersUserIdChatsChatIdMembersRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesDeltaRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRoute,
  getUsersUserIdChatsChatIdMessagesCountRoute,
  getUsersUserIdChatsChatIdMessagesDeltaRoute,
  getUsersUserIdChatsChatIdMessagesRoute,
  getUsersUserIdChatsChatIdPermissionGrantsCountRoute,
  getUsersUserIdChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getUsersUserIdChatsChatIdPermissionGrantsRoute,
  getUsersUserIdChatsChatIdPinnedMessagesCountRoute,
  getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute,
  getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getUsersUserIdChatsChatIdPinnedMessagesRoute,
  getUsersUserIdChatsChatIdRoute,
  getUsersUserIdChatsChatIdTabsCountRoute,
  getUsersUserIdChatsChatIdTabsRoute,
  getUsersUserIdChatsChatIdTabsTeamsTabIdRoute,
  getUsersUserIdChatsChatIdTabsTeamsTabIdTeamsAppRoute,
  getUsersUserIdChatsChatIdTargetedMessagesCountRoute,
  getUsersUserIdChatsChatIdTargetedMessagesRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getUsersUserIdChatsCountRoute,
  getUsersUserIdChatsGetAllMessagesRoute,
  getUsersUserIdChatsGetAllRetainedMessagesRoute,
  getUsersUserIdChatsRoute,
  patchUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  patchUsersUserIdChatsChatIdLastMessagePreviewRoute,
  patchUsersUserIdChatsChatIdMembersConversationMemberIdRoute,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchUsersUserIdChatsChatIdMessagesChatMessageIdRoute,
  patchUsersUserIdChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  patchUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  patchUsersUserIdChatsChatIdRoute,
  patchUsersUserIdChatsChatIdTabsTeamsTabIdRoute,
  patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  postUsersUserIdChatsChatIdCompleteMigrationRoute,
  postUsersUserIdChatsChatIdHideForUserRoute,
  postUsersUserIdChatsChatIdInstalledAppsRoute,
  postUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute,
  postUsersUserIdChatsChatIdMarkChatReadForUserRoute,
  postUsersUserIdChatsChatIdMarkChatUnreadForUserRoute,
  postUsersUserIdChatsChatIdMembersAddRoute,
  postUsersUserIdChatsChatIdMembersRemoveRoute,
  postUsersUserIdChatsChatIdMembersRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdSetReactionRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdSoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdUnsetReactionRoute,
  postUsersUserIdChatsChatIdMessagesReplyWithQuoteRoute,
  postUsersUserIdChatsChatIdMessagesRoute,
  postUsersUserIdChatsChatIdPermissionGrantsRoute,
  postUsersUserIdChatsChatIdPinnedMessagesRoute,
  postUsersUserIdChatsChatIdRemoveAllAccessForUserRoute,
  postUsersUserIdChatsChatIdSendActivityNotificationRoute,
  postUsersUserIdChatsChatIdStartMigrationRoute,
  postUsersUserIdChatsChatIdTabsRoute,
  postUsersUserIdChatsChatIdTargetedMessagesRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute,
  postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  postUsersUserIdChatsChatIdUnhideForUserRoute,
  postUsersUserIdChatsRoute,
  putUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersChatHandler = app
  .openapi(getUsersUserIdChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute, (c) => {
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
  .openapi(getUsersUserIdChatsChatIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(
    deleteUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
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
  .openapi(
    deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdHideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMarkChatReadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMarkChatUnreadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdRemoveAllAccessForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdUnhideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchUsersUserIdChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdTargetedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
