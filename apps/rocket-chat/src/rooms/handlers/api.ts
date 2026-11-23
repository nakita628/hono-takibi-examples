import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const postApiV1ChannelsCreateRouteHandler: RouteHandler<
  typeof postApiV1ChannelsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsAddAllRouteHandler: RouteHandler<
  typeof postApiV1ChannelsAddAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsAddLeaderRouteHandler: RouteHandler<
  typeof postApiV1ChannelsAddLeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsAddModeratorRouteHandler: RouteHandler<
  typeof postApiV1ChannelsAddModeratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsAddOwnerRouteHandler: RouteHandler<
  typeof postApiV1ChannelsAddOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsAnonymousreadRouteHandler: RouteHandler<
  typeof getApiV1ChannelsAnonymousreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsArchiveRouteHandler: RouteHandler<
  typeof postApiV1ChannelsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsCloseRouteHandler: RouteHandler<
  typeof postApiV1ChannelsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsCountersRouteHandler: RouteHandler<
  typeof getApiV1ChannelsCountersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsDeleteRouteHandler: RouteHandler<
  typeof postApiV1ChannelsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsFilesRouteHandler: RouteHandler<
  typeof getApiV1ChannelsFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsHistoryRouteHandler: RouteHandler<
  typeof getApiV1ChannelsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsInfoRouteHandler: RouteHandler<
  typeof getApiV1ChannelsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsInviteRouteHandler: RouteHandler<
  typeof postApiV1ChannelsInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsJoinRouteHandler: RouteHandler<
  typeof postApiV1ChannelsJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsKickRouteHandler: RouteHandler<
  typeof postApiV1ChannelsKickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsLeaveRouteHandler: RouteHandler<
  typeof postApiV1ChannelsLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsListJoinedRouteHandler: RouteHandler<
  typeof getApiV1ChannelsListJoinedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsListRouteHandler: RouteHandler<
  typeof getApiV1ChannelsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsMembersRouteHandler: RouteHandler<
  typeof getApiV1ChannelsMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsMessagesRouteHandler: RouteHandler<
  typeof getApiV1ChannelsMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsModeratorsRouteHandler: RouteHandler<
  typeof getApiV1ChannelsModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsOnlineRouteHandler: RouteHandler<
  typeof getApiV1ChannelsOnlineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsOpenRouteHandler: RouteHandler<
  typeof postApiV1ChannelsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsRemoveLeaderRouteHandler: RouteHandler<
  typeof postApiV1ChannelsRemoveLeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsRemoveModeratorRouteHandler: RouteHandler<
  typeof postApiV1ChannelsRemoveModeratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsRemoveOwnerRouteHandler: RouteHandler<
  typeof postApiV1ChannelsRemoveOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsRenameRouteHandler: RouteHandler<
  typeof postApiV1ChannelsRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsRolesRouteHandler: RouteHandler<
  typeof getApiV1ChannelsRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetAnnouncementRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetAnnouncementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetCustomFieldsRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetDefaultRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetDescriptionRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetJoinCodeRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetJoinCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetPurposeRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetPurposeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetReadOnlyRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetReadOnlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetTopicRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsSetTypeRouteHandler: RouteHandler<
  typeof postApiV1ChannelsSetTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsUnarchiveRouteHandler: RouteHandler<
  typeof postApiV1ChannelsUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsGetAllUserMentionsByChannelRouteHandler: RouteHandler<
  typeof getApiV1ChannelsGetAllUserMentionsByChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChannelsGetIntegrationsRouteHandler: RouteHandler<
  typeof getApiV1ChannelsGetIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChannelsConvertToTeamRouteHandler: RouteHandler<
  typeof postApiV1ChannelsConvertToTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsSaveNotificationRouteHandler: RouteHandler<
  typeof postApiV1RoomsSaveNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsSaveDraftRouteHandler: RouteHandler<
  typeof postApiV1RoomsSaveDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsAdminRoomsRouteHandler: RouteHandler<
  typeof getApiV1RoomsAdminRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsCleanHistoryRouteHandler: RouteHandler<
  typeof postApiV1RoomsCleanHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsHistoryRouteHandler: RouteHandler<
  typeof getApiV1RoomsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsInfoRouteHandler: RouteHandler<typeof getApiV1RoomsInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsGetDiscussionsRouteHandler: RouteHandler<
  typeof getApiV1RoomsGetDiscussionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsGetRouteHandler: RouteHandler<typeof getApiV1RoomsGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsJoinRouteHandler: RouteHandler<typeof postApiV1RoomsJoinRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsLeaveRouteHandler: RouteHandler<
  typeof postApiV1RoomsLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsDeleteRouteHandler: RouteHandler<
  typeof postApiV1RoomsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsFavoriteRouteHandler: RouteHandler<
  typeof postApiV1RoomsFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsAutocompleteAvailableForTeamsRouteHandler: RouteHandler<
  typeof getApiV1RoomsAutocompleteAvailableForTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsAutocompleteChannelAndPrivateRouteHandler: RouteHandler<
  typeof getApiV1RoomsAutocompleteChannelAndPrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsAutocompleteAdminRoomsRouteHandler: RouteHandler<
  typeof getApiV1RoomsAutocompleteAdminRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsAdminRoomsGetRoomRouteHandler: RouteHandler<
  typeof getApiV1RoomsAdminRoomsGetRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsSaveRoomSettingsRouteHandler: RouteHandler<
  typeof postApiV1RoomsSaveRoomSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsNameExistsRouteHandler: RouteHandler<
  typeof getApiV1RoomsNameExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsChangeArchivationStateRouteHandler: RouteHandler<
  typeof postApiV1RoomsChangeArchivationStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsExportRouteHandler: RouteHandler<
  typeof postApiV1RoomsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsMuteUserRouteHandler: RouteHandler<
  typeof postApiV1RoomsMuteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsUnmuteUserRouteHandler: RouteHandler<
  typeof postApiV1RoomsUnmuteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsCreateDiscussionRouteHandler: RouteHandler<
  typeof postApiV1RoomsCreateDiscussionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsImagesRouteHandler: RouteHandler<
  typeof getApiV1RoomsImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AuditRoomsMembersRouteHandler: RouteHandler<
  typeof getApiV1AuditRoomsMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsMembersOrderedByRoleRouteHandler: RouteHandler<
  typeof getApiV1RoomsMembersOrderedByRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsCreateRouteHandler: RouteHandler<
  typeof postApiV1TeamsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsListAllRouteHandler: RouteHandler<
  typeof getApiV1TeamsListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsListRouteHandler: RouteHandler<typeof getApiV1TeamsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsInfoRouteHandler: RouteHandler<typeof getApiV1TeamsInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsUpdateRouteHandler: RouteHandler<
  typeof postApiV1TeamsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsAddMembersRouteHandler: RouteHandler<
  typeof postApiV1TeamsAddMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsUpdateMemberRouteHandler: RouteHandler<
  typeof postApiV1TeamsUpdateMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsMembersRouteHandler: RouteHandler<
  typeof getApiV1TeamsMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsLeaveRouteHandler: RouteHandler<
  typeof postApiV1TeamsLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsRemoveMemberRouteHandler: RouteHandler<
  typeof postApiV1TeamsRemoveMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsDeleteRouteHandler: RouteHandler<
  typeof postApiV1TeamsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsAutocompleteRouteHandler: RouteHandler<
  typeof getApiV1TeamsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsConvertToChannelRouteHandler: RouteHandler<
  typeof postApiV1TeamsConvertToChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsAddRoomsRouteHandler: RouteHandler<
  typeof postApiV1TeamsAddRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsRemoveRoomRouteHandler: RouteHandler<
  typeof postApiV1TeamsRemoveRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TeamsUpdateRoomRouteHandler: RouteHandler<
  typeof postApiV1TeamsUpdateRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsListRoomsRouteHandler: RouteHandler<
  typeof getApiV1TeamsListRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsListRoomsOfUserRouteHandler: RouteHandler<
  typeof getApiV1TeamsListRoomsOfUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TeamsListChildrenRouteHandler: RouteHandler<
  typeof getApiV1TeamsListChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsOnlineRouteHandler: RouteHandler<
  typeof getApiV1GroupsOnlineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsGetIntegrationsRouteHandler: RouteHandler<
  typeof getApiV1GroupsGetIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsAddAllRouteHandler: RouteHandler<
  typeof postApiV1GroupsAddAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsAddLeaderRouteHandler: RouteHandler<
  typeof postApiV1GroupsAddLeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsAddModeratorRouteHandler: RouteHandler<
  typeof postApiV1GroupsAddModeratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsAddOwnerRouteHandler: RouteHandler<
  typeof postApiV1GroupsAddOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsArchiveRouteHandler: RouteHandler<
  typeof postApiV1GroupsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsCloseRouteHandler: RouteHandler<
  typeof postApiV1GroupsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsCountersRouteHandler: RouteHandler<
  typeof getApiV1GroupsCountersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsCreateRouteHandler: RouteHandler<
  typeof postApiV1GroupsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsDeleteRouteHandler: RouteHandler<
  typeof postApiV1GroupsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsHistoryRouteHandler: RouteHandler<
  typeof getApiV1GroupsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsInfoRouteHandler: RouteHandler<typeof getApiV1GroupsInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsInviteRouteHandler: RouteHandler<
  typeof postApiV1GroupsInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsKickRouteHandler: RouteHandler<
  typeof postApiV1GroupsKickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsLeaveRouteHandler: RouteHandler<
  typeof postApiV1GroupsLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsListAllRouteHandler: RouteHandler<
  typeof getApiV1GroupsListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsListRouteHandler: RouteHandler<typeof getApiV1GroupsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsMembersRouteHandler: RouteHandler<
  typeof getApiV1GroupsMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsMessagesRouteHandler: RouteHandler<
  typeof getApiV1GroupsMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsModeratorsRouteHandler: RouteHandler<
  typeof getApiV1GroupsModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsOpenRouteHandler: RouteHandler<
  typeof postApiV1GroupsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsRemoveLeaderRouteHandler: RouteHandler<
  typeof postApiV1GroupsRemoveLeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsRemoveModeratorRouteHandler: RouteHandler<
  typeof postApiV1GroupsRemoveModeratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsRemoveOwnerRouteHandler: RouteHandler<
  typeof postApiV1GroupsRemoveOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsRenameRouteHandler: RouteHandler<
  typeof postApiV1GroupsRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetAnnouncementRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetAnnouncementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetCustomFieldsRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetDescriptionRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetPurposeRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetPurposeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetReadOnlyRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetReadOnlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetTopicRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetTypeRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsUnarchiveRouteHandler: RouteHandler<
  typeof postApiV1GroupsUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsFilesRouteHandler: RouteHandler<
  typeof getApiV1GroupsFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsSetEncryptedRouteHandler: RouteHandler<
  typeof postApiV1GroupsSetEncryptedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsConvertToTeamRouteHandler: RouteHandler<
  typeof postApiV1GroupsConvertToTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsRolesRouteHandler: RouteHandler<
  typeof getApiV1GroupsRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DirectoryRouteHandler: RouteHandler<typeof getApiV1DirectoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsOpenRouteHandler: RouteHandler<typeof postApiV1RoomsOpenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsHideRouteHandler: RouteHandler<typeof postApiV1RoomsHideRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1FindOrCreateInviteRouteHandler: RouteHandler<
  typeof postApiV1FindOrCreateInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsRolesRouteHandler: RouteHandler<typeof getApiV1RoomsRolesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsIsMemberRouteHandler: RouteHandler<
  typeof getApiV1RoomsIsMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRouteHandler: RouteHandler<
  typeof getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsMediaRidRouteHandler: RouteHandler<
  typeof postApiV1RoomsMediaRidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RoomsMediaConfirmRidFileIdRouteHandler: RouteHandler<
  typeof postApiV1RoomsMediaConfirmRidFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UploadsDeleteRouteHandler: RouteHandler<
  typeof postApiV1UploadsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ListInvitesRouteHandler: RouteHandler<
  typeof getApiV1ListInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RemoveInviteIdRouteHandler: RouteHandler<
  typeof deleteApiV1RemoveInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UseInviteTokenRouteHandler: RouteHandler<
  typeof postApiV1UseInviteTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbacRoomsRidAttributesRouteHandler: RouteHandler<
  typeof postApiV1AbacRoomsRidAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AbacRoomsRidAttributesRouteHandler: RouteHandler<
  typeof deleteApiV1AbacRoomsRidAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbacRoomsRidAttributesKeyRouteHandler: RouteHandler<
  typeof postApiV1AbacRoomsRidAttributesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AbacRoomsRidAttributesKeyRouteHandler: RouteHandler<
  typeof putApiV1AbacRoomsRidAttributesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AbacRoomsRidAttributesKeyRouteHandler: RouteHandler<
  typeof deleteApiV1AbacRoomsRidAttributesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacAttributesRouteHandler: RouteHandler<
  typeof getApiV1AbacAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbacAttributesRouteHandler: RouteHandler<
  typeof postApiV1AbacAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbacUsersSyncRouteHandler: RouteHandler<
  typeof postApiV1AbacUsersSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AbacAttributesIdRouteHandler: RouteHandler<
  typeof putApiV1AbacAttributesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacAttributesIdRouteHandler: RouteHandler<
  typeof getApiV1AbacAttributesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AbacAttributesIdRouteHandler: RouteHandler<
  typeof deleteApiV1AbacAttributesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacAttributesKeyIsInUseRouteHandler: RouteHandler<
  typeof getApiV1AbacAttributesKeyIsInUseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacAttributesListKeysRouteHandler: RouteHandler<
  typeof getApiV1AbacAttributesListKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacAttributesListAssignableRouteHandler: RouteHandler<
  typeof getApiV1AbacAttributesListAssignableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacRoomsRouteHandler: RouteHandler<typeof getApiV1AbacRoomsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1AbacRoomsEvaluateMembershipRouteHandler: RouteHandler<
  typeof postApiV1AbacRoomsEvaluateMembershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacAuditRouteHandler: RouteHandler<typeof getApiV1AbacAuditRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1AbacPdpHealthRouteHandler: RouteHandler<
  typeof getApiV1AbacPdpHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsGetRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsGetOneRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsGetOneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsReadRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsUnreadRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
