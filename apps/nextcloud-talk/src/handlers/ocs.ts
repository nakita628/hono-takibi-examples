import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBotTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPollTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionListedRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedTempUserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedTempUserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBotAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
