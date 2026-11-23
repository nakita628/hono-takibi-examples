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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbusesAbuseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbusesAbuseIdRoute, (c) => {
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
  .openapi(getApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoChannelSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BlocklistStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigCustomRoute, (c) => {
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
  .openapi(postApiV1MetricsPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OauthClientsLocalRoute, (c) => {
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
  .openapi(postApiV1PluginsUninstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNamePublicSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNameRegisteredSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PluginsNpmNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerAuditLogsRoute, (c) => {
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
  .openapi(getApiV1ServerFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerFollowersNameWithHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersNameWithHostAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersNameWithHostRejectRoute, (c) => {
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
  .openapi(getApiV1ServerLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerLogsClientRoute, (c) => {
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
  .openapi(putApiV1ServerRedundancyHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersAskSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeAbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeHistoryVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeHistoryVideosRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeHistoryVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersMeNotificationSettingsRoute, (c) => {
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
  .openapi(deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsSubscriptionHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideoPlaylistsVideosExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideoQuotaUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosVideoIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsAskSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersRegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRevokeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersTokenRoute, (c) => {
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
  .openapi(postApiV1UsersIdTwoFactorConfirmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTwoFactorRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdVerifyEmailRoute, (c) => {
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
  .openapi(getApiV1VideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsChannelHandleBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleBannerPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleImportVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
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
  .openapi(deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLicencesRoute, (c) => {
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
  .openapi(getApiV1VideosOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdRefuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdCaptionsCaptionLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdCaptionsCaptionLanguageRoute, (c) => {
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
  .openapi(deleteApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdGiveOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdHlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdLiveSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsOverallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsTimeseriesMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdStudioEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdTranscodingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdWebtorrentRoute, (c) => {
    throw new Error('Not implemented')
  })
