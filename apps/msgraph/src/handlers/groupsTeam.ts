import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdTeamChannelsChannelIdAllMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute,
  deleteGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute,
  deleteGroupsGroupIdTeamMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute,
  deleteGroupsGroupIdTeamPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  deleteGroupsGroupIdTeamPhotoValueRoute,
  deleteGroupsGroupIdTeamPrimaryChannelAllMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelRoute,
  deleteGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute,
  deleteGroupsGroupIdTeamRoute,
  deleteGroupsGroupIdTeamScheduleDayNotesDayNoteIdRoute,
  deleteGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute,
  deleteGroupsGroupIdTeamScheduleRoute,
  deleteGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteGroupsGroupIdTeamScheduleShiftsShiftIdRoute,
  deleteGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleTimeCardsTimeCardIdRoute,
  deleteGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute,
  deleteGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteGroupsGroupIdTeamTagsTeamworkTagIdRoute,
  getGroupsGroupIdTeamAllChannelsChannelIdRoute,
  getGroupsGroupIdTeamAllChannelsCountRoute,
  getGroupsGroupIdTeamAllChannelsRoute,
  getGroupsGroupIdTeamChannelsChannelIdAllMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdAllMembersCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdAllMembersRoute,
  getGroupsGroupIdTeamChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getGroupsGroupIdTeamChannelsChannelIdEnabledAppsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdEnabledAppsRoute,
  getGroupsGroupIdTeamChannelsChannelIdEnabledAppsTeamsAppIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute,
  getGroupsGroupIdTeamChannelsChannelIdFilesFolderRoute,
  getGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMembersCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMembersRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesDeltaRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesRoute,
  getGroupsGroupIdTeamChannelsChannelIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getGroupsGroupIdTeamChannelsCountRoute,
  getGroupsGroupIdTeamChannelsGetAllMessagesRoute,
  getGroupsGroupIdTeamChannelsGetAllRetainedMessagesRoute,
  getGroupsGroupIdTeamChannelsRoute,
  getGroupsGroupIdTeamGroupRoute,
  getGroupsGroupIdTeamGroupServiceProvisioningErrorsCountRoute,
  getGroupsGroupIdTeamGroupServiceProvisioningErrorsRoute,
  getGroupsGroupIdTeamIncomingChannelsChannelIdRoute,
  getGroupsGroupIdTeamIncomingChannelsCountRoute,
  getGroupsGroupIdTeamIncomingChannelsRoute,
  getGroupsGroupIdTeamInstalledAppsCountRoute,
  getGroupsGroupIdTeamInstalledAppsRoute,
  getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute,
  getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getGroupsGroupIdTeamMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamMembersCountRoute,
  getGroupsGroupIdTeamMembersRoute,
  getGroupsGroupIdTeamOperationsCountRoute,
  getGroupsGroupIdTeamOperationsRoute,
  getGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute,
  getGroupsGroupIdTeamPermissionGrantsCountRoute,
  getGroupsGroupIdTeamPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getGroupsGroupIdTeamPermissionGrantsRoute,
  getGroupsGroupIdTeamPhotoRoute,
  getGroupsGroupIdTeamPhotoValueRoute,
  getGroupsGroupIdTeamPrimaryChannelAllMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamPrimaryChannelAllMembersCountRoute,
  getGroupsGroupIdTeamPrimaryChannelAllMembersRoute,
  getGroupsGroupIdTeamPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getGroupsGroupIdTeamPrimaryChannelEnabledAppsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelEnabledAppsRoute,
  getGroupsGroupIdTeamPrimaryChannelEnabledAppsTeamsAppIdRoute,
  getGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute,
  getGroupsGroupIdTeamPrimaryChannelFilesFolderRoute,
  getGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMembersCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMembersRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesDeltaRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesRoute,
  getGroupsGroupIdTeamPrimaryChannelRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getGroupsGroupIdTeamRoute,
  getGroupsGroupIdTeamScheduleDayNotesCountRoute,
  getGroupsGroupIdTeamScheduleDayNotesDayNoteIdRoute,
  getGroupsGroupIdTeamScheduleDayNotesRoute,
  getGroupsGroupIdTeamScheduleOfferShiftRequestsCountRoute,
  getGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getGroupsGroupIdTeamScheduleOfferShiftRequestsRoute,
  getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsCountRoute,
  getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute,
  getGroupsGroupIdTeamScheduleOpenShiftsCountRoute,
  getGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute,
  getGroupsGroupIdTeamScheduleOpenShiftsRoute,
  getGroupsGroupIdTeamScheduleRoute,
  getGroupsGroupIdTeamScheduleSchedulingGroupsCountRoute,
  getGroupsGroupIdTeamScheduleSchedulingGroupsRoute,
  getGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getGroupsGroupIdTeamScheduleShiftsCountRoute,
  getGroupsGroupIdTeamScheduleShiftsRoute,
  getGroupsGroupIdTeamScheduleShiftsShiftIdRoute,
  getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsCountRoute,
  getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute,
  getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getGroupsGroupIdTeamScheduleTimeCardsCountRoute,
  getGroupsGroupIdTeamScheduleTimeCardsRoute,
  getGroupsGroupIdTeamScheduleTimeCardsTimeCardIdRoute,
  getGroupsGroupIdTeamScheduleTimeOffReasonsCountRoute,
  getGroupsGroupIdTeamScheduleTimeOffReasonsRoute,
  getGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getGroupsGroupIdTeamScheduleTimeOffRequestsCountRoute,
  getGroupsGroupIdTeamScheduleTimeOffRequestsRoute,
  getGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getGroupsGroupIdTeamScheduleTimesOffCountRoute,
  getGroupsGroupIdTeamScheduleTimesOffRoute,
  getGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute,
  getGroupsGroupIdTeamTagsCountRoute,
  getGroupsGroupIdTeamTagsRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdMembersCountRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdRoute,
  getGroupsGroupIdTeamTemplateRoute,
  patchGroupsGroupIdTeamChannelsChannelIdAllMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute,
  patchGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute,
  patchGroupsGroupIdTeamMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute,
  patchGroupsGroupIdTeamPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  patchGroupsGroupIdTeamPhotoRoute,
  patchGroupsGroupIdTeamPrimaryChannelAllMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelRoute,
  patchGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute,
  patchGroupsGroupIdTeamScheduleDayNotesDayNoteIdRoute,
  patchGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute,
  patchGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchGroupsGroupIdTeamScheduleShiftsShiftIdRoute,
  patchGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchGroupsGroupIdTeamScheduleTimeCardsTimeCardIdRoute,
  patchGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute,
  patchGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchGroupsGroupIdTeamTagsTeamworkTagIdRoute,
  postGroupsGroupIdTeamArchiveRoute,
  postGroupsGroupIdTeamChannelsChannelIdAllMembersAddRoute,
  postGroupsGroupIdTeamChannelsChannelIdAllMembersRemoveRoute,
  postGroupsGroupIdTeamChannelsChannelIdAllMembersRoute,
  postGroupsGroupIdTeamChannelsChannelIdArchiveRoute,
  postGroupsGroupIdTeamChannelsChannelIdCompleteMigrationRoute,
  postGroupsGroupIdTeamChannelsChannelIdMembersAddRoute,
  postGroupsGroupIdTeamChannelsChannelIdMembersRemoveRoute,
  postGroupsGroupIdTeamChannelsChannelIdMembersRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesReplyWithQuoteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesRoute,
  postGroupsGroupIdTeamChannelsChannelIdProvisionEmailRoute,
  postGroupsGroupIdTeamChannelsChannelIdRemoveEmailRoute,
  postGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute,
  postGroupsGroupIdTeamChannelsChannelIdStartMigrationRoute,
  postGroupsGroupIdTeamChannelsChannelIdTabsRoute,
  postGroupsGroupIdTeamChannelsChannelIdUnarchiveRoute,
  postGroupsGroupIdTeamChannelsRoute,
  postGroupsGroupIdTeamCloneRoute,
  postGroupsGroupIdTeamCompleteMigrationRoute,
  postGroupsGroupIdTeamInstalledAppsRoute,
  postGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdUpgradeRoute,
  postGroupsGroupIdTeamMembersAddRoute,
  postGroupsGroupIdTeamMembersRemoveRoute,
  postGroupsGroupIdTeamMembersRoute,
  postGroupsGroupIdTeamOperationsRoute,
  postGroupsGroupIdTeamPermissionGrantsRoute,
  postGroupsGroupIdTeamPrimaryChannelAllMembersAddRoute,
  postGroupsGroupIdTeamPrimaryChannelAllMembersRemoveRoute,
  postGroupsGroupIdTeamPrimaryChannelAllMembersRoute,
  postGroupsGroupIdTeamPrimaryChannelArchiveRoute,
  postGroupsGroupIdTeamPrimaryChannelCompleteMigrationRoute,
  postGroupsGroupIdTeamPrimaryChannelMembersAddRoute,
  postGroupsGroupIdTeamPrimaryChannelMembersRemoveRoute,
  postGroupsGroupIdTeamPrimaryChannelMembersRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdSetReactionRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdUnsetReactionRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesReplyWithQuoteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesRoute,
  postGroupsGroupIdTeamPrimaryChannelProvisionEmailRoute,
  postGroupsGroupIdTeamPrimaryChannelRemoveEmailRoute,
  postGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute,
  postGroupsGroupIdTeamPrimaryChannelStartMigrationRoute,
  postGroupsGroupIdTeamPrimaryChannelTabsRoute,
  postGroupsGroupIdTeamPrimaryChannelUnarchiveRoute,
  postGroupsGroupIdTeamScheduleDayNotesRoute,
  postGroupsGroupIdTeamScheduleOfferShiftRequestsRoute,
  postGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute,
  postGroupsGroupIdTeamScheduleOpenShiftsRoute,
  postGroupsGroupIdTeamScheduleSchedulingGroupsRoute,
  postGroupsGroupIdTeamScheduleShareRoute,
  postGroupsGroupIdTeamScheduleShiftsRoute,
  postGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute,
  postGroupsGroupIdTeamScheduleTimeCardsClockInRoute,
  postGroupsGroupIdTeamScheduleTimeCardsRoute,
  postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdClockOutRoute,
  postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdConfirmRoute,
  postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdEndBreakRoute,
  postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdStartBreakRoute,
  postGroupsGroupIdTeamScheduleTimeOffReasonsRoute,
  postGroupsGroupIdTeamScheduleTimeOffRequestsRoute,
  postGroupsGroupIdTeamScheduleTimesOffRoute,
  postGroupsGroupIdTeamSendActivityNotificationRoute,
  postGroupsGroupIdTeamTagsRoute,
  postGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute,
  postGroupsGroupIdTeamUnarchiveRoute,
  putGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute,
  putGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putGroupsGroupIdTeamPhotoValueRoute,
  putGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute,
  putGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putGroupsGroupIdTeamRoute,
  putGroupsGroupIdTeamScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsTeamHandler = app
  .openapi(getGroupsGroupIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdTeamChannelsChannelIdProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamGroupServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamGroupServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdTeamPrimaryChannelProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleDayNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdClockOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdEndBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeCardsTimeCardIdStartBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeCardsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeCardsClockInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
