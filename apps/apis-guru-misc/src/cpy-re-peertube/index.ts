import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  getFeedsSubscriptionsFormatRoute,
  getFeedsVideoCommentsFormatRoute,
  getFeedsVideosFormatRoute,
  getStaticStreamingPlaylistsHlsFilenameRoute,
  getStaticStreamingPlaylistsHlsPrivateFilenameRoute,
  getStaticWebseedFilenameRoute,
  getStaticWebseedPrivateFilenameRoute,
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
} from './routes'
import {
  deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRouteHandler,
  deleteApiV1AbusesAbuseIdRouteHandler,
  deleteApiV1ConfigCustomRouteHandler,
  deleteApiV1ServerBlocklistAccountsAccountNameRouteHandler,
  deleteApiV1ServerBlocklistServersHostRouteHandler,
  deleteApiV1ServerFollowersNameWithHostRouteHandler,
  deleteApiV1ServerFollowingHostOrHandleRouteHandler,
  deleteApiV1ServerRedundancyVideosRedundancyIdRouteHandler,
  deleteApiV1UsersIdRouteHandler,
  deleteApiV1UsersMeAvatarRouteHandler,
  deleteApiV1UsersMeHistoryVideosVideoIdRouteHandler,
  deleteApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler,
  deleteApiV1UsersRegistrationsRegistrationIdRouteHandler,
  deleteApiV1VideoChannelsChannelHandleAvatarRouteHandler,
  deleteApiV1VideoChannelsChannelHandleBannerRouteHandler,
  deleteApiV1VideoChannelsChannelHandleRouteHandler,
  deleteApiV1VideoChannelSyncsChannelSyncIdRouteHandler,
  deleteApiV1VideoPlaylistsPlaylistIdRouteHandler,
  deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler,
  deleteApiV1VideosIdBlacklistRouteHandler,
  deleteApiV1VideosIdCaptionsCaptionLanguageRouteHandler,
  deleteApiV1VideosIdCommentsCommentIdRouteHandler,
  deleteApiV1VideosIdHlsRouteHandler,
  deleteApiV1VideosIdRouteHandler,
  deleteApiV1VideosIdWebtorrentRouteHandler,
  deleteApiV1VideosImportsIdRouteHandler,
  deleteApiV1VideosUploadResumableRouteHandler,
  getApiV1AbusesAbuseIdMessagesRouteHandler,
  getApiV1AbusesRouteHandler,
  getApiV1AccountsNameFollowersRouteHandler,
  getApiV1AccountsNameRatingsRouteHandler,
  getApiV1AccountsNameRouteHandler,
  getApiV1AccountsNameVideoChannelsRouteHandler,
  getApiV1AccountsNameVideoChannelSyncsRouteHandler,
  getApiV1AccountsNameVideoPlaylistsRouteHandler,
  getApiV1AccountsNameVideosRouteHandler,
  getApiV1AccountsRouteHandler,
  getApiV1BlocklistStatusRouteHandler,
  getApiV1ConfigAboutRouteHandler,
  getApiV1ConfigCustomRouteHandler,
  getApiV1ConfigRouteHandler,
  getApiV1CustomPagesHomepageInstanceRouteHandler,
  getApiV1JobsStateRouteHandler,
  getApiV1OauthClientsLocalRouteHandler,
  getApiV1PluginsAvailableRouteHandler,
  getApiV1PluginsNpmNamePublicSettingsRouteHandler,
  getApiV1PluginsNpmNameRegisteredSettingsRouteHandler,
  getApiV1PluginsNpmNameRouteHandler,
  getApiV1PluginsRouteHandler,
  getApiV1SearchVideoChannelsRouteHandler,
  getApiV1SearchVideoPlaylistsRouteHandler,
  getApiV1SearchVideosRouteHandler,
  getApiV1ServerAuditLogsRouteHandler,
  getApiV1ServerBlocklistAccountsRouteHandler,
  getApiV1ServerBlocklistServersRouteHandler,
  getApiV1ServerFollowersRouteHandler,
  getApiV1ServerFollowingRouteHandler,
  getApiV1ServerLogsRouteHandler,
  getApiV1ServerRedundancyVideosRouteHandler,
  getApiV1ServerStatsRouteHandler,
  getApiV1UsersIdRouteHandler,
  getApiV1UsersMeAbusesRouteHandler,
  getApiV1UsersMeHistoryVideosRouteHandler,
  getApiV1UsersMeNotificationsRouteHandler,
  getApiV1UsersMeRouteHandler,
  getApiV1UsersMeSubscriptionsExistRouteHandler,
  getApiV1UsersMeSubscriptionsRouteHandler,
  getApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler,
  getApiV1UsersMeSubscriptionsVideosRouteHandler,
  getApiV1UsersMeVideoPlaylistsVideosExistRouteHandler,
  getApiV1UsersMeVideoQuotaUsedRouteHandler,
  getApiV1UsersMeVideosImportsRouteHandler,
  getApiV1UsersMeVideosRouteHandler,
  getApiV1UsersMeVideosVideoIdRatingRouteHandler,
  getApiV1UsersRegistrationsRouteHandler,
  getApiV1UsersRouteHandler,
  getApiV1VideoChannelsChannelHandleFollowersRouteHandler,
  getApiV1VideoChannelsChannelHandleRouteHandler,
  getApiV1VideoChannelsChannelHandleVideoPlaylistsRouteHandler,
  getApiV1VideoChannelsChannelHandleVideosRouteHandler,
  getApiV1VideoChannelsRouteHandler,
  getApiV1VideoPlaylistsPlaylistIdRouteHandler,
  getApiV1VideoPlaylistsPlaylistIdVideosRouteHandler,
  getApiV1VideoPlaylistsPrivaciesRouteHandler,
  getApiV1VideoPlaylistsRouteHandler,
  getApiV1VideosBlacklistRouteHandler,
  getApiV1VideosCategoriesRouteHandler,
  getApiV1VideosIdCaptionsRouteHandler,
  getApiV1VideosIdCommentThreadsRouteHandler,
  getApiV1VideosIdCommentThreadsThreadIdRouteHandler,
  getApiV1VideosIdDescriptionRouteHandler,
  getApiV1VideosIdLiveSessionRouteHandler,
  getApiV1VideosIdRouteHandler,
  getApiV1VideosIdStatsOverallRouteHandler,
  getApiV1VideosIdStatsRetentionRouteHandler,
  getApiV1VideosIdStatsTimeseriesMetricRouteHandler,
  getApiV1VideosLanguagesRouteHandler,
  getApiV1VideosLicencesRouteHandler,
  getApiV1VideosLiveIdRouteHandler,
  getApiV1VideosLiveIdSessionsRouteHandler,
  getApiV1VideosOwnershipRouteHandler,
  getApiV1VideosPrivaciesRouteHandler,
  getApiV1VideosRouteHandler,
  getFeedsSubscriptionsFormatRouteHandler,
  getFeedsVideoCommentsFormatRouteHandler,
  getFeedsVideosFormatRouteHandler,
  getStaticStreamingPlaylistsHlsFilenameRouteHandler,
  getStaticStreamingPlaylistsHlsPrivateFilenameRouteHandler,
  getStaticWebseedFilenameRouteHandler,
  getStaticWebseedPrivateFilenameRouteHandler,
  postApiV1AbusesAbuseIdMessagesRouteHandler,
  postApiV1AbusesRouteHandler,
  postApiV1JobsPauseRouteHandler,
  postApiV1JobsResumeRouteHandler,
  postApiV1MetricsPlaybackRouteHandler,
  postApiV1PluginsInstallRouteHandler,
  postApiV1PluginsUninstallRouteHandler,
  postApiV1PluginsUpdateRouteHandler,
  postApiV1ServerBlocklistAccountsRouteHandler,
  postApiV1ServerBlocklistServersRouteHandler,
  postApiV1ServerFollowersNameWithHostAcceptRouteHandler,
  postApiV1ServerFollowersNameWithHostRejectRouteHandler,
  postApiV1ServerFollowingRouteHandler,
  postApiV1ServerLogsClientRouteHandler,
  postApiV1ServerRedundancyVideosRouteHandler,
  postApiV1UsersAskSendVerifyEmailRouteHandler,
  postApiV1UsersIdTwoFactorConfirmRequestRouteHandler,
  postApiV1UsersIdTwoFactorDisableRouteHandler,
  postApiV1UsersIdTwoFactorRequestRouteHandler,
  postApiV1UsersIdVerifyEmailRouteHandler,
  postApiV1UsersMeAvatarPickRouteHandler,
  postApiV1UsersMeHistoryVideosRemoveRouteHandler,
  postApiV1UsersMeNotificationsReadAllRouteHandler,
  postApiV1UsersMeNotificationsReadRouteHandler,
  postApiV1UsersMeSubscriptionsRouteHandler,
  postApiV1UsersRegisterRouteHandler,
  postApiV1UsersRegistrationsAskSendVerifyEmailRouteHandler,
  postApiV1UsersRegistrationsRegistrationIdAcceptRouteHandler,
  postApiV1UsersRegistrationsRegistrationIdRejectRouteHandler,
  postApiV1UsersRegistrationsRegistrationIdVerifyEmailRouteHandler,
  postApiV1UsersRegistrationsRequestRouteHandler,
  postApiV1UsersRevokeTokenRouteHandler,
  postApiV1UsersRouteHandler,
  postApiV1UsersTokenRouteHandler,
  postApiV1VideoChannelsChannelHandleAvatarPickRouteHandler,
  postApiV1VideoChannelsChannelHandleBannerPickRouteHandler,
  postApiV1VideoChannelsChannelHandleImportVideosRouteHandler,
  postApiV1VideoChannelsRouteHandler,
  postApiV1VideoChannelSyncsChannelSyncIdSyncRouteHandler,
  postApiV1VideoChannelSyncsRouteHandler,
  postApiV1VideoPlaylistsPlaylistIdVideosReorderRouteHandler,
  postApiV1VideoPlaylistsPlaylistIdVideosRouteHandler,
  postApiV1VideoPlaylistsRouteHandler,
  postApiV1VideosIdBlacklistRouteHandler,
  postApiV1VideosIdCommentsCommentIdRouteHandler,
  postApiV1VideosIdCommentThreadsRouteHandler,
  postApiV1VideosIdGiveOwnershipRouteHandler,
  postApiV1VideosIdSourceRouteHandler,
  postApiV1VideosIdStudioEditRouteHandler,
  postApiV1VideosIdTokenRouteHandler,
  postApiV1VideosIdTranscodingRouteHandler,
  postApiV1VideosIdViewsRouteHandler,
  postApiV1VideosImportsIdCancelRouteHandler,
  postApiV1VideosImportsRouteHandler,
  postApiV1VideosLiveRouteHandler,
  postApiV1VideosOwnershipIdAcceptRouteHandler,
  postApiV1VideosOwnershipIdRefuseRouteHandler,
  postApiV1VideosUploadResumableRouteHandler,
  postApiV1VideosUploadRouteHandler,
  putApiV1AbusesAbuseIdRouteHandler,
  putApiV1ConfigCustomRouteHandler,
  putApiV1CustomPagesHomepageInstanceRouteHandler,
  putApiV1PluginsNpmNameSettingsRouteHandler,
  putApiV1ServerRedundancyHostRouteHandler,
  putApiV1UsersIdRouteHandler,
  putApiV1UsersMeNotificationSettingsRouteHandler,
  putApiV1UsersMeRouteHandler,
  putApiV1VideoChannelsChannelHandleRouteHandler,
  putApiV1VideoPlaylistsPlaylistIdRouteHandler,
  putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler,
  putApiV1VideosIdCaptionsCaptionLanguageRouteHandler,
  putApiV1VideosIdRateRouteHandler,
  putApiV1VideosIdRouteHandler,
  putApiV1VideosIdWatchingRouteHandler,
  putApiV1VideosLiveIdRouteHandler,
  putApiV1VideosUploadResumableRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1AbusesRoute, getApiV1AbusesRouteHandler)
  .openapi(postApiV1AbusesRoute, postApiV1AbusesRouteHandler)
  .openapi(deleteApiV1AbusesAbuseIdRoute, deleteApiV1AbusesAbuseIdRouteHandler)
  .openapi(putApiV1AbusesAbuseIdRoute, putApiV1AbusesAbuseIdRouteHandler)
  .openapi(getApiV1AbusesAbuseIdMessagesRoute, getApiV1AbusesAbuseIdMessagesRouteHandler)
  .openapi(postApiV1AbusesAbuseIdMessagesRoute, postApiV1AbusesAbuseIdMessagesRouteHandler)
  .openapi(
    deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute,
    deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRouteHandler,
  )
  .openapi(getApiV1AccountsRoute, getApiV1AccountsRouteHandler)
  .openapi(getApiV1AccountsNameRoute, getApiV1AccountsNameRouteHandler)
  .openapi(getApiV1AccountsNameFollowersRoute, getApiV1AccountsNameFollowersRouteHandler)
  .openapi(getApiV1AccountsNameRatingsRoute, getApiV1AccountsNameRatingsRouteHandler)
  .openapi(
    getApiV1AccountsNameVideoChannelSyncsRoute,
    getApiV1AccountsNameVideoChannelSyncsRouteHandler,
  )
  .openapi(getApiV1AccountsNameVideoChannelsRoute, getApiV1AccountsNameVideoChannelsRouteHandler)
  .openapi(getApiV1AccountsNameVideoPlaylistsRoute, getApiV1AccountsNameVideoPlaylistsRouteHandler)
  .openapi(getApiV1AccountsNameVideosRoute, getApiV1AccountsNameVideosRouteHandler)
  .openapi(getApiV1BlocklistStatusRoute, getApiV1BlocklistStatusRouteHandler)
  .openapi(getApiV1ConfigRoute, getApiV1ConfigRouteHandler)
  .openapi(getApiV1ConfigAboutRoute, getApiV1ConfigAboutRouteHandler)
  .openapi(deleteApiV1ConfigCustomRoute, deleteApiV1ConfigCustomRouteHandler)
  .openapi(getApiV1ConfigCustomRoute, getApiV1ConfigCustomRouteHandler)
  .openapi(putApiV1ConfigCustomRoute, putApiV1ConfigCustomRouteHandler)
  .openapi(
    getApiV1CustomPagesHomepageInstanceRoute,
    getApiV1CustomPagesHomepageInstanceRouteHandler,
  )
  .openapi(
    putApiV1CustomPagesHomepageInstanceRoute,
    putApiV1CustomPagesHomepageInstanceRouteHandler,
  )
  .openapi(postApiV1JobsPauseRoute, postApiV1JobsPauseRouteHandler)
  .openapi(postApiV1JobsResumeRoute, postApiV1JobsResumeRouteHandler)
  .openapi(getApiV1JobsStateRoute, getApiV1JobsStateRouteHandler)
  .openapi(postApiV1MetricsPlaybackRoute, postApiV1MetricsPlaybackRouteHandler)
  .openapi(getApiV1OauthClientsLocalRoute, getApiV1OauthClientsLocalRouteHandler)
  .openapi(getApiV1PluginsRoute, getApiV1PluginsRouteHandler)
  .openapi(getApiV1PluginsAvailableRoute, getApiV1PluginsAvailableRouteHandler)
  .openapi(postApiV1PluginsInstallRoute, postApiV1PluginsInstallRouteHandler)
  .openapi(postApiV1PluginsUninstallRoute, postApiV1PluginsUninstallRouteHandler)
  .openapi(postApiV1PluginsUpdateRoute, postApiV1PluginsUpdateRouteHandler)
  .openapi(getApiV1PluginsNpmNameRoute, getApiV1PluginsNpmNameRouteHandler)
  .openapi(
    getApiV1PluginsNpmNamePublicSettingsRoute,
    getApiV1PluginsNpmNamePublicSettingsRouteHandler,
  )
  .openapi(
    getApiV1PluginsNpmNameRegisteredSettingsRoute,
    getApiV1PluginsNpmNameRegisteredSettingsRouteHandler,
  )
  .openapi(putApiV1PluginsNpmNameSettingsRoute, putApiV1PluginsNpmNameSettingsRouteHandler)
  .openapi(getApiV1SearchVideoChannelsRoute, getApiV1SearchVideoChannelsRouteHandler)
  .openapi(getApiV1SearchVideoPlaylistsRoute, getApiV1SearchVideoPlaylistsRouteHandler)
  .openapi(getApiV1SearchVideosRoute, getApiV1SearchVideosRouteHandler)
  .openapi(getApiV1ServerAuditLogsRoute, getApiV1ServerAuditLogsRouteHandler)
  .openapi(getApiV1ServerBlocklistAccountsRoute, getApiV1ServerBlocklistAccountsRouteHandler)
  .openapi(postApiV1ServerBlocklistAccountsRoute, postApiV1ServerBlocklistAccountsRouteHandler)
  .openapi(
    deleteApiV1ServerBlocklistAccountsAccountNameRoute,
    deleteApiV1ServerBlocklistAccountsAccountNameRouteHandler,
  )
  .openapi(getApiV1ServerBlocklistServersRoute, getApiV1ServerBlocklistServersRouteHandler)
  .openapi(postApiV1ServerBlocklistServersRoute, postApiV1ServerBlocklistServersRouteHandler)
  .openapi(
    deleteApiV1ServerBlocklistServersHostRoute,
    deleteApiV1ServerBlocklistServersHostRouteHandler,
  )
  .openapi(getApiV1ServerFollowersRoute, getApiV1ServerFollowersRouteHandler)
  .openapi(
    deleteApiV1ServerFollowersNameWithHostRoute,
    deleteApiV1ServerFollowersNameWithHostRouteHandler,
  )
  .openapi(
    postApiV1ServerFollowersNameWithHostAcceptRoute,
    postApiV1ServerFollowersNameWithHostAcceptRouteHandler,
  )
  .openapi(
    postApiV1ServerFollowersNameWithHostRejectRoute,
    postApiV1ServerFollowersNameWithHostRejectRouteHandler,
  )
  .openapi(getApiV1ServerFollowingRoute, getApiV1ServerFollowingRouteHandler)
  .openapi(postApiV1ServerFollowingRoute, postApiV1ServerFollowingRouteHandler)
  .openapi(
    deleteApiV1ServerFollowingHostOrHandleRoute,
    deleteApiV1ServerFollowingHostOrHandleRouteHandler,
  )
  .openapi(getApiV1ServerLogsRoute, getApiV1ServerLogsRouteHandler)
  .openapi(postApiV1ServerLogsClientRoute, postApiV1ServerLogsClientRouteHandler)
  .openapi(getApiV1ServerRedundancyVideosRoute, getApiV1ServerRedundancyVideosRouteHandler)
  .openapi(postApiV1ServerRedundancyVideosRoute, postApiV1ServerRedundancyVideosRouteHandler)
  .openapi(
    deleteApiV1ServerRedundancyVideosRedundancyIdRoute,
    deleteApiV1ServerRedundancyVideosRedundancyIdRouteHandler,
  )
  .openapi(putApiV1ServerRedundancyHostRoute, putApiV1ServerRedundancyHostRouteHandler)
  .openapi(getApiV1ServerStatsRoute, getApiV1ServerStatsRouteHandler)
  .openapi(getApiV1UsersRoute, getApiV1UsersRouteHandler)
  .openapi(postApiV1UsersRoute, postApiV1UsersRouteHandler)
  .openapi(postApiV1UsersAskSendVerifyEmailRoute, postApiV1UsersAskSendVerifyEmailRouteHandler)
  .openapi(getApiV1UsersMeRoute, getApiV1UsersMeRouteHandler)
  .openapi(putApiV1UsersMeRoute, putApiV1UsersMeRouteHandler)
  .openapi(getApiV1UsersMeAbusesRoute, getApiV1UsersMeAbusesRouteHandler)
  .openapi(deleteApiV1UsersMeAvatarRoute, deleteApiV1UsersMeAvatarRouteHandler)
  .openapi(postApiV1UsersMeAvatarPickRoute, postApiV1UsersMeAvatarPickRouteHandler)
  .openapi(getApiV1UsersMeHistoryVideosRoute, getApiV1UsersMeHistoryVideosRouteHandler)
  .openapi(
    postApiV1UsersMeHistoryVideosRemoveRoute,
    postApiV1UsersMeHistoryVideosRemoveRouteHandler,
  )
  .openapi(
    deleteApiV1UsersMeHistoryVideosVideoIdRoute,
    deleteApiV1UsersMeHistoryVideosVideoIdRouteHandler,
  )
  .openapi(
    putApiV1UsersMeNotificationSettingsRoute,
    putApiV1UsersMeNotificationSettingsRouteHandler,
  )
  .openapi(getApiV1UsersMeNotificationsRoute, getApiV1UsersMeNotificationsRouteHandler)
  .openapi(postApiV1UsersMeNotificationsReadRoute, postApiV1UsersMeNotificationsReadRouteHandler)
  .openapi(
    postApiV1UsersMeNotificationsReadAllRoute,
    postApiV1UsersMeNotificationsReadAllRouteHandler,
  )
  .openapi(getApiV1UsersMeSubscriptionsRoute, getApiV1UsersMeSubscriptionsRouteHandler)
  .openapi(postApiV1UsersMeSubscriptionsRoute, postApiV1UsersMeSubscriptionsRouteHandler)
  .openapi(getApiV1UsersMeSubscriptionsExistRoute, getApiV1UsersMeSubscriptionsExistRouteHandler)
  .openapi(getApiV1UsersMeSubscriptionsVideosRoute, getApiV1UsersMeSubscriptionsVideosRouteHandler)
  .openapi(
    deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
    deleteApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler,
  )
  .openapi(
    getApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
    getApiV1UsersMeSubscriptionsSubscriptionHandleRouteHandler,
  )
  .openapi(
    getApiV1UsersMeVideoPlaylistsVideosExistRoute,
    getApiV1UsersMeVideoPlaylistsVideosExistRouteHandler,
  )
  .openapi(getApiV1UsersMeVideoQuotaUsedRoute, getApiV1UsersMeVideoQuotaUsedRouteHandler)
  .openapi(getApiV1UsersMeVideosRoute, getApiV1UsersMeVideosRouteHandler)
  .openapi(getApiV1UsersMeVideosImportsRoute, getApiV1UsersMeVideosImportsRouteHandler)
  .openapi(getApiV1UsersMeVideosVideoIdRatingRoute, getApiV1UsersMeVideosVideoIdRatingRouteHandler)
  .openapi(postApiV1UsersRegisterRoute, postApiV1UsersRegisterRouteHandler)
  .openapi(getApiV1UsersRegistrationsRoute, getApiV1UsersRegistrationsRouteHandler)
  .openapi(
    postApiV1UsersRegistrationsAskSendVerifyEmailRoute,
    postApiV1UsersRegistrationsAskSendVerifyEmailRouteHandler,
  )
  .openapi(postApiV1UsersRegistrationsRequestRoute, postApiV1UsersRegistrationsRequestRouteHandler)
  .openapi(
    deleteApiV1UsersRegistrationsRegistrationIdRoute,
    deleteApiV1UsersRegistrationsRegistrationIdRouteHandler,
  )
  .openapi(
    postApiV1UsersRegistrationsRegistrationIdAcceptRoute,
    postApiV1UsersRegistrationsRegistrationIdAcceptRouteHandler,
  )
  .openapi(
    postApiV1UsersRegistrationsRegistrationIdRejectRoute,
    postApiV1UsersRegistrationsRegistrationIdRejectRouteHandler,
  )
  .openapi(
    postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute,
    postApiV1UsersRegistrationsRegistrationIdVerifyEmailRouteHandler,
  )
  .openapi(postApiV1UsersRevokeTokenRoute, postApiV1UsersRevokeTokenRouteHandler)
  .openapi(postApiV1UsersTokenRoute, postApiV1UsersTokenRouteHandler)
  .openapi(deleteApiV1UsersIdRoute, deleteApiV1UsersIdRouteHandler)
  .openapi(getApiV1UsersIdRoute, getApiV1UsersIdRouteHandler)
  .openapi(putApiV1UsersIdRoute, putApiV1UsersIdRouteHandler)
  .openapi(
    postApiV1UsersIdTwoFactorConfirmRequestRoute,
    postApiV1UsersIdTwoFactorConfirmRequestRouteHandler,
  )
  .openapi(postApiV1UsersIdTwoFactorDisableRoute, postApiV1UsersIdTwoFactorDisableRouteHandler)
  .openapi(postApiV1UsersIdTwoFactorRequestRoute, postApiV1UsersIdTwoFactorRequestRouteHandler)
  .openapi(postApiV1UsersIdVerifyEmailRoute, postApiV1UsersIdVerifyEmailRouteHandler)
  .openapi(postApiV1VideoChannelSyncsRoute, postApiV1VideoChannelSyncsRouteHandler)
  .openapi(
    deleteApiV1VideoChannelSyncsChannelSyncIdRoute,
    deleteApiV1VideoChannelSyncsChannelSyncIdRouteHandler,
  )
  .openapi(
    postApiV1VideoChannelSyncsChannelSyncIdSyncRoute,
    postApiV1VideoChannelSyncsChannelSyncIdSyncRouteHandler,
  )
  .openapi(getApiV1VideoChannelsRoute, getApiV1VideoChannelsRouteHandler)
  .openapi(postApiV1VideoChannelsRoute, postApiV1VideoChannelsRouteHandler)
  .openapi(
    deleteApiV1VideoChannelsChannelHandleRoute,
    deleteApiV1VideoChannelsChannelHandleRouteHandler,
  )
  .openapi(getApiV1VideoChannelsChannelHandleRoute, getApiV1VideoChannelsChannelHandleRouteHandler)
  .openapi(putApiV1VideoChannelsChannelHandleRoute, putApiV1VideoChannelsChannelHandleRouteHandler)
  .openapi(
    deleteApiV1VideoChannelsChannelHandleAvatarRoute,
    deleteApiV1VideoChannelsChannelHandleAvatarRouteHandler,
  )
  .openapi(
    postApiV1VideoChannelsChannelHandleAvatarPickRoute,
    postApiV1VideoChannelsChannelHandleAvatarPickRouteHandler,
  )
  .openapi(
    deleteApiV1VideoChannelsChannelHandleBannerRoute,
    deleteApiV1VideoChannelsChannelHandleBannerRouteHandler,
  )
  .openapi(
    postApiV1VideoChannelsChannelHandleBannerPickRoute,
    postApiV1VideoChannelsChannelHandleBannerPickRouteHandler,
  )
  .openapi(
    getApiV1VideoChannelsChannelHandleFollowersRoute,
    getApiV1VideoChannelsChannelHandleFollowersRouteHandler,
  )
  .openapi(
    postApiV1VideoChannelsChannelHandleImportVideosRoute,
    postApiV1VideoChannelsChannelHandleImportVideosRouteHandler,
  )
  .openapi(
    getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute,
    getApiV1VideoChannelsChannelHandleVideoPlaylistsRouteHandler,
  )
  .openapi(
    getApiV1VideoChannelsChannelHandleVideosRoute,
    getApiV1VideoChannelsChannelHandleVideosRouteHandler,
  )
  .openapi(getApiV1VideoPlaylistsRoute, getApiV1VideoPlaylistsRouteHandler)
  .openapi(postApiV1VideoPlaylistsRoute, postApiV1VideoPlaylistsRouteHandler)
  .openapi(getApiV1VideoPlaylistsPrivaciesRoute, getApiV1VideoPlaylistsPrivaciesRouteHandler)
  .openapi(
    deleteApiV1VideoPlaylistsPlaylistIdRoute,
    deleteApiV1VideoPlaylistsPlaylistIdRouteHandler,
  )
  .openapi(getApiV1VideoPlaylistsPlaylistIdRoute, getApiV1VideoPlaylistsPlaylistIdRouteHandler)
  .openapi(putApiV1VideoPlaylistsPlaylistIdRoute, putApiV1VideoPlaylistsPlaylistIdRouteHandler)
  .openapi(
    getApiV1VideoPlaylistsPlaylistIdVideosRoute,
    getApiV1VideoPlaylistsPlaylistIdVideosRouteHandler,
  )
  .openapi(
    postApiV1VideoPlaylistsPlaylistIdVideosRoute,
    postApiV1VideoPlaylistsPlaylistIdVideosRouteHandler,
  )
  .openapi(
    postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute,
    postApiV1VideoPlaylistsPlaylistIdVideosReorderRouteHandler,
  )
  .openapi(
    deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
    deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler,
  )
  .openapi(
    putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
    putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRouteHandler,
  )
  .openapi(getApiV1VideosRoute, getApiV1VideosRouteHandler)
  .openapi(getApiV1VideosBlacklistRoute, getApiV1VideosBlacklistRouteHandler)
  .openapi(getApiV1VideosCategoriesRoute, getApiV1VideosCategoriesRouteHandler)
  .openapi(postApiV1VideosImportsRoute, postApiV1VideosImportsRouteHandler)
  .openapi(deleteApiV1VideosImportsIdRoute, deleteApiV1VideosImportsIdRouteHandler)
  .openapi(postApiV1VideosImportsIdCancelRoute, postApiV1VideosImportsIdCancelRouteHandler)
  .openapi(getApiV1VideosLanguagesRoute, getApiV1VideosLanguagesRouteHandler)
  .openapi(getApiV1VideosLicencesRoute, getApiV1VideosLicencesRouteHandler)
  .openapi(postApiV1VideosLiveRoute, postApiV1VideosLiveRouteHandler)
  .openapi(getApiV1VideosLiveIdRoute, getApiV1VideosLiveIdRouteHandler)
  .openapi(putApiV1VideosLiveIdRoute, putApiV1VideosLiveIdRouteHandler)
  .openapi(getApiV1VideosLiveIdSessionsRoute, getApiV1VideosLiveIdSessionsRouteHandler)
  .openapi(getApiV1VideosOwnershipRoute, getApiV1VideosOwnershipRouteHandler)
  .openapi(postApiV1VideosOwnershipIdAcceptRoute, postApiV1VideosOwnershipIdAcceptRouteHandler)
  .openapi(postApiV1VideosOwnershipIdRefuseRoute, postApiV1VideosOwnershipIdRefuseRouteHandler)
  .openapi(getApiV1VideosPrivaciesRoute, getApiV1VideosPrivaciesRouteHandler)
  .openapi(postApiV1VideosUploadRoute, postApiV1VideosUploadRouteHandler)
  .openapi(deleteApiV1VideosUploadResumableRoute, deleteApiV1VideosUploadResumableRouteHandler)
  .openapi(postApiV1VideosUploadResumableRoute, postApiV1VideosUploadResumableRouteHandler)
  .openapi(putApiV1VideosUploadResumableRoute, putApiV1VideosUploadResumableRouteHandler)
  .openapi(deleteApiV1VideosIdRoute, deleteApiV1VideosIdRouteHandler)
  .openapi(getApiV1VideosIdRoute, getApiV1VideosIdRouteHandler)
  .openapi(putApiV1VideosIdRoute, putApiV1VideosIdRouteHandler)
  .openapi(deleteApiV1VideosIdBlacklistRoute, deleteApiV1VideosIdBlacklistRouteHandler)
  .openapi(postApiV1VideosIdBlacklistRoute, postApiV1VideosIdBlacklistRouteHandler)
  .openapi(getApiV1VideosIdCaptionsRoute, getApiV1VideosIdCaptionsRouteHandler)
  .openapi(
    deleteApiV1VideosIdCaptionsCaptionLanguageRoute,
    deleteApiV1VideosIdCaptionsCaptionLanguageRouteHandler,
  )
  .openapi(
    putApiV1VideosIdCaptionsCaptionLanguageRoute,
    putApiV1VideosIdCaptionsCaptionLanguageRouteHandler,
  )
  .openapi(getApiV1VideosIdCommentThreadsRoute, getApiV1VideosIdCommentThreadsRouteHandler)
  .openapi(postApiV1VideosIdCommentThreadsRoute, postApiV1VideosIdCommentThreadsRouteHandler)
  .openapi(
    getApiV1VideosIdCommentThreadsThreadIdRoute,
    getApiV1VideosIdCommentThreadsThreadIdRouteHandler,
  )
  .openapi(
    deleteApiV1VideosIdCommentsCommentIdRoute,
    deleteApiV1VideosIdCommentsCommentIdRouteHandler,
  )
  .openapi(postApiV1VideosIdCommentsCommentIdRoute, postApiV1VideosIdCommentsCommentIdRouteHandler)
  .openapi(getApiV1VideosIdDescriptionRoute, getApiV1VideosIdDescriptionRouteHandler)
  .openapi(postApiV1VideosIdGiveOwnershipRoute, postApiV1VideosIdGiveOwnershipRouteHandler)
  .openapi(deleteApiV1VideosIdHlsRoute, deleteApiV1VideosIdHlsRouteHandler)
  .openapi(getApiV1VideosIdLiveSessionRoute, getApiV1VideosIdLiveSessionRouteHandler)
  .openapi(putApiV1VideosIdRateRoute, putApiV1VideosIdRateRouteHandler)
  .openapi(postApiV1VideosIdSourceRoute, postApiV1VideosIdSourceRouteHandler)
  .openapi(getApiV1VideosIdStatsOverallRoute, getApiV1VideosIdStatsOverallRouteHandler)
  .openapi(getApiV1VideosIdStatsRetentionRoute, getApiV1VideosIdStatsRetentionRouteHandler)
  .openapi(
    getApiV1VideosIdStatsTimeseriesMetricRoute,
    getApiV1VideosIdStatsTimeseriesMetricRouteHandler,
  )
  .openapi(postApiV1VideosIdStudioEditRoute, postApiV1VideosIdStudioEditRouteHandler)
  .openapi(postApiV1VideosIdTokenRoute, postApiV1VideosIdTokenRouteHandler)
  .openapi(postApiV1VideosIdTranscodingRoute, postApiV1VideosIdTranscodingRouteHandler)
  .openapi(postApiV1VideosIdViewsRoute, postApiV1VideosIdViewsRouteHandler)
  .openapi(putApiV1VideosIdWatchingRoute, putApiV1VideosIdWatchingRouteHandler)
  .openapi(deleteApiV1VideosIdWebtorrentRoute, deleteApiV1VideosIdWebtorrentRouteHandler)
  .openapi(getFeedsSubscriptionsFormatRoute, getFeedsSubscriptionsFormatRouteHandler)
  .openapi(getFeedsVideoCommentsFormatRoute, getFeedsVideoCommentsFormatRouteHandler)
  .openapi(getFeedsVideosFormatRoute, getFeedsVideosFormatRouteHandler)
  .openapi(
    getStaticStreamingPlaylistsHlsPrivateFilenameRoute,
    getStaticStreamingPlaylistsHlsPrivateFilenameRouteHandler,
  )
  .openapi(
    getStaticStreamingPlaylistsHlsFilenameRoute,
    getStaticStreamingPlaylistsHlsFilenameRouteHandler,
  )
  .openapi(getStaticWebseedPrivateFilenameRoute, getStaticWebseedPrivateFilenameRouteHandler)
  .openapi(getStaticWebseedFilenameRoute, getStaticWebseedFilenameRouteHandler)

export default app
