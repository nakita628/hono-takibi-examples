import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute,
  deleteApiV1AbusesAbuseIdRoute,
  deleteApiV1ConfigCustomRoute,
  deleteApiV1ConfigInstanceAvatarRoute,
  deleteApiV1ConfigInstanceBannerRoute,
  deleteApiV1ConfigInstanceLogoLogoTypeRoute,
  deleteApiV1RunnersJobsJobUUIDRoute,
  deleteApiV1RunnersRegistrationTokensRegistrationTokenIdRoute,
  deleteApiV1RunnersRunnerIdRoute,
  deleteApiV1ServerBlocklistAccountsAccountNameRoute,
  deleteApiV1ServerBlocklistServersHostRoute,
  deleteApiV1ServerBlocklistSubscriptionsIdRoute,
  deleteApiV1ServerFollowersHandleRoute,
  deleteApiV1ServerFollowingHostOrHandleRoute,
  deleteApiV1ServerRedundancyVideosRedundancyIdRoute,
  deleteApiV1UsersIdRoute,
  deleteApiV1UsersMeAvatarRoute,
  deleteApiV1UsersMeBlocklistAccountsAccountNameRoute,
  deleteApiV1UsersMeBlocklistServersHostRoute,
  deleteApiV1UsersMeHistoryVideosVideoIdOrUUIDRoute,
  deleteApiV1UsersMeRoute,
  deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
  deleteApiV1UsersRegistrationsRegistrationIdRoute,
  deleteApiV1UsersUserIdExportsIdRoute,
  deleteApiV1UsersUserIdImportsImportResumableRoute,
  deleteApiV1VideoChannelsChannelHandleAvatarRoute,
  deleteApiV1VideoChannelsChannelHandleBannerRoute,
  deleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRoute,
  deleteApiV1VideoChannelsChannelHandleRoute,
  deleteApiV1VideoChannelsOwnershipIdRoute,
  deleteApiV1VideoChannelSyncsChannelSyncIdRoute,
  deleteApiV1VideoPlaylistsPlaylistIdRoute,
  deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
  deleteApiV1VideosIdBlacklistRoute,
  deleteApiV1VideosIdCaptionsCaptionLanguageRoute,
  deleteApiV1VideosIdCommentsCommentIdRoute,
  deleteApiV1VideosIdHlsRoute,
  deleteApiV1VideosIdPasswordsPasswordIdRoute,
  deleteApiV1VideosIdRoute,
  deleteApiV1VideosIdSourceFileRoute,
  deleteApiV1VideosIdSourceReplaceResumableRoute,
  deleteApiV1VideosIdWebVideosRoute,
  deleteApiV1VideosImportsIdRoute,
  deleteApiV1VideosOwnershipIdRoute,
  deleteApiV1VideosUploadResumableRoute,
  deleteApiV1WatchedWordsAccountsAccountNameListsListIdRoute,
  deleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdRoute,
  deleteApiV1WatchedWordsServerListsListIdRoute,
  deleteApiV1WatchedWordsServerSubscriptionsIdRoute,
  getApiV1AbusesAbuseIdMessagesRoute,
  getApiV1AbusesRoute,
  getApiV1AccountsNameFollowersRoute,
  getApiV1AccountsNameRatingsRoute,
  getApiV1AccountsNameRoute,
  getApiV1AccountsNameVideoChannelsRoute,
  getApiV1AccountsNameVideoChannelSyncsRoute,
  getApiV1AccountsNameVideoPlaylistsRoute,
  getApiV1AccountsNameVideosRoute,
  getApiV1AccountsRoute,
  getApiV1AutomaticTagsAccountsAccountNameAvailableRoute,
  getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute,
  getApiV1AutomaticTagsPoliciesServerVideosRoute,
  getApiV1AutomaticTagsServerAvailableRoute,
  getApiV1BlocklistStatusRoute,
  getApiV1ConfigAboutRoute,
  getApiV1ConfigCustomRoute,
  getApiV1ConfigRoute,
  getApiV1CustomPagesHomepageInstanceRoute,
  getApiV1JobsStateRoute,
  getApiV1OauthClientsLocalRoute,
  getApiV1PlayerSettingsVideoChannelsChannelHandleRoute,
  getApiV1PlayerSettingsVideosIdRoute,
  getApiV1PluginsAvailableRoute,
  getApiV1PluginsNpmNamePublicSettingsRoute,
  getApiV1PluginsNpmNameRegisteredSettingsRoute,
  getApiV1PluginsNpmNameRoute,
  getApiV1PluginsRoute,
  getApiV1RecommendationsVideosRoute,
  getApiV1RunnersJobsRoute,
  getApiV1RunnersRegistrationTokensRoute,
  getApiV1RunnersRoute,
  getApiV1SearchVideoChannelsRoute,
  getApiV1SearchVideoPlaylistsRoute,
  getApiV1SearchVideosRoute,
  getApiV1ServerAuditLogsRoute,
  getApiV1ServerBlocklistAccountsRoute,
  getApiV1ServerBlocklistPublicLogRoute,
  getApiV1ServerBlocklistServersRoute,
  getApiV1ServerBlocklistSubscriptionsRoute,
  getApiV1ServerDebugRoute,
  getApiV1ServerFollowersRoute,
  getApiV1ServerFollowingRoute,
  getApiV1ServerLogsRoute,
  getApiV1ServerRedundancyVideosRoute,
  getApiV1ServerStatsRoute,
  getApiV1UsersIdRoute,
  getApiV1UsersIdTokenSessionsRoute,
  getApiV1UsersMeAbusesRoute,
  getApiV1UsersMeBlocklistAccountsRoute,
  getApiV1UsersMeBlocklistServersRoute,
  getApiV1UsersMeHistoryVideosRoute,
  getApiV1UsersMeNotificationsRoute,
  getApiV1UsersMeRoute,
  getApiV1UsersMeSubscriptionsExistRoute,
  getApiV1UsersMeSubscriptionsRoute,
  getApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
  getApiV1UsersMeSubscriptionsVideosRoute,
  getApiV1UsersMeVideoPlaylistsVideosExistRoute,
  getApiV1UsersMeVideoQuotaUsedRoute,
  getApiV1UsersMeVideosCommentsRoute,
  getApiV1UsersMeVideosImportsRoute,
  getApiV1UsersMeVideosRoute,
  getApiV1UsersMeVideosVideoIdOrUUIDRatingRoute,
  getApiV1UsersRegistrationsRoute,
  getApiV1UsersRoute,
  getApiV1UsersUserIdExportsRoute,
  getApiV1UsersUserIdImportsLatestRoute,
  getApiV1VideoChannelsChannelHandleActivitiesRoute,
  getApiV1VideoChannelsChannelHandleCollaboratorsRoute,
  getApiV1VideoChannelsChannelHandleFollowersRoute,
  getApiV1VideoChannelsChannelHandleOwnershipRoute,
  getApiV1VideoChannelsChannelHandleRoute,
  getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute,
  getApiV1VideoChannelsChannelHandleVideosRoute,
  getApiV1VideoChannelsOwnershipRoute,
  getApiV1VideoChannelsRoute,
  getApiV1VideoPlaylistsPlaylistIdRoute,
  getApiV1VideoPlaylistsPlaylistIdVideosRoute,
  getApiV1VideoPlaylistsPrivaciesRoute,
  getApiV1VideoPlaylistsRoute,
  getApiV1VideosBlacklistRoute,
  getApiV1VideosCategoriesRoute,
  getApiV1VideosCommentsRoute,
  getApiV1VideosIdCaptionsRoute,
  getApiV1VideosIdChaptersRoute,
  getApiV1VideosIdCommentsCommentIdRepliesRoute,
  getApiV1VideosIdCommentThreadsRoute,
  getApiV1VideosIdCommentThreadsThreadIdRoute,
  getApiV1VideosIdEmbedPrivacyAllowedRoute,
  getApiV1VideosIdEmbedPrivacyRoute,
  getApiV1VideosIdLiveSessionRoute,
  getApiV1VideosIdPasswordsRoute,
  getApiV1VideosIdRoute,
  getApiV1VideosIdSourceRoute,
  getApiV1VideosIdStatsOverallRoute,
  getApiV1VideosIdStatsRetentionRoute,
  getApiV1VideosIdStatsTimeseriesMetricRoute,
  getApiV1VideosIdStatsUserAgentRoute,
  getApiV1VideosIdStoryboardsRoute,
  getApiV1VideosLanguagesRoute,
  getApiV1VideosLicencesRoute,
  getApiV1VideosLiveIdRoute,
  getApiV1VideosLiveIdSessionsRoute,
  getApiV1VideosOwnershipRoute,
  getApiV1VideosPrivaciesRoute,
  getApiV1VideosRoute,
  getApiV1VideosVideoIdOrUUIDOwnershipRoute,
  getApiV1WatchedWordsAccountsAccountNameListsRoute,
  getApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute,
  getApiV1WatchedWordsServerListsRoute,
  getApiV1WatchedWordsServerSubscriptionsRoute,
  postApiV1AbusesAbuseIdMessagesRoute,
  postApiV1AbusesRoute,
  postApiV1ClientConfigUpdateInterfaceLanguageRoute,
  postApiV1ClientConfigUpdateLanguageRoute,
  postApiV1ConfigInstanceAvatarPickRoute,
  postApiV1ConfigInstanceBannerPickRoute,
  postApiV1ConfigInstanceLogoLogoTypePickRoute,
  postApiV1JobsJobTypeJobIdCancelRoute,
  postApiV1JobsPauseRoute,
  postApiV1JobsResumeRoute,
  postApiV1MetricsPlaybackRoute,
  postApiV1PluginsInstallRoute,
  postApiV1PluginsUninstallRoute,
  postApiV1PluginsUpdateRoute,
  postApiV1RunnersJobsJobUUIDAbortRoute,
  postApiV1RunnersJobsJobUUIDAcceptRoute,
  postApiV1RunnersJobsJobUUIDCancelRoute,
  postApiV1RunnersJobsJobUUIDErrorRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityRoute,
  postApiV1RunnersJobsJobUUIDSuccessRoute,
  postApiV1RunnersJobsJobUUIDUpdateRoute,
  postApiV1RunnersJobsRequestRoute,
  postApiV1RunnersRegisterRoute,
  postApiV1RunnersRegistrationTokensGenerateRoute,
  postApiV1RunnersUnregisterRoute,
  postApiV1ServerBlocklistAccountsRoute,
  postApiV1ServerBlocklistServersRoute,
  postApiV1ServerBlocklistSubscriptionsRoute,
  postApiV1ServerContactRoute,
  postApiV1ServerDebugRunCommandRoute,
  postApiV1ServerFollowersHandleAcceptRoute,
  postApiV1ServerFollowersHandleRejectRoute,
  postApiV1ServerFollowingRoute,
  postApiV1ServerLogsClientRoute,
  postApiV1ServerRedundancyVideosRoute,
  postApiV1UsersAskResetPasswordRoute,
  postApiV1UsersAskSendVerifyEmailRoute,
  postApiV1UsersIdBlockRoute,
  postApiV1UsersIdResetPasswordRoute,
  postApiV1UsersIdTokenSessionsTokenSessionIdRevokeRoute,
  postApiV1UsersIdTwoFactorConfirmRequestRoute,
  postApiV1UsersIdTwoFactorDisableRoute,
  postApiV1UsersIdTwoFactorRequestRoute,
  postApiV1UsersIdUnblockRoute,
  postApiV1UsersIdVerifyEmailRoute,
  postApiV1UsersMeAvatarPickRoute,
  postApiV1UsersMeBlocklistAccountsRoute,
  postApiV1UsersMeBlocklistServersRoute,
  postApiV1UsersMeHistoryVideosRemoveRoute,
  postApiV1UsersMeNewFeatureInfoReadRoute,
  postApiV1UsersMeNotificationsReadAllRoute,
  postApiV1UsersMeNotificationsReadRoute,
  postApiV1UsersMeSubscriptionsRoute,
  postApiV1UsersRegisterRoute,
  postApiV1UsersRegistrationsAskSendVerifyEmailRoute,
  postApiV1UsersRegistrationsRegistrationIdAcceptRoute,
  postApiV1UsersRegistrationsRegistrationIdRejectRoute,
  postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute,
  postApiV1UsersRegistrationsRequestRoute,
  postApiV1UsersRevokeTokenRoute,
  postApiV1UsersRoute,
  postApiV1UsersTokenRoute,
  postApiV1UsersUserIdExportsRequestRoute,
  postApiV1UsersUserIdImportsImportResumableRoute,
  postApiV1VideoChannelsChannelHandleAvatarPickRoute,
  postApiV1VideoChannelsChannelHandleBannerPickRoute,
  postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptRoute,
  postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectRoute,
  postApiV1VideoChannelsChannelHandleCollaboratorsInviteRoute,
  postApiV1VideoChannelsChannelHandleGiveOwnershipRoute,
  postApiV1VideoChannelsChannelHandleImportVideosRoute,
  postApiV1VideoChannelsChannelHandleVideoPlaylistsReorderRoute,
  postApiV1VideoChannelsOwnershipIdAcceptRoute,
  postApiV1VideoChannelsOwnershipIdRefuseRoute,
  postApiV1VideoChannelsRoute,
  postApiV1VideoChannelSyncsChannelSyncIdSyncRoute,
  postApiV1VideoChannelSyncsRoute,
  postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute,
  postApiV1VideoPlaylistsPlaylistIdVideosRoute,
  postApiV1VideoPlaylistsRoute,
  postApiV1VideosIdBlacklistRoute,
  postApiV1VideosIdCaptionsGenerateRoute,
  postApiV1VideosIdCommentsCommentIdApproveRoute,
  postApiV1VideosIdCommentsCommentIdRoute,
  postApiV1VideosIdCommentThreadsRoute,
  postApiV1VideosIdDuplicateRoute,
  postApiV1VideosIdImportRetryRoute,
  postApiV1VideosIdPasswordsRoute,
  postApiV1VideosIdSourceReplaceResumableRoute,
  postApiV1VideosIdStudioEditRoute,
  postApiV1VideosIdTokenRoute,
  postApiV1VideosIdTranscodingRoute,
  postApiV1VideosIdViewsRoute,
  postApiV1VideosImportsIdCancelRoute,
  postApiV1VideosImportsIdRetryRoute,
  postApiV1VideosImportsRoute,
  postApiV1VideosLiveRoute,
  postApiV1VideosOwnershipIdAcceptRoute,
  postApiV1VideosOwnershipIdRefuseRoute,
  postApiV1VideosUploadResumableRoute,
  postApiV1VideosUploadRoute,
  postApiV1VideosVideoIdOrUUIDGiveOwnershipRoute,
  postApiV1WatchedWordsAccountsAccountNameListsRoute,
  postApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute,
  postApiV1WatchedWordsServerListsRoute,
  postApiV1WatchedWordsServerSubscriptionsRoute,
  putApiV1AbusesAbuseIdRoute,
  putApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute,
  putApiV1AutomaticTagsPoliciesServerVideosRoute,
  putApiV1ConfigCustomRoute,
  putApiV1CustomPagesHomepageInstanceRoute,
  putApiV1PlayerSettingsVideoChannelsChannelHandleRoute,
  putApiV1PlayerSettingsVideosIdRoute,
  putApiV1PluginsNpmNameSettingsRoute,
  putApiV1ServerRedundancyHostRoute,
  putApiV1UsersIdRoute,
  putApiV1UsersMeNotificationSettingsRoute,
  putApiV1UsersMeRoute,
  putApiV1UsersUserIdImportsImportResumableRoute,
  putApiV1VideoChannelsChannelHandleRoute,
  putApiV1VideoPlaylistsPlaylistIdRoute,
  putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
  putApiV1VideosIdBlacklistRoute,
  putApiV1VideosIdCaptionsCaptionLanguageRoute,
  putApiV1VideosIdChaptersRoute,
  putApiV1VideosIdEmbedPrivacyRoute,
  putApiV1VideosIdPasswordsRoute,
  putApiV1VideosIdRateRoute,
  putApiV1VideosIdRoute,
  putApiV1VideosIdSourceReplaceResumableRoute,
  putApiV1VideosLiveIdRoute,
  putApiV1VideosUploadResumableRoute,
  putApiV1WatchedWordsAccountsAccountNameListsListIdRoute,
  putApiV1WatchedWordsServerListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigInstanceBannerPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigInstanceBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigInstanceAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigInstanceAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigInstanceLogoLogoTypePickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigInstanceLogoLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomPagesHomepageInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomPagesHomepageInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1JobsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1JobsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1JobsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1JobsJobTypeJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerFollowersHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersHandleRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersHandleAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerFollowingHostOrHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OauthClientsLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRevokeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdTokenSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTokenSessionsTokenSessionIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersAskSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsAskSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersAskResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorConfirmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdImportsImportResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersUserIdImportsImportResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdImportsImportResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdImportsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdExportsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideoQuotaUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosVideoIdOrUUIDRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsSubscriptionHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeNotificationsReadAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersMeNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeNewFeatureInfoReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeHistoryVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeHistoryVideosVideoIdOrUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeHistoryVideosRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersRegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdRefuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosVideoIdOrUUIDOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosVideoIdOrUUIDGiveOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsOwnershipIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsOwnershipIdRefuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleGiveOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdStudioEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecommendationsVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLicencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsOverallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsUserAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsTimeseriesMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdImportRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosLiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLiveIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdLiveSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdSourceFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdSourceReplaceResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdSourceReplaceResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdSourceReplaceResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeAbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbusesAbuseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbusesAbuseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbusesAbuseIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbusesAbuseIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStoryboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCaptionsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdCaptionsCaptionLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdCaptionsCaptionLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdEmbedPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdEmbedPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdEmbedPrivacyAllowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleVideoPlaylistsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleBannerPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleImportVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelSyncsChannelSyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelSyncsChannelSyncIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlayerSettingsVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlayerSettingsVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlayerSettingsVideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlayerSettingsVideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPlaylistIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsPlaylistIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideoPlaylistsVideosExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoChannelSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentsCommentIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdHlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdWebVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdTranscodingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BlocklistStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeBlocklistAccountsAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeBlocklistServersHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistAccountsAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistServersHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistPublicLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ServerRedundancyHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerRedundancyVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerRedundancyVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerRedundancyVideosRedundancyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerDebugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerDebugRunCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerLogsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsUninstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PluginsNpmNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNamePublicSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNameRegisteredSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetricsPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersRegistrationTokensGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RunnersRegistrationTokensRegistrationTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RunnersRegistrationTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDSuccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RunnersJobsJobUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RunnersJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsAccountsAccountNameAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsServerAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsPoliciesServerVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AutomaticTagsPoliciesServerVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsAccountsAccountNameListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsAccountsAccountNameListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1WatchedWordsAccountsAccountNameListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsAccountsAccountNameListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsServerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsServerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1WatchedWordsServerListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsServerListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsServerSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsServerSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsServerSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientConfigUpdateLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientConfigUpdateInterfaceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleCollaboratorsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
