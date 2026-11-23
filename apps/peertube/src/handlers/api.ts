import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiV1AccountsNameRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideosRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameFollowersRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsRouteHandler: RouteHandler<typeof getApiV1AccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ConfigRouteHandler: RouteHandler<typeof getApiV1ConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConfigAboutRouteHandler: RouteHandler<
  typeof getApiV1ConfigAboutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConfigCustomRouteHandler: RouteHandler<
  typeof getApiV1ConfigCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ConfigCustomRouteHandler: RouteHandler<
  typeof putApiV1ConfigCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ConfigCustomRouteHandler: RouteHandler<
  typeof deleteApiV1ConfigCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ConfigInstanceBannerPickRouteHandler: RouteHandler<
  typeof postApiV1ConfigInstanceBannerPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ConfigInstanceBannerRouteHandler: RouteHandler<
  typeof deleteApiV1ConfigInstanceBannerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ConfigInstanceAvatarPickRouteHandler: RouteHandler<
  typeof postApiV1ConfigInstanceAvatarPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ConfigInstanceAvatarRouteHandler: RouteHandler<
  typeof deleteApiV1ConfigInstanceAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ConfigInstanceLogoLogoTypePickRouteHandler: RouteHandler<
  typeof postApiV1ConfigInstanceLogoLogoTypePickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ConfigInstanceLogoLogoTypeRouteHandler: RouteHandler<
  typeof deleteApiV1ConfigInstanceLogoLogoTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomPagesHomepageInstanceRouteHandler: RouteHandler<
  typeof getApiV1CustomPagesHomepageInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CustomPagesHomepageInstanceRouteHandler: RouteHandler<
  typeof putApiV1CustomPagesHomepageInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1JobsPauseRouteHandler: RouteHandler<typeof postApiV1JobsPauseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1JobsResumeRouteHandler: RouteHandler<
  typeof postApiV1JobsResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1JobsStateRouteHandler: RouteHandler<typeof getApiV1JobsStateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1JobsJobTypeJobIdCancelRouteHandler: RouteHandler<
  typeof postApiV1JobsJobTypeJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerFollowersRouteHandler: RouteHandler<
  typeof getApiV1ServerFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerFollowersHandleRouteHandler: RouteHandler<
  typeof deleteApiV1ServerFollowersHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerFollowersHandleRejectRouteHandler: RouteHandler<
  typeof postApiV1ServerFollowersHandleRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerFollowersHandleAcceptRouteHandler: RouteHandler<
  typeof postApiV1ServerFollowersHandleAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerFollowingRouteHandler: RouteHandler<
  typeof getApiV1ServerFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerFollowingRouteHandler: RouteHandler<
  typeof postApiV1ServerFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerFollowingHostOrHandleRouteHandler: RouteHandler<
  typeof deleteApiV1ServerFollowingHostOrHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRouteHandler: RouteHandler<typeof postApiV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersRouteHandler: RouteHandler<typeof getApiV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersIdRouteHandler: RouteHandler<typeof deleteApiV1UsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersIdRouteHandler: RouteHandler<typeof getApiV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersIdRouteHandler: RouteHandler<typeof putApiV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdBlockRouteHandler: RouteHandler<
  typeof postApiV1UsersIdBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdUnblockRouteHandler: RouteHandler<
  typeof postApiV1UsersIdUnblockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OauthClientsLocalRouteHandler: RouteHandler<
  typeof getApiV1OauthClientsLocalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersTokenRouteHandler: RouteHandler<
  typeof postApiV1UsersTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRevokeTokenRouteHandler: RouteHandler<
  typeof postApiV1UsersRevokeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersIdTokenSessionsRouteHandler: RouteHandler<
  typeof getApiV1UsersIdTokenSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdTokenSessionsTokenSessionIdRevokeRouteHandler: RouteHandler<
  typeof postApiV1UsersIdTokenSessionsTokenSessionIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersAskSendVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersAskSendVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsAskSendVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsAskSendVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersIdVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsRegistrationIdVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersAskResetPasswordRouteHandler: RouteHandler<
  typeof postApiV1UsersAskResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdResetPasswordRouteHandler: RouteHandler<
  typeof postApiV1UsersIdResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdTwoFactorRequestRouteHandler: RouteHandler<
  typeof postApiV1UsersIdTwoFactorRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdTwoFactorConfirmRequestRouteHandler: RouteHandler<
  typeof postApiV1UsersIdTwoFactorConfirmRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdTwoFactorDisableRouteHandler: RouteHandler<
  typeof postApiV1UsersIdTwoFactorDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersUserIdImportsImportResumableRouteHandler: RouteHandler<
  typeof postApiV1UsersUserIdImportsImportResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersUserIdImportsImportResumableRouteHandler: RouteHandler<
  typeof putApiV1UsersUserIdImportsImportResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersUserIdImportsImportResumableRouteHandler: RouteHandler<
  typeof deleteApiV1UsersUserIdImportsImportResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersUserIdImportsLatestRouteHandler: RouteHandler<
  typeof getApiV1UsersUserIdImportsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersUserIdExportsRequestRouteHandler: RouteHandler<
  typeof postApiV1UsersUserIdExportsRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersUserIdExportsRouteHandler: RouteHandler<
  typeof getApiV1UsersUserIdExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersUserIdExportsIdRouteHandler: RouteHandler<
  typeof deleteApiV1UsersUserIdExportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeRouteHandler: RouteHandler<typeof getApiV1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersMeRouteHandler: RouteHandler<typeof putApiV1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeRouteHandler: RouteHandler<typeof deleteApiV1UsersMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosCommentsRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosImportsRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideoQuotaUsedRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideoQuotaUsedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosVideoIdOrUUIDRatingRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosVideoIdOrUUIDRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1UsersMeSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1UsersMeSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeSubscriptionsExistRouteHandler: RouteHandler<
  typeof getApiV1UsersMeSubscriptionsExistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeSubscriptionsVideosRouteHandler: RouteHandler<
  typeof getApiV1UsersMeSubscriptionsVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler: RouteHandler<
  typeof getApiV1UsersMeSubscriptionsSubscriptionHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeNotificationsRouteHandler: RouteHandler<
  typeof getApiV1UsersMeNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeNotificationsReadRouteHandler: RouteHandler<
  typeof postApiV1UsersMeNotificationsReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeNotificationsReadAllRouteHandler: RouteHandler<
  typeof postApiV1UsersMeNotificationsReadAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersMeNotificationSettingsRouteHandler: RouteHandler<
  typeof putApiV1UsersMeNotificationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeNewFeatureInfoReadRouteHandler: RouteHandler<
  typeof postApiV1UsersMeNewFeatureInfoReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeHistoryVideosRouteHandler: RouteHandler<
  typeof getApiV1UsersMeHistoryVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeHistoryVideosVideoIdOrUUIDRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeHistoryVideosVideoIdOrUUIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeHistoryVideosRemoveRouteHandler: RouteHandler<
  typeof postApiV1UsersMeHistoryVideosRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeAvatarPickRouteHandler: RouteHandler<
  typeof postApiV1UsersMeAvatarPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeAvatarRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegisterRouteHandler: RouteHandler<
  typeof postApiV1UsersRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsRequestRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsRegistrationIdAcceptRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsRegistrationIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsRegistrationIdRejectRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsRegistrationIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersRegistrationsRegistrationIdRouteHandler: RouteHandler<
  typeof deleteApiV1UsersRegistrationsRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersRegistrationsRouteHandler: RouteHandler<
  typeof getApiV1UsersRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosOwnershipRouteHandler: RouteHandler<
  typeof getApiV1VideosOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosOwnershipIdAcceptRouteHandler: RouteHandler<
  typeof postApiV1VideosOwnershipIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosOwnershipIdRefuseRouteHandler: RouteHandler<
  typeof postApiV1VideosOwnershipIdRefuseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosOwnershipIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosVideoIdOrUUIDOwnershipRouteHandler: RouteHandler<
  typeof getApiV1VideosVideoIdOrUUIDOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosVideoIdOrUUIDGiveOwnershipRouteHandler: RouteHandler<
  typeof postApiV1VideosVideoIdOrUUIDGiveOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsOwnershipRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsOwnershipIdAcceptRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsOwnershipIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsOwnershipIdRefuseRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsOwnershipIdRefuseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelsOwnershipIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleOwnershipRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleGiveOwnershipRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleGiveOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdTokenRouteHandler: RouteHandler<
  typeof postApiV1VideosIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdStudioEditRouteHandler: RouteHandler<
  typeof postApiV1VideosIdStudioEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdDuplicateRouteHandler: RouteHandler<
  typeof postApiV1VideosIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosRouteHandler: RouteHandler<typeof getApiV1VideosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RecommendationsVideosRouteHandler: RouteHandler<
  typeof getApiV1RecommendationsVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosCategoriesRouteHandler: RouteHandler<
  typeof getApiV1VideosCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosLicencesRouteHandler: RouteHandler<
  typeof getApiV1VideosLicencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosLanguagesRouteHandler: RouteHandler<
  typeof getApiV1VideosLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosPrivaciesRouteHandler: RouteHandler<
  typeof getApiV1VideosPrivaciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdRouteHandler: RouteHandler<typeof putApiV1VideosIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdRouteHandler: RouteHandler<typeof getApiV1VideosIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdViewsRouteHandler: RouteHandler<
  typeof postApiV1VideosIdViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdStatsOverallRouteHandler: RouteHandler<
  typeof getApiV1VideosIdStatsOverallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdStatsUserAgentRouteHandler: RouteHandler<
  typeof getApiV1VideosIdStatsUserAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdStatsRetentionRouteHandler: RouteHandler<
  typeof getApiV1VideosIdStatsRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdStatsTimeseriesMetricRouteHandler: RouteHandler<
  typeof getApiV1VideosIdStatsTimeseriesMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosUploadRouteHandler: RouteHandler<
  typeof postApiV1VideosUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosUploadResumableRouteHandler: RouteHandler<
  typeof postApiV1VideosUploadResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosUploadResumableRouteHandler: RouteHandler<
  typeof putApiV1VideosUploadResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosUploadResumableRouteHandler: RouteHandler<
  typeof deleteApiV1VideosUploadResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosImportsRouteHandler: RouteHandler<
  typeof postApiV1VideosImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosImportsIdCancelRouteHandler: RouteHandler<
  typeof postApiV1VideosImportsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosImportsIdRetryRouteHandler: RouteHandler<
  typeof postApiV1VideosImportsIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdImportRetryRouteHandler: RouteHandler<
  typeof postApiV1VideosIdImportRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosImportsIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosImportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosLiveRouteHandler: RouteHandler<
  typeof postApiV1VideosLiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosLiveIdRouteHandler: RouteHandler<
  typeof getApiV1VideosLiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosLiveIdRouteHandler: RouteHandler<
  typeof putApiV1VideosLiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosLiveIdSessionsRouteHandler: RouteHandler<
  typeof getApiV1VideosLiveIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdLiveSessionRouteHandler: RouteHandler<
  typeof getApiV1VideosIdLiveSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdSourceRouteHandler: RouteHandler<
  typeof getApiV1VideosIdSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdSourceFileRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdSourceFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdSourceReplaceResumableRouteHandler: RouteHandler<
  typeof postApiV1VideosIdSourceReplaceResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdSourceReplaceResumableRouteHandler: RouteHandler<
  typeof putApiV1VideosIdSourceReplaceResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdSourceReplaceResumableRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdSourceReplaceResumableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeAbusesRouteHandler: RouteHandler<
  typeof getApiV1UsersMeAbusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbusesRouteHandler: RouteHandler<typeof getApiV1AbusesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbusesRouteHandler: RouteHandler<typeof postApiV1AbusesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AbusesAbuseIdRouteHandler: RouteHandler<
  typeof putApiV1AbusesAbuseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AbusesAbuseIdRouteHandler: RouteHandler<
  typeof deleteApiV1AbusesAbuseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AbusesAbuseIdMessagesRouteHandler: RouteHandler<
  typeof getApiV1AbusesAbuseIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbusesAbuseIdMessagesRouteHandler: RouteHandler<
  typeof postApiV1AbusesAbuseIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRouteHandler: RouteHandler<
  typeof deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdBlacklistRouteHandler: RouteHandler<
  typeof postApiV1VideosIdBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdBlacklistRouteHandler: RouteHandler<
  typeof putApiV1VideosIdBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdBlacklistRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosBlacklistRouteHandler: RouteHandler<
  typeof getApiV1VideosBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdStoryboardsRouteHandler: RouteHandler<
  typeof getApiV1VideosIdStoryboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdCaptionsRouteHandler: RouteHandler<
  typeof getApiV1VideosIdCaptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdCaptionsGenerateRouteHandler: RouteHandler<
  typeof postApiV1VideosIdCaptionsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdCaptionsCaptionLanguageRouteHandler: RouteHandler<
  typeof putApiV1VideosIdCaptionsCaptionLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdCaptionsCaptionLanguageRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdCaptionsCaptionLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdChaptersRouteHandler: RouteHandler<
  typeof getApiV1VideosIdChaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdChaptersRouteHandler: RouteHandler<
  typeof putApiV1VideosIdChaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdEmbedPrivacyRouteHandler: RouteHandler<
  typeof getApiV1VideosIdEmbedPrivacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdEmbedPrivacyRouteHandler: RouteHandler<
  typeof putApiV1VideosIdEmbedPrivacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdEmbedPrivacyAllowedRouteHandler: RouteHandler<
  typeof getApiV1VideosIdEmbedPrivacyAllowedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdPasswordsRouteHandler: RouteHandler<
  typeof getApiV1VideosIdPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdPasswordsRouteHandler: RouteHandler<
  typeof putApiV1VideosIdPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdPasswordsRouteHandler: RouteHandler<
  typeof postApiV1VideosIdPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdPasswordsPasswordIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdPasswordsPasswordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideoChannelsChannelHandleRouteHandler: RouteHandler<
  typeof putApiV1VideoChannelsChannelHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelsChannelHandleRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleVideosRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleActivitiesRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleVideoPlaylistsRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleVideoPlaylistsReorderRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleVideoPlaylistsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleFollowersRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleAvatarPickRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleAvatarPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelsChannelHandleAvatarRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleBannerPickRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleBannerPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelsChannelHandleBannerRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleBannerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleImportVideosRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleImportVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelSyncsRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelSyncsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelSyncsChannelSyncIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelSyncsChannelSyncIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelSyncsChannelSyncIdSyncRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelSyncsChannelSyncIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PlayerSettingsVideosIdRouteHandler: RouteHandler<
  typeof getApiV1PlayerSettingsVideosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PlayerSettingsVideosIdRouteHandler: RouteHandler<
  typeof putApiV1PlayerSettingsVideosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PlayerSettingsVideoChannelsChannelHandleRouteHandler: RouteHandler<
  typeof getApiV1PlayerSettingsVideoChannelsChannelHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PlayerSettingsVideoChannelsChannelHandleRouteHandler: RouteHandler<
  typeof putApiV1PlayerSettingsVideoChannelsChannelHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoPlaylistsPrivaciesRouteHandler: RouteHandler<
  typeof getApiV1VideoPlaylistsPrivaciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoPlaylistsRouteHandler: RouteHandler<
  typeof getApiV1VideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoPlaylistsRouteHandler: RouteHandler<
  typeof postApiV1VideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof getApiV1VideoPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideoPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof putApiV1VideoPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoPlaylistsPlaylistIdVideosRouteHandler: RouteHandler<
  typeof getApiV1VideoPlaylistsPlaylistIdVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoPlaylistsPlaylistIdVideosRouteHandler: RouteHandler<
  typeof postApiV1VideoPlaylistsPlaylistIdVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoPlaylistsPlaylistIdVideosReorderRouteHandler: RouteHandler<
  typeof postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler: RouteHandler<
  typeof putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideoPlaylistsVideosExistRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideoPlaylistsVideosExistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideoPlaylistsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideoChannelsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideoChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideoChannelSyncsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideoChannelSyncsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameRatingsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdCommentThreadsRouteHandler: RouteHandler<
  typeof getApiV1VideosIdCommentThreadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdCommentThreadsRouteHandler: RouteHandler<
  typeof postApiV1VideosIdCommentThreadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdCommentThreadsThreadIdRouteHandler: RouteHandler<
  typeof getApiV1VideosIdCommentThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdCommentsCommentIdRepliesRouteHandler: RouteHandler<
  typeof getApiV1VideosIdCommentsCommentIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosCommentsRouteHandler: RouteHandler<
  typeof getApiV1VideosCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof postApiV1VideosIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdCommentsCommentIdApproveRouteHandler: RouteHandler<
  typeof postApiV1VideosIdCommentsCommentIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdRateRouteHandler: RouteHandler<
  typeof putApiV1VideosIdRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdHlsRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdHlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdWebVideosRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdWebVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdTranscodingRouteHandler: RouteHandler<
  typeof postApiV1VideosIdTranscodingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SearchVideosRouteHandler: RouteHandler<
  typeof getApiV1SearchVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SearchVideoChannelsRouteHandler: RouteHandler<
  typeof getApiV1SearchVideoChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SearchVideoPlaylistsRouteHandler: RouteHandler<
  typeof getApiV1SearchVideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BlocklistStatusRouteHandler: RouteHandler<
  typeof getApiV1BlocklistStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeBlocklistAccountsRouteHandler: RouteHandler<
  typeof getApiV1UsersMeBlocklistAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeBlocklistAccountsRouteHandler: RouteHandler<
  typeof postApiV1UsersMeBlocklistAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeBlocklistAccountsAccountNameRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeBlocklistAccountsAccountNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeBlocklistServersRouteHandler: RouteHandler<
  typeof getApiV1UsersMeBlocklistServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeBlocklistServersRouteHandler: RouteHandler<
  typeof postApiV1UsersMeBlocklistServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeBlocklistServersHostRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeBlocklistServersHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerBlocklistAccountsRouteHandler: RouteHandler<
  typeof getApiV1ServerBlocklistAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerBlocklistAccountsRouteHandler: RouteHandler<
  typeof postApiV1ServerBlocklistAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerBlocklistAccountsAccountNameRouteHandler: RouteHandler<
  typeof deleteApiV1ServerBlocklistAccountsAccountNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerBlocklistServersRouteHandler: RouteHandler<
  typeof getApiV1ServerBlocklistServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerBlocklistServersRouteHandler: RouteHandler<
  typeof postApiV1ServerBlocklistServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerBlocklistServersHostRouteHandler: RouteHandler<
  typeof deleteApiV1ServerBlocklistServersHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerBlocklistSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1ServerBlocklistSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerBlocklistSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1ServerBlocklistSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerBlocklistSubscriptionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1ServerBlocklistSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerBlocklistPublicLogRouteHandler: RouteHandler<
  typeof getApiV1ServerBlocklistPublicLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ServerRedundancyHostRouteHandler: RouteHandler<
  typeof putApiV1ServerRedundancyHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerRedundancyVideosRouteHandler: RouteHandler<
  typeof getApiV1ServerRedundancyVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerRedundancyVideosRouteHandler: RouteHandler<
  typeof postApiV1ServerRedundancyVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerRedundancyVideosRedundancyIdRouteHandler: RouteHandler<
  typeof deleteApiV1ServerRedundancyVideosRedundancyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerStatsRouteHandler: RouteHandler<
  typeof getApiV1ServerStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerContactRouteHandler: RouteHandler<
  typeof postApiV1ServerContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerDebugRouteHandler: RouteHandler<
  typeof getApiV1ServerDebugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerDebugRunCommandRouteHandler: RouteHandler<
  typeof postApiV1ServerDebugRunCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerLogsClientRouteHandler: RouteHandler<
  typeof postApiV1ServerLogsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerLogsRouteHandler: RouteHandler<typeof getApiV1ServerLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerAuditLogsRouteHandler: RouteHandler<
  typeof getApiV1ServerAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PluginsRouteHandler: RouteHandler<typeof getApiV1PluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PluginsAvailableRouteHandler: RouteHandler<
  typeof getApiV1PluginsAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PluginsInstallRouteHandler: RouteHandler<
  typeof postApiV1PluginsInstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PluginsUpdateRouteHandler: RouteHandler<
  typeof postApiV1PluginsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PluginsUninstallRouteHandler: RouteHandler<
  typeof postApiV1PluginsUninstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PluginsNpmNameRouteHandler: RouteHandler<
  typeof getApiV1PluginsNpmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PluginsNpmNameSettingsRouteHandler: RouteHandler<
  typeof putApiV1PluginsNpmNameSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PluginsNpmNamePublicSettingsRouteHandler: RouteHandler<
  typeof getApiV1PluginsNpmNamePublicSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PluginsNpmNameRegisteredSettingsRouteHandler: RouteHandler<
  typeof getApiV1PluginsNpmNameRegisteredSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MetricsPlaybackRouteHandler: RouteHandler<
  typeof postApiV1MetricsPlaybackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersRegistrationTokensGenerateRouteHandler: RouteHandler<
  typeof postApiV1RunnersRegistrationTokensGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RunnersRegistrationTokensRegistrationTokenIdRouteHandler: RouteHandler<
  typeof deleteApiV1RunnersRegistrationTokensRegistrationTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RunnersRegistrationTokensRouteHandler: RouteHandler<
  typeof getApiV1RunnersRegistrationTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersRegisterRouteHandler: RouteHandler<
  typeof postApiV1RunnersRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersUnregisterRouteHandler: RouteHandler<
  typeof postApiV1RunnersUnregisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RunnersRunnerIdRouteHandler: RouteHandler<
  typeof deleteApiV1RunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RunnersRouteHandler: RouteHandler<typeof getApiV1RunnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsRequestRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDAcceptRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDAbortRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDAbortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDUpdateRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDErrorRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDErrorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDSuccessRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDSuccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RunnersJobsJobUUIDCancelRouteHandler: RouteHandler<
  typeof postApiV1RunnersJobsJobUUIDCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RunnersJobsJobUUIDRouteHandler: RouteHandler<
  typeof deleteApiV1RunnersJobsJobUUIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RunnersJobsRouteHandler: RouteHandler<
  typeof getApiV1RunnersJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRouteHandler: RouteHandler<
  typeof getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRouteHandler: RouteHandler<
  typeof putApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AutomaticTagsAccountsAccountNameAvailableRouteHandler: RouteHandler<
  typeof getApiV1AutomaticTagsAccountsAccountNameAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AutomaticTagsServerAvailableRouteHandler: RouteHandler<
  typeof getApiV1AutomaticTagsServerAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AutomaticTagsPoliciesServerVideosRouteHandler: RouteHandler<
  typeof getApiV1AutomaticTagsPoliciesServerVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AutomaticTagsPoliciesServerVideosRouteHandler: RouteHandler<
  typeof putApiV1AutomaticTagsPoliciesServerVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchedWordsAccountsAccountNameListsRouteHandler: RouteHandler<
  typeof getApiV1WatchedWordsAccountsAccountNameListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1WatchedWordsAccountsAccountNameListsRouteHandler: RouteHandler<
  typeof postApiV1WatchedWordsAccountsAccountNameListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1WatchedWordsAccountsAccountNameListsListIdRouteHandler: RouteHandler<
  typeof putApiV1WatchedWordsAccountsAccountNameListsListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1WatchedWordsAccountsAccountNameListsListIdRouteHandler: RouteHandler<
  typeof deleteApiV1WatchedWordsAccountsAccountNameListsListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchedWordsServerListsRouteHandler: RouteHandler<
  typeof getApiV1WatchedWordsServerListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1WatchedWordsServerListsRouteHandler: RouteHandler<
  typeof postApiV1WatchedWordsServerListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1WatchedWordsServerListsListIdRouteHandler: RouteHandler<
  typeof putApiV1WatchedWordsServerListsListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1WatchedWordsServerListsListIdRouteHandler: RouteHandler<
  typeof deleteApiV1WatchedWordsServerListsListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchedWordsAccountsAccountNameSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1WatchedWordsAccountsAccountNameSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1WatchedWordsServerSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1WatchedWordsServerSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1WatchedWordsServerSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1WatchedWordsServerSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1WatchedWordsServerSubscriptionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1WatchedWordsServerSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientConfigUpdateLanguageRouteHandler: RouteHandler<
  typeof postApiV1ClientConfigUpdateLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClientConfigUpdateInterfaceLanguageRouteHandler: RouteHandler<
  typeof postApiV1ClientConfigUpdateInterfaceLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleCollaboratorsRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleCollaboratorsInviteRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleCollaboratorsInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleCollaboratorsCollaboratorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
