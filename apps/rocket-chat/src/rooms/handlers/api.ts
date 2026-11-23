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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV1ChannelsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsAnonymousreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsListJoinedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsOnlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRemoveLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRemoveModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRemoveOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetJoinCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetPurposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsGetAllUserMentionsByChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsGetIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsConvertToTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsSaveNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsSaveDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsCleanHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsGetDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteAvailableForTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteChannelAndPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAdminRoomsGetRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsSaveRoomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsChangeArchivationStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsMuteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsUnmuteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsCreateDiscussionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuditRoomsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsMembersOrderedByRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsAddMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsUpdateMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsRemoveMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsConvertToChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsAddRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsRemoveRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsUpdateRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListRoomsOfUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsOnlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsGetIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRemoveLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRemoveModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRemoveOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetPurposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetEncryptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsConvertToTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FindOrCreateInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsIsMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsMediaRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RoomsMediaConfirmRidFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UploadsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ListInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RemoveInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UseInviteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacRoomsRidAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbacRoomsRidAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacRoomsRidAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbacRoomsRidAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbacRoomsRidAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacUsersSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbacAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbacAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesKeyIsInUseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesListKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesListAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacRoomsEvaluateMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacPdpHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsGetOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
