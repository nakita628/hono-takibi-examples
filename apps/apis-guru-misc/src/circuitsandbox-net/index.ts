import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsCommunityConvIdParticipantsRoute,
  deleteConversationsConvIdArchiveRoute,
  deleteConversationsConvIdFavoriteRoute,
  deleteConversationsConvIdLabelLabelIdRoute,
  deleteConversationsConvIdMessagesItemIdFlagRoute,
  deleteConversationsConvIdMessagesItemIdLikeRoute,
  deleteConversationsConvIdMessagesItemIdRoute,
  deleteConversationsConvIdModeratorsRoute,
  deleteConversationsConvIdPinsItemIdRoute,
  deleteConversationsGroupConvIdParticipantsRoute,
  deleteSpacesIdLabelsUnassignRoute,
  deleteSpacesIdRoute,
  deleteSpacesItemItemIdRoute,
  deleteUsersLabelsLabelIdRoute,
  deleteWebhooksIdRoute,
  deleteWebhooksIncomingWebhookIdRoute,
  deleteWebhooksRoute,
  getConversationsByIdsRoute,
  getConversationsCommunityRoute,
  getConversationsConversationdetailsRoute,
  getConversationsConvIdConversationdetailsRoute,
  getConversationsConvIdItemsRoute,
  getConversationsConvIdMessagesFlagRoute,
  getConversationsConvIdParticipantsRoute,
  getConversationsConvIdPinsRoute,
  getConversationsConvIdRoute,
  getConversationsDirectRoute,
  getConversationsFavoriteRoute,
  getConversationsLabelLabelIdRoute,
  getConversationsMessagesFlagRoute,
  getConversationsMessagesItemIdRoute,
  getConversationsResolveinvitetokenRoute,
  getConversationsRoute,
  getConversationsSearchRoute,
  getRtcSessionsRoute,
  getSpacesDirectoryRoute,
  getSpacesExistsNameRoute,
  getSpacesFlaggedRoute,
  getSpacesIdParticipantsPendingRoute,
  getSpacesIdParticipantsRoute,
  getSpacesIdPinnedTopicsRoute,
  getSpacesIdSearchParticipantsToAddRoute,
  getSpacesIdSearchSpaceParticipantsRoute,
  getSpacesIdsRoute,
  getSpacesLikesItemIdRoute,
  getSpacesRoute,
  getSpacesSearchRecentRoute,
  getSpacesSearchStartBasicRoute,
  getSpacesSearchStartDetailedRoute,
  getSpacesSpaceIdParticipantImportIndexRoute,
  getSpacesSpaceIdTopicsRoute,
  getSpacesSpaceIdTopicTopicIdReplyRoute,
  getSpacesSpaceIdTopicTopicIdRoute,
  getTelephonyDeviceInfosRoute,
  getTelephonyTelephonyConversationIdJournalRoute,
  getTelephonyTelephonyConversationIdRoute,
  getUsersEmailAddressGetUserByEmailRoute,
  getUsersIdPresenceRoute,
  getUsersIdRoute,
  getUsersLabelsRoute,
  getUsersListRoute,
  getUsersPresenceRoute,
  getUsersProfileRoute,
  getUsersRoute,
  getUsersSupportinfoRoute,
  getWebhooksIdRoute,
  getWebhooksIncomingUserUserIdRoute,
  getWebhooksRoute,
  postConversationsCommunityConvIdJoinRoute,
  postConversationsCommunityConvIdParticipantsRoute,
  postConversationsCommunityRoute,
  postConversationsConvIdArchiveRoute,
  postConversationsConvIdFavoriteRoute,
  postConversationsConvIdLabelRoute,
  postConversationsConvIdMessagesItemIdFlagRoute,
  postConversationsConvIdMessagesItemIdLikeRoute,
  postConversationsConvIdMessagesItemIdRoute,
  postConversationsConvIdMessagesRoute,
  postConversationsConvIdModeratorsRoute,
  postConversationsConvIdPinsItemIdRoute,
  postConversationsDirectRoute,
  postConversationsGroupConvIdParticipantsRoute,
  postConversationsGroupRoute,
  postConversationsModerateConvIdRoute,
  postConversationsUnmoderateConvIdRoute,
  postSpacesCreateRoute,
  postSpacesIdJoinRoute,
  postSpacesIdLabelsAssignRoute,
  postSpacesIdLeaveRoute,
  postSpacesIdParticipantRemoveRoute,
  postSpacesIdParticipantRoute,
  postSpacesSpaceIdParticipantParticipantIdDenyRoute,
  postSpacesSpaceIdParticipantParticipantIdGrantRoute,
  postSpacesSpaceIdParticipantRequestRoute,
  postSpacesSpaceIdTopicRoute,
  postSpacesSpaceIdTopicTopicIdReplyRoute,
  postUsersLabelsRoute,
  postWebhooksIncomingCreateConversationIdRoute,
  postWebhooksIncomingWebhookIdRoute,
  postWebhooksPresenceRoute,
  postWebhooksRoute,
  putConversationsCommunityConvIdRoute,
  putConversationsConvIdMessagesItemIdRoute,
  putConversationsGroupConvIdRoute,
  putSpacesFlagItemIdRoute,
  putSpacesIdRoute,
  putSpacesIdUpdateTimestampRoute,
  putSpacesLikeItemIdRoute,
  putSpacesSearchAddRecentRoute,
  putSpacesSearchCancelSearchIdRoute,
  putSpacesSpaceIdParticipantRoute,
  putSpacesSpaceIdTopicTopicIdReplyReplyIdRoute,
  putSpacesSpaceIdTopicTopicIdRoute,
  putSpacesSpaceIdWelcomeboxContentRoute,
  putSpacesTopicIdPinRoute,
  putSpacesTopicIdUnpinRoute,
  putSpacesTopicTopicIdUpdateTagsRoute,
  putSpacesUnflagItemIdRoute,
  putSpacesUnlikeItemIdRoute,
  putUsersPresenceRoute,
  putUsersProfileRoute,
  putWebhooksIdRoute,
  putWebhooksPresenceIdRoute,
} from './routes'
import {
  deleteConversationsCommunityConvIdParticipantsRouteHandler,
  deleteConversationsConvIdArchiveRouteHandler,
  deleteConversationsConvIdFavoriteRouteHandler,
  deleteConversationsConvIdLabelLabelIdRouteHandler,
  deleteConversationsConvIdMessagesItemIdFlagRouteHandler,
  deleteConversationsConvIdMessagesItemIdLikeRouteHandler,
  deleteConversationsConvIdMessagesItemIdRouteHandler,
  deleteConversationsConvIdModeratorsRouteHandler,
  deleteConversationsConvIdPinsItemIdRouteHandler,
  deleteConversationsGroupConvIdParticipantsRouteHandler,
  deleteSpacesIdLabelsUnassignRouteHandler,
  deleteSpacesIdRouteHandler,
  deleteSpacesItemItemIdRouteHandler,
  deleteUsersLabelsLabelIdRouteHandler,
  deleteWebhooksIdRouteHandler,
  deleteWebhooksIncomingWebhookIdRouteHandler,
  deleteWebhooksRouteHandler,
  getConversationsByIdsRouteHandler,
  getConversationsCommunityRouteHandler,
  getConversationsConversationdetailsRouteHandler,
  getConversationsConvIdConversationdetailsRouteHandler,
  getConversationsConvIdItemsRouteHandler,
  getConversationsConvIdMessagesFlagRouteHandler,
  getConversationsConvIdParticipantsRouteHandler,
  getConversationsConvIdPinsRouteHandler,
  getConversationsConvIdRouteHandler,
  getConversationsDirectRouteHandler,
  getConversationsFavoriteRouteHandler,
  getConversationsLabelLabelIdRouteHandler,
  getConversationsMessagesFlagRouteHandler,
  getConversationsMessagesItemIdRouteHandler,
  getConversationsResolveinvitetokenRouteHandler,
  getConversationsRouteHandler,
  getConversationsSearchRouteHandler,
  getRtcSessionsRouteHandler,
  getSpacesDirectoryRouteHandler,
  getSpacesExistsNameRouteHandler,
  getSpacesFlaggedRouteHandler,
  getSpacesIdParticipantsPendingRouteHandler,
  getSpacesIdParticipantsRouteHandler,
  getSpacesIdPinnedTopicsRouteHandler,
  getSpacesIdSearchParticipantsToAddRouteHandler,
  getSpacesIdSearchSpaceParticipantsRouteHandler,
  getSpacesIdsRouteHandler,
  getSpacesLikesItemIdRouteHandler,
  getSpacesRouteHandler,
  getSpacesSearchRecentRouteHandler,
  getSpacesSearchStartBasicRouteHandler,
  getSpacesSearchStartDetailedRouteHandler,
  getSpacesSpaceIdParticipantImportIndexRouteHandler,
  getSpacesSpaceIdTopicsRouteHandler,
  getSpacesSpaceIdTopicTopicIdReplyRouteHandler,
  getSpacesSpaceIdTopicTopicIdRouteHandler,
  getTelephonyDeviceInfosRouteHandler,
  getTelephonyTelephonyConversationIdJournalRouteHandler,
  getTelephonyTelephonyConversationIdRouteHandler,
  getUsersEmailAddressGetUserByEmailRouteHandler,
  getUsersIdPresenceRouteHandler,
  getUsersIdRouteHandler,
  getUsersLabelsRouteHandler,
  getUsersListRouteHandler,
  getUsersPresenceRouteHandler,
  getUsersProfileRouteHandler,
  getUsersRouteHandler,
  getUsersSupportinfoRouteHandler,
  getWebhooksIdRouteHandler,
  getWebhooksIncomingUserUserIdRouteHandler,
  getWebhooksRouteHandler,
  postConversationsCommunityConvIdJoinRouteHandler,
  postConversationsCommunityConvIdParticipantsRouteHandler,
  postConversationsCommunityRouteHandler,
  postConversationsConvIdArchiveRouteHandler,
  postConversationsConvIdFavoriteRouteHandler,
  postConversationsConvIdLabelRouteHandler,
  postConversationsConvIdMessagesItemIdFlagRouteHandler,
  postConversationsConvIdMessagesItemIdLikeRouteHandler,
  postConversationsConvIdMessagesItemIdRouteHandler,
  postConversationsConvIdMessagesRouteHandler,
  postConversationsConvIdModeratorsRouteHandler,
  postConversationsConvIdPinsItemIdRouteHandler,
  postConversationsDirectRouteHandler,
  postConversationsGroupConvIdParticipantsRouteHandler,
  postConversationsGroupRouteHandler,
  postConversationsModerateConvIdRouteHandler,
  postConversationsUnmoderateConvIdRouteHandler,
  postSpacesCreateRouteHandler,
  postSpacesIdJoinRouteHandler,
  postSpacesIdLabelsAssignRouteHandler,
  postSpacesIdLeaveRouteHandler,
  postSpacesIdParticipantRemoveRouteHandler,
  postSpacesIdParticipantRouteHandler,
  postSpacesSpaceIdParticipantParticipantIdDenyRouteHandler,
  postSpacesSpaceIdParticipantParticipantIdGrantRouteHandler,
  postSpacesSpaceIdParticipantRequestRouteHandler,
  postSpacesSpaceIdTopicRouteHandler,
  postSpacesSpaceIdTopicTopicIdReplyRouteHandler,
  postUsersLabelsRouteHandler,
  postWebhooksIncomingCreateConversationIdRouteHandler,
  postWebhooksIncomingWebhookIdRouteHandler,
  postWebhooksPresenceRouteHandler,
  postWebhooksRouteHandler,
  putConversationsCommunityConvIdRouteHandler,
  putConversationsConvIdMessagesItemIdRouteHandler,
  putConversationsGroupConvIdRouteHandler,
  putSpacesFlagItemIdRouteHandler,
  putSpacesIdRouteHandler,
  putSpacesIdUpdateTimestampRouteHandler,
  putSpacesLikeItemIdRouteHandler,
  putSpacesSearchAddRecentRouteHandler,
  putSpacesSearchCancelSearchIdRouteHandler,
  putSpacesSpaceIdParticipantRouteHandler,
  putSpacesSpaceIdTopicTopicIdReplyReplyIdRouteHandler,
  putSpacesSpaceIdTopicTopicIdRouteHandler,
  putSpacesSpaceIdWelcomeboxContentRouteHandler,
  putSpacesTopicIdPinRouteHandler,
  putSpacesTopicIdUnpinRouteHandler,
  putSpacesTopicTopicIdUpdateTagsRouteHandler,
  putSpacesUnflagItemIdRouteHandler,
  putSpacesUnlikeItemIdRouteHandler,
  putUsersPresenceRouteHandler,
  putUsersProfileRouteHandler,
  putWebhooksIdRouteHandler,
  putWebhooksPresenceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConversationsRoute, getConversationsRouteHandler)
  .openapi(getConversationsByIdsRoute, getConversationsByIdsRouteHandler)
  .openapi(getConversationsCommunityRoute, getConversationsCommunityRouteHandler)
  .openapi(postConversationsCommunityRoute, postConversationsCommunityRouteHandler)
  .openapi(putConversationsCommunityConvIdRoute, putConversationsCommunityConvIdRouteHandler)
  .openapi(
    postConversationsCommunityConvIdJoinRoute,
    postConversationsCommunityConvIdJoinRouteHandler,
  )
  .openapi(
    deleteConversationsCommunityConvIdParticipantsRoute,
    deleteConversationsCommunityConvIdParticipantsRouteHandler,
  )
  .openapi(
    postConversationsCommunityConvIdParticipantsRoute,
    postConversationsCommunityConvIdParticipantsRouteHandler,
  )
  .openapi(
    getConversationsConversationdetailsRoute,
    getConversationsConversationdetailsRouteHandler,
  )
  .openapi(getConversationsDirectRoute, getConversationsDirectRouteHandler)
  .openapi(postConversationsDirectRoute, postConversationsDirectRouteHandler)
  .openapi(getConversationsFavoriteRoute, getConversationsFavoriteRouteHandler)
  .openapi(postConversationsGroupRoute, postConversationsGroupRouteHandler)
  .openapi(putConversationsGroupConvIdRoute, putConversationsGroupConvIdRouteHandler)
  .openapi(
    deleteConversationsGroupConvIdParticipantsRoute,
    deleteConversationsGroupConvIdParticipantsRouteHandler,
  )
  .openapi(
    postConversationsGroupConvIdParticipantsRoute,
    postConversationsGroupConvIdParticipantsRouteHandler,
  )
  .openapi(getConversationsLabelLabelIdRoute, getConversationsLabelLabelIdRouteHandler)
  .openapi(getConversationsMessagesFlagRoute, getConversationsMessagesFlagRouteHandler)
  .openapi(getConversationsMessagesItemIdRoute, getConversationsMessagesItemIdRouteHandler)
  .openapi(postConversationsModerateConvIdRoute, postConversationsModerateConvIdRouteHandler)
  .openapi(getConversationsResolveinvitetokenRoute, getConversationsResolveinvitetokenRouteHandler)
  .openapi(getConversationsSearchRoute, getConversationsSearchRouteHandler)
  .openapi(postConversationsUnmoderateConvIdRoute, postConversationsUnmoderateConvIdRouteHandler)
  .openapi(getConversationsConvIdRoute, getConversationsConvIdRouteHandler)
  .openapi(deleteConversationsConvIdArchiveRoute, deleteConversationsConvIdArchiveRouteHandler)
  .openapi(postConversationsConvIdArchiveRoute, postConversationsConvIdArchiveRouteHandler)
  .openapi(
    getConversationsConvIdConversationdetailsRoute,
    getConversationsConvIdConversationdetailsRouteHandler,
  )
  .openapi(deleteConversationsConvIdFavoriteRoute, deleteConversationsConvIdFavoriteRouteHandler)
  .openapi(postConversationsConvIdFavoriteRoute, postConversationsConvIdFavoriteRouteHandler)
  .openapi(getConversationsConvIdItemsRoute, getConversationsConvIdItemsRouteHandler)
  .openapi(postConversationsConvIdLabelRoute, postConversationsConvIdLabelRouteHandler)
  .openapi(
    deleteConversationsConvIdLabelLabelIdRoute,
    deleteConversationsConvIdLabelLabelIdRouteHandler,
  )
  .openapi(postConversationsConvIdMessagesRoute, postConversationsConvIdMessagesRouteHandler)
  .openapi(getConversationsConvIdMessagesFlagRoute, getConversationsConvIdMessagesFlagRouteHandler)
  .openapi(
    deleteConversationsConvIdMessagesItemIdRoute,
    deleteConversationsConvIdMessagesItemIdRouteHandler,
  )
  .openapi(
    postConversationsConvIdMessagesItemIdRoute,
    postConversationsConvIdMessagesItemIdRouteHandler,
  )
  .openapi(
    putConversationsConvIdMessagesItemIdRoute,
    putConversationsConvIdMessagesItemIdRouteHandler,
  )
  .openapi(
    deleteConversationsConvIdMessagesItemIdFlagRoute,
    deleteConversationsConvIdMessagesItemIdFlagRouteHandler,
  )
  .openapi(
    postConversationsConvIdMessagesItemIdFlagRoute,
    postConversationsConvIdMessagesItemIdFlagRouteHandler,
  )
  .openapi(
    deleteConversationsConvIdMessagesItemIdLikeRoute,
    deleteConversationsConvIdMessagesItemIdLikeRouteHandler,
  )
  .openapi(
    postConversationsConvIdMessagesItemIdLikeRoute,
    postConversationsConvIdMessagesItemIdLikeRouteHandler,
  )
  .openapi(
    deleteConversationsConvIdModeratorsRoute,
    deleteConversationsConvIdModeratorsRouteHandler,
  )
  .openapi(postConversationsConvIdModeratorsRoute, postConversationsConvIdModeratorsRouteHandler)
  .openapi(getConversationsConvIdParticipantsRoute, getConversationsConvIdParticipantsRouteHandler)
  .openapi(getConversationsConvIdPinsRoute, getConversationsConvIdPinsRouteHandler)
  .openapi(
    deleteConversationsConvIdPinsItemIdRoute,
    deleteConversationsConvIdPinsItemIdRouteHandler,
  )
  .openapi(postConversationsConvIdPinsItemIdRoute, postConversationsConvIdPinsItemIdRouteHandler)
  .openapi(getRtcSessionsRoute, getRtcSessionsRouteHandler)
  .openapi(getSpacesRoute, getSpacesRouteHandler)
  .openapi(postSpacesCreateRoute, postSpacesCreateRouteHandler)
  .openapi(getSpacesDirectoryRoute, getSpacesDirectoryRouteHandler)
  .openapi(getSpacesExistsNameRoute, getSpacesExistsNameRouteHandler)
  .openapi(putSpacesFlagItemIdRoute, putSpacesFlagItemIdRouteHandler)
  .openapi(getSpacesFlaggedRoute, getSpacesFlaggedRouteHandler)
  .openapi(getSpacesIdsRoute, getSpacesIdsRouteHandler)
  .openapi(deleteSpacesItemItemIdRoute, deleteSpacesItemItemIdRouteHandler)
  .openapi(putSpacesLikeItemIdRoute, putSpacesLikeItemIdRouteHandler)
  .openapi(getSpacesLikesItemIdRoute, getSpacesLikesItemIdRouteHandler)
  .openapi(putSpacesSearchAddRecentRoute, putSpacesSearchAddRecentRouteHandler)
  .openapi(putSpacesSearchCancelSearchIdRoute, putSpacesSearchCancelSearchIdRouteHandler)
  .openapi(getSpacesSearchRecentRoute, getSpacesSearchRecentRouteHandler)
  .openapi(getSpacesSearchStartBasicRoute, getSpacesSearchStartBasicRouteHandler)
  .openapi(getSpacesSearchStartDetailedRoute, getSpacesSearchStartDetailedRouteHandler)
  .openapi(putSpacesTopicTopicIdUpdateTagsRoute, putSpacesTopicTopicIdUpdateTagsRouteHandler)
  .openapi(putSpacesUnflagItemIdRoute, putSpacesUnflagItemIdRouteHandler)
  .openapi(putSpacesUnlikeItemIdRoute, putSpacesUnlikeItemIdRouteHandler)
  .openapi(deleteSpacesIdRoute, deleteSpacesIdRouteHandler)
  .openapi(putSpacesIdRoute, putSpacesIdRouteHandler)
  .openapi(postSpacesIdJoinRoute, postSpacesIdJoinRouteHandler)
  .openapi(postSpacesIdLabelsAssignRoute, postSpacesIdLabelsAssignRouteHandler)
  .openapi(deleteSpacesIdLabelsUnassignRoute, deleteSpacesIdLabelsUnassignRouteHandler)
  .openapi(postSpacesIdLeaveRoute, postSpacesIdLeaveRouteHandler)
  .openapi(postSpacesIdParticipantRoute, postSpacesIdParticipantRouteHandler)
  .openapi(postSpacesIdParticipantRemoveRoute, postSpacesIdParticipantRemoveRouteHandler)
  .openapi(getSpacesIdParticipantsRoute, getSpacesIdParticipantsRouteHandler)
  .openapi(getSpacesIdParticipantsPendingRoute, getSpacesIdParticipantsPendingRouteHandler)
  .openapi(getSpacesIdPinnedTopicsRoute, getSpacesIdPinnedTopicsRouteHandler)
  .openapi(getSpacesIdSearchParticipantsToAddRoute, getSpacesIdSearchParticipantsToAddRouteHandler)
  .openapi(getSpacesIdSearchSpaceParticipantsRoute, getSpacesIdSearchSpaceParticipantsRouteHandler)
  .openapi(putSpacesIdUpdateTimestampRoute, putSpacesIdUpdateTimestampRouteHandler)
  .openapi(putSpacesSpaceIdParticipantRoute, putSpacesSpaceIdParticipantRouteHandler)
  .openapi(
    getSpacesSpaceIdParticipantImportIndexRoute,
    getSpacesSpaceIdParticipantImportIndexRouteHandler,
  )
  .openapi(
    postSpacesSpaceIdParticipantRequestRoute,
    postSpacesSpaceIdParticipantRequestRouteHandler,
  )
  .openapi(
    postSpacesSpaceIdParticipantParticipantIdDenyRoute,
    postSpacesSpaceIdParticipantParticipantIdDenyRouteHandler,
  )
  .openapi(
    postSpacesSpaceIdParticipantParticipantIdGrantRoute,
    postSpacesSpaceIdParticipantParticipantIdGrantRouteHandler,
  )
  .openapi(postSpacesSpaceIdTopicRoute, postSpacesSpaceIdTopicRouteHandler)
  .openapi(getSpacesSpaceIdTopicTopicIdRoute, getSpacesSpaceIdTopicTopicIdRouteHandler)
  .openapi(putSpacesSpaceIdTopicTopicIdRoute, putSpacesSpaceIdTopicTopicIdRouteHandler)
  .openapi(getSpacesSpaceIdTopicTopicIdReplyRoute, getSpacesSpaceIdTopicTopicIdReplyRouteHandler)
  .openapi(postSpacesSpaceIdTopicTopicIdReplyRoute, postSpacesSpaceIdTopicTopicIdReplyRouteHandler)
  .openapi(
    putSpacesSpaceIdTopicTopicIdReplyReplyIdRoute,
    putSpacesSpaceIdTopicTopicIdReplyReplyIdRouteHandler,
  )
  .openapi(getSpacesSpaceIdTopicsRoute, getSpacesSpaceIdTopicsRouteHandler)
  .openapi(putSpacesSpaceIdWelcomeboxContentRoute, putSpacesSpaceIdWelcomeboxContentRouteHandler)
  .openapi(putSpacesTopicIdPinRoute, putSpacesTopicIdPinRouteHandler)
  .openapi(putSpacesTopicIdUnpinRoute, putSpacesTopicIdUnpinRouteHandler)
  .openapi(getTelephonyDeviceInfosRoute, getTelephonyDeviceInfosRouteHandler)
  .openapi(
    getTelephonyTelephonyConversationIdRoute,
    getTelephonyTelephonyConversationIdRouteHandler,
  )
  .openapi(
    getTelephonyTelephonyConversationIdJournalRoute,
    getTelephonyTelephonyConversationIdJournalRouteHandler,
  )
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersLabelsRoute, getUsersLabelsRouteHandler)
  .openapi(postUsersLabelsRoute, postUsersLabelsRouteHandler)
  .openapi(deleteUsersLabelsLabelIdRoute, deleteUsersLabelsLabelIdRouteHandler)
  .openapi(getUsersListRoute, getUsersListRouteHandler)
  .openapi(getUsersPresenceRoute, getUsersPresenceRouteHandler)
  .openapi(putUsersPresenceRoute, putUsersPresenceRouteHandler)
  .openapi(getUsersProfileRoute, getUsersProfileRouteHandler)
  .openapi(putUsersProfileRoute, putUsersProfileRouteHandler)
  .openapi(getUsersSupportinfoRoute, getUsersSupportinfoRouteHandler)
  .openapi(getUsersEmailAddressGetUserByEmailRoute, getUsersEmailAddressGetUserByEmailRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(getUsersIdPresenceRoute, getUsersIdPresenceRouteHandler)
  .openapi(deleteWebhooksRoute, deleteWebhooksRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(
    postWebhooksIncomingCreateConversationIdRoute,
    postWebhooksIncomingCreateConversationIdRouteHandler,
  )
  .openapi(getWebhooksIncomingUserUserIdRoute, getWebhooksIncomingUserUserIdRouteHandler)
  .openapi(deleteWebhooksIncomingWebhookIdRoute, deleteWebhooksIncomingWebhookIdRouteHandler)
  .openapi(postWebhooksIncomingWebhookIdRoute, postWebhooksIncomingWebhookIdRouteHandler)
  .openapi(postWebhooksPresenceRoute, postWebhooksPresenceRouteHandler)
  .openapi(putWebhooksPresenceIdRoute, putWebhooksPresenceIdRouteHandler)
  .openapi(deleteWebhooksIdRoute, deleteWebhooksIdRouteHandler)
  .openapi(getWebhooksIdRoute, getWebhooksIdRouteHandler)
  .openapi(putWebhooksIdRoute, putWebhooksIdRouteHandler)

export default app
