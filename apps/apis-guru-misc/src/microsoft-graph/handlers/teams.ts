import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteTeamsTeamIdChannelsChannelIdRoute,
  deleteTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteTeamsTeamIdMembersConversationMemberIdRoute,
  deleteTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  deleteTeamsTeamIdPhotoRoute,
  deleteTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  deleteTeamsTeamIdPrimaryChannelRoute,
  deleteTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  deleteTeamsTeamIdRoute,
  deleteTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  deleteTeamsTeamIdScheduleRoute,
  deleteTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteTeamsTeamIdScheduleShiftsShiftIdRoute,
  deleteTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  deleteTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteTeamsTeamIdTagsTeamworkTagIdRoute,
  getTeamsCountRoute,
  getTeamsMicrosoftGraphGetAllMessagesRoute,
  getTeamsRoute,
  getTeamsTeamIdAllChannelsChannelIdRoute,
  getTeamsTeamIdAllChannelsCountRoute,
  getTeamsTeamIdAllChannelsRoute,
  getTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  getTeamsTeamIdChannelsChannelIdFilesFolderRoute,
  getTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdMembersRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdChannelsChannelIdMessagesRoute,
  getTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamsTeamIdChannelsChannelIdRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getTeamsTeamIdChannelsChannelIdTabsRoute,
  getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getTeamsTeamIdChannelsCountRoute,
  getTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute,
  getTeamsTeamIdChannelsRoute,
  getTeamsTeamIdGroupRoute,
  getTeamsTeamIdIncomingChannelsChannelIdRoute,
  getTeamsTeamIdIncomingChannelsCountRoute,
  getTeamsTeamIdIncomingChannelsRoute,
  getTeamsTeamIdInstalledAppsCountRoute,
  getTeamsTeamIdInstalledAppsRoute,
  getTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getTeamsTeamIdMembersConversationMemberIdRoute,
  getTeamsTeamIdMembersCountRoute,
  getTeamsTeamIdMembersRoute,
  getTeamsTeamIdOperationsCountRoute,
  getTeamsTeamIdOperationsRoute,
  getTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  getTeamsTeamIdPhotoRoute,
  getTeamsTeamIdPhotoValueRoute,
  getTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  getTeamsTeamIdPrimaryChannelFilesFolderRoute,
  getTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  getTeamsTeamIdPrimaryChannelMembersCountRoute,
  getTeamsTeamIdPrimaryChannelMembersRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  getTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute,
  getTeamsTeamIdPrimaryChannelMessagesRoute,
  getTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamsTeamIdPrimaryChannelRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getTeamsTeamIdPrimaryChannelTabsCountRoute,
  getTeamsTeamIdPrimaryChannelTabsRoute,
  getTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  getTeamsTeamIdScheduleOpenShiftsCountRoute,
  getTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  getTeamsTeamIdScheduleOpenShiftsRoute,
  getTeamsTeamIdScheduleRoute,
  getTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getTeamsTeamIdScheduleSchedulingGroupsRoute,
  getTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getTeamsTeamIdScheduleShiftsCountRoute,
  getTeamsTeamIdScheduleShiftsRoute,
  getTeamsTeamIdScheduleShiftsShiftIdRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getTeamsTeamIdScheduleTimeOffReasonsRoute,
  getTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getTeamsTeamIdScheduleTimeOffRequestsRoute,
  getTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getTeamsTeamIdScheduleTimesOffCountRoute,
  getTeamsTeamIdScheduleTimesOffRoute,
  getTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  getTeamsTeamIdTagsCountRoute,
  getTeamsTeamIdTagsRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getTeamsTeamIdTagsTeamworkTagIdRoute,
  getTeamsTeamIdTemplateRoute,
  patchTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchTeamsTeamIdChannelsChannelIdRoute,
  patchTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  patchTeamsTeamIdMembersConversationMemberIdRoute,
  patchTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  patchTeamsTeamIdPhotoRoute,
  patchTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  patchTeamsTeamIdPrimaryChannelRoute,
  patchTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  patchTeamsTeamIdRoute,
  patchTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  patchTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchTeamsTeamIdScheduleShiftsShiftIdRoute,
  patchTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  patchTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchTeamsTeamIdTagsTeamworkTagIdRoute,
  postTeamsRoute,
  postTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRoute,
  postTeamsTeamIdChannelsChannelIdMembersRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postTeamsTeamIdChannelsChannelIdMessagesRoute,
  postTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRoute,
  postTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRoute,
  postTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRoute,
  postTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postTeamsTeamIdChannelsChannelIdTabsRoute,
  postTeamsTeamIdChannelsRoute,
  postTeamsTeamIdInstalledAppsRoute,
  postTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postTeamsTeamIdMembersMicrosoftGraphAddRoute,
  postTeamsTeamIdMembersRoute,
  postTeamsTeamIdMicrosoftGraphArchiveRoute,
  postTeamsTeamIdMicrosoftGraphCloneRoute,
  postTeamsTeamIdMicrosoftGraphCompleteMigrationRoute,
  postTeamsTeamIdMicrosoftGraphSendActivityNotificationRoute,
  postTeamsTeamIdMicrosoftGraphUnarchiveRoute,
  postTeamsTeamIdOperationsRoute,
  postTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRoute,
  postTeamsTeamIdPrimaryChannelMembersRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postTeamsTeamIdPrimaryChannelMessagesRoute,
  postTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRoute,
  postTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRoute,
  postTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRoute,
  postTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  postTeamsTeamIdPrimaryChannelTabsRoute,
  postTeamsTeamIdScheduleMicrosoftGraphShareRoute,
  postTeamsTeamIdScheduleOfferShiftRequestsRoute,
  postTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  postTeamsTeamIdScheduleOpenShiftsRoute,
  postTeamsTeamIdScheduleSchedulingGroupsRoute,
  postTeamsTeamIdScheduleShiftsRoute,
  postTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  postTeamsTeamIdScheduleTimeOffReasonsRoute,
  postTeamsTeamIdScheduleTimeOffRequestsRoute,
  postTeamsTeamIdScheduleTimesOffRoute,
  postTeamsTeamIdTagsRoute,
  postTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  putTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  putTeamsTeamIdPhotoValueRoute,
  putTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  putTeamsTeamIdScheduleRoute,
} from '../routes'

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsRouteHandler: RouteHandler<typeof postTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsCountRouteHandler: RouteHandler<typeof getTeamsCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsMicrosoftGraphGetAllMessagesRouteHandler: RouteHandler<
  typeof getTeamsMicrosoftGraphGetAllMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdRouteHandler: RouteHandler<typeof deleteTeamsTeamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdRouteHandler: RouteHandler<typeof getTeamsTeamIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdRouteHandler: RouteHandler<typeof patchTeamsTeamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdAllChannelsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdAllChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdAllChannelsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdAllChannelsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdAllChannelsChannelIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdAllChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdFilesFolderRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdFilesFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdFilesFolderContentRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamsTeamIdChannelsChannelIdFilesFolderContentRouteHandler: RouteHandler<
  typeof putTeamsTeamIdChannelsChannelIdFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMembersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMembersRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMembersCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdSharedWithTeamsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdSharedWithTeamsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdTabsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdChannelsChannelIdTabsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdChannelsChannelIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdTabsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdTabsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRouteHandler: RouteHandler<
  typeof getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdGroupRouteHandler: RouteHandler<
  typeof getTeamsTeamIdGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdIncomingChannelsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdIncomingChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdIncomingChannelsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdIncomingChannelsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdIncomingChannelsChannelIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdIncomingChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdInstalledAppsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdInstalledAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdInstalledAppsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdInstalledAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdInstalledAppsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdInstalledAppsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdInstalledAppsTeamsAppInstallationIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdInstalledAppsTeamsAppInstallationIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdInstalledAppsTeamsAppInstallationIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRouteHandler: RouteHandler<
  typeof postTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRouteHandler: RouteHandler<
  typeof getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRouteHandler: RouteHandler<
  typeof getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdMembersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMembersRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdMembersCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMembersMicrosoftGraphAddRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMembersMicrosoftGraphAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMicrosoftGraphArchiveRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMicrosoftGraphArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMicrosoftGraphCloneRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMicrosoftGraphCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMicrosoftGraphCompleteMigrationRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMicrosoftGraphCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMicrosoftGraphSendActivityNotificationRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMicrosoftGraphSendActivityNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdMicrosoftGraphUnarchiveRouteHandler: RouteHandler<
  typeof postTeamsTeamIdMicrosoftGraphUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOperationsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdOperationsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOperationsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdOperationsTeamsAsyncOperationIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdOperationsTeamsAsyncOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOperationsTeamsAsyncOperationIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOperationsTeamsAsyncOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdOperationsTeamsAsyncOperationIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdOperationsTeamsAsyncOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPhotoRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPhotoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPhotoRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPhotoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPhotoRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPhotoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPhotoValueRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPhotoValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamsTeamIdPhotoValueRouteHandler: RouteHandler<
  typeof putTeamsTeamIdPhotoValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelFilesFolderRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelFilesFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelFilesFolderContentRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamsTeamIdPrimaryChannelFilesFolderContentRouteHandler: RouteHandler<
  typeof putTeamsTeamIdPrimaryChannelFilesFolderContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMembersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMembersRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMembersCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1RouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelSharedWithTeamsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelSharedWithTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelSharedWithTeamsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelSharedWithTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelTabsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdPrimaryChannelTabsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdPrimaryChannelTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelTabsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelTabsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdPrimaryChannelTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdPrimaryChannelTabsTeamsTabIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamsTeamIdScheduleRouteHandler: RouteHandler<
  typeof putTeamsTeamIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleMicrosoftGraphShareRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleMicrosoftGraphShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOfferShiftRequestsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOfferShiftRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleOfferShiftRequestsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleOfferShiftRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOfferShiftRequestsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOfferShiftRequestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOpenShiftChangeRequestsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOpenShiftChangeRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleOpenShiftChangeRequestsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleOpenShiftChangeRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOpenShiftsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOpenShiftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleOpenShiftsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleOpenShiftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOpenShiftsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOpenShiftsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleOpenShiftsOpenShiftIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleOpenShiftsOpenShiftIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleOpenShiftsOpenShiftIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleSchedulingGroupsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleSchedulingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleSchedulingGroupsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleSchedulingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleSchedulingGroupsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleSchedulingGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleShiftsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleShiftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleShiftsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleShiftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleShiftsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleShiftsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleShiftsShiftIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleShiftsShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleShiftsShiftIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleShiftsShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleShiftsShiftIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleShiftsShiftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleSwapShiftsChangeRequestsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleSwapShiftsChangeRequestsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimeOffReasonsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimeOffReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleTimeOffReasonsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleTimeOffReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimeOffReasonsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimeOffReasonsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimeOffRequestsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimeOffRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleTimeOffRequestsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleTimeOffRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimeOffRequestsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimeOffRequestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimesOffRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimesOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdScheduleTimesOffRouteHandler: RouteHandler<
  typeof postTeamsTeamIdScheduleTimesOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimesOffCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimesOffCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdScheduleTimesOffTimeOffIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdScheduleTimesOffTimeOffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdScheduleTimesOffTimeOffIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdScheduleTimesOffTimeOffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdScheduleTimesOffTimeOffIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdScheduleTimesOffTimeOffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTagsRouteHandler: RouteHandler<typeof getTeamsTeamIdTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdTagsRouteHandler: RouteHandler<
  typeof postTeamsTeamIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTagsCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdTagsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdTagsTeamworkTagIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdTagsTeamworkTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTagsTeamworkTagIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdTagsTeamworkTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdTagsTeamworkTagIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdTagsTeamworkTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTagsTeamworkTagIdMembersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdTagsTeamworkTagIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeamsTeamIdTagsTeamworkTagIdMembersRouteHandler: RouteHandler<
  typeof postTeamsTeamIdTagsTeamworkTagIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTagsTeamworkTagIdMembersCountRouteHandler: RouteHandler<
  typeof getTeamsTeamIdTagsTeamworkTagIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRouteHandler: RouteHandler<
  typeof deleteTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRouteHandler: RouteHandler<
  typeof getTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRouteHandler: RouteHandler<
  typeof patchTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdTemplateRouteHandler: RouteHandler<
  typeof getTeamsTeamIdTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
