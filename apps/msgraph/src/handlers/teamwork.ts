import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamworkDeletedChatsDeletedChatIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdRoute,
  deleteTeamworkTeamsAppSettingsRoute,
  deleteTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute,
  getTeamworkDeletedChatsCountRoute,
  getTeamworkDeletedChatsDeletedChatIdRoute,
  getTeamworkDeletedChatsRoute,
  getTeamworkDeletedTeamsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesDeltaRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllMessagesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllRetainedMessagesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdRoute,
  getTeamworkDeletedTeamsGetAllMessagesRoute,
  getTeamworkDeletedTeamsRoute,
  getTeamworkRoute,
  getTeamworkTeamsAppSettingsRoute,
  getTeamworkWorkforceIntegrationsCountRoute,
  getTeamworkWorkforceIntegrationsRoute,
  getTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute,
  patchTeamworkDeletedChatsDeletedChatIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdRoute,
  patchTeamworkRoute,
  patchTeamworkTeamsAppSettingsRoute,
  patchTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute,
  postTeamworkDeletedChatsDeletedChatIdUndoDeleteRoute,
  postTeamworkDeletedChatsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersAddRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRemoveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdArchiveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdCompleteMigrationRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersAddRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRemoveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdProvisionEmailRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRemoveEmailRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdStartMigrationRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdUnarchiveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsRoute,
  postTeamworkDeletedTeamsRoute,
  postTeamworkSendActivityNotificationToRecipientsRoute,
  postTeamworkWorkforceIntegrationsRoute,
  putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute,
  putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

export const getTeamworkRouteHandler: RouteHandler<typeof getTeamworkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkRouteHandler: RouteHandler<typeof patchTeamworkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedChatsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedChatsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedChatsDeletedChatIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedChatsDeletedChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedChatsDeletedChatIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedChatsDeletedChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedChatsDeletedChatIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedChatsDeletedChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedChatsDeletedChatIdUndoDeleteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedChatsDeletedChatIdUndoDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedChatsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedChatsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersAddRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRemoveRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRouteHandler: RouteHandler<
  typeof putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersAddRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRemoveRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesDeltaRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesReplyWithQuoteRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdArchiveRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdCompleteMigrationRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdProvisionEmailRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdProvisionEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRemoveEmailRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRemoveEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdStartMigrationRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdStartMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdUnarchiveRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRouteHandler: RouteHandler<
  typeof postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllMessagesRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllRetainedMessagesRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllRetainedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsCountRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkDeletedTeamsGetAllMessagesRouteHandler: RouteHandler<
  typeof getTeamworkDeletedTeamsGetAllMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkSendActivityNotificationToRecipientsRouteHandler: RouteHandler<
  typeof postTeamworkSendActivityNotificationToRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkTeamsAppSettingsRouteHandler: RouteHandler<
  typeof getTeamworkTeamsAppSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkTeamsAppSettingsRouteHandler: RouteHandler<
  typeof patchTeamworkTeamsAppSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkTeamsAppSettingsRouteHandler: RouteHandler<
  typeof deleteTeamworkTeamsAppSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkWorkforceIntegrationsRouteHandler: RouteHandler<
  typeof getTeamworkWorkforceIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamworkWorkforceIntegrationsRouteHandler: RouteHandler<
  typeof postTeamworkWorkforceIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkWorkforceIntegrationsWorkforceIntegrationIdRouteHandler: RouteHandler<
  typeof getTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamworkWorkforceIntegrationsWorkforceIntegrationIdRouteHandler: RouteHandler<
  typeof patchTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamworkWorkforceIntegrationsWorkforceIntegrationIdRouteHandler: RouteHandler<
  typeof deleteTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamworkWorkforceIntegrationsCountRouteHandler: RouteHandler<
  typeof getTeamworkWorkforceIntegrationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
