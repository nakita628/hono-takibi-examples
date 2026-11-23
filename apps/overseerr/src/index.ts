import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueCommentCommentIdRoute,
  deleteIssueIssueIdRoute,
  deleteMediaMediaIdRoute,
  deleteRequestRequestIdRoute,
  deleteSettingsDiscoverSliderIdRoute,
  deleteSettingsRadarrRadarrIdRoute,
  deleteSettingsSonarrSonarrIdRoute,
  deleteUserUserIdPushSubscriptionEndpointRoute,
  deleteUserUserIdRoute,
  getAuthMeRoute,
  getBackdropsRoute,
  getCollectionCollectionIdRoute,
  getDiscoverGenresliderMovieRoute,
  getDiscoverGenresliderTvRoute,
  getDiscoverKeywordKeywordIdMoviesRoute,
  getDiscoverMoviesGenreGenreIdRoute,
  getDiscoverMoviesLanguageLanguageRoute,
  getDiscoverMoviesRoute,
  getDiscoverMoviesStudioStudioIdRoute,
  getDiscoverMoviesUpcomingRoute,
  getDiscoverTrendingRoute,
  getDiscoverTvGenreGenreIdRoute,
  getDiscoverTvLanguageLanguageRoute,
  getDiscoverTvNetworkNetworkIdRoute,
  getDiscoverTvRoute,
  getDiscoverTvUpcomingRoute,
  getDiscoverWatchlistRoute,
  getGenresMovieRoute,
  getGenresTvRoute,
  getIssueCommentCommentIdRoute,
  getIssueCountRoute,
  getIssueIssueIdRoute,
  getIssueRoute,
  getKeywordKeywordIdRoute,
  getLanguagesRoute,
  getMediaMediaIdWatchDataRoute,
  getMediaRoute,
  getMovieMovieIdRatingscombinedRoute,
  getMovieMovieIdRatingsRoute,
  getMovieMovieIdRecommendationsRoute,
  getMovieMovieIdRoute,
  getMovieMovieIdSimilarRoute,
  getNetworkNetworkIdRoute,
  getPersonPersonIdCombinedCreditsRoute,
  getPersonPersonIdRoute,
  getRegionsRoute,
  getRequestCountRoute,
  getRequestRequestIdRoute,
  getRequestRoute,
  getSearchCompanyRoute,
  getSearchKeywordRoute,
  getSearchRoute,
  getServiceRadarrRadarrIdRoute,
  getServiceRadarrRoute,
  getServiceSonarrLookupTmdbIdRoute,
  getServiceSonarrRoute,
  getServiceSonarrSonarrIdRoute,
  getSettingsAboutRoute,
  getSettingsCacheRoute,
  getSettingsDiscoverResetRoute,
  getSettingsDiscoverRoute,
  getSettingsJobsRoute,
  getSettingsLogsRoute,
  getSettingsMainRoute,
  getSettingsNotificationsDiscordRoute,
  getSettingsNotificationsEmailRoute,
  getSettingsNotificationsGotifyRoute,
  getSettingsNotificationsLunaseaRoute,
  getSettingsNotificationsPushbulletRoute,
  getSettingsNotificationsPushoverRoute,
  getSettingsNotificationsPushoverSoundsRoute,
  getSettingsNotificationsSlackRoute,
  getSettingsNotificationsTelegramRoute,
  getSettingsNotificationsWebhookRoute,
  getSettingsNotificationsWebpushRoute,
  getSettingsPlexDevicesServersRoute,
  getSettingsPlexLibraryRoute,
  getSettingsPlexRoute,
  getSettingsPlexSyncRoute,
  getSettingsPlexUsersRoute,
  getSettingsPublicRoute,
  getSettingsRadarrRadarrIdProfilesRoute,
  getSettingsRadarrRoute,
  getSettingsSonarrRoute,
  getSettingsTautulliRoute,
  getStatusAppdataRoute,
  getStatusRoute,
  getStudioStudioIdRoute,
  getTvTvIdRatingsRoute,
  getTvTvIdRecommendationsRoute,
  getTvTvIdRoute,
  getTvTvIdSeasonSeasonIdRoute,
  getTvTvIdSimilarRoute,
  getUserRoute,
  getUserUserIdPushSubscriptionEndpointRoute,
  getUserUserIdPushSubscriptionsRoute,
  getUserUserIdQuotaRoute,
  getUserUserIdRequestsRoute,
  getUserUserIdRoute,
  getUserUserIdSettingsMainRoute,
  getUserUserIdSettingsNotificationsRoute,
  getUserUserIdSettingsPasswordRoute,
  getUserUserIdSettingsPermissionsRoute,
  getUserUserIdWatchDataRoute,
  getUserUserIdWatchlistRoute,
  getWatchprovidersMoviesRoute,
  getWatchprovidersRegionsRoute,
  getWatchprovidersTvRoute,
  postAuthLocalRoute,
  postAuthLogoutRoute,
  postAuthPlexRoute,
  postAuthResetPasswordGuidRoute,
  postAuthResetPasswordRoute,
  postIssueIssueIdCommentRoute,
  postIssueIssueIdStatusRoute,
  postIssueRoute,
  postMediaMediaIdStatusRoute,
  postRequestRequestIdRetryRoute,
  postRequestRequestIdStatusRoute,
  postRequestRoute,
  postSettingsCacheCacheIdFlushRoute,
  postSettingsDiscoverAddRoute,
  postSettingsDiscoverRoute,
  postSettingsInitializeRoute,
  postSettingsJobsJobIdCancelRoute,
  postSettingsJobsJobIdRunRoute,
  postSettingsJobsJobIdScheduleRoute,
  postSettingsMainRegenerateRoute,
  postSettingsMainRoute,
  postSettingsNotificationsDiscordRoute,
  postSettingsNotificationsDiscordTestRoute,
  postSettingsNotificationsEmailRoute,
  postSettingsNotificationsEmailTestRoute,
  postSettingsNotificationsGotifyRoute,
  postSettingsNotificationsGotifyTestRoute,
  postSettingsNotificationsLunaseaRoute,
  postSettingsNotificationsLunaseaTestRoute,
  postSettingsNotificationsPushbulletRoute,
  postSettingsNotificationsPushbulletTestRoute,
  postSettingsNotificationsPushoverRoute,
  postSettingsNotificationsPushoverTestRoute,
  postSettingsNotificationsSlackRoute,
  postSettingsNotificationsSlackTestRoute,
  postSettingsNotificationsTelegramRoute,
  postSettingsNotificationsTelegramTestRoute,
  postSettingsNotificationsWebhookRoute,
  postSettingsNotificationsWebhookTestRoute,
  postSettingsNotificationsWebpushRoute,
  postSettingsNotificationsWebpushTestRoute,
  postSettingsPlexRoute,
  postSettingsPlexSyncRoute,
  postSettingsRadarrRoute,
  postSettingsRadarrTestRoute,
  postSettingsSonarrRoute,
  postSettingsSonarrTestRoute,
  postSettingsTautulliRoute,
  postUserImportFromPlexRoute,
  postUserRegisterPushSubscriptionRoute,
  postUserRoute,
  postUserUserIdSettingsMainRoute,
  postUserUserIdSettingsNotificationsRoute,
  postUserUserIdSettingsPasswordRoute,
  postUserUserIdSettingsPermissionsRoute,
  putIssueCommentCommentIdRoute,
  putRequestRequestIdRoute,
  putSettingsDiscoverSliderIdRoute,
  putSettingsRadarrRadarrIdRoute,
  putSettingsSonarrSonarrIdRoute,
  putUserRoute,
  putUserUserIdRoute,
} from './routes'
import {
  deleteIssueCommentCommentIdRouteHandler,
  deleteIssueIssueIdRouteHandler,
  deleteMediaMediaIdRouteHandler,
  deleteRequestRequestIdRouteHandler,
  deleteSettingsDiscoverSliderIdRouteHandler,
  deleteSettingsRadarrRadarrIdRouteHandler,
  deleteSettingsSonarrSonarrIdRouteHandler,
  deleteUserUserIdPushSubscriptionEndpointRouteHandler,
  deleteUserUserIdRouteHandler,
  getAuthMeRouteHandler,
  getBackdropsRouteHandler,
  getCollectionCollectionIdRouteHandler,
  getDiscoverGenresliderMovieRouteHandler,
  getDiscoverGenresliderTvRouteHandler,
  getDiscoverKeywordKeywordIdMoviesRouteHandler,
  getDiscoverMoviesGenreGenreIdRouteHandler,
  getDiscoverMoviesLanguageLanguageRouteHandler,
  getDiscoverMoviesRouteHandler,
  getDiscoverMoviesStudioStudioIdRouteHandler,
  getDiscoverMoviesUpcomingRouteHandler,
  getDiscoverTrendingRouteHandler,
  getDiscoverTvGenreGenreIdRouteHandler,
  getDiscoverTvLanguageLanguageRouteHandler,
  getDiscoverTvNetworkNetworkIdRouteHandler,
  getDiscoverTvRouteHandler,
  getDiscoverTvUpcomingRouteHandler,
  getDiscoverWatchlistRouteHandler,
  getGenresMovieRouteHandler,
  getGenresTvRouteHandler,
  getIssueCommentCommentIdRouteHandler,
  getIssueCountRouteHandler,
  getIssueIssueIdRouteHandler,
  getIssueRouteHandler,
  getKeywordKeywordIdRouteHandler,
  getLanguagesRouteHandler,
  getMediaMediaIdWatchDataRouteHandler,
  getMediaRouteHandler,
  getMovieMovieIdRatingscombinedRouteHandler,
  getMovieMovieIdRatingsRouteHandler,
  getMovieMovieIdRecommendationsRouteHandler,
  getMovieMovieIdRouteHandler,
  getMovieMovieIdSimilarRouteHandler,
  getNetworkNetworkIdRouteHandler,
  getPersonPersonIdCombinedCreditsRouteHandler,
  getPersonPersonIdRouteHandler,
  getRegionsRouteHandler,
  getRequestCountRouteHandler,
  getRequestRequestIdRouteHandler,
  getRequestRouteHandler,
  getSearchCompanyRouteHandler,
  getSearchKeywordRouteHandler,
  getSearchRouteHandler,
  getServiceRadarrRadarrIdRouteHandler,
  getServiceRadarrRouteHandler,
  getServiceSonarrLookupTmdbIdRouteHandler,
  getServiceSonarrRouteHandler,
  getServiceSonarrSonarrIdRouteHandler,
  getSettingsAboutRouteHandler,
  getSettingsCacheRouteHandler,
  getSettingsDiscoverResetRouteHandler,
  getSettingsDiscoverRouteHandler,
  getSettingsJobsRouteHandler,
  getSettingsLogsRouteHandler,
  getSettingsMainRouteHandler,
  getSettingsNotificationsDiscordRouteHandler,
  getSettingsNotificationsEmailRouteHandler,
  getSettingsNotificationsGotifyRouteHandler,
  getSettingsNotificationsLunaseaRouteHandler,
  getSettingsNotificationsPushbulletRouteHandler,
  getSettingsNotificationsPushoverRouteHandler,
  getSettingsNotificationsPushoverSoundsRouteHandler,
  getSettingsNotificationsSlackRouteHandler,
  getSettingsNotificationsTelegramRouteHandler,
  getSettingsNotificationsWebhookRouteHandler,
  getSettingsNotificationsWebpushRouteHandler,
  getSettingsPlexDevicesServersRouteHandler,
  getSettingsPlexLibraryRouteHandler,
  getSettingsPlexRouteHandler,
  getSettingsPlexSyncRouteHandler,
  getSettingsPlexUsersRouteHandler,
  getSettingsPublicRouteHandler,
  getSettingsRadarrRadarrIdProfilesRouteHandler,
  getSettingsRadarrRouteHandler,
  getSettingsSonarrRouteHandler,
  getSettingsTautulliRouteHandler,
  getStatusAppdataRouteHandler,
  getStatusRouteHandler,
  getStudioStudioIdRouteHandler,
  getTvTvIdRatingsRouteHandler,
  getTvTvIdRecommendationsRouteHandler,
  getTvTvIdRouteHandler,
  getTvTvIdSeasonSeasonIdRouteHandler,
  getTvTvIdSimilarRouteHandler,
  getUserRouteHandler,
  getUserUserIdPushSubscriptionEndpointRouteHandler,
  getUserUserIdPushSubscriptionsRouteHandler,
  getUserUserIdQuotaRouteHandler,
  getUserUserIdRequestsRouteHandler,
  getUserUserIdRouteHandler,
  getUserUserIdSettingsMainRouteHandler,
  getUserUserIdSettingsNotificationsRouteHandler,
  getUserUserIdSettingsPasswordRouteHandler,
  getUserUserIdSettingsPermissionsRouteHandler,
  getUserUserIdWatchDataRouteHandler,
  getUserUserIdWatchlistRouteHandler,
  getWatchprovidersMoviesRouteHandler,
  getWatchprovidersRegionsRouteHandler,
  getWatchprovidersTvRouteHandler,
  postAuthLocalRouteHandler,
  postAuthLogoutRouteHandler,
  postAuthPlexRouteHandler,
  postAuthResetPasswordGuidRouteHandler,
  postAuthResetPasswordRouteHandler,
  postIssueIssueIdCommentRouteHandler,
  postIssueIssueIdStatusRouteHandler,
  postIssueRouteHandler,
  postMediaMediaIdStatusRouteHandler,
  postRequestRequestIdRetryRouteHandler,
  postRequestRequestIdStatusRouteHandler,
  postRequestRouteHandler,
  postSettingsCacheCacheIdFlushRouteHandler,
  postSettingsDiscoverAddRouteHandler,
  postSettingsDiscoverRouteHandler,
  postSettingsInitializeRouteHandler,
  postSettingsJobsJobIdCancelRouteHandler,
  postSettingsJobsJobIdRunRouteHandler,
  postSettingsJobsJobIdScheduleRouteHandler,
  postSettingsMainRegenerateRouteHandler,
  postSettingsMainRouteHandler,
  postSettingsNotificationsDiscordRouteHandler,
  postSettingsNotificationsDiscordTestRouteHandler,
  postSettingsNotificationsEmailRouteHandler,
  postSettingsNotificationsEmailTestRouteHandler,
  postSettingsNotificationsGotifyRouteHandler,
  postSettingsNotificationsGotifyTestRouteHandler,
  postSettingsNotificationsLunaseaRouteHandler,
  postSettingsNotificationsLunaseaTestRouteHandler,
  postSettingsNotificationsPushbulletRouteHandler,
  postSettingsNotificationsPushbulletTestRouteHandler,
  postSettingsNotificationsPushoverRouteHandler,
  postSettingsNotificationsPushoverTestRouteHandler,
  postSettingsNotificationsSlackRouteHandler,
  postSettingsNotificationsSlackTestRouteHandler,
  postSettingsNotificationsTelegramRouteHandler,
  postSettingsNotificationsTelegramTestRouteHandler,
  postSettingsNotificationsWebhookRouteHandler,
  postSettingsNotificationsWebhookTestRouteHandler,
  postSettingsNotificationsWebpushRouteHandler,
  postSettingsNotificationsWebpushTestRouteHandler,
  postSettingsPlexRouteHandler,
  postSettingsPlexSyncRouteHandler,
  postSettingsRadarrRouteHandler,
  postSettingsRadarrTestRouteHandler,
  postSettingsSonarrRouteHandler,
  postSettingsSonarrTestRouteHandler,
  postSettingsTautulliRouteHandler,
  postUserImportFromPlexRouteHandler,
  postUserRegisterPushSubscriptionRouteHandler,
  postUserRouteHandler,
  postUserUserIdSettingsMainRouteHandler,
  postUserUserIdSettingsNotificationsRouteHandler,
  postUserUserIdSettingsPasswordRouteHandler,
  postUserUserIdSettingsPermissionsRouteHandler,
  putIssueCommentCommentIdRouteHandler,
  putRequestRequestIdRouteHandler,
  putSettingsDiscoverSliderIdRouteHandler,
  putSettingsRadarrRadarrIdRouteHandler,
  putSettingsSonarrSonarrIdRouteHandler,
  putUserRouteHandler,
  putUserUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getStatusAppdataRoute, getStatusAppdataRouteHandler)
  .openapi(getSettingsMainRoute, getSettingsMainRouteHandler)
  .openapi(postSettingsMainRoute, postSettingsMainRouteHandler)
  .openapi(postSettingsMainRegenerateRoute, postSettingsMainRegenerateRouteHandler)
  .openapi(getSettingsPlexRoute, getSettingsPlexRouteHandler)
  .openapi(postSettingsPlexRoute, postSettingsPlexRouteHandler)
  .openapi(getSettingsPlexLibraryRoute, getSettingsPlexLibraryRouteHandler)
  .openapi(getSettingsPlexSyncRoute, getSettingsPlexSyncRouteHandler)
  .openapi(postSettingsPlexSyncRoute, postSettingsPlexSyncRouteHandler)
  .openapi(getSettingsPlexDevicesServersRoute, getSettingsPlexDevicesServersRouteHandler)
  .openapi(getSettingsPlexUsersRoute, getSettingsPlexUsersRouteHandler)
  .openapi(getSettingsTautulliRoute, getSettingsTautulliRouteHandler)
  .openapi(postSettingsTautulliRoute, postSettingsTautulliRouteHandler)
  .openapi(getSettingsRadarrRoute, getSettingsRadarrRouteHandler)
  .openapi(postSettingsRadarrRoute, postSettingsRadarrRouteHandler)
  .openapi(postSettingsRadarrTestRoute, postSettingsRadarrTestRouteHandler)
  .openapi(putSettingsRadarrRadarrIdRoute, putSettingsRadarrRadarrIdRouteHandler)
  .openapi(deleteSettingsRadarrRadarrIdRoute, deleteSettingsRadarrRadarrIdRouteHandler)
  .openapi(getSettingsRadarrRadarrIdProfilesRoute, getSettingsRadarrRadarrIdProfilesRouteHandler)
  .openapi(getSettingsSonarrRoute, getSettingsSonarrRouteHandler)
  .openapi(postSettingsSonarrRoute, postSettingsSonarrRouteHandler)
  .openapi(postSettingsSonarrTestRoute, postSettingsSonarrTestRouteHandler)
  .openapi(putSettingsSonarrSonarrIdRoute, putSettingsSonarrSonarrIdRouteHandler)
  .openapi(deleteSettingsSonarrSonarrIdRoute, deleteSettingsSonarrSonarrIdRouteHandler)
  .openapi(getSettingsPublicRoute, getSettingsPublicRouteHandler)
  .openapi(postSettingsInitializeRoute, postSettingsInitializeRouteHandler)
  .openapi(getSettingsJobsRoute, getSettingsJobsRouteHandler)
  .openapi(postSettingsJobsJobIdRunRoute, postSettingsJobsJobIdRunRouteHandler)
  .openapi(postSettingsJobsJobIdCancelRoute, postSettingsJobsJobIdCancelRouteHandler)
  .openapi(postSettingsJobsJobIdScheduleRoute, postSettingsJobsJobIdScheduleRouteHandler)
  .openapi(getSettingsCacheRoute, getSettingsCacheRouteHandler)
  .openapi(postSettingsCacheCacheIdFlushRoute, postSettingsCacheCacheIdFlushRouteHandler)
  .openapi(getSettingsLogsRoute, getSettingsLogsRouteHandler)
  .openapi(getSettingsNotificationsEmailRoute, getSettingsNotificationsEmailRouteHandler)
  .openapi(postSettingsNotificationsEmailRoute, postSettingsNotificationsEmailRouteHandler)
  .openapi(postSettingsNotificationsEmailTestRoute, postSettingsNotificationsEmailTestRouteHandler)
  .openapi(getSettingsNotificationsDiscordRoute, getSettingsNotificationsDiscordRouteHandler)
  .openapi(postSettingsNotificationsDiscordRoute, postSettingsNotificationsDiscordRouteHandler)
  .openapi(
    postSettingsNotificationsDiscordTestRoute,
    postSettingsNotificationsDiscordTestRouteHandler,
  )
  .openapi(getSettingsNotificationsLunaseaRoute, getSettingsNotificationsLunaseaRouteHandler)
  .openapi(postSettingsNotificationsLunaseaRoute, postSettingsNotificationsLunaseaRouteHandler)
  .openapi(
    postSettingsNotificationsLunaseaTestRoute,
    postSettingsNotificationsLunaseaTestRouteHandler,
  )
  .openapi(getSettingsNotificationsPushbulletRoute, getSettingsNotificationsPushbulletRouteHandler)
  .openapi(
    postSettingsNotificationsPushbulletRoute,
    postSettingsNotificationsPushbulletRouteHandler,
  )
  .openapi(
    postSettingsNotificationsPushbulletTestRoute,
    postSettingsNotificationsPushbulletTestRouteHandler,
  )
  .openapi(getSettingsNotificationsPushoverRoute, getSettingsNotificationsPushoverRouteHandler)
  .openapi(postSettingsNotificationsPushoverRoute, postSettingsNotificationsPushoverRouteHandler)
  .openapi(
    postSettingsNotificationsPushoverTestRoute,
    postSettingsNotificationsPushoverTestRouteHandler,
  )
  .openapi(
    getSettingsNotificationsPushoverSoundsRoute,
    getSettingsNotificationsPushoverSoundsRouteHandler,
  )
  .openapi(getSettingsNotificationsGotifyRoute, getSettingsNotificationsGotifyRouteHandler)
  .openapi(postSettingsNotificationsGotifyRoute, postSettingsNotificationsGotifyRouteHandler)
  .openapi(
    postSettingsNotificationsGotifyTestRoute,
    postSettingsNotificationsGotifyTestRouteHandler,
  )
  .openapi(getSettingsNotificationsSlackRoute, getSettingsNotificationsSlackRouteHandler)
  .openapi(postSettingsNotificationsSlackRoute, postSettingsNotificationsSlackRouteHandler)
  .openapi(postSettingsNotificationsSlackTestRoute, postSettingsNotificationsSlackTestRouteHandler)
  .openapi(getSettingsNotificationsTelegramRoute, getSettingsNotificationsTelegramRouteHandler)
  .openapi(postSettingsNotificationsTelegramRoute, postSettingsNotificationsTelegramRouteHandler)
  .openapi(
    postSettingsNotificationsTelegramTestRoute,
    postSettingsNotificationsTelegramTestRouteHandler,
  )
  .openapi(getSettingsNotificationsWebpushRoute, getSettingsNotificationsWebpushRouteHandler)
  .openapi(postSettingsNotificationsWebpushRoute, postSettingsNotificationsWebpushRouteHandler)
  .openapi(
    postSettingsNotificationsWebpushTestRoute,
    postSettingsNotificationsWebpushTestRouteHandler,
  )
  .openapi(getSettingsNotificationsWebhookRoute, getSettingsNotificationsWebhookRouteHandler)
  .openapi(postSettingsNotificationsWebhookRoute, postSettingsNotificationsWebhookRouteHandler)
  .openapi(
    postSettingsNotificationsWebhookTestRoute,
    postSettingsNotificationsWebhookTestRouteHandler,
  )
  .openapi(getSettingsDiscoverRoute, getSettingsDiscoverRouteHandler)
  .openapi(postSettingsDiscoverRoute, postSettingsDiscoverRouteHandler)
  .openapi(putSettingsDiscoverSliderIdRoute, putSettingsDiscoverSliderIdRouteHandler)
  .openapi(deleteSettingsDiscoverSliderIdRoute, deleteSettingsDiscoverSliderIdRouteHandler)
  .openapi(postSettingsDiscoverAddRoute, postSettingsDiscoverAddRouteHandler)
  .openapi(getSettingsDiscoverResetRoute, getSettingsDiscoverResetRouteHandler)
  .openapi(getSettingsAboutRoute, getSettingsAboutRouteHandler)
  .openapi(getAuthMeRoute, getAuthMeRouteHandler)
  .openapi(postAuthPlexRoute, postAuthPlexRouteHandler)
  .openapi(postAuthLocalRoute, postAuthLocalRouteHandler)
  .openapi(postAuthLogoutRoute, postAuthLogoutRouteHandler)
  .openapi(postAuthResetPasswordRoute, postAuthResetPasswordRouteHandler)
  .openapi(postAuthResetPasswordGuidRoute, postAuthResetPasswordGuidRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(postUserRoute, postUserRouteHandler)
  .openapi(putUserRoute, putUserRouteHandler)
  .openapi(postUserImportFromPlexRoute, postUserImportFromPlexRouteHandler)
  .openapi(postUserRegisterPushSubscriptionRoute, postUserRegisterPushSubscriptionRouteHandler)
  .openapi(getUserUserIdPushSubscriptionsRoute, getUserUserIdPushSubscriptionsRouteHandler)
  .openapi(
    getUserUserIdPushSubscriptionEndpointRoute,
    getUserUserIdPushSubscriptionEndpointRouteHandler,
  )
  .openapi(
    deleteUserUserIdPushSubscriptionEndpointRoute,
    deleteUserUserIdPushSubscriptionEndpointRouteHandler,
  )
  .openapi(getUserUserIdRoute, getUserUserIdRouteHandler)
  .openapi(putUserUserIdRoute, putUserUserIdRouteHandler)
  .openapi(deleteUserUserIdRoute, deleteUserUserIdRouteHandler)
  .openapi(getUserUserIdRequestsRoute, getUserUserIdRequestsRouteHandler)
  .openapi(getUserUserIdQuotaRoute, getUserUserIdQuotaRouteHandler)
  .openapi(getUserUserIdWatchlistRoute, getUserUserIdWatchlistRouteHandler)
  .openapi(getUserUserIdSettingsMainRoute, getUserUserIdSettingsMainRouteHandler)
  .openapi(postUserUserIdSettingsMainRoute, postUserUserIdSettingsMainRouteHandler)
  .openapi(getUserUserIdSettingsPasswordRoute, getUserUserIdSettingsPasswordRouteHandler)
  .openapi(postUserUserIdSettingsPasswordRoute, postUserUserIdSettingsPasswordRouteHandler)
  .openapi(getUserUserIdSettingsNotificationsRoute, getUserUserIdSettingsNotificationsRouteHandler)
  .openapi(
    postUserUserIdSettingsNotificationsRoute,
    postUserUserIdSettingsNotificationsRouteHandler,
  )
  .openapi(getUserUserIdSettingsPermissionsRoute, getUserUserIdSettingsPermissionsRouteHandler)
  .openapi(postUserUserIdSettingsPermissionsRoute, postUserUserIdSettingsPermissionsRouteHandler)
  .openapi(getUserUserIdWatchDataRoute, getUserUserIdWatchDataRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchKeywordRoute, getSearchKeywordRouteHandler)
  .openapi(getSearchCompanyRoute, getSearchCompanyRouteHandler)
  .openapi(getDiscoverMoviesRoute, getDiscoverMoviesRouteHandler)
  .openapi(getDiscoverMoviesGenreGenreIdRoute, getDiscoverMoviesGenreGenreIdRouteHandler)
  .openapi(getDiscoverMoviesLanguageLanguageRoute, getDiscoverMoviesLanguageLanguageRouteHandler)
  .openapi(getDiscoverMoviesStudioStudioIdRoute, getDiscoverMoviesStudioStudioIdRouteHandler)
  .openapi(getDiscoverMoviesUpcomingRoute, getDiscoverMoviesUpcomingRouteHandler)
  .openapi(getDiscoverTvRoute, getDiscoverTvRouteHandler)
  .openapi(getDiscoverTvLanguageLanguageRoute, getDiscoverTvLanguageLanguageRouteHandler)
  .openapi(getDiscoverTvGenreGenreIdRoute, getDiscoverTvGenreGenreIdRouteHandler)
  .openapi(getDiscoverTvNetworkNetworkIdRoute, getDiscoverTvNetworkNetworkIdRouteHandler)
  .openapi(getDiscoverTvUpcomingRoute, getDiscoverTvUpcomingRouteHandler)
  .openapi(getDiscoverTrendingRoute, getDiscoverTrendingRouteHandler)
  .openapi(getDiscoverKeywordKeywordIdMoviesRoute, getDiscoverKeywordKeywordIdMoviesRouteHandler)
  .openapi(getDiscoverGenresliderMovieRoute, getDiscoverGenresliderMovieRouteHandler)
  .openapi(getDiscoverGenresliderTvRoute, getDiscoverGenresliderTvRouteHandler)
  .openapi(getDiscoverWatchlistRoute, getDiscoverWatchlistRouteHandler)
  .openapi(getRequestRoute, getRequestRouteHandler)
  .openapi(postRequestRoute, postRequestRouteHandler)
  .openapi(getRequestCountRoute, getRequestCountRouteHandler)
  .openapi(getRequestRequestIdRoute, getRequestRequestIdRouteHandler)
  .openapi(putRequestRequestIdRoute, putRequestRequestIdRouteHandler)
  .openapi(deleteRequestRequestIdRoute, deleteRequestRequestIdRouteHandler)
  .openapi(postRequestRequestIdRetryRoute, postRequestRequestIdRetryRouteHandler)
  .openapi(postRequestRequestIdStatusRoute, postRequestRequestIdStatusRouteHandler)
  .openapi(getMovieMovieIdRoute, getMovieMovieIdRouteHandler)
  .openapi(getMovieMovieIdRecommendationsRoute, getMovieMovieIdRecommendationsRouteHandler)
  .openapi(getMovieMovieIdSimilarRoute, getMovieMovieIdSimilarRouteHandler)
  .openapi(getMovieMovieIdRatingsRoute, getMovieMovieIdRatingsRouteHandler)
  .openapi(getMovieMovieIdRatingscombinedRoute, getMovieMovieIdRatingscombinedRouteHandler)
  .openapi(getTvTvIdRoute, getTvTvIdRouteHandler)
  .openapi(getTvTvIdSeasonSeasonIdRoute, getTvTvIdSeasonSeasonIdRouteHandler)
  .openapi(getTvTvIdRecommendationsRoute, getTvTvIdRecommendationsRouteHandler)
  .openapi(getTvTvIdSimilarRoute, getTvTvIdSimilarRouteHandler)
  .openapi(getTvTvIdRatingsRoute, getTvTvIdRatingsRouteHandler)
  .openapi(getPersonPersonIdRoute, getPersonPersonIdRouteHandler)
  .openapi(getPersonPersonIdCombinedCreditsRoute, getPersonPersonIdCombinedCreditsRouteHandler)
  .openapi(getMediaRoute, getMediaRouteHandler)
  .openapi(deleteMediaMediaIdRoute, deleteMediaMediaIdRouteHandler)
  .openapi(postMediaMediaIdStatusRoute, postMediaMediaIdStatusRouteHandler)
  .openapi(getMediaMediaIdWatchDataRoute, getMediaMediaIdWatchDataRouteHandler)
  .openapi(getCollectionCollectionIdRoute, getCollectionCollectionIdRouteHandler)
  .openapi(getServiceRadarrRoute, getServiceRadarrRouteHandler)
  .openapi(getServiceRadarrRadarrIdRoute, getServiceRadarrRadarrIdRouteHandler)
  .openapi(getServiceSonarrRoute, getServiceSonarrRouteHandler)
  .openapi(getServiceSonarrSonarrIdRoute, getServiceSonarrSonarrIdRouteHandler)
  .openapi(getServiceSonarrLookupTmdbIdRoute, getServiceSonarrLookupTmdbIdRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getLanguagesRoute, getLanguagesRouteHandler)
  .openapi(getStudioStudioIdRoute, getStudioStudioIdRouteHandler)
  .openapi(getNetworkNetworkIdRoute, getNetworkNetworkIdRouteHandler)
  .openapi(getGenresMovieRoute, getGenresMovieRouteHandler)
  .openapi(getGenresTvRoute, getGenresTvRouteHandler)
  .openapi(getBackdropsRoute, getBackdropsRouteHandler)
  .openapi(getIssueRoute, getIssueRouteHandler)
  .openapi(postIssueRoute, postIssueRouteHandler)
  .openapi(getIssueCountRoute, getIssueCountRouteHandler)
  .openapi(getIssueIssueIdRoute, getIssueIssueIdRouteHandler)
  .openapi(deleteIssueIssueIdRoute, deleteIssueIssueIdRouteHandler)
  .openapi(postIssueIssueIdCommentRoute, postIssueIssueIdCommentRouteHandler)
  .openapi(getIssueCommentCommentIdRoute, getIssueCommentCommentIdRouteHandler)
  .openapi(putIssueCommentCommentIdRoute, putIssueCommentCommentIdRouteHandler)
  .openapi(deleteIssueCommentCommentIdRoute, deleteIssueCommentCommentIdRouteHandler)
  .openapi(postIssueIssueIdStatusRoute, postIssueIssueIdStatusRouteHandler)
  .openapi(getKeywordKeywordIdRoute, getKeywordKeywordIdRouteHandler)
  .openapi(getWatchprovidersRegionsRoute, getWatchprovidersRegionsRouteHandler)
  .openapi(getWatchprovidersMoviesRoute, getWatchprovidersMoviesRouteHandler)
  .openapi(getWatchprovidersTvRoute, getWatchprovidersTvRouteHandler)

export default app
