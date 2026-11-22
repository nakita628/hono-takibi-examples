import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteMeJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  deleteMeJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  deleteMeJoinedTeamsTeamIdPhotoValueRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  deleteMeJoinedTeamsTeamIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleRoute,
  deleteMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getMeJoinedTeamsCountRoute,
  getMeJoinedTeamsGetAllMessagesRoute,
  getMeJoinedTeamsRoute,
  getMeJoinedTeamsTeamIdAllChannelsChannelIdRoute,
  getMeJoinedTeamsTeamIdAllChannelsCountRoute,
  getMeJoinedTeamsTeamIdAllChannelsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdAllMembersCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdEnabledAppsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdEnabledAppsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesDeltaRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getMeJoinedTeamsTeamIdChannelsCountRoute,
  getMeJoinedTeamsTeamIdChannelsGetAllMessagesRoute,
  getMeJoinedTeamsTeamIdChannelsGetAllRetainedMessagesRoute,
  getMeJoinedTeamsTeamIdChannelsRoute,
  getMeJoinedTeamsTeamIdGroupRoute,
  getMeJoinedTeamsTeamIdGroupServiceProvisioningErrorsCountRoute,
  getMeJoinedTeamsTeamIdGroupServiceProvisioningErrorsRoute,
  getMeJoinedTeamsTeamIdIncomingChannelsChannelIdRoute,
  getMeJoinedTeamsTeamIdIncomingChannelsCountRoute,
  getMeJoinedTeamsTeamIdIncomingChannelsRoute,
  getMeJoinedTeamsTeamIdInstalledAppsCountRoute,
  getMeJoinedTeamsTeamIdInstalledAppsRoute,
  getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getMeJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdMembersCountRoute,
  getMeJoinedTeamsTeamIdMembersRoute,
  getMeJoinedTeamsTeamIdOperationsCountRoute,
  getMeJoinedTeamsTeamIdOperationsRoute,
  getMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  getMeJoinedTeamsTeamIdPermissionGrantsCountRoute,
  getMeJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getMeJoinedTeamsTeamIdPermissionGrantsRoute,
  getMeJoinedTeamsTeamIdPhotoRoute,
  getMeJoinedTeamsTeamIdPhotoValueRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelAllMembersCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelAllMembersRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelEnabledAppsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelEnabledAppsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelEnabledAppsTeamsAppIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMembersCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesDeltaRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getMeJoinedTeamsTeamIdRoute,
  getMeJoinedTeamsTeamIdScheduleDayNotesCountRoute,
  getMeJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  getMeJoinedTeamsTeamIdScheduleDayNotesRoute,
  getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftsCountRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  getMeJoinedTeamsTeamIdScheduleRoute,
  getMeJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  getMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getMeJoinedTeamsTeamIdScheduleShiftsCountRoute,
  getMeJoinedTeamsTeamIdScheduleShiftsRoute,
  getMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimeCardsCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimeCardsRoute,
  getMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimesOffCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimesOffRoute,
  getMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  getMeJoinedTeamsTeamIdTagsCountRoute,
  getMeJoinedTeamsTeamIdTagsRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getMeJoinedTeamsTeamIdTemplateRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  patchMeJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  patchMeJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  patchMeJoinedTeamsTeamIdPhotoRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  patchMeJoinedTeamsTeamIdRoute,
  patchMeJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  patchMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  patchMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  patchMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  patchMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  postMeJoinedTeamsRoute,
  postMeJoinedTeamsTeamIdArchiveRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdAllMembersAddRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdAllMembersRemoveRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdArchiveRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdCompleteMigrationRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMembersAddRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMembersRemoveRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdProvisionEmailRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdRemoveEmailRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdStartMigrationRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdUnarchiveRoute,
  postMeJoinedTeamsTeamIdChannelsRoute,
  postMeJoinedTeamsTeamIdCloneRoute,
  postMeJoinedTeamsTeamIdCompleteMigrationRoute,
  postMeJoinedTeamsTeamIdInstalledAppsRoute,
  postMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdUpgradeRoute,
  postMeJoinedTeamsTeamIdMembersAddRoute,
  postMeJoinedTeamsTeamIdMembersRemoveRoute,
  postMeJoinedTeamsTeamIdMembersRoute,
  postMeJoinedTeamsTeamIdOperationsRoute,
  postMeJoinedTeamsTeamIdPermissionGrantsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelAllMembersAddRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelAllMembersRemoveRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelAllMembersRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelArchiveRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelCompleteMigrationRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMembersAddRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMembersRemoveRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSetReactionRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUnsetReactionRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesReplyWithQuoteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelProvisionEmailRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelRemoveEmailRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelStartMigrationRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelUnarchiveRoute,
  postMeJoinedTeamsTeamIdScheduleDayNotesRoute,
  postMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  postMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  postMeJoinedTeamsTeamIdScheduleShareRoute,
  postMeJoinedTeamsTeamIdScheduleShiftsRoute,
  postMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleTimeCardsClockInRoute,
  postMeJoinedTeamsTeamIdScheduleTimeCardsRoute,
  postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdClockOutRoute,
  postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdConfirmRoute,
  postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdEndBreakRoute,
  postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdStartBreakRoute,
  postMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  postMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleTimesOffRoute,
  postMeJoinedTeamsTeamIdSendActivityNotificationRoute,
  postMeJoinedTeamsTeamIdTagsRoute,
  postMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  postMeJoinedTeamsTeamIdUnarchiveRoute,
  putMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  putMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putMeJoinedTeamsTeamIdPhotoValueRoute,
  putMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  putMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putMeJoinedTeamsTeamIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meTeamHandler = app
  .openapi(getMeJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdGroupServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdGroupServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleDayNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdClockOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdEndBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeCardsTimeCardIdStartBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeCardsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeCardsClockInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
