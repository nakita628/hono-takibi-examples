import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute,
  deleteApiV1AbusesAbuseIdRoute,
  deleteApiV1ConfigCustomRoute,
  deleteApiV1ServerBlocklistAccountsAccountNameRoute,
  deleteApiV1ServerBlocklistServersHostRoute,
  deleteApiV1ServerFollowersNameWithHostRoute,
  deleteApiV1ServerFollowingHostOrHandleRoute,
  deleteApiV1ServerRedundancyVideosRedundancyIdRoute,
  deleteApiV1UsersIdRoute,
  deleteApiV1UsersMeAvatarRoute,
  deleteApiV1UsersMeHistoryVideosVideoIdRoute,
  deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
  deleteApiV1UsersRegistrationsRegistrationIdRoute,
  deleteApiV1VideoChannelsChannelHandleAvatarRoute,
  deleteApiV1VideoChannelsChannelHandleBannerRoute,
  deleteApiV1VideoChannelsChannelHandleRoute,
  deleteApiV1VideoChannelSyncsChannelSyncIdRoute,
  deleteApiV1VideoPlaylistsPlaylistIdRoute,
  deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
  deleteApiV1VideosIdBlacklistRoute,
  deleteApiV1VideosIdCaptionsCaptionLanguageRoute,
  deleteApiV1VideosIdCommentsCommentIdRoute,
  deleteApiV1VideosIdHlsRoute,
  deleteApiV1VideosIdRoute,
  deleteApiV1VideosIdWebtorrentRoute,
  deleteApiV1VideosImportsIdRoute,
  deleteApiV1VideosUploadResumableRoute,
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
  getApiV1BlocklistStatusRoute,
  getApiV1ConfigAboutRoute,
  getApiV1ConfigCustomRoute,
  getApiV1ConfigRoute,
  getApiV1CustomPagesHomepageInstanceRoute,
  getApiV1JobsStateRoute,
  getApiV1OauthClientsLocalRoute,
  getApiV1PluginsAvailableRoute,
  getApiV1PluginsNpmNamePublicSettingsRoute,
  getApiV1PluginsNpmNameRegisteredSettingsRoute,
  getApiV1PluginsNpmNameRoute,
  getApiV1PluginsRoute,
  getApiV1SearchVideoChannelsRoute,
  getApiV1SearchVideoPlaylistsRoute,
  getApiV1SearchVideosRoute,
  getApiV1ServerAuditLogsRoute,
  getApiV1ServerBlocklistAccountsRoute,
  getApiV1ServerBlocklistServersRoute,
  getApiV1ServerFollowersRoute,
  getApiV1ServerFollowingRoute,
  getApiV1ServerLogsRoute,
  getApiV1ServerRedundancyVideosRoute,
  getApiV1ServerStatsRoute,
  getApiV1UsersIdRoute,
  getApiV1UsersMeAbusesRoute,
  getApiV1UsersMeHistoryVideosRoute,
  getApiV1UsersMeNotificationsRoute,
  getApiV1UsersMeRoute,
  getApiV1UsersMeSubscriptionsExistRoute,
  getApiV1UsersMeSubscriptionsRoute,
  getApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
  getApiV1UsersMeSubscriptionsVideosRoute,
  getApiV1UsersMeVideoPlaylistsVideosExistRoute,
  getApiV1UsersMeVideoQuotaUsedRoute,
  getApiV1UsersMeVideosImportsRoute,
  getApiV1UsersMeVideosRoute,
  getApiV1UsersMeVideosVideoIdRatingRoute,
  getApiV1UsersRegistrationsRoute,
  getApiV1UsersRoute,
  getApiV1VideoChannelsChannelHandleFollowersRoute,
  getApiV1VideoChannelsChannelHandleRoute,
  getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute,
  getApiV1VideoChannelsChannelHandleVideosRoute,
  getApiV1VideoChannelsRoute,
  getApiV1VideoPlaylistsPlaylistIdRoute,
  getApiV1VideoPlaylistsPlaylistIdVideosRoute,
  getApiV1VideoPlaylistsPrivaciesRoute,
  getApiV1VideoPlaylistsRoute,
  getApiV1VideosBlacklistRoute,
  getApiV1VideosCategoriesRoute,
  getApiV1VideosIdCaptionsRoute,
  getApiV1VideosIdCommentThreadsRoute,
  getApiV1VideosIdCommentThreadsThreadIdRoute,
  getApiV1VideosIdDescriptionRoute,
  getApiV1VideosIdLiveSessionRoute,
  getApiV1VideosIdRoute,
  getApiV1VideosIdStatsOverallRoute,
  getApiV1VideosIdStatsRetentionRoute,
  getApiV1VideosIdStatsTimeseriesMetricRoute,
  getApiV1VideosLanguagesRoute,
  getApiV1VideosLicencesRoute,
  getApiV1VideosLiveIdRoute,
  getApiV1VideosLiveIdSessionsRoute,
  getApiV1VideosOwnershipRoute,
  getApiV1VideosPrivaciesRoute,
  getApiV1VideosRoute,
  postApiV1AbusesAbuseIdMessagesRoute,
  postApiV1AbusesRoute,
  postApiV1JobsPauseRoute,
  postApiV1JobsResumeRoute,
  postApiV1MetricsPlaybackRoute,
  postApiV1PluginsInstallRoute,
  postApiV1PluginsUninstallRoute,
  postApiV1PluginsUpdateRoute,
  postApiV1ServerBlocklistAccountsRoute,
  postApiV1ServerBlocklistServersRoute,
  postApiV1ServerFollowersNameWithHostAcceptRoute,
  postApiV1ServerFollowersNameWithHostRejectRoute,
  postApiV1ServerFollowingRoute,
  postApiV1ServerLogsClientRoute,
  postApiV1ServerRedundancyVideosRoute,
  postApiV1UsersAskSendVerifyEmailRoute,
  postApiV1UsersIdTwoFactorConfirmRequestRoute,
  postApiV1UsersIdTwoFactorDisableRoute,
  postApiV1UsersIdTwoFactorRequestRoute,
  postApiV1UsersIdVerifyEmailRoute,
  postApiV1UsersMeAvatarPickRoute,
  postApiV1UsersMeHistoryVideosRemoveRoute,
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
  postApiV1VideoChannelsChannelHandleAvatarPickRoute,
  postApiV1VideoChannelsChannelHandleBannerPickRoute,
  postApiV1VideoChannelsChannelHandleImportVideosRoute,
  postApiV1VideoChannelsRoute,
  postApiV1VideoChannelSyncsChannelSyncIdSyncRoute,
  postApiV1VideoChannelSyncsRoute,
  postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute,
  postApiV1VideoPlaylistsPlaylistIdVideosRoute,
  postApiV1VideoPlaylistsRoute,
  postApiV1VideosIdBlacklistRoute,
  postApiV1VideosIdCommentsCommentIdRoute,
  postApiV1VideosIdCommentThreadsRoute,
  postApiV1VideosIdGiveOwnershipRoute,
  postApiV1VideosIdSourceRoute,
  postApiV1VideosIdStudioEditRoute,
  postApiV1VideosIdTokenRoute,
  postApiV1VideosIdTranscodingRoute,
  postApiV1VideosIdViewsRoute,
  postApiV1VideosImportsIdCancelRoute,
  postApiV1VideosImportsRoute,
  postApiV1VideosLiveRoute,
  postApiV1VideosOwnershipIdAcceptRoute,
  postApiV1VideosOwnershipIdRefuseRoute,
  postApiV1VideosUploadResumableRoute,
  postApiV1VideosUploadRoute,
  putApiV1AbusesAbuseIdRoute,
  putApiV1ConfigCustomRoute,
  putApiV1CustomPagesHomepageInstanceRoute,
  putApiV1PluginsNpmNameSettingsRoute,
  putApiV1ServerRedundancyHostRoute,
  putApiV1UsersIdRoute,
  putApiV1UsersMeNotificationSettingsRoute,
  putApiV1UsersMeRoute,
  putApiV1VideoChannelsChannelHandleRoute,
  putApiV1VideoPlaylistsPlaylistIdRoute,
  putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
  putApiV1VideosIdCaptionsCaptionLanguageRoute,
  putApiV1VideosIdRateRoute,
  putApiV1VideosIdRoute,
  putApiV1VideosIdWatchingRoute,
  putApiV1VideosLiveIdRoute,
  putApiV1VideosUploadResumableRoute,
} from '../routes'

export const getApiV1AbusesRouteHandler: RouteHandler<typeof getApiV1AbusesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AbusesRouteHandler: RouteHandler<typeof postApiV1AbusesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AbusesAbuseIdRouteHandler: RouteHandler<
  typeof deleteApiV1AbusesAbuseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AbusesAbuseIdRouteHandler: RouteHandler<
  typeof putApiV1AbusesAbuseIdRoute
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

export const getApiV1AccountsRouteHandler: RouteHandler<typeof getApiV1AccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameFollowersRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameRatingsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideoChannelSyncsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideoChannelSyncsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideoChannelsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideoChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideoPlaylistsRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsNameVideosRouteHandler: RouteHandler<
  typeof getApiV1AccountsNameVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BlocklistStatusRouteHandler: RouteHandler<
  typeof getApiV1BlocklistStatusRoute
> = async (c) => {
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

export const deleteApiV1ConfigCustomRouteHandler: RouteHandler<
  typeof deleteApiV1ConfigCustomRoute
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

export const postApiV1MetricsPlaybackRouteHandler: RouteHandler<
  typeof postApiV1MetricsPlaybackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OauthClientsLocalRouteHandler: RouteHandler<
  typeof getApiV1OauthClientsLocalRoute
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

export const postApiV1PluginsUninstallRouteHandler: RouteHandler<
  typeof postApiV1PluginsUninstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PluginsUpdateRouteHandler: RouteHandler<
  typeof postApiV1PluginsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PluginsNpmNameRouteHandler: RouteHandler<
  typeof getApiV1PluginsNpmNameRoute
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

export const putApiV1PluginsNpmNameSettingsRouteHandler: RouteHandler<
  typeof putApiV1PluginsNpmNameSettingsRoute
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

export const getApiV1SearchVideosRouteHandler: RouteHandler<
  typeof getApiV1SearchVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerAuditLogsRouteHandler: RouteHandler<
  typeof getApiV1ServerAuditLogsRoute
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

export const getApiV1ServerFollowersRouteHandler: RouteHandler<
  typeof getApiV1ServerFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ServerFollowersNameWithHostRouteHandler: RouteHandler<
  typeof deleteApiV1ServerFollowersNameWithHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerFollowersNameWithHostAcceptRouteHandler: RouteHandler<
  typeof postApiV1ServerFollowersNameWithHostAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerFollowersNameWithHostRejectRouteHandler: RouteHandler<
  typeof postApiV1ServerFollowersNameWithHostRejectRoute
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

export const getApiV1ServerLogsRouteHandler: RouteHandler<typeof getApiV1ServerLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ServerLogsClientRouteHandler: RouteHandler<
  typeof postApiV1ServerLogsClientRoute
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

export const putApiV1ServerRedundancyHostRouteHandler: RouteHandler<
  typeof putApiV1ServerRedundancyHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServerStatsRouteHandler: RouteHandler<
  typeof getApiV1ServerStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersRouteHandler: RouteHandler<typeof getApiV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRouteHandler: RouteHandler<typeof postApiV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersAskSendVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersAskSendVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeRouteHandler: RouteHandler<typeof getApiV1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersMeRouteHandler: RouteHandler<typeof putApiV1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeAbusesRouteHandler: RouteHandler<
  typeof getApiV1UsersMeAbusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeAvatarRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeAvatarPickRouteHandler: RouteHandler<
  typeof postApiV1UsersMeAvatarPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeHistoryVideosRouteHandler: RouteHandler<
  typeof getApiV1UsersMeHistoryVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersMeHistoryVideosRemoveRouteHandler: RouteHandler<
  typeof postApiV1UsersMeHistoryVideosRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersMeHistoryVideosVideoIdRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeHistoryVideosVideoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1UsersMeNotificationSettingsRouteHandler: RouteHandler<
  typeof putApiV1UsersMeNotificationSettingsRoute
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

export const deleteApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler: RouteHandler<
  typeof deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler: RouteHandler<
  typeof getApiV1UsersMeSubscriptionsSubscriptionHandleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideoPlaylistsVideosExistRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideoPlaylistsVideosExistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideoQuotaUsedRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideoQuotaUsedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosImportsRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersMeVideosVideoIdRatingRouteHandler: RouteHandler<
  typeof getApiV1UsersMeVideosVideoIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegisterRouteHandler: RouteHandler<
  typeof postApiV1UsersRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UsersRegistrationsRouteHandler: RouteHandler<
  typeof getApiV1UsersRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsAskSendVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsAskSendVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRegistrationsRequestRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UsersRegistrationsRegistrationIdRouteHandler: RouteHandler<
  typeof deleteApiV1UsersRegistrationsRegistrationIdRoute
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

export const postApiV1UsersRegistrationsRegistrationIdVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersRevokeTokenRouteHandler: RouteHandler<
  typeof postApiV1UsersRevokeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersTokenRouteHandler: RouteHandler<
  typeof postApiV1UsersTokenRoute
> = async (c) => {
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

export const postApiV1UsersIdTwoFactorRequestRouteHandler: RouteHandler<
  typeof postApiV1UsersIdTwoFactorRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UsersIdVerifyEmailRouteHandler: RouteHandler<
  typeof postApiV1UsersIdVerifyEmailRoute
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

export const deleteApiV1VideoChannelsChannelHandleRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleRoute
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

export const deleteApiV1VideoChannelsChannelHandleAvatarRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleAvatarPickRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleAvatarPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoChannelsChannelHandleBannerRouteHandler: RouteHandler<
  typeof deleteApiV1VideoChannelsChannelHandleBannerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleBannerPickRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleBannerPickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleFollowersRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoChannelsChannelHandleImportVideosRouteHandler: RouteHandler<
  typeof postApiV1VideoChannelsChannelHandleImportVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleVideoPlaylistsRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoChannelsChannelHandleVideosRouteHandler: RouteHandler<
  typeof getApiV1VideoChannelsChannelHandleVideosRoute
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

export const getApiV1VideoPlaylistsPrivaciesRouteHandler: RouteHandler<
  typeof getApiV1VideoPlaylistsPrivaciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideoPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoPlaylistsPlaylistIdRoute
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

export const deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler: RouteHandler<
  typeof putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosRouteHandler: RouteHandler<typeof getApiV1VideosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosBlacklistRouteHandler: RouteHandler<
  typeof getApiV1VideosBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosCategoriesRouteHandler: RouteHandler<
  typeof getApiV1VideosCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosImportsRouteHandler: RouteHandler<
  typeof postApiV1VideosImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosImportsIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosImportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosImportsIdCancelRouteHandler: RouteHandler<
  typeof postApiV1VideosImportsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosLanguagesRouteHandler: RouteHandler<
  typeof getApiV1VideosLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosLicencesRouteHandler: RouteHandler<
  typeof getApiV1VideosLicencesRoute
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

export const getApiV1VideosPrivaciesRouteHandler: RouteHandler<
  typeof getApiV1VideosPrivaciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosUploadRouteHandler: RouteHandler<
  typeof postApiV1VideosUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosUploadResumableRouteHandler: RouteHandler<
  typeof deleteApiV1VideosUploadResumableRoute
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

export const deleteApiV1VideosIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdRouteHandler: RouteHandler<typeof getApiV1VideosIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdRouteHandler: RouteHandler<typeof putApiV1VideosIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdBlacklistRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdBlacklistRouteHandler: RouteHandler<
  typeof postApiV1VideosIdBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdCaptionsRouteHandler: RouteHandler<
  typeof getApiV1VideosIdCaptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdCaptionsCaptionLanguageRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdCaptionsCaptionLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdCaptionsCaptionLanguageRouteHandler: RouteHandler<
  typeof putApiV1VideosIdCaptionsCaptionLanguageRoute
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

export const deleteApiV1VideosIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof postApiV1VideosIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdDescriptionRouteHandler: RouteHandler<
  typeof getApiV1VideosIdDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdGiveOwnershipRouteHandler: RouteHandler<
  typeof postApiV1VideosIdGiveOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdHlsRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdHlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdLiveSessionRouteHandler: RouteHandler<
  typeof getApiV1VideosIdLiveSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdRateRouteHandler: RouteHandler<
  typeof putApiV1VideosIdRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdSourceRouteHandler: RouteHandler<
  typeof postApiV1VideosIdSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideosIdStatsOverallRouteHandler: RouteHandler<
  typeof getApiV1VideosIdStatsOverallRoute
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

export const postApiV1VideosIdStudioEditRouteHandler: RouteHandler<
  typeof postApiV1VideosIdStudioEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdTokenRouteHandler: RouteHandler<
  typeof postApiV1VideosIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdTranscodingRouteHandler: RouteHandler<
  typeof postApiV1VideosIdTranscodingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideosIdViewsRouteHandler: RouteHandler<
  typeof postApiV1VideosIdViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1VideosIdWatchingRouteHandler: RouteHandler<
  typeof putApiV1VideosIdWatchingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1VideosIdWebtorrentRouteHandler: RouteHandler<
  typeof deleteApiV1VideosIdWebtorrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
