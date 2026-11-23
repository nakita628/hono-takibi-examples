import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AbacAttributesIdRoute,
  deleteApiV1AbacRoomsRidAttributesKeyRoute,
  deleteApiV1AbacRoomsRidAttributesRoute,
  deleteApiV1RemoveInviteIdRoute,
  getApiV1AbacAttributesIdRoute,
  getApiV1AbacAttributesKeyIsInUseRoute,
  getApiV1AbacAttributesListAssignableRoute,
  getApiV1AbacAttributesListKeysRoute,
  getApiV1AbacAttributesRoute,
  getApiV1AbacAuditRoute,
  getApiV1AbacPdpHealthRoute,
  getApiV1AbacRoomsRoute,
  getApiV1AuditRoomsMembersRoute,
  getApiV1ChannelsAnonymousreadRoute,
  getApiV1ChannelsCountersRoute,
  getApiV1ChannelsFilesRoute,
  getApiV1ChannelsGetAllUserMentionsByChannelRoute,
  getApiV1ChannelsGetIntegrationsRoute,
  getApiV1ChannelsHistoryRoute,
  getApiV1ChannelsInfoRoute,
  getApiV1ChannelsListJoinedRoute,
  getApiV1ChannelsListRoute,
  getApiV1ChannelsMembersRoute,
  getApiV1ChannelsMessagesRoute,
  getApiV1ChannelsModeratorsRoute,
  getApiV1ChannelsOnlineRoute,
  getApiV1ChannelsRolesRoute,
  getApiV1DirectoryRoute,
  getApiV1GroupsCountersRoute,
  getApiV1GroupsFilesRoute,
  getApiV1GroupsGetIntegrationsRoute,
  getApiV1GroupsHistoryRoute,
  getApiV1GroupsInfoRoute,
  getApiV1GroupsListAllRoute,
  getApiV1GroupsListRoute,
  getApiV1GroupsMembersRoute,
  getApiV1GroupsMessagesRoute,
  getApiV1GroupsModeratorsRoute,
  getApiV1GroupsOnlineRoute,
  getApiV1GroupsRolesRoute,
  getApiV1ListInvitesRoute,
  getApiV1RoomsAdminRoomsGetRoomRoute,
  getApiV1RoomsAdminRoomsRoute,
  getApiV1RoomsAutocompleteAdminRoomsRoute,
  getApiV1RoomsAutocompleteAvailableForTeamsRoute,
  getApiV1RoomsAutocompleteChannelAndPrivateRoute,
  getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute,
  getApiV1RoomsGetDiscussionsRoute,
  getApiV1RoomsGetRoute,
  getApiV1RoomsHistoryRoute,
  getApiV1RoomsImagesRoute,
  getApiV1RoomsInfoRoute,
  getApiV1RoomsIsMemberRoute,
  getApiV1RoomsMembersOrderedByRoleRoute,
  getApiV1RoomsNameExistsRoute,
  getApiV1RoomsRolesRoute,
  getApiV1SubscriptionsGetOneRoute,
  getApiV1SubscriptionsGetRoute,
  getApiV1TeamsAutocompleteRoute,
  getApiV1TeamsInfoRoute,
  getApiV1TeamsListAllRoute,
  getApiV1TeamsListChildrenRoute,
  getApiV1TeamsListRoomsOfUserRoute,
  getApiV1TeamsListRoomsRoute,
  getApiV1TeamsListRoute,
  getApiV1TeamsMembersRoute,
  postApiV1AbacAttributesRoute,
  postApiV1AbacRoomsEvaluateMembershipRoute,
  postApiV1AbacRoomsRidAttributesKeyRoute,
  postApiV1AbacRoomsRidAttributesRoute,
  postApiV1AbacUsersSyncRoute,
  postApiV1ChannelsAddAllRoute,
  postApiV1ChannelsAddLeaderRoute,
  postApiV1ChannelsAddModeratorRoute,
  postApiV1ChannelsAddOwnerRoute,
  postApiV1ChannelsArchiveRoute,
  postApiV1ChannelsCloseRoute,
  postApiV1ChannelsConvertToTeamRoute,
  postApiV1ChannelsCreateRoute,
  postApiV1ChannelsDeleteRoute,
  postApiV1ChannelsInviteRoute,
  postApiV1ChannelsJoinRoute,
  postApiV1ChannelsKickRoute,
  postApiV1ChannelsLeaveRoute,
  postApiV1ChannelsOpenRoute,
  postApiV1ChannelsRemoveLeaderRoute,
  postApiV1ChannelsRemoveModeratorRoute,
  postApiV1ChannelsRemoveOwnerRoute,
  postApiV1ChannelsRenameRoute,
  postApiV1ChannelsSetAnnouncementRoute,
  postApiV1ChannelsSetCustomFieldsRoute,
  postApiV1ChannelsSetDefaultRoute,
  postApiV1ChannelsSetDescriptionRoute,
  postApiV1ChannelsSetJoinCodeRoute,
  postApiV1ChannelsSetPurposeRoute,
  postApiV1ChannelsSetReadOnlyRoute,
  postApiV1ChannelsSetTopicRoute,
  postApiV1ChannelsSetTypeRoute,
  postApiV1ChannelsUnarchiveRoute,
  postApiV1FindOrCreateInviteRoute,
  postApiV1GroupsAddAllRoute,
  postApiV1GroupsAddLeaderRoute,
  postApiV1GroupsAddModeratorRoute,
  postApiV1GroupsAddOwnerRoute,
  postApiV1GroupsArchiveRoute,
  postApiV1GroupsCloseRoute,
  postApiV1GroupsConvertToTeamRoute,
  postApiV1GroupsCreateRoute,
  postApiV1GroupsDeleteRoute,
  postApiV1GroupsInviteRoute,
  postApiV1GroupsKickRoute,
  postApiV1GroupsLeaveRoute,
  postApiV1GroupsOpenRoute,
  postApiV1GroupsRemoveLeaderRoute,
  postApiV1GroupsRemoveModeratorRoute,
  postApiV1GroupsRemoveOwnerRoute,
  postApiV1GroupsRenameRoute,
  postApiV1GroupsSetAnnouncementRoute,
  postApiV1GroupsSetCustomFieldsRoute,
  postApiV1GroupsSetDescriptionRoute,
  postApiV1GroupsSetEncryptedRoute,
  postApiV1GroupsSetPurposeRoute,
  postApiV1GroupsSetReadOnlyRoute,
  postApiV1GroupsSetTopicRoute,
  postApiV1GroupsSetTypeRoute,
  postApiV1GroupsUnarchiveRoute,
  postApiV1RoomsChangeArchivationStateRoute,
  postApiV1RoomsCleanHistoryRoute,
  postApiV1RoomsCreateDiscussionRoute,
  postApiV1RoomsDeleteRoute,
  postApiV1RoomsExportRoute,
  postApiV1RoomsFavoriteRoute,
  postApiV1RoomsHideRoute,
  postApiV1RoomsJoinRoute,
  postApiV1RoomsLeaveRoute,
  postApiV1RoomsMediaConfirmRidFileIdRoute,
  postApiV1RoomsMediaRidRoute,
  postApiV1RoomsMuteUserRoute,
  postApiV1RoomsOpenRoute,
  postApiV1RoomsSaveDraftRoute,
  postApiV1RoomsSaveNotificationRoute,
  postApiV1RoomsSaveRoomSettingsRoute,
  postApiV1RoomsUnmuteUserRoute,
  postApiV1SubscriptionsReadRoute,
  postApiV1SubscriptionsUnreadRoute,
  postApiV1TeamsAddMembersRoute,
  postApiV1TeamsAddRoomsRoute,
  postApiV1TeamsConvertToChannelRoute,
  postApiV1TeamsCreateRoute,
  postApiV1TeamsDeleteRoute,
  postApiV1TeamsLeaveRoute,
  postApiV1TeamsRemoveMemberRoute,
  postApiV1TeamsRemoveRoomRoute,
  postApiV1TeamsUpdateMemberRoute,
  postApiV1TeamsUpdateRoomRoute,
  postApiV1TeamsUpdateRoute,
  postApiV1UploadsDeleteRoute,
  postApiV1UseInviteTokenRoute,
  putApiV1AbacAttributesIdRoute,
  putApiV1AbacRoomsRidAttributesKeyRoute,
} from './routes'
import {
  deleteApiV1AbacAttributesIdRouteHandler,
  deleteApiV1AbacRoomsRidAttributesKeyRouteHandler,
  deleteApiV1AbacRoomsRidAttributesRouteHandler,
  deleteApiV1RemoveInviteIdRouteHandler,
  getApiV1AbacAttributesIdRouteHandler,
  getApiV1AbacAttributesKeyIsInUseRouteHandler,
  getApiV1AbacAttributesListAssignableRouteHandler,
  getApiV1AbacAttributesListKeysRouteHandler,
  getApiV1AbacAttributesRouteHandler,
  getApiV1AbacAuditRouteHandler,
  getApiV1AbacPdpHealthRouteHandler,
  getApiV1AbacRoomsRouteHandler,
  getApiV1AuditRoomsMembersRouteHandler,
  getApiV1ChannelsAnonymousreadRouteHandler,
  getApiV1ChannelsCountersRouteHandler,
  getApiV1ChannelsFilesRouteHandler,
  getApiV1ChannelsGetAllUserMentionsByChannelRouteHandler,
  getApiV1ChannelsGetIntegrationsRouteHandler,
  getApiV1ChannelsHistoryRouteHandler,
  getApiV1ChannelsInfoRouteHandler,
  getApiV1ChannelsListJoinedRouteHandler,
  getApiV1ChannelsListRouteHandler,
  getApiV1ChannelsMembersRouteHandler,
  getApiV1ChannelsMessagesRouteHandler,
  getApiV1ChannelsModeratorsRouteHandler,
  getApiV1ChannelsOnlineRouteHandler,
  getApiV1ChannelsRolesRouteHandler,
  getApiV1DirectoryRouteHandler,
  getApiV1GroupsCountersRouteHandler,
  getApiV1GroupsFilesRouteHandler,
  getApiV1GroupsGetIntegrationsRouteHandler,
  getApiV1GroupsHistoryRouteHandler,
  getApiV1GroupsInfoRouteHandler,
  getApiV1GroupsListAllRouteHandler,
  getApiV1GroupsListRouteHandler,
  getApiV1GroupsMembersRouteHandler,
  getApiV1GroupsMessagesRouteHandler,
  getApiV1GroupsModeratorsRouteHandler,
  getApiV1GroupsOnlineRouteHandler,
  getApiV1GroupsRolesRouteHandler,
  getApiV1ListInvitesRouteHandler,
  getApiV1RoomsAdminRoomsGetRoomRouteHandler,
  getApiV1RoomsAdminRoomsRouteHandler,
  getApiV1RoomsAutocompleteAdminRoomsRouteHandler,
  getApiV1RoomsAutocompleteAvailableForTeamsRouteHandler,
  getApiV1RoomsAutocompleteChannelAndPrivateRouteHandler,
  getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRouteHandler,
  getApiV1RoomsGetDiscussionsRouteHandler,
  getApiV1RoomsGetRouteHandler,
  getApiV1RoomsHistoryRouteHandler,
  getApiV1RoomsImagesRouteHandler,
  getApiV1RoomsInfoRouteHandler,
  getApiV1RoomsIsMemberRouteHandler,
  getApiV1RoomsMembersOrderedByRoleRouteHandler,
  getApiV1RoomsNameExistsRouteHandler,
  getApiV1RoomsRolesRouteHandler,
  getApiV1SubscriptionsGetOneRouteHandler,
  getApiV1SubscriptionsGetRouteHandler,
  getApiV1TeamsAutocompleteRouteHandler,
  getApiV1TeamsInfoRouteHandler,
  getApiV1TeamsListAllRouteHandler,
  getApiV1TeamsListChildrenRouteHandler,
  getApiV1TeamsListRoomsOfUserRouteHandler,
  getApiV1TeamsListRoomsRouteHandler,
  getApiV1TeamsListRouteHandler,
  getApiV1TeamsMembersRouteHandler,
  postApiV1AbacAttributesRouteHandler,
  postApiV1AbacRoomsEvaluateMembershipRouteHandler,
  postApiV1AbacRoomsRidAttributesKeyRouteHandler,
  postApiV1AbacRoomsRidAttributesRouteHandler,
  postApiV1AbacUsersSyncRouteHandler,
  postApiV1ChannelsAddAllRouteHandler,
  postApiV1ChannelsAddLeaderRouteHandler,
  postApiV1ChannelsAddModeratorRouteHandler,
  postApiV1ChannelsAddOwnerRouteHandler,
  postApiV1ChannelsArchiveRouteHandler,
  postApiV1ChannelsCloseRouteHandler,
  postApiV1ChannelsConvertToTeamRouteHandler,
  postApiV1ChannelsCreateRouteHandler,
  postApiV1ChannelsDeleteRouteHandler,
  postApiV1ChannelsInviteRouteHandler,
  postApiV1ChannelsJoinRouteHandler,
  postApiV1ChannelsKickRouteHandler,
  postApiV1ChannelsLeaveRouteHandler,
  postApiV1ChannelsOpenRouteHandler,
  postApiV1ChannelsRemoveLeaderRouteHandler,
  postApiV1ChannelsRemoveModeratorRouteHandler,
  postApiV1ChannelsRemoveOwnerRouteHandler,
  postApiV1ChannelsRenameRouteHandler,
  postApiV1ChannelsSetAnnouncementRouteHandler,
  postApiV1ChannelsSetCustomFieldsRouteHandler,
  postApiV1ChannelsSetDefaultRouteHandler,
  postApiV1ChannelsSetDescriptionRouteHandler,
  postApiV1ChannelsSetJoinCodeRouteHandler,
  postApiV1ChannelsSetPurposeRouteHandler,
  postApiV1ChannelsSetReadOnlyRouteHandler,
  postApiV1ChannelsSetTopicRouteHandler,
  postApiV1ChannelsSetTypeRouteHandler,
  postApiV1ChannelsUnarchiveRouteHandler,
  postApiV1FindOrCreateInviteRouteHandler,
  postApiV1GroupsAddAllRouteHandler,
  postApiV1GroupsAddLeaderRouteHandler,
  postApiV1GroupsAddModeratorRouteHandler,
  postApiV1GroupsAddOwnerRouteHandler,
  postApiV1GroupsArchiveRouteHandler,
  postApiV1GroupsCloseRouteHandler,
  postApiV1GroupsConvertToTeamRouteHandler,
  postApiV1GroupsCreateRouteHandler,
  postApiV1GroupsDeleteRouteHandler,
  postApiV1GroupsInviteRouteHandler,
  postApiV1GroupsKickRouteHandler,
  postApiV1GroupsLeaveRouteHandler,
  postApiV1GroupsOpenRouteHandler,
  postApiV1GroupsRemoveLeaderRouteHandler,
  postApiV1GroupsRemoveModeratorRouteHandler,
  postApiV1GroupsRemoveOwnerRouteHandler,
  postApiV1GroupsRenameRouteHandler,
  postApiV1GroupsSetAnnouncementRouteHandler,
  postApiV1GroupsSetCustomFieldsRouteHandler,
  postApiV1GroupsSetDescriptionRouteHandler,
  postApiV1GroupsSetEncryptedRouteHandler,
  postApiV1GroupsSetPurposeRouteHandler,
  postApiV1GroupsSetReadOnlyRouteHandler,
  postApiV1GroupsSetTopicRouteHandler,
  postApiV1GroupsSetTypeRouteHandler,
  postApiV1GroupsUnarchiveRouteHandler,
  postApiV1RoomsChangeArchivationStateRouteHandler,
  postApiV1RoomsCleanHistoryRouteHandler,
  postApiV1RoomsCreateDiscussionRouteHandler,
  postApiV1RoomsDeleteRouteHandler,
  postApiV1RoomsExportRouteHandler,
  postApiV1RoomsFavoriteRouteHandler,
  postApiV1RoomsHideRouteHandler,
  postApiV1RoomsJoinRouteHandler,
  postApiV1RoomsLeaveRouteHandler,
  postApiV1RoomsMediaConfirmRidFileIdRouteHandler,
  postApiV1RoomsMediaRidRouteHandler,
  postApiV1RoomsMuteUserRouteHandler,
  postApiV1RoomsOpenRouteHandler,
  postApiV1RoomsSaveDraftRouteHandler,
  postApiV1RoomsSaveNotificationRouteHandler,
  postApiV1RoomsSaveRoomSettingsRouteHandler,
  postApiV1RoomsUnmuteUserRouteHandler,
  postApiV1SubscriptionsReadRouteHandler,
  postApiV1SubscriptionsUnreadRouteHandler,
  postApiV1TeamsAddMembersRouteHandler,
  postApiV1TeamsAddRoomsRouteHandler,
  postApiV1TeamsConvertToChannelRouteHandler,
  postApiV1TeamsCreateRouteHandler,
  postApiV1TeamsDeleteRouteHandler,
  postApiV1TeamsLeaveRouteHandler,
  postApiV1TeamsRemoveMemberRouteHandler,
  postApiV1TeamsRemoveRoomRouteHandler,
  postApiV1TeamsUpdateMemberRouteHandler,
  postApiV1TeamsUpdateRoomRouteHandler,
  postApiV1TeamsUpdateRouteHandler,
  postApiV1UploadsDeleteRouteHandler,
  postApiV1UseInviteTokenRouteHandler,
  putApiV1AbacAttributesIdRouteHandler,
  putApiV1AbacRoomsRidAttributesKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1ChannelsCreateRoute, postApiV1ChannelsCreateRouteHandler)
  .openapi(postApiV1ChannelsAddAllRoute, postApiV1ChannelsAddAllRouteHandler)
  .openapi(postApiV1ChannelsAddLeaderRoute, postApiV1ChannelsAddLeaderRouteHandler)
  .openapi(postApiV1ChannelsAddModeratorRoute, postApiV1ChannelsAddModeratorRouteHandler)
  .openapi(postApiV1ChannelsAddOwnerRoute, postApiV1ChannelsAddOwnerRouteHandler)
  .openapi(getApiV1ChannelsAnonymousreadRoute, getApiV1ChannelsAnonymousreadRouteHandler)
  .openapi(postApiV1ChannelsArchiveRoute, postApiV1ChannelsArchiveRouteHandler)
  .openapi(postApiV1ChannelsCloseRoute, postApiV1ChannelsCloseRouteHandler)
  .openapi(getApiV1ChannelsCountersRoute, getApiV1ChannelsCountersRouteHandler)
  .openapi(postApiV1ChannelsDeleteRoute, postApiV1ChannelsDeleteRouteHandler)
  .openapi(getApiV1ChannelsFilesRoute, getApiV1ChannelsFilesRouteHandler)
  .openapi(getApiV1ChannelsHistoryRoute, getApiV1ChannelsHistoryRouteHandler)
  .openapi(getApiV1ChannelsInfoRoute, getApiV1ChannelsInfoRouteHandler)
  .openapi(postApiV1ChannelsInviteRoute, postApiV1ChannelsInviteRouteHandler)
  .openapi(postApiV1ChannelsJoinRoute, postApiV1ChannelsJoinRouteHandler)
  .openapi(postApiV1ChannelsKickRoute, postApiV1ChannelsKickRouteHandler)
  .openapi(postApiV1ChannelsLeaveRoute, postApiV1ChannelsLeaveRouteHandler)
  .openapi(getApiV1ChannelsListJoinedRoute, getApiV1ChannelsListJoinedRouteHandler)
  .openapi(getApiV1ChannelsListRoute, getApiV1ChannelsListRouteHandler)
  .openapi(getApiV1ChannelsMembersRoute, getApiV1ChannelsMembersRouteHandler)
  .openapi(getApiV1ChannelsMessagesRoute, getApiV1ChannelsMessagesRouteHandler)
  .openapi(getApiV1ChannelsModeratorsRoute, getApiV1ChannelsModeratorsRouteHandler)
  .openapi(getApiV1ChannelsOnlineRoute, getApiV1ChannelsOnlineRouteHandler)
  .openapi(postApiV1ChannelsOpenRoute, postApiV1ChannelsOpenRouteHandler)
  .openapi(postApiV1ChannelsRemoveLeaderRoute, postApiV1ChannelsRemoveLeaderRouteHandler)
  .openapi(postApiV1ChannelsRemoveModeratorRoute, postApiV1ChannelsRemoveModeratorRouteHandler)
  .openapi(postApiV1ChannelsRemoveOwnerRoute, postApiV1ChannelsRemoveOwnerRouteHandler)
  .openapi(postApiV1ChannelsRenameRoute, postApiV1ChannelsRenameRouteHandler)
  .openapi(getApiV1ChannelsRolesRoute, getApiV1ChannelsRolesRouteHandler)
  .openapi(postApiV1ChannelsSetAnnouncementRoute, postApiV1ChannelsSetAnnouncementRouteHandler)
  .openapi(postApiV1ChannelsSetCustomFieldsRoute, postApiV1ChannelsSetCustomFieldsRouteHandler)
  .openapi(postApiV1ChannelsSetDefaultRoute, postApiV1ChannelsSetDefaultRouteHandler)
  .openapi(postApiV1ChannelsSetDescriptionRoute, postApiV1ChannelsSetDescriptionRouteHandler)
  .openapi(postApiV1ChannelsSetJoinCodeRoute, postApiV1ChannelsSetJoinCodeRouteHandler)
  .openapi(postApiV1ChannelsSetPurposeRoute, postApiV1ChannelsSetPurposeRouteHandler)
  .openapi(postApiV1ChannelsSetReadOnlyRoute, postApiV1ChannelsSetReadOnlyRouteHandler)
  .openapi(postApiV1ChannelsSetTopicRoute, postApiV1ChannelsSetTopicRouteHandler)
  .openapi(postApiV1ChannelsSetTypeRoute, postApiV1ChannelsSetTypeRouteHandler)
  .openapi(postApiV1ChannelsUnarchiveRoute, postApiV1ChannelsUnarchiveRouteHandler)
  .openapi(
    getApiV1ChannelsGetAllUserMentionsByChannelRoute,
    getApiV1ChannelsGetAllUserMentionsByChannelRouteHandler,
  )
  .openapi(getApiV1ChannelsGetIntegrationsRoute, getApiV1ChannelsGetIntegrationsRouteHandler)
  .openapi(postApiV1ChannelsConvertToTeamRoute, postApiV1ChannelsConvertToTeamRouteHandler)
  .openapi(postApiV1RoomsSaveNotificationRoute, postApiV1RoomsSaveNotificationRouteHandler)
  .openapi(postApiV1RoomsSaveDraftRoute, postApiV1RoomsSaveDraftRouteHandler)
  .openapi(getApiV1RoomsAdminRoomsRoute, getApiV1RoomsAdminRoomsRouteHandler)
  .openapi(postApiV1RoomsCleanHistoryRoute, postApiV1RoomsCleanHistoryRouteHandler)
  .openapi(getApiV1RoomsHistoryRoute, getApiV1RoomsHistoryRouteHandler)
  .openapi(getApiV1RoomsInfoRoute, getApiV1RoomsInfoRouteHandler)
  .openapi(getApiV1RoomsGetDiscussionsRoute, getApiV1RoomsGetDiscussionsRouteHandler)
  .openapi(getApiV1RoomsGetRoute, getApiV1RoomsGetRouteHandler)
  .openapi(postApiV1RoomsJoinRoute, postApiV1RoomsJoinRouteHandler)
  .openapi(postApiV1RoomsLeaveRoute, postApiV1RoomsLeaveRouteHandler)
  .openapi(postApiV1RoomsDeleteRoute, postApiV1RoomsDeleteRouteHandler)
  .openapi(postApiV1RoomsFavoriteRoute, postApiV1RoomsFavoriteRouteHandler)
  .openapi(
    getApiV1RoomsAutocompleteAvailableForTeamsRoute,
    getApiV1RoomsAutocompleteAvailableForTeamsRouteHandler,
  )
  .openapi(
    getApiV1RoomsAutocompleteChannelAndPrivateRoute,
    getApiV1RoomsAutocompleteChannelAndPrivateRouteHandler,
  )
  .openapi(
    getApiV1RoomsAutocompleteAdminRoomsRoute,
    getApiV1RoomsAutocompleteAdminRoomsRouteHandler,
  )
  .openapi(getApiV1RoomsAdminRoomsGetRoomRoute, getApiV1RoomsAdminRoomsGetRoomRouteHandler)
  .openapi(postApiV1RoomsSaveRoomSettingsRoute, postApiV1RoomsSaveRoomSettingsRouteHandler)
  .openapi(getApiV1RoomsNameExistsRoute, getApiV1RoomsNameExistsRouteHandler)
  .openapi(
    postApiV1RoomsChangeArchivationStateRoute,
    postApiV1RoomsChangeArchivationStateRouteHandler,
  )
  .openapi(postApiV1RoomsExportRoute, postApiV1RoomsExportRouteHandler)
  .openapi(postApiV1RoomsMuteUserRoute, postApiV1RoomsMuteUserRouteHandler)
  .openapi(postApiV1RoomsUnmuteUserRoute, postApiV1RoomsUnmuteUserRouteHandler)
  .openapi(postApiV1RoomsCreateDiscussionRoute, postApiV1RoomsCreateDiscussionRouteHandler)
  .openapi(getApiV1RoomsImagesRoute, getApiV1RoomsImagesRouteHandler)
  .openapi(getApiV1AuditRoomsMembersRoute, getApiV1AuditRoomsMembersRouteHandler)
  .openapi(getApiV1RoomsMembersOrderedByRoleRoute, getApiV1RoomsMembersOrderedByRoleRouteHandler)
  .openapi(postApiV1TeamsCreateRoute, postApiV1TeamsCreateRouteHandler)
  .openapi(getApiV1TeamsListAllRoute, getApiV1TeamsListAllRouteHandler)
  .openapi(getApiV1TeamsListRoute, getApiV1TeamsListRouteHandler)
  .openapi(getApiV1TeamsInfoRoute, getApiV1TeamsInfoRouteHandler)
  .openapi(postApiV1TeamsUpdateRoute, postApiV1TeamsUpdateRouteHandler)
  .openapi(postApiV1TeamsAddMembersRoute, postApiV1TeamsAddMembersRouteHandler)
  .openapi(postApiV1TeamsUpdateMemberRoute, postApiV1TeamsUpdateMemberRouteHandler)
  .openapi(getApiV1TeamsMembersRoute, getApiV1TeamsMembersRouteHandler)
  .openapi(postApiV1TeamsLeaveRoute, postApiV1TeamsLeaveRouteHandler)
  .openapi(postApiV1TeamsRemoveMemberRoute, postApiV1TeamsRemoveMemberRouteHandler)
  .openapi(postApiV1TeamsDeleteRoute, postApiV1TeamsDeleteRouteHandler)
  .openapi(getApiV1TeamsAutocompleteRoute, getApiV1TeamsAutocompleteRouteHandler)
  .openapi(postApiV1TeamsConvertToChannelRoute, postApiV1TeamsConvertToChannelRouteHandler)
  .openapi(postApiV1TeamsAddRoomsRoute, postApiV1TeamsAddRoomsRouteHandler)
  .openapi(postApiV1TeamsRemoveRoomRoute, postApiV1TeamsRemoveRoomRouteHandler)
  .openapi(postApiV1TeamsUpdateRoomRoute, postApiV1TeamsUpdateRoomRouteHandler)
  .openapi(getApiV1TeamsListRoomsRoute, getApiV1TeamsListRoomsRouteHandler)
  .openapi(getApiV1TeamsListRoomsOfUserRoute, getApiV1TeamsListRoomsOfUserRouteHandler)
  .openapi(getApiV1TeamsListChildrenRoute, getApiV1TeamsListChildrenRouteHandler)
  .openapi(getApiV1GroupsOnlineRoute, getApiV1GroupsOnlineRouteHandler)
  .openapi(getApiV1GroupsGetIntegrationsRoute, getApiV1GroupsGetIntegrationsRouteHandler)
  .openapi(postApiV1GroupsAddAllRoute, postApiV1GroupsAddAllRouteHandler)
  .openapi(postApiV1GroupsAddLeaderRoute, postApiV1GroupsAddLeaderRouteHandler)
  .openapi(postApiV1GroupsAddModeratorRoute, postApiV1GroupsAddModeratorRouteHandler)
  .openapi(postApiV1GroupsAddOwnerRoute, postApiV1GroupsAddOwnerRouteHandler)
  .openapi(postApiV1GroupsArchiveRoute, postApiV1GroupsArchiveRouteHandler)
  .openapi(postApiV1GroupsCloseRoute, postApiV1GroupsCloseRouteHandler)
  .openapi(getApiV1GroupsCountersRoute, getApiV1GroupsCountersRouteHandler)
  .openapi(postApiV1GroupsCreateRoute, postApiV1GroupsCreateRouteHandler)
  .openapi(postApiV1GroupsDeleteRoute, postApiV1GroupsDeleteRouteHandler)
  .openapi(getApiV1GroupsHistoryRoute, getApiV1GroupsHistoryRouteHandler)
  .openapi(getApiV1GroupsInfoRoute, getApiV1GroupsInfoRouteHandler)
  .openapi(postApiV1GroupsInviteRoute, postApiV1GroupsInviteRouteHandler)
  .openapi(postApiV1GroupsKickRoute, postApiV1GroupsKickRouteHandler)
  .openapi(postApiV1GroupsLeaveRoute, postApiV1GroupsLeaveRouteHandler)
  .openapi(getApiV1GroupsListAllRoute, getApiV1GroupsListAllRouteHandler)
  .openapi(getApiV1GroupsListRoute, getApiV1GroupsListRouteHandler)
  .openapi(getApiV1GroupsMembersRoute, getApiV1GroupsMembersRouteHandler)
  .openapi(getApiV1GroupsMessagesRoute, getApiV1GroupsMessagesRouteHandler)
  .openapi(getApiV1GroupsModeratorsRoute, getApiV1GroupsModeratorsRouteHandler)
  .openapi(postApiV1GroupsOpenRoute, postApiV1GroupsOpenRouteHandler)
  .openapi(postApiV1GroupsRemoveLeaderRoute, postApiV1GroupsRemoveLeaderRouteHandler)
  .openapi(postApiV1GroupsRemoveModeratorRoute, postApiV1GroupsRemoveModeratorRouteHandler)
  .openapi(postApiV1GroupsRemoveOwnerRoute, postApiV1GroupsRemoveOwnerRouteHandler)
  .openapi(postApiV1GroupsRenameRoute, postApiV1GroupsRenameRouteHandler)
  .openapi(postApiV1GroupsSetAnnouncementRoute, postApiV1GroupsSetAnnouncementRouteHandler)
  .openapi(postApiV1GroupsSetCustomFieldsRoute, postApiV1GroupsSetCustomFieldsRouteHandler)
  .openapi(postApiV1GroupsSetDescriptionRoute, postApiV1GroupsSetDescriptionRouteHandler)
  .openapi(postApiV1GroupsSetPurposeRoute, postApiV1GroupsSetPurposeRouteHandler)
  .openapi(postApiV1GroupsSetReadOnlyRoute, postApiV1GroupsSetReadOnlyRouteHandler)
  .openapi(postApiV1GroupsSetTopicRoute, postApiV1GroupsSetTopicRouteHandler)
  .openapi(postApiV1GroupsSetTypeRoute, postApiV1GroupsSetTypeRouteHandler)
  .openapi(postApiV1GroupsUnarchiveRoute, postApiV1GroupsUnarchiveRouteHandler)
  .openapi(getApiV1GroupsFilesRoute, getApiV1GroupsFilesRouteHandler)
  .openapi(postApiV1GroupsSetEncryptedRoute, postApiV1GroupsSetEncryptedRouteHandler)
  .openapi(postApiV1GroupsConvertToTeamRoute, postApiV1GroupsConvertToTeamRouteHandler)
  .openapi(getApiV1GroupsRolesRoute, getApiV1GroupsRolesRouteHandler)
  .openapi(getApiV1DirectoryRoute, getApiV1DirectoryRouteHandler)
  .openapi(postApiV1RoomsOpenRoute, postApiV1RoomsOpenRouteHandler)
  .openapi(postApiV1RoomsHideRoute, postApiV1RoomsHideRouteHandler)
  .openapi(postApiV1FindOrCreateInviteRoute, postApiV1FindOrCreateInviteRouteHandler)
  .openapi(getApiV1RoomsRolesRoute, getApiV1RoomsRolesRouteHandler)
  .openapi(getApiV1RoomsIsMemberRoute, getApiV1RoomsIsMemberRouteHandler)
  .openapi(
    getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute,
    getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRouteHandler,
  )
  .openapi(postApiV1RoomsMediaRidRoute, postApiV1RoomsMediaRidRouteHandler)
  .openapi(
    postApiV1RoomsMediaConfirmRidFileIdRoute,
    postApiV1RoomsMediaConfirmRidFileIdRouteHandler,
  )
  .openapi(postApiV1UploadsDeleteRoute, postApiV1UploadsDeleteRouteHandler)
  .openapi(getApiV1ListInvitesRoute, getApiV1ListInvitesRouteHandler)
  .openapi(deleteApiV1RemoveInviteIdRoute, deleteApiV1RemoveInviteIdRouteHandler)
  .openapi(postApiV1UseInviteTokenRoute, postApiV1UseInviteTokenRouteHandler)
  .openapi(postApiV1AbacRoomsRidAttributesRoute, postApiV1AbacRoomsRidAttributesRouteHandler)
  .openapi(deleteApiV1AbacRoomsRidAttributesRoute, deleteApiV1AbacRoomsRidAttributesRouteHandler)
  .openapi(postApiV1AbacRoomsRidAttributesKeyRoute, postApiV1AbacRoomsRidAttributesKeyRouteHandler)
  .openapi(putApiV1AbacRoomsRidAttributesKeyRoute, putApiV1AbacRoomsRidAttributesKeyRouteHandler)
  .openapi(
    deleteApiV1AbacRoomsRidAttributesKeyRoute,
    deleteApiV1AbacRoomsRidAttributesKeyRouteHandler,
  )
  .openapi(getApiV1AbacAttributesRoute, getApiV1AbacAttributesRouteHandler)
  .openapi(postApiV1AbacAttributesRoute, postApiV1AbacAttributesRouteHandler)
  .openapi(postApiV1AbacUsersSyncRoute, postApiV1AbacUsersSyncRouteHandler)
  .openapi(putApiV1AbacAttributesIdRoute, putApiV1AbacAttributesIdRouteHandler)
  .openapi(getApiV1AbacAttributesIdRoute, getApiV1AbacAttributesIdRouteHandler)
  .openapi(deleteApiV1AbacAttributesIdRoute, deleteApiV1AbacAttributesIdRouteHandler)
  .openapi(getApiV1AbacAttributesKeyIsInUseRoute, getApiV1AbacAttributesKeyIsInUseRouteHandler)
  .openapi(getApiV1AbacAttributesListKeysRoute, getApiV1AbacAttributesListKeysRouteHandler)
  .openapi(
    getApiV1AbacAttributesListAssignableRoute,
    getApiV1AbacAttributesListAssignableRouteHandler,
  )
  .openapi(getApiV1AbacRoomsRoute, getApiV1AbacRoomsRouteHandler)
  .openapi(
    postApiV1AbacRoomsEvaluateMembershipRoute,
    postApiV1AbacRoomsEvaluateMembershipRouteHandler,
  )
  .openapi(getApiV1AbacAuditRoute, getApiV1AbacAuditRouteHandler)
  .openapi(getApiV1AbacPdpHealthRoute, getApiV1AbacPdpHealthRouteHandler)
  .openapi(getApiV1SubscriptionsGetRoute, getApiV1SubscriptionsGetRouteHandler)
  .openapi(getApiV1SubscriptionsGetOneRoute, getApiV1SubscriptionsGetOneRouteHandler)
  .openapi(postApiV1SubscriptionsReadRoute, postApiV1SubscriptionsReadRouteHandler)
  .openapi(postApiV1SubscriptionsUnreadRoute, postApiV1SubscriptionsUnreadRouteHandler)

export default app
