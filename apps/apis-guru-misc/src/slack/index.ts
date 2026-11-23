import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminAppsApprovedListRoute,
  getAdminAppsRequestsListRoute,
  getAdminAppsRestrictedListRoute,
  getAdminConversationsEkmListOriginalConnectedChannelInfoRoute,
  getAdminConversationsGetConversationPrefsRoute,
  getAdminConversationsGetTeamsRoute,
  getAdminConversationsRestrictAccessListGroupsRoute,
  getAdminConversationsSearchRoute,
  getAdminEmojiListRoute,
  getAdminInviteRequestsApprovedListRoute,
  getAdminInviteRequestsDeniedListRoute,
  getAdminInviteRequestsListRoute,
  getAdminTeamsAdminsListRoute,
  getAdminTeamsListRoute,
  getAdminTeamsOwnersListRoute,
  getAdminTeamsSettingsInfoRoute,
  getAdminUsergroupsListChannelsRoute,
  getAdminUsersListRoute,
  getApiTestRoute,
  getAppsEventAuthorizationsListRoute,
  getAppsPermissionsInfoRoute,
  getAppsPermissionsRequestRoute,
  getAppsPermissionsResourcesListRoute,
  getAppsPermissionsScopesListRoute,
  getAppsPermissionsUsersListRoute,
  getAppsPermissionsUsersRequestRoute,
  getAppsUninstallRoute,
  getAuthRevokeRoute,
  getAuthTestRoute,
  getBotsInfoRoute,
  getCallsInfoRoute,
  getChatGetPermalinkRoute,
  getChatScheduledMessagesListRoute,
  getConversationsHistoryRoute,
  getConversationsInfoRoute,
  getConversationsListRoute,
  getConversationsMembersRoute,
  getConversationsRepliesRoute,
  getDialogOpenRoute,
  getDndInfoRoute,
  getDndTeamInfoRoute,
  getEmojiListRoute,
  getFilesInfoRoute,
  getFilesListRoute,
  getFilesRemoteInfoRoute,
  getFilesRemoteListRoute,
  getFilesRemoteShareRoute,
  getMigrationExchangeRoute,
  getOauthAccessRoute,
  getOauthTokenRoute,
  getOauthV2AccessRoute,
  getPinsListRoute,
  getReactionsGetRoute,
  getReactionsListRoute,
  getRemindersInfoRoute,
  getRemindersListRoute,
  getRtmConnectRoute,
  getSearchMessagesRoute,
  getStarsListRoute,
  getTeamAccessLogsRoute,
  getTeamBillableInfoRoute,
  getTeamInfoRoute,
  getTeamIntegrationLogsRoute,
  getTeamProfileGetRoute,
  getUsergroupsListRoute,
  getUsergroupsUsersListRoute,
  getUsersConversationsRoute,
  getUsersGetPresenceRoute,
  getUsersIdentityRoute,
  getUsersInfoRoute,
  getUsersListRoute,
  getUsersLookupByEmailRoute,
  getUsersProfileGetRoute,
  getViewsOpenRoute,
  getViewsPublishRoute,
  getViewsPushRoute,
  getViewsUpdateRoute,
  getWorkflowsStepCompletedRoute,
  getWorkflowsStepFailedRoute,
  getWorkflowsUpdateStepRoute,
  postAdminAppsApproveRoute,
  postAdminAppsRestrictRoute,
  postAdminConversationsArchiveRoute,
  postAdminConversationsConvertToPrivateRoute,
  postAdminConversationsCreateRoute,
  postAdminConversationsDeleteRoute,
  postAdminConversationsDisconnectSharedRoute,
  postAdminConversationsInviteRoute,
  postAdminConversationsRenameRoute,
  postAdminConversationsRestrictAccessAddGroupRoute,
  postAdminConversationsRestrictAccessRemoveGroupRoute,
  postAdminConversationsSetConversationPrefsRoute,
  postAdminConversationsSetTeamsRoute,
  postAdminConversationsUnarchiveRoute,
  postAdminEmojiAddAliasRoute,
  postAdminEmojiAddRoute,
  postAdminEmojiRemoveRoute,
  postAdminEmojiRenameRoute,
  postAdminInviteRequestsApproveRoute,
  postAdminInviteRequestsDenyRoute,
  postAdminTeamsCreateRoute,
  postAdminTeamsSettingsSetDefaultChannelsRoute,
  postAdminTeamsSettingsSetDescriptionRoute,
  postAdminTeamsSettingsSetDiscoverabilityRoute,
  postAdminTeamsSettingsSetIconRoute,
  postAdminTeamsSettingsSetNameRoute,
  postAdminUsergroupsAddChannelsRoute,
  postAdminUsergroupsAddTeamsRoute,
  postAdminUsergroupsRemoveChannelsRoute,
  postAdminUsersAssignRoute,
  postAdminUsersInviteRoute,
  postAdminUsersRemoveRoute,
  postAdminUsersSessionInvalidateRoute,
  postAdminUsersSessionResetRoute,
  postAdminUsersSetAdminRoute,
  postAdminUsersSetExpirationRoute,
  postAdminUsersSetOwnerRoute,
  postAdminUsersSetRegularRoute,
  postCallsAddRoute,
  postCallsEndRoute,
  postCallsParticipantsAddRoute,
  postCallsParticipantsRemoveRoute,
  postCallsUpdateRoute,
  postChatDeleteRoute,
  postChatDeleteScheduledMessageRoute,
  postChatMeMessageRoute,
  postChatPostEphemeralRoute,
  postChatPostMessageRoute,
  postChatScheduleMessageRoute,
  postChatUnfurlRoute,
  postChatUpdateRoute,
  postConversationsArchiveRoute,
  postConversationsCloseRoute,
  postConversationsCreateRoute,
  postConversationsInviteRoute,
  postConversationsJoinRoute,
  postConversationsKickRoute,
  postConversationsLeaveRoute,
  postConversationsMarkRoute,
  postConversationsOpenRoute,
  postConversationsRenameRoute,
  postConversationsSetPurposeRoute,
  postConversationsSetTopicRoute,
  postConversationsUnarchiveRoute,
  postDndEndDndRoute,
  postDndEndSnoozeRoute,
  postDndSetSnoozeRoute,
  postFilesCommentsDeleteRoute,
  postFilesDeleteRoute,
  postFilesRemoteAddRoute,
  postFilesRemoteRemoveRoute,
  postFilesRemoteUpdateRoute,
  postFilesRevokePublicURLRoute,
  postFilesSharedPublicURLRoute,
  postFilesUploadRoute,
  postPinsAddRoute,
  postPinsRemoveRoute,
  postReactionsAddRoute,
  postReactionsRemoveRoute,
  postRemindersAddRoute,
  postRemindersCompleteRoute,
  postRemindersDeleteRoute,
  postStarsAddRoute,
  postStarsRemoveRoute,
  postUsergroupsCreateRoute,
  postUsergroupsDisableRoute,
  postUsergroupsEnableRoute,
  postUsergroupsUpdateRoute,
  postUsergroupsUsersUpdateRoute,
  postUsersDeletePhotoRoute,
  postUsersProfileSetRoute,
  postUsersSetActiveRoute,
  postUsersSetPhotoRoute,
  postUsersSetPresenceRoute,
} from './routes'
import {
  getAdminAppsApprovedListRouteHandler,
  getAdminAppsRequestsListRouteHandler,
  getAdminAppsRestrictedListRouteHandler,
  getAdminConversationsEkmListOriginalConnectedChannelInfoRouteHandler,
  getAdminConversationsGetConversationPrefsRouteHandler,
  getAdminConversationsGetTeamsRouteHandler,
  getAdminConversationsRestrictAccessListGroupsRouteHandler,
  getAdminConversationsSearchRouteHandler,
  getAdminEmojiListRouteHandler,
  getAdminInviteRequestsApprovedListRouteHandler,
  getAdminInviteRequestsDeniedListRouteHandler,
  getAdminInviteRequestsListRouteHandler,
  getAdminTeamsAdminsListRouteHandler,
  getAdminTeamsListRouteHandler,
  getAdminTeamsOwnersListRouteHandler,
  getAdminTeamsSettingsInfoRouteHandler,
  getAdminUsergroupsListChannelsRouteHandler,
  getAdminUsersListRouteHandler,
  getApiTestRouteHandler,
  getAppsEventAuthorizationsListRouteHandler,
  getAppsPermissionsInfoRouteHandler,
  getAppsPermissionsRequestRouteHandler,
  getAppsPermissionsResourcesListRouteHandler,
  getAppsPermissionsScopesListRouteHandler,
  getAppsPermissionsUsersListRouteHandler,
  getAppsPermissionsUsersRequestRouteHandler,
  getAppsUninstallRouteHandler,
  getAuthRevokeRouteHandler,
  getAuthTestRouteHandler,
  getBotsInfoRouteHandler,
  getCallsInfoRouteHandler,
  getChatGetPermalinkRouteHandler,
  getChatScheduledMessagesListRouteHandler,
  getConversationsHistoryRouteHandler,
  getConversationsInfoRouteHandler,
  getConversationsListRouteHandler,
  getConversationsMembersRouteHandler,
  getConversationsRepliesRouteHandler,
  getDialogOpenRouteHandler,
  getDndInfoRouteHandler,
  getDndTeamInfoRouteHandler,
  getEmojiListRouteHandler,
  getFilesInfoRouteHandler,
  getFilesListRouteHandler,
  getFilesRemoteInfoRouteHandler,
  getFilesRemoteListRouteHandler,
  getFilesRemoteShareRouteHandler,
  getMigrationExchangeRouteHandler,
  getOauthAccessRouteHandler,
  getOauthTokenRouteHandler,
  getOauthV2AccessRouteHandler,
  getPinsListRouteHandler,
  getReactionsGetRouteHandler,
  getReactionsListRouteHandler,
  getRemindersInfoRouteHandler,
  getRemindersListRouteHandler,
  getRtmConnectRouteHandler,
  getSearchMessagesRouteHandler,
  getStarsListRouteHandler,
  getTeamAccessLogsRouteHandler,
  getTeamBillableInfoRouteHandler,
  getTeamInfoRouteHandler,
  getTeamIntegrationLogsRouteHandler,
  getTeamProfileGetRouteHandler,
  getUsergroupsListRouteHandler,
  getUsergroupsUsersListRouteHandler,
  getUsersConversationsRouteHandler,
  getUsersGetPresenceRouteHandler,
  getUsersIdentityRouteHandler,
  getUsersInfoRouteHandler,
  getUsersListRouteHandler,
  getUsersLookupByEmailRouteHandler,
  getUsersProfileGetRouteHandler,
  getViewsOpenRouteHandler,
  getViewsPublishRouteHandler,
  getViewsPushRouteHandler,
  getViewsUpdateRouteHandler,
  getWorkflowsStepCompletedRouteHandler,
  getWorkflowsStepFailedRouteHandler,
  getWorkflowsUpdateStepRouteHandler,
  postAdminAppsApproveRouteHandler,
  postAdminAppsRestrictRouteHandler,
  postAdminConversationsArchiveRouteHandler,
  postAdminConversationsConvertToPrivateRouteHandler,
  postAdminConversationsCreateRouteHandler,
  postAdminConversationsDeleteRouteHandler,
  postAdminConversationsDisconnectSharedRouteHandler,
  postAdminConversationsInviteRouteHandler,
  postAdminConversationsRenameRouteHandler,
  postAdminConversationsRestrictAccessAddGroupRouteHandler,
  postAdminConversationsRestrictAccessRemoveGroupRouteHandler,
  postAdminConversationsSetConversationPrefsRouteHandler,
  postAdminConversationsSetTeamsRouteHandler,
  postAdminConversationsUnarchiveRouteHandler,
  postAdminEmojiAddAliasRouteHandler,
  postAdminEmojiAddRouteHandler,
  postAdminEmojiRemoveRouteHandler,
  postAdminEmojiRenameRouteHandler,
  postAdminInviteRequestsApproveRouteHandler,
  postAdminInviteRequestsDenyRouteHandler,
  postAdminTeamsCreateRouteHandler,
  postAdminTeamsSettingsSetDefaultChannelsRouteHandler,
  postAdminTeamsSettingsSetDescriptionRouteHandler,
  postAdminTeamsSettingsSetDiscoverabilityRouteHandler,
  postAdminTeamsSettingsSetIconRouteHandler,
  postAdminTeamsSettingsSetNameRouteHandler,
  postAdminUsergroupsAddChannelsRouteHandler,
  postAdminUsergroupsAddTeamsRouteHandler,
  postAdminUsergroupsRemoveChannelsRouteHandler,
  postAdminUsersAssignRouteHandler,
  postAdminUsersInviteRouteHandler,
  postAdminUsersRemoveRouteHandler,
  postAdminUsersSessionInvalidateRouteHandler,
  postAdminUsersSessionResetRouteHandler,
  postAdminUsersSetAdminRouteHandler,
  postAdminUsersSetExpirationRouteHandler,
  postAdminUsersSetOwnerRouteHandler,
  postAdminUsersSetRegularRouteHandler,
  postCallsAddRouteHandler,
  postCallsEndRouteHandler,
  postCallsParticipantsAddRouteHandler,
  postCallsParticipantsRemoveRouteHandler,
  postCallsUpdateRouteHandler,
  postChatDeleteRouteHandler,
  postChatDeleteScheduledMessageRouteHandler,
  postChatMeMessageRouteHandler,
  postChatPostEphemeralRouteHandler,
  postChatPostMessageRouteHandler,
  postChatScheduleMessageRouteHandler,
  postChatUnfurlRouteHandler,
  postChatUpdateRouteHandler,
  postConversationsArchiveRouteHandler,
  postConversationsCloseRouteHandler,
  postConversationsCreateRouteHandler,
  postConversationsInviteRouteHandler,
  postConversationsJoinRouteHandler,
  postConversationsKickRouteHandler,
  postConversationsLeaveRouteHandler,
  postConversationsMarkRouteHandler,
  postConversationsOpenRouteHandler,
  postConversationsRenameRouteHandler,
  postConversationsSetPurposeRouteHandler,
  postConversationsSetTopicRouteHandler,
  postConversationsUnarchiveRouteHandler,
  postDndEndDndRouteHandler,
  postDndEndSnoozeRouteHandler,
  postDndSetSnoozeRouteHandler,
  postFilesCommentsDeleteRouteHandler,
  postFilesDeleteRouteHandler,
  postFilesRemoteAddRouteHandler,
  postFilesRemoteRemoveRouteHandler,
  postFilesRemoteUpdateRouteHandler,
  postFilesRevokePublicURLRouteHandler,
  postFilesSharedPublicURLRouteHandler,
  postFilesUploadRouteHandler,
  postPinsAddRouteHandler,
  postPinsRemoveRouteHandler,
  postReactionsAddRouteHandler,
  postReactionsRemoveRouteHandler,
  postRemindersAddRouteHandler,
  postRemindersCompleteRouteHandler,
  postRemindersDeleteRouteHandler,
  postStarsAddRouteHandler,
  postStarsRemoveRouteHandler,
  postUsergroupsCreateRouteHandler,
  postUsergroupsDisableRouteHandler,
  postUsergroupsEnableRouteHandler,
  postUsergroupsUpdateRouteHandler,
  postUsergroupsUsersUpdateRouteHandler,
  postUsersDeletePhotoRouteHandler,
  postUsersProfileSetRouteHandler,
  postUsersSetActiveRouteHandler,
  postUsersSetPhotoRouteHandler,
  postUsersSetPresenceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAdminAppsApproveRoute, postAdminAppsApproveRouteHandler)
  .openapi(getAdminAppsApprovedListRoute, getAdminAppsApprovedListRouteHandler)
  .openapi(getAdminAppsRequestsListRoute, getAdminAppsRequestsListRouteHandler)
  .openapi(postAdminAppsRestrictRoute, postAdminAppsRestrictRouteHandler)
  .openapi(getAdminAppsRestrictedListRoute, getAdminAppsRestrictedListRouteHandler)
  .openapi(postAdminConversationsArchiveRoute, postAdminConversationsArchiveRouteHandler)
  .openapi(
    postAdminConversationsConvertToPrivateRoute,
    postAdminConversationsConvertToPrivateRouteHandler,
  )
  .openapi(postAdminConversationsCreateRoute, postAdminConversationsCreateRouteHandler)
  .openapi(postAdminConversationsDeleteRoute, postAdminConversationsDeleteRouteHandler)
  .openapi(
    postAdminConversationsDisconnectSharedRoute,
    postAdminConversationsDisconnectSharedRouteHandler,
  )
  .openapi(
    getAdminConversationsEkmListOriginalConnectedChannelInfoRoute,
    getAdminConversationsEkmListOriginalConnectedChannelInfoRouteHandler,
  )
  .openapi(
    getAdminConversationsGetConversationPrefsRoute,
    getAdminConversationsGetConversationPrefsRouteHandler,
  )
  .openapi(getAdminConversationsGetTeamsRoute, getAdminConversationsGetTeamsRouteHandler)
  .openapi(postAdminConversationsInviteRoute, postAdminConversationsInviteRouteHandler)
  .openapi(postAdminConversationsRenameRoute, postAdminConversationsRenameRouteHandler)
  .openapi(
    postAdminConversationsRestrictAccessAddGroupRoute,
    postAdminConversationsRestrictAccessAddGroupRouteHandler,
  )
  .openapi(
    getAdminConversationsRestrictAccessListGroupsRoute,
    getAdminConversationsRestrictAccessListGroupsRouteHandler,
  )
  .openapi(
    postAdminConversationsRestrictAccessRemoveGroupRoute,
    postAdminConversationsRestrictAccessRemoveGroupRouteHandler,
  )
  .openapi(getAdminConversationsSearchRoute, getAdminConversationsSearchRouteHandler)
  .openapi(
    postAdminConversationsSetConversationPrefsRoute,
    postAdminConversationsSetConversationPrefsRouteHandler,
  )
  .openapi(postAdminConversationsSetTeamsRoute, postAdminConversationsSetTeamsRouteHandler)
  .openapi(postAdminConversationsUnarchiveRoute, postAdminConversationsUnarchiveRouteHandler)
  .openapi(postAdminEmojiAddRoute, postAdminEmojiAddRouteHandler)
  .openapi(postAdminEmojiAddAliasRoute, postAdminEmojiAddAliasRouteHandler)
  .openapi(getAdminEmojiListRoute, getAdminEmojiListRouteHandler)
  .openapi(postAdminEmojiRemoveRoute, postAdminEmojiRemoveRouteHandler)
  .openapi(postAdminEmojiRenameRoute, postAdminEmojiRenameRouteHandler)
  .openapi(postAdminInviteRequestsApproveRoute, postAdminInviteRequestsApproveRouteHandler)
  .openapi(getAdminInviteRequestsApprovedListRoute, getAdminInviteRequestsApprovedListRouteHandler)
  .openapi(getAdminInviteRequestsDeniedListRoute, getAdminInviteRequestsDeniedListRouteHandler)
  .openapi(postAdminInviteRequestsDenyRoute, postAdminInviteRequestsDenyRouteHandler)
  .openapi(getAdminInviteRequestsListRoute, getAdminInviteRequestsListRouteHandler)
  .openapi(getAdminTeamsAdminsListRoute, getAdminTeamsAdminsListRouteHandler)
  .openapi(postAdminTeamsCreateRoute, postAdminTeamsCreateRouteHandler)
  .openapi(getAdminTeamsListRoute, getAdminTeamsListRouteHandler)
  .openapi(getAdminTeamsOwnersListRoute, getAdminTeamsOwnersListRouteHandler)
  .openapi(getAdminTeamsSettingsInfoRoute, getAdminTeamsSettingsInfoRouteHandler)
  .openapi(
    postAdminTeamsSettingsSetDefaultChannelsRoute,
    postAdminTeamsSettingsSetDefaultChannelsRouteHandler,
  )
  .openapi(
    postAdminTeamsSettingsSetDescriptionRoute,
    postAdminTeamsSettingsSetDescriptionRouteHandler,
  )
  .openapi(
    postAdminTeamsSettingsSetDiscoverabilityRoute,
    postAdminTeamsSettingsSetDiscoverabilityRouteHandler,
  )
  .openapi(postAdminTeamsSettingsSetIconRoute, postAdminTeamsSettingsSetIconRouteHandler)
  .openapi(postAdminTeamsSettingsSetNameRoute, postAdminTeamsSettingsSetNameRouteHandler)
  .openapi(postAdminUsergroupsAddChannelsRoute, postAdminUsergroupsAddChannelsRouteHandler)
  .openapi(postAdminUsergroupsAddTeamsRoute, postAdminUsergroupsAddTeamsRouteHandler)
  .openapi(getAdminUsergroupsListChannelsRoute, getAdminUsergroupsListChannelsRouteHandler)
  .openapi(postAdminUsergroupsRemoveChannelsRoute, postAdminUsergroupsRemoveChannelsRouteHandler)
  .openapi(postAdminUsersAssignRoute, postAdminUsersAssignRouteHandler)
  .openapi(postAdminUsersInviteRoute, postAdminUsersInviteRouteHandler)
  .openapi(getAdminUsersListRoute, getAdminUsersListRouteHandler)
  .openapi(postAdminUsersRemoveRoute, postAdminUsersRemoveRouteHandler)
  .openapi(postAdminUsersSessionInvalidateRoute, postAdminUsersSessionInvalidateRouteHandler)
  .openapi(postAdminUsersSessionResetRoute, postAdminUsersSessionResetRouteHandler)
  .openapi(postAdminUsersSetAdminRoute, postAdminUsersSetAdminRouteHandler)
  .openapi(postAdminUsersSetExpirationRoute, postAdminUsersSetExpirationRouteHandler)
  .openapi(postAdminUsersSetOwnerRoute, postAdminUsersSetOwnerRouteHandler)
  .openapi(postAdminUsersSetRegularRoute, postAdminUsersSetRegularRouteHandler)
  .openapi(getApiTestRoute, getApiTestRouteHandler)
  .openapi(getAppsEventAuthorizationsListRoute, getAppsEventAuthorizationsListRouteHandler)
  .openapi(getAppsPermissionsInfoRoute, getAppsPermissionsInfoRouteHandler)
  .openapi(getAppsPermissionsRequestRoute, getAppsPermissionsRequestRouteHandler)
  .openapi(getAppsPermissionsResourcesListRoute, getAppsPermissionsResourcesListRouteHandler)
  .openapi(getAppsPermissionsScopesListRoute, getAppsPermissionsScopesListRouteHandler)
  .openapi(getAppsPermissionsUsersListRoute, getAppsPermissionsUsersListRouteHandler)
  .openapi(getAppsPermissionsUsersRequestRoute, getAppsPermissionsUsersRequestRouteHandler)
  .openapi(getAppsUninstallRoute, getAppsUninstallRouteHandler)
  .openapi(getAuthRevokeRoute, getAuthRevokeRouteHandler)
  .openapi(getAuthTestRoute, getAuthTestRouteHandler)
  .openapi(getBotsInfoRoute, getBotsInfoRouteHandler)
  .openapi(postCallsAddRoute, postCallsAddRouteHandler)
  .openapi(postCallsEndRoute, postCallsEndRouteHandler)
  .openapi(getCallsInfoRoute, getCallsInfoRouteHandler)
  .openapi(postCallsParticipantsAddRoute, postCallsParticipantsAddRouteHandler)
  .openapi(postCallsParticipantsRemoveRoute, postCallsParticipantsRemoveRouteHandler)
  .openapi(postCallsUpdateRoute, postCallsUpdateRouteHandler)
  .openapi(postChatDeleteRoute, postChatDeleteRouteHandler)
  .openapi(postChatDeleteScheduledMessageRoute, postChatDeleteScheduledMessageRouteHandler)
  .openapi(getChatGetPermalinkRoute, getChatGetPermalinkRouteHandler)
  .openapi(postChatMeMessageRoute, postChatMeMessageRouteHandler)
  .openapi(postChatPostEphemeralRoute, postChatPostEphemeralRouteHandler)
  .openapi(postChatPostMessageRoute, postChatPostMessageRouteHandler)
  .openapi(postChatScheduleMessageRoute, postChatScheduleMessageRouteHandler)
  .openapi(getChatScheduledMessagesListRoute, getChatScheduledMessagesListRouteHandler)
  .openapi(postChatUnfurlRoute, postChatUnfurlRouteHandler)
  .openapi(postChatUpdateRoute, postChatUpdateRouteHandler)
  .openapi(postConversationsArchiveRoute, postConversationsArchiveRouteHandler)
  .openapi(postConversationsCloseRoute, postConversationsCloseRouteHandler)
  .openapi(postConversationsCreateRoute, postConversationsCreateRouteHandler)
  .openapi(getConversationsHistoryRoute, getConversationsHistoryRouteHandler)
  .openapi(getConversationsInfoRoute, getConversationsInfoRouteHandler)
  .openapi(postConversationsInviteRoute, postConversationsInviteRouteHandler)
  .openapi(postConversationsJoinRoute, postConversationsJoinRouteHandler)
  .openapi(postConversationsKickRoute, postConversationsKickRouteHandler)
  .openapi(postConversationsLeaveRoute, postConversationsLeaveRouteHandler)
  .openapi(getConversationsListRoute, getConversationsListRouteHandler)
  .openapi(postConversationsMarkRoute, postConversationsMarkRouteHandler)
  .openapi(getConversationsMembersRoute, getConversationsMembersRouteHandler)
  .openapi(postConversationsOpenRoute, postConversationsOpenRouteHandler)
  .openapi(postConversationsRenameRoute, postConversationsRenameRouteHandler)
  .openapi(getConversationsRepliesRoute, getConversationsRepliesRouteHandler)
  .openapi(postConversationsSetPurposeRoute, postConversationsSetPurposeRouteHandler)
  .openapi(postConversationsSetTopicRoute, postConversationsSetTopicRouteHandler)
  .openapi(postConversationsUnarchiveRoute, postConversationsUnarchiveRouteHandler)
  .openapi(getDialogOpenRoute, getDialogOpenRouteHandler)
  .openapi(postDndEndDndRoute, postDndEndDndRouteHandler)
  .openapi(postDndEndSnoozeRoute, postDndEndSnoozeRouteHandler)
  .openapi(getDndInfoRoute, getDndInfoRouteHandler)
  .openapi(postDndSetSnoozeRoute, postDndSetSnoozeRouteHandler)
  .openapi(getDndTeamInfoRoute, getDndTeamInfoRouteHandler)
  .openapi(getEmojiListRoute, getEmojiListRouteHandler)
  .openapi(postFilesCommentsDeleteRoute, postFilesCommentsDeleteRouteHandler)
  .openapi(postFilesDeleteRoute, postFilesDeleteRouteHandler)
  .openapi(getFilesInfoRoute, getFilesInfoRouteHandler)
  .openapi(getFilesListRoute, getFilesListRouteHandler)
  .openapi(postFilesRemoteAddRoute, postFilesRemoteAddRouteHandler)
  .openapi(getFilesRemoteInfoRoute, getFilesRemoteInfoRouteHandler)
  .openapi(getFilesRemoteListRoute, getFilesRemoteListRouteHandler)
  .openapi(postFilesRemoteRemoveRoute, postFilesRemoteRemoveRouteHandler)
  .openapi(getFilesRemoteShareRoute, getFilesRemoteShareRouteHandler)
  .openapi(postFilesRemoteUpdateRoute, postFilesRemoteUpdateRouteHandler)
  .openapi(postFilesRevokePublicURLRoute, postFilesRevokePublicURLRouteHandler)
  .openapi(postFilesSharedPublicURLRoute, postFilesSharedPublicURLRouteHandler)
  .openapi(postFilesUploadRoute, postFilesUploadRouteHandler)
  .openapi(getMigrationExchangeRoute, getMigrationExchangeRouteHandler)
  .openapi(getOauthAccessRoute, getOauthAccessRouteHandler)
  .openapi(getOauthTokenRoute, getOauthTokenRouteHandler)
  .openapi(getOauthV2AccessRoute, getOauthV2AccessRouteHandler)
  .openapi(postPinsAddRoute, postPinsAddRouteHandler)
  .openapi(getPinsListRoute, getPinsListRouteHandler)
  .openapi(postPinsRemoveRoute, postPinsRemoveRouteHandler)
  .openapi(postReactionsAddRoute, postReactionsAddRouteHandler)
  .openapi(getReactionsGetRoute, getReactionsGetRouteHandler)
  .openapi(getReactionsListRoute, getReactionsListRouteHandler)
  .openapi(postReactionsRemoveRoute, postReactionsRemoveRouteHandler)
  .openapi(postRemindersAddRoute, postRemindersAddRouteHandler)
  .openapi(postRemindersCompleteRoute, postRemindersCompleteRouteHandler)
  .openapi(postRemindersDeleteRoute, postRemindersDeleteRouteHandler)
  .openapi(getRemindersInfoRoute, getRemindersInfoRouteHandler)
  .openapi(getRemindersListRoute, getRemindersListRouteHandler)
  .openapi(getRtmConnectRoute, getRtmConnectRouteHandler)
  .openapi(getSearchMessagesRoute, getSearchMessagesRouteHandler)
  .openapi(postStarsAddRoute, postStarsAddRouteHandler)
  .openapi(getStarsListRoute, getStarsListRouteHandler)
  .openapi(postStarsRemoveRoute, postStarsRemoveRouteHandler)
  .openapi(getTeamAccessLogsRoute, getTeamAccessLogsRouteHandler)
  .openapi(getTeamBillableInfoRoute, getTeamBillableInfoRouteHandler)
  .openapi(getTeamInfoRoute, getTeamInfoRouteHandler)
  .openapi(getTeamIntegrationLogsRoute, getTeamIntegrationLogsRouteHandler)
  .openapi(getTeamProfileGetRoute, getTeamProfileGetRouteHandler)
  .openapi(postUsergroupsCreateRoute, postUsergroupsCreateRouteHandler)
  .openapi(postUsergroupsDisableRoute, postUsergroupsDisableRouteHandler)
  .openapi(postUsergroupsEnableRoute, postUsergroupsEnableRouteHandler)
  .openapi(getUsergroupsListRoute, getUsergroupsListRouteHandler)
  .openapi(postUsergroupsUpdateRoute, postUsergroupsUpdateRouteHandler)
  .openapi(getUsergroupsUsersListRoute, getUsergroupsUsersListRouteHandler)
  .openapi(postUsergroupsUsersUpdateRoute, postUsergroupsUsersUpdateRouteHandler)
  .openapi(getUsersConversationsRoute, getUsersConversationsRouteHandler)
  .openapi(postUsersDeletePhotoRoute, postUsersDeletePhotoRouteHandler)
  .openapi(getUsersGetPresenceRoute, getUsersGetPresenceRouteHandler)
  .openapi(getUsersIdentityRoute, getUsersIdentityRouteHandler)
  .openapi(getUsersInfoRoute, getUsersInfoRouteHandler)
  .openapi(getUsersListRoute, getUsersListRouteHandler)
  .openapi(getUsersLookupByEmailRoute, getUsersLookupByEmailRouteHandler)
  .openapi(getUsersProfileGetRoute, getUsersProfileGetRouteHandler)
  .openapi(postUsersProfileSetRoute, postUsersProfileSetRouteHandler)
  .openapi(postUsersSetActiveRoute, postUsersSetActiveRouteHandler)
  .openapi(postUsersSetPhotoRoute, postUsersSetPhotoRouteHandler)
  .openapi(postUsersSetPresenceRoute, postUsersSetPresenceRouteHandler)
  .openapi(getViewsOpenRoute, getViewsOpenRouteHandler)
  .openapi(getViewsPublishRoute, getViewsPublishRouteHandler)
  .openapi(getViewsPushRoute, getViewsPushRouteHandler)
  .openapi(getViewsUpdateRoute, getViewsUpdateRouteHandler)
  .openapi(getWorkflowsStepCompletedRoute, getWorkflowsStepCompletedRouteHandler)
  .openapi(getWorkflowsStepFailedRoute, getWorkflowsStepFailedRouteHandler)
  .openapi(getWorkflowsUpdateStepRoute, getWorkflowsUpdateStepRouteHandler)

export default app
