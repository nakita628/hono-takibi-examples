import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute,
  deleteOcsV2PhpAppsSpreedTempUserAvatarRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBotAdminRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBotTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersRoute,
  getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRoute,
  getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionListedRoomRoute,
  getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRoute,
  getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRoute,
  getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionTagsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRoute,
  postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRoute,
  postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRoute,
  postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRoute,
  postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPollTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRoute,
  postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionTagsRoute,
  postOcsV2PhpAppsSpreedTempUserAvatarRoute,
  putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute,
  putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute,
  putOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute,
  putOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute,
  putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute,
  putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRoute,
  putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRoute,
  putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRoute,
  putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRoute,
  putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute,
} from '../routes'

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBanTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionBanTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionBotTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionBotTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionCallTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionCallTokenRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionTagsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionTagsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionPollTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionPollTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionListedRoomRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionListedRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedTempUserAvatarRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedTempUserAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedTempUserAvatarRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedTempUserAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionBotAdminRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionBotAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRouteHandler: RouteHandler<
  typeof putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRouteHandler: RouteHandler<
  typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRouteHandler: RouteHandler<
  typeof deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRouteHandler: RouteHandler<
  typeof postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
