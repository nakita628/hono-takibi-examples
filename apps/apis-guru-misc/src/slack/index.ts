import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminAppsApprovedListHandler,
  adminAppsApproveHandler,
  adminAppsRequestsListHandler,
  adminAppsRestrictedListHandler,
  adminAppsRestrictHandler,
  adminConversationsArchiveHandler,
  adminConversationsConvertToPrivateHandler,
  adminConversationsCreateHandler,
  adminConversationsDeleteHandler,
  adminConversationsDisconnectSharedHandler,
  adminConversationsEkmListOriginalConnectedChannelInfoHandler,
  adminConversationsGetConversationPrefsHandler,
  adminConversationsGetTeamsHandler,
  adminConversationsInviteHandler,
  adminConversationsRenameHandler,
  adminConversationsRestrictAccessAddGroupHandler,
  adminConversationsRestrictAccessListGroupsHandler,
  adminConversationsRestrictAccessRemoveGroupHandler,
  adminConversationsSearchHandler,
  adminConversationsSetConversationPrefsHandler,
  adminConversationsSetTeamsHandler,
  adminConversationsUnarchiveHandler,
  adminEmojiAddAliasHandler,
  adminEmojiAddHandler,
  adminEmojiListHandler,
  adminEmojiRemoveHandler,
  adminEmojiRenameHandler,
  adminInviteRequestsApprovedListHandler,
  adminInviteRequestsApproveHandler,
  adminInviteRequestsDeniedListHandler,
  adminInviteRequestsDenyHandler,
  adminInviteRequestsListHandler,
  adminTeamsAdminsListHandler,
  adminTeamsCreateHandler,
  adminTeamsListHandler,
  adminTeamsOwnersListHandler,
  adminTeamsSettingsInfoHandler,
  adminTeamsSettingsSetDefaultChannelsHandler,
  adminTeamsSettingsSetDescriptionHandler,
  adminTeamsSettingsSetDiscoverabilityHandler,
  adminTeamsSettingsSetIconHandler,
  adminTeamsSettingsSetNameHandler,
  adminUsergroupsAddChannelsHandler,
  adminUsergroupsAddTeamsHandler,
  adminUsergroupsListChannelsHandler,
  adminUsergroupsRemoveChannelsHandler,
  adminUsersAssignHandler,
  adminUsersInviteHandler,
  adminUsersListHandler,
  adminUsersRemoveHandler,
  adminUsersSessionInvalidateHandler,
  adminUsersSessionResetHandler,
  adminUsersSetAdminHandler,
  adminUsersSetExpirationHandler,
  adminUsersSetOwnerHandler,
  adminUsersSetRegularHandler,
  apiTestHandler,
  appsEventAuthorizationsListHandler,
  appsPermissionsInfoHandler,
  appsPermissionsRequestHandler,
  appsPermissionsResourcesListHandler,
  appsPermissionsScopesListHandler,
  appsPermissionsUsersListHandler,
  appsPermissionsUsersRequestHandler,
  appsUninstallHandler,
  authRevokeHandler,
  authTestHandler,
  botsInfoHandler,
  callsAddHandler,
  callsEndHandler,
  callsInfoHandler,
  callsParticipantsAddHandler,
  callsParticipantsRemoveHandler,
  callsUpdateHandler,
  chatDeleteHandler,
  chatDeleteScheduledMessageHandler,
  chatGetPermalinkHandler,
  chatMeMessageHandler,
  chatPostEphemeralHandler,
  chatPostMessageHandler,
  chatScheduledMessagesListHandler,
  chatScheduleMessageHandler,
  chatUnfurlHandler,
  chatUpdateHandler,
  conversationsArchiveHandler,
  conversationsCloseHandler,
  conversationsCreateHandler,
  conversationsHistoryHandler,
  conversationsInfoHandler,
  conversationsInviteHandler,
  conversationsJoinHandler,
  conversationsKickHandler,
  conversationsLeaveHandler,
  conversationsListHandler,
  conversationsMarkHandler,
  conversationsMembersHandler,
  conversationsOpenHandler,
  conversationsRenameHandler,
  conversationsRepliesHandler,
  conversationsSetPurposeHandler,
  conversationsSetTopicHandler,
  conversationsUnarchiveHandler,
  dialogOpenHandler,
  dndEndDndHandler,
  dndEndSnoozeHandler,
  dndInfoHandler,
  dndSetSnoozeHandler,
  dndTeamInfoHandler,
  emojiListHandler,
  filesCommentsDeleteHandler,
  filesDeleteHandler,
  filesInfoHandler,
  filesListHandler,
  filesRemoteAddHandler,
  filesRemoteInfoHandler,
  filesRemoteListHandler,
  filesRemoteRemoveHandler,
  filesRemoteShareHandler,
  filesRemoteUpdateHandler,
  filesRevokePublicUrlHandler,
  filesSharedPublicUrlHandler,
  filesUploadHandler,
  migrationExchangeHandler,
  oauthAccessHandler,
  oauthTokenHandler,
  oauthV2AccessHandler,
  pinsAddHandler,
  pinsListHandler,
  pinsRemoveHandler,
  reactionsAddHandler,
  reactionsGetHandler,
  reactionsListHandler,
  reactionsRemoveHandler,
  remindersAddHandler,
  remindersCompleteHandler,
  remindersDeleteHandler,
  remindersInfoHandler,
  remindersListHandler,
  rtmConnectHandler,
  searchMessagesHandler,
  starsAddHandler,
  starsListHandler,
  starsRemoveHandler,
  teamAccessLogsHandler,
  teamBillableInfoHandler,
  teamInfoHandler,
  teamIntegrationLogsHandler,
  teamProfileGetHandler,
  usergroupsCreateHandler,
  usergroupsDisableHandler,
  usergroupsEnableHandler,
  usergroupsListHandler,
  usergroupsUpdateHandler,
  usergroupsUsersListHandler,
  usergroupsUsersUpdateHandler,
  usersConversationsHandler,
  usersDeletePhotoHandler,
  usersGetPresenceHandler,
  usersIdentityHandler,
  usersInfoHandler,
  usersListHandler,
  usersLookupByEmailHandler,
  usersProfileGetHandler,
  usersProfileSetHandler,
  usersSetActiveHandler,
  usersSetPhotoHandler,
  usersSetPresenceHandler,
  viewsOpenHandler,
  viewsPublishHandler,
  viewsPushHandler,
  viewsUpdateHandler,
  workflowsStepCompletedHandler,
  workflowsStepFailedHandler,
  workflowsUpdateStepHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminAppsApproveHandler)
  .route('/', adminAppsApprovedListHandler)
  .route('/', adminAppsRequestsListHandler)
  .route('/', adminAppsRestrictHandler)
  .route('/', adminAppsRestrictedListHandler)
  .route('/', adminConversationsArchiveHandler)
  .route('/', adminConversationsConvertToPrivateHandler)
  .route('/', adminConversationsCreateHandler)
  .route('/', adminConversationsDeleteHandler)
  .route('/', adminConversationsDisconnectSharedHandler)
  .route('/', adminConversationsEkmListOriginalConnectedChannelInfoHandler)
  .route('/', adminConversationsGetConversationPrefsHandler)
  .route('/', adminConversationsGetTeamsHandler)
  .route('/', adminConversationsInviteHandler)
  .route('/', adminConversationsRenameHandler)
  .route('/', adminConversationsRestrictAccessAddGroupHandler)
  .route('/', adminConversationsRestrictAccessListGroupsHandler)
  .route('/', adminConversationsRestrictAccessRemoveGroupHandler)
  .route('/', adminConversationsSearchHandler)
  .route('/', adminConversationsSetConversationPrefsHandler)
  .route('/', adminConversationsSetTeamsHandler)
  .route('/', adminConversationsUnarchiveHandler)
  .route('/', adminEmojiAddHandler)
  .route('/', adminEmojiAddAliasHandler)
  .route('/', adminEmojiListHandler)
  .route('/', adminEmojiRemoveHandler)
  .route('/', adminEmojiRenameHandler)
  .route('/', adminInviteRequestsApproveHandler)
  .route('/', adminInviteRequestsApprovedListHandler)
  .route('/', adminInviteRequestsDeniedListHandler)
  .route('/', adminInviteRequestsDenyHandler)
  .route('/', adminInviteRequestsListHandler)
  .route('/', adminTeamsAdminsListHandler)
  .route('/', adminTeamsCreateHandler)
  .route('/', adminTeamsListHandler)
  .route('/', adminTeamsOwnersListHandler)
  .route('/', adminTeamsSettingsInfoHandler)
  .route('/', adminTeamsSettingsSetDefaultChannelsHandler)
  .route('/', adminTeamsSettingsSetDescriptionHandler)
  .route('/', adminTeamsSettingsSetDiscoverabilityHandler)
  .route('/', adminTeamsSettingsSetIconHandler)
  .route('/', adminTeamsSettingsSetNameHandler)
  .route('/', adminUsergroupsAddChannelsHandler)
  .route('/', adminUsergroupsAddTeamsHandler)
  .route('/', adminUsergroupsListChannelsHandler)
  .route('/', adminUsergroupsRemoveChannelsHandler)
  .route('/', adminUsersAssignHandler)
  .route('/', adminUsersInviteHandler)
  .route('/', adminUsersListHandler)
  .route('/', adminUsersRemoveHandler)
  .route('/', adminUsersSessionInvalidateHandler)
  .route('/', adminUsersSessionResetHandler)
  .route('/', adminUsersSetAdminHandler)
  .route('/', adminUsersSetExpirationHandler)
  .route('/', adminUsersSetOwnerHandler)
  .route('/', adminUsersSetRegularHandler)
  .route('/', apiTestHandler)
  .route('/', appsEventAuthorizationsListHandler)
  .route('/', appsPermissionsInfoHandler)
  .route('/', appsPermissionsRequestHandler)
  .route('/', appsPermissionsResourcesListHandler)
  .route('/', appsPermissionsScopesListHandler)
  .route('/', appsPermissionsUsersListHandler)
  .route('/', appsPermissionsUsersRequestHandler)
  .route('/', appsUninstallHandler)
  .route('/', authRevokeHandler)
  .route('/', authTestHandler)
  .route('/', botsInfoHandler)
  .route('/', callsAddHandler)
  .route('/', callsEndHandler)
  .route('/', callsInfoHandler)
  .route('/', callsParticipantsAddHandler)
  .route('/', callsParticipantsRemoveHandler)
  .route('/', callsUpdateHandler)
  .route('/', chatDeleteHandler)
  .route('/', chatDeleteScheduledMessageHandler)
  .route('/', chatGetPermalinkHandler)
  .route('/', chatMeMessageHandler)
  .route('/', chatPostEphemeralHandler)
  .route('/', chatPostMessageHandler)
  .route('/', chatScheduleMessageHandler)
  .route('/', chatScheduledMessagesListHandler)
  .route('/', chatUnfurlHandler)
  .route('/', chatUpdateHandler)
  .route('/', conversationsArchiveHandler)
  .route('/', conversationsCloseHandler)
  .route('/', conversationsCreateHandler)
  .route('/', conversationsHistoryHandler)
  .route('/', conversationsInfoHandler)
  .route('/', conversationsInviteHandler)
  .route('/', conversationsJoinHandler)
  .route('/', conversationsKickHandler)
  .route('/', conversationsLeaveHandler)
  .route('/', conversationsListHandler)
  .route('/', conversationsMarkHandler)
  .route('/', conversationsMembersHandler)
  .route('/', conversationsOpenHandler)
  .route('/', conversationsRenameHandler)
  .route('/', conversationsRepliesHandler)
  .route('/', conversationsSetPurposeHandler)
  .route('/', conversationsSetTopicHandler)
  .route('/', conversationsUnarchiveHandler)
  .route('/', dialogOpenHandler)
  .route('/', dndEndDndHandler)
  .route('/', dndEndSnoozeHandler)
  .route('/', dndInfoHandler)
  .route('/', dndSetSnoozeHandler)
  .route('/', dndTeamInfoHandler)
  .route('/', emojiListHandler)
  .route('/', filesCommentsDeleteHandler)
  .route('/', filesDeleteHandler)
  .route('/', filesInfoHandler)
  .route('/', filesListHandler)
  .route('/', filesRemoteAddHandler)
  .route('/', filesRemoteInfoHandler)
  .route('/', filesRemoteListHandler)
  .route('/', filesRemoteRemoveHandler)
  .route('/', filesRemoteShareHandler)
  .route('/', filesRemoteUpdateHandler)
  .route('/', filesRevokePublicUrlHandler)
  .route('/', filesSharedPublicUrlHandler)
  .route('/', filesUploadHandler)
  .route('/', migrationExchangeHandler)
  .route('/', oauthAccessHandler)
  .route('/', oauthTokenHandler)
  .route('/', oauthV2AccessHandler)
  .route('/', pinsAddHandler)
  .route('/', pinsListHandler)
  .route('/', pinsRemoveHandler)
  .route('/', reactionsAddHandler)
  .route('/', reactionsGetHandler)
  .route('/', reactionsListHandler)
  .route('/', reactionsRemoveHandler)
  .route('/', remindersAddHandler)
  .route('/', remindersCompleteHandler)
  .route('/', remindersDeleteHandler)
  .route('/', remindersInfoHandler)
  .route('/', remindersListHandler)
  .route('/', rtmConnectHandler)
  .route('/', searchMessagesHandler)
  .route('/', starsAddHandler)
  .route('/', starsListHandler)
  .route('/', starsRemoveHandler)
  .route('/', teamAccessLogsHandler)
  .route('/', teamBillableInfoHandler)
  .route('/', teamInfoHandler)
  .route('/', teamIntegrationLogsHandler)
  .route('/', teamProfileGetHandler)
  .route('/', usergroupsCreateHandler)
  .route('/', usergroupsDisableHandler)
  .route('/', usergroupsEnableHandler)
  .route('/', usergroupsListHandler)
  .route('/', usergroupsUpdateHandler)
  .route('/', usergroupsUsersListHandler)
  .route('/', usergroupsUsersUpdateHandler)
  .route('/', usersConversationsHandler)
  .route('/', usersDeletePhotoHandler)
  .route('/', usersGetPresenceHandler)
  .route('/', usersIdentityHandler)
  .route('/', usersInfoHandler)
  .route('/', usersListHandler)
  .route('/', usersLookupByEmailHandler)
  .route('/', usersProfileGetHandler)
  .route('/', usersProfileSetHandler)
  .route('/', usersSetActiveHandler)
  .route('/', usersSetPhotoHandler)
  .route('/', usersSetPresenceHandler)
  .route('/', viewsOpenHandler)
  .route('/', viewsPublishHandler)
  .route('/', viewsPushHandler)
  .route('/', viewsUpdateHandler)
  .route('/', workflowsStepCompletedHandler)
  .route('/', workflowsStepFailedHandler)
  .route('/', workflowsUpdateStepHandler)

export default app
