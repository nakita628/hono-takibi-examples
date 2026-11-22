import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteMeChatsChatIdLastMessagePreviewRoute,
  deleteMeChatsChatIdMembersConversationMemberIdRoute,
  deleteMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteMeChatsChatIdMessagesChatMessageIdRoute,
  deleteMeChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  deleteMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  deleteMeChatsChatIdRoute,
  deleteMeChatsChatIdTabsTeamsTabIdRoute,
  deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getMeChatsChatIdInstalledAppsCountRoute,
  getMeChatsChatIdInstalledAppsRoute,
  getMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getMeChatsChatIdLastMessagePreviewRoute,
  getMeChatsChatIdMembersConversationMemberIdRoute,
  getMeChatsChatIdMembersCountRoute,
  getMeChatsChatIdMembersRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getMeChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesDeltaRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesRoute,
  getMeChatsChatIdMessagesChatMessageIdRoute,
  getMeChatsChatIdMessagesCountRoute,
  getMeChatsChatIdMessagesDeltaRoute,
  getMeChatsChatIdMessagesRoute,
  getMeChatsChatIdPermissionGrantsCountRoute,
  getMeChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getMeChatsChatIdPermissionGrantsRoute,
  getMeChatsChatIdPinnedMessagesCountRoute,
  getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute,
  getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getMeChatsChatIdPinnedMessagesRoute,
  getMeChatsChatIdRoute,
  getMeChatsChatIdTabsCountRoute,
  getMeChatsChatIdTabsRoute,
  getMeChatsChatIdTabsTeamsTabIdRoute,
  getMeChatsChatIdTabsTeamsTabIdTeamsAppRoute,
  getMeChatsChatIdTargetedMessagesCountRoute,
  getMeChatsChatIdTargetedMessagesRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getMeChatsCountRoute,
  getMeChatsGetAllMessagesRoute,
  getMeChatsGetAllRetainedMessagesRoute,
  getMeChatsRoute,
  patchMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  patchMeChatsChatIdLastMessagePreviewRoute,
  patchMeChatsChatIdMembersConversationMemberIdRoute,
  patchMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchMeChatsChatIdMessagesChatMessageIdRoute,
  patchMeChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  patchMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  patchMeChatsChatIdRoute,
  patchMeChatsChatIdTabsTeamsTabIdRoute,
  patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  postMeChatsChatIdCompleteMigrationRoute,
  postMeChatsChatIdHideForUserRoute,
  postMeChatsChatIdInstalledAppsRoute,
  postMeChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute,
  postMeChatsChatIdMarkChatReadForUserRoute,
  postMeChatsChatIdMarkChatUnreadForUserRoute,
  postMeChatsChatIdMembersAddRoute,
  postMeChatsChatIdMembersRemoveRoute,
  postMeChatsChatIdMembersRoute,
  postMeChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesRoute,
  postMeChatsChatIdMessagesChatMessageIdSetReactionRoute,
  postMeChatsChatIdMessagesChatMessageIdSoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdUnsetReactionRoute,
  postMeChatsChatIdMessagesReplyWithQuoteRoute,
  postMeChatsChatIdMessagesRoute,
  postMeChatsChatIdPermissionGrantsRoute,
  postMeChatsChatIdPinnedMessagesRoute,
  postMeChatsChatIdRemoveAllAccessForUserRoute,
  postMeChatsChatIdSendActivityNotificationRoute,
  postMeChatsChatIdStartMigrationRoute,
  postMeChatsChatIdTabsRoute,
  postMeChatsChatIdTargetedMessagesRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute,
  postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  postMeChatsChatIdUnhideForUserRoute,
  postMeChatsRoute,
  putMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meChatHandler = app
  .openapi(getMeChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(
    deleteMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(
    deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdHideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMarkChatReadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMarkChatUnreadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdRemoveAllAccessForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdUnhideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdPinnedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdTargetedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
