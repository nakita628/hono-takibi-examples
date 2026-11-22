import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPhotoValueRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getUsersUserIdJoinedTeamsCountRoute,
  getUsersUserIdJoinedTeamsGetAllMessagesRoute,
  getUsersUserIdJoinedTeamsRoute,
  getUsersUserIdJoinedTeamsTeamIdAllChannelsChannelIdRoute,
  getUsersUserIdJoinedTeamsTeamIdAllChannelsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdAllChannelsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdEnabledAppsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdEnabledAppsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsGetAllMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsGetAllRetainedMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsRoute,
  getUsersUserIdJoinedTeamsTeamIdGroupRoute,
  getUsersUserIdJoinedTeamsTeamIdGroupServiceProvisioningErrorsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdGroupServiceProvisioningErrorsRoute,
  getUsersUserIdJoinedTeamsTeamIdIncomingChannelsChannelIdRoute,
  getUsersUserIdJoinedTeamsTeamIdIncomingChannelsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdIncomingChannelsRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdOperationsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdOperationsRoute,
  getUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPermissionGrantsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPermissionGrantsRoute,
  getUsersUserIdJoinedTeamsTeamIdPhotoRoute,
  getUsersUserIdJoinedTeamsTeamIdPhotoValueRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelEnabledAppsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelEnabledAppsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelEnabledAppsTeamsAppIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getUsersUserIdJoinedTeamsTeamIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleDayNotesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleDayNotesRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleShiftsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getUsersUserIdJoinedTeamsTeamIdTemplateRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPhotoRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  postUsersUserIdJoinedTeamsRoute,
  postUsersUserIdJoinedTeamsTeamIdArchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersAddRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersRemoveRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdArchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdCompleteMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersAddRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRemoveRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdProvisionEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRemoveEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdStartMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdUnarchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsRoute,
  postUsersUserIdJoinedTeamsTeamIdCloneRoute,
  postUsersUserIdJoinedTeamsTeamIdCompleteMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute,
  postUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdUpgradeRoute,
  postUsersUserIdJoinedTeamsTeamIdMembersAddRoute,
  postUsersUserIdJoinedTeamsTeamIdMembersRemoveRoute,
  postUsersUserIdJoinedTeamsTeamIdMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdOperationsRoute,
  postUsersUserIdJoinedTeamsTeamIdPermissionGrantsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersAddRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersRemoveRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelArchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelCompleteMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersAddRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRemoveRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUnsetReactionRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesReplyWithQuoteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelProvisionEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelRemoveEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelStartMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelUnarchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleDayNotesRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleShareRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsClockInRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdClockOutRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdConfirmRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdEndBreakRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdStartBreakRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute,
  postUsersUserIdJoinedTeamsTeamIdSendActivityNotificationRoute,
  postUsersUserIdJoinedTeamsTeamIdTagsRoute,
  postUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdUnarchiveRoute,
  putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdJoinedTeamsTeamIdPhotoValueRoute,
  putUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  putUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putUsersUserIdJoinedTeamsTeamIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersTeamHandler = app
  .openapi(getUsersUserIdJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdGroupServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdGroupServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleDayNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdClockOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdEndBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdStartBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeCardsClockInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
