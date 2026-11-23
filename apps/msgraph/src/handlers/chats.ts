import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteChatsChatIdLastMessagePreviewRoute,
  deleteChatsChatIdMembersConversationMemberIdRoute,
  deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteChatsChatIdMessagesChatMessageIdRoute,
  deleteChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  deleteChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  deleteChatsChatIdRoute,
  deleteChatsChatIdTabsTeamsTabIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getChatsChatIdInstalledAppsCountRoute,
  getChatsChatIdInstalledAppsRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getChatsChatIdLastMessagePreviewRoute,
  getChatsChatIdMembersConversationMemberIdRoute,
  getChatsChatIdMembersCountRoute,
  getChatsChatIdMembersRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getChatsChatIdMessagesChatMessageIdRepliesDeltaRoute,
  getChatsChatIdMessagesChatMessageIdRepliesRoute,
  getChatsChatIdMessagesChatMessageIdRoute,
  getChatsChatIdMessagesCountRoute,
  getChatsChatIdMessagesDeltaRoute,
  getChatsChatIdMessagesRoute,
  getChatsChatIdPermissionGrantsCountRoute,
  getChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getChatsChatIdPermissionGrantsRoute,
  getChatsChatIdPinnedMessagesCountRoute,
  getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute,
  getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getChatsChatIdPinnedMessagesRoute,
  getChatsChatIdRoute,
  getChatsChatIdTabsCountRoute,
  getChatsChatIdTabsRoute,
  getChatsChatIdTabsTeamsTabIdRoute,
  getChatsChatIdTabsTeamsTabIdTeamsAppRoute,
  getChatsChatIdTargetedMessagesCountRoute,
  getChatsChatIdTargetedMessagesRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  getChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  getChatsCountRoute,
  getChatsGetAllMessagesRoute,
  getChatsGetAllRetainedMessagesRoute,
  getChatsRoute,
  patchChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  patchChatsChatIdLastMessagePreviewRoute,
  patchChatsChatIdMembersConversationMemberIdRoute,
  patchChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchChatsChatIdMessagesChatMessageIdRoute,
  patchChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  patchChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  patchChatsChatIdRoute,
  patchChatsChatIdTabsTeamsTabIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute,
  patchChatsChatIdTargetedMessagesTargetedChatMessageIdRoute,
  postChatsChatIdCompleteMigrationRoute,
  postChatsChatIdHideForUserRoute,
  postChatsChatIdInstalledAppsRoute,
  postChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute,
  postChatsChatIdMarkChatReadForUserRoute,
  postChatsChatIdMarkChatUnreadForUserRoute,
  postChatsChatIdMembersAddRoute,
  postChatsChatIdMembersRemoveRoute,
  postChatsChatIdMembersRoute,
  postChatsChatIdMessagesChatMessageIdHostedContentsRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postChatsChatIdMessagesChatMessageIdRepliesRoute,
  postChatsChatIdMessagesChatMessageIdSetReactionRoute,
  postChatsChatIdMessagesChatMessageIdSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postChatsChatIdMessagesChatMessageIdUnsetReactionRoute,
  postChatsChatIdMessagesReplyWithQuoteRoute,
  postChatsChatIdMessagesRoute,
  postChatsChatIdPermissionGrantsRoute,
  postChatsChatIdPinnedMessagesRoute,
  postChatsChatIdRemoveAllAccessForUserRoute,
  postChatsChatIdSendActivityNotificationRoute,
  postChatsChatIdStartMigrationRoute,
  postChatsChatIdTabsRoute,
  postChatsChatIdTargetedMessagesRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute,
  postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute,
  postChatsChatIdUnhideForUserRoute,
  postChatsRoute,
  putChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

export const getChatsRouteHandler: RouteHandler<typeof getChatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsRouteHandler: RouteHandler<typeof postChatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdRouteHandler: RouteHandler<typeof getChatsChatIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdRouteHandler: RouteHandler<typeof patchChatsChatIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdRouteHandler: RouteHandler<typeof deleteChatsChatIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdInstalledAppsRouteHandler: RouteHandler<
  typeof getChatsChatIdInstalledAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdInstalledAppsRouteHandler: RouteHandler<
  typeof postChatsChatIdInstalledAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdInstalledAppsTeamsAppInstallationIdRouteHandler: RouteHandler<
  typeof getChatsChatIdInstalledAppsTeamsAppInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdInstalledAppsTeamsAppInstallationIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdInstalledAppsTeamsAppInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRouteHandler: RouteHandler<
  typeof postChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRouteHandler: RouteHandler<
  typeof getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRouteHandler: RouteHandler<
  typeof getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdInstalledAppsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdInstalledAppsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdLastMessagePreviewRouteHandler: RouteHandler<
  typeof getChatsChatIdLastMessagePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdLastMessagePreviewRouteHandler: RouteHandler<
  typeof patchChatsChatIdLastMessagePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdLastMessagePreviewRouteHandler: RouteHandler<
  typeof deleteChatsChatIdLastMessagePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMembersRouteHandler: RouteHandler<
  typeof getChatsChatIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMembersRouteHandler: RouteHandler<
  typeof postChatsChatIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getChatsChatIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMembersCountRouteHandler: RouteHandler<
  typeof getChatsChatIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMembersAddRouteHandler: RouteHandler<
  typeof postChatsChatIdMembersAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMembersRemoveRouteHandler: RouteHandler<
  typeof postChatsChatIdMembersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof putChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof deleteChatsChatIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdHostedContentsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdHostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdSetReactionRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdSetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdSoftDeleteRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdUnsetReactionRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdUnsetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof putChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof deleteChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesCountRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesChatMessageIdRepliesDeltaRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesChatMessageIdRepliesDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesChatMessageIdRepliesReplyWithQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesCountRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdMessagesDeltaRouteHandler: RouteHandler<
  typeof getChatsChatIdMessagesDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMessagesReplyWithQuoteRouteHandler: RouteHandler<
  typeof postChatsChatIdMessagesReplyWithQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdCompleteMigrationRouteHandler: RouteHandler<
  typeof postChatsChatIdCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdHideForUserRouteHandler: RouteHandler<
  typeof postChatsChatIdHideForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMarkChatReadForUserRouteHandler: RouteHandler<
  typeof postChatsChatIdMarkChatReadForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdMarkChatUnreadForUserRouteHandler: RouteHandler<
  typeof postChatsChatIdMarkChatUnreadForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdRemoveAllAccessForUserRouteHandler: RouteHandler<
  typeof postChatsChatIdRemoveAllAccessForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdSendActivityNotificationRouteHandler: RouteHandler<
  typeof postChatsChatIdSendActivityNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdStartMigrationRouteHandler: RouteHandler<
  typeof postChatsChatIdStartMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdUnhideForUserRouteHandler: RouteHandler<
  typeof postChatsChatIdUnhideForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPermissionGrantsRouteHandler: RouteHandler<
  typeof getChatsChatIdPermissionGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdPermissionGrantsRouteHandler: RouteHandler<
  typeof postChatsChatIdPermissionGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRouteHandler: RouteHandler<
  typeof getChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdPermissionGrantsResourceSpecificPermissionGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPermissionGrantsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdPermissionGrantsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPinnedMessagesRouteHandler: RouteHandler<
  typeof getChatsChatIdPinnedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdPinnedMessagesRouteHandler: RouteHandler<
  typeof postChatsChatIdPinnedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRouteHandler: RouteHandler<
  typeof getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRouteHandler: RouteHandler<
  typeof getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdPinnedMessagesCountRouteHandler: RouteHandler<
  typeof getChatsChatIdPinnedMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTabsRouteHandler: RouteHandler<typeof getChatsChatIdTabsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTabsRouteHandler: RouteHandler<
  typeof postChatsChatIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof getChatsChatIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTabsTeamsTabIdTeamsAppRouteHandler: RouteHandler<
  typeof getChatsChatIdTabsTeamsTabIdTeamsAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTabsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdTabsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdTargetedMessagesTargetedChatMessageIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdTargetedMessagesTargetedChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof putChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdHostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof putChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof deleteChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdHostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesChatMessageIdUnsetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRouteHandler: RouteHandler<
  typeof postChatsChatIdTargetedMessagesTargetedChatMessageIdRepliesReplyWithQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsChatIdTargetedMessagesCountRouteHandler: RouteHandler<
  typeof getChatsChatIdTargetedMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsCountRouteHandler: RouteHandler<typeof getChatsCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsGetAllMessagesRouteHandler: RouteHandler<
  typeof getChatsGetAllMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChatsGetAllRetainedMessagesRouteHandler: RouteHandler<
  typeof getChatsGetAllRetainedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
