import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCheckinRoute,
  deleteCommentsIdLikeRoute,
  deleteCommentsIdRoute,
  deleteRecommendationsMoviesIdRoute,
  deleteRecommendationsShowsIdRoute,
  deleteShowsIdProgressWatchedResetRoute,
  deleteSyncPlaybackIdRoute,
  deleteUsersIdFollowRoute,
  deleteUsersIdListsListIdLikeRoute,
  deleteUsersIdListsListIdRoute,
  deleteUsersRequestsIdRoute,
  getCalendarsAllDvdStartDateDaysRoute,
  getCalendarsAllMoviesStartDateDaysRoute,
  getCalendarsAllShowsNewStartDateDaysRoute,
  getCalendarsAllShowsPremieresStartDateDaysRoute,
  getCalendarsAllShowsStartDateDaysRoute,
  getCalendarsMyDvdStartDateDaysRoute,
  getCalendarsMyMoviesStartDateDaysRoute,
  getCalendarsMyShowsNewStartDateDaysRoute,
  getCalendarsMyShowsPremieresStartDateDaysRoute,
  getCalendarsMyShowsStartDateDaysRoute,
  getCertificationsTypeRoute,
  getCommentsIdItemRoute,
  getCommentsIdLikesRoute,
  getCommentsIdRepliesRoute,
  getCommentsIdRoute,
  getCommentsRecentCommentTypeTypeRoute,
  getCommentsTrendingCommentTypeTypeRoute,
  getCommentsUpdatesCommentTypeTypeRoute,
  getCountriesTypeRoute,
  getGenresTypeRoute,
  getLanguagesTypeRoute,
  getListsIdCommentsSortRoute,
  getListsIdItemsTypeRoute,
  getListsIdLikesRoute,
  getListsIdRoute,
  getListsPopularRoute,
  getListsTrendingRoute,
  getMoviesAnticipatedRoute,
  getMoviesBoxofficeRoute,
  getMoviesCollectedPeriodRoute,
  getMoviesIdAliasesRoute,
  getMoviesIdCommentsSortRoute,
  getMoviesIdListsTypeSortRoute,
  getMoviesIdPeopleRoute,
  getMoviesIdRatingsRoute,
  getMoviesIdRelatedRoute,
  getMoviesIdReleasesCountryRoute,
  getMoviesIdRoute,
  getMoviesIdStatsRoute,
  getMoviesIdStudiosRoute,
  getMoviesIdTranslationsLanguageRoute,
  getMoviesIdWatchingRoute,
  getMoviesPlayedPeriodRoute,
  getMoviesPopularRoute,
  getMoviesRecommendedPeriodRoute,
  getMoviesTrendingRoute,
  getMoviesUpdatesIdStartDateRoute,
  getMoviesUpdatesStartDateRoute,
  getMoviesWatchedPeriodRoute,
  getNetworksRoute,
  getOauthAuthorizeRoute,
  getPeopleIdListsTypeSortRoute,
  getPeopleIdMoviesRoute,
  getPeopleIdRoute,
  getPeopleIdShowsRoute,
  getPeopleUpdatesIdStartDateRoute,
  getPeopleUpdatesStartDateRoute,
  getRecommendationsMoviesRoute,
  getRecommendationsShowsRoute,
  getSearchIdTypeIdRoute,
  getSearchTypeRoute,
  getShowsAnticipatedRoute,
  getShowsCollectedPeriodRoute,
  getShowsIdAliasesRoute,
  getShowsIdCertificationsRoute,
  getShowsIdCommentsSortRoute,
  getShowsIdLastEpisodeRoute,
  getShowsIdListsTypeSortRoute,
  getShowsIdNextEpisodeRoute,
  getShowsIdPeopleRoute,
  getShowsIdProgressCollectionRoute,
  getShowsIdProgressWatchedRoute,
  getShowsIdRatingsRoute,
  getShowsIdRelatedRoute,
  getShowsIdRoute,
  getShowsIdSeasonsRoute,
  getShowsIdSeasonsSeasonCommentsSortRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodePeopleRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeStatsRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRoute,
  getShowsIdSeasonsSeasonListsTypeSortRoute,
  getShowsIdSeasonsSeasonPeopleRoute,
  getShowsIdSeasonsSeasonRatingsRoute,
  getShowsIdSeasonsSeasonRoute,
  getShowsIdSeasonsSeasonStatsRoute,
  getShowsIdSeasonsSeasonTranslationsLanguageRoute,
  getShowsIdSeasonsSeasonWatchingRoute,
  getShowsIdStatsRoute,
  getShowsIdStudiosRoute,
  getShowsIdTranslationsLanguageRoute,
  getShowsIdWatchingRoute,
  getShowsPlayedPeriodRoute,
  getShowsPopularRoute,
  getShowsRecommendedPeriodRoute,
  getShowsTrendingRoute,
  getShowsUpdatesIdStartDateRoute,
  getShowsUpdatesStartDateRoute,
  getShowsWatchedPeriodRoute,
  getSyncCollectionTypeRoute,
  getSyncHistoryTypeIdRoute,
  getSyncLastActivitiesRoute,
  getSyncPlaybackTypeRoute,
  getSyncRatingsTypeRatingRoute,
  getSyncRecommendationsTypeSortRoute,
  getSyncWatchedTypeRoute,
  getSyncWatchlistTypeSortRoute,
  getUsersHiddenSectionRoute,
  getUsersIdCollectionTypeRoute,
  getUsersIdCommentsCommentTypeTypeRoute,
  getUsersIdFollowersRoute,
  getUsersIdFollowingRoute,
  getUsersIdFriendsRoute,
  getUsersIdHistoryTypeItemIdRoute,
  getUsersIdLikesTypeRoute,
  getUsersIdListsCollaborationsRoute,
  getUsersIdListsListIdCommentsSortRoute,
  getUsersIdListsListIdItemsTypeRoute,
  getUsersIdListsListIdLikesRoute,
  getUsersIdListsListIdRoute,
  getUsersIdListsRoute,
  getUsersIdRatingsTypeRatingRoute,
  getUsersIdRecommendationsTypeSortRoute,
  getUsersIdRoute,
  getUsersIdStatsRoute,
  getUsersIdWatchedTypeRoute,
  getUsersIdWatchingRoute,
  getUsersIdWatchlistTypeSortRoute,
  getUsersRequestsFollowingRoute,
  getUsersRequestsRoute,
  getUsersSavedFiltersSectionRoute,
  getUsersSettingsRoute,
  postCheckinRoute,
  postCommentsIdLikeRoute,
  postCommentsIdRepliesRoute,
  postCommentsRoute,
  postOauthDeviceCodeRoute,
  postOauthDeviceTokenRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
  postScrobblePauseRoute,
  postScrobbleStartRoute,
  postScrobbleStopRoute,
  postShowsIdProgressWatchedResetRoute,
  postSyncCollectionRemoveRoute,
  postSyncCollectionRoute,
  postSyncHistoryRemoveRoute,
  postSyncHistoryRoute,
  postSyncRatingsRemoveRoute,
  postSyncRatingsRoute,
  postSyncRecommendationsRemoveRoute,
  postSyncRecommendationsReorderRoute,
  postSyncRecommendationsRoute,
  postSyncWatchlistRemoveRoute,
  postSyncWatchlistReorderRoute,
  postSyncWatchlistRoute,
  postUsersHiddenSectionRemoveRoute,
  postUsersHiddenSectionRoute,
  postUsersIdFollowRoute,
  postUsersIdListsListIdItemsRemoveRoute,
  postUsersIdListsListIdItemsReorderRoute,
  postUsersIdListsListIdItemsRoute,
  postUsersIdListsListIdLikeRoute,
  postUsersIdListsReorderRoute,
  postUsersIdListsRoute,
  postUsersRequestsIdRoute,
  putCommentsIdRoute,
  putUsersIdListsListIdRoute,
} from './routes'
import {
  deleteCheckinRouteHandler,
  deleteCommentsIdLikeRouteHandler,
  deleteCommentsIdRouteHandler,
  deleteRecommendationsMoviesIdRouteHandler,
  deleteRecommendationsShowsIdRouteHandler,
  deleteShowsIdProgressWatchedResetRouteHandler,
  deleteSyncPlaybackIdRouteHandler,
  deleteUsersIdFollowRouteHandler,
  deleteUsersIdListsListIdLikeRouteHandler,
  deleteUsersIdListsListIdRouteHandler,
  deleteUsersRequestsIdRouteHandler,
  getCalendarsAllDvdStartDateDaysRouteHandler,
  getCalendarsAllMoviesStartDateDaysRouteHandler,
  getCalendarsAllShowsNewStartDateDaysRouteHandler,
  getCalendarsAllShowsPremieresStartDateDaysRouteHandler,
  getCalendarsAllShowsStartDateDaysRouteHandler,
  getCalendarsMyDvdStartDateDaysRouteHandler,
  getCalendarsMyMoviesStartDateDaysRouteHandler,
  getCalendarsMyShowsNewStartDateDaysRouteHandler,
  getCalendarsMyShowsPremieresStartDateDaysRouteHandler,
  getCalendarsMyShowsStartDateDaysRouteHandler,
  getCertificationsTypeRouteHandler,
  getCommentsIdItemRouteHandler,
  getCommentsIdLikesRouteHandler,
  getCommentsIdRepliesRouteHandler,
  getCommentsIdRouteHandler,
  getCommentsRecentCommentTypeTypeRouteHandler,
  getCommentsTrendingCommentTypeTypeRouteHandler,
  getCommentsUpdatesCommentTypeTypeRouteHandler,
  getCountriesTypeRouteHandler,
  getGenresTypeRouteHandler,
  getLanguagesTypeRouteHandler,
  getListsIdCommentsSortRouteHandler,
  getListsIdItemsTypeRouteHandler,
  getListsIdLikesRouteHandler,
  getListsIdRouteHandler,
  getListsPopularRouteHandler,
  getListsTrendingRouteHandler,
  getMoviesAnticipatedRouteHandler,
  getMoviesBoxofficeRouteHandler,
  getMoviesCollectedPeriodRouteHandler,
  getMoviesIdAliasesRouteHandler,
  getMoviesIdCommentsSortRouteHandler,
  getMoviesIdListsTypeSortRouteHandler,
  getMoviesIdPeopleRouteHandler,
  getMoviesIdRatingsRouteHandler,
  getMoviesIdRelatedRouteHandler,
  getMoviesIdReleasesCountryRouteHandler,
  getMoviesIdRouteHandler,
  getMoviesIdStatsRouteHandler,
  getMoviesIdStudiosRouteHandler,
  getMoviesIdTranslationsLanguageRouteHandler,
  getMoviesIdWatchingRouteHandler,
  getMoviesPlayedPeriodRouteHandler,
  getMoviesPopularRouteHandler,
  getMoviesRecommendedPeriodRouteHandler,
  getMoviesTrendingRouteHandler,
  getMoviesUpdatesIdStartDateRouteHandler,
  getMoviesUpdatesStartDateRouteHandler,
  getMoviesWatchedPeriodRouteHandler,
  getNetworksRouteHandler,
  getOauthAuthorizeRouteHandler,
  getPeopleIdListsTypeSortRouteHandler,
  getPeopleIdMoviesRouteHandler,
  getPeopleIdRouteHandler,
  getPeopleIdShowsRouteHandler,
  getPeopleUpdatesIdStartDateRouteHandler,
  getPeopleUpdatesStartDateRouteHandler,
  getRecommendationsMoviesRouteHandler,
  getRecommendationsShowsRouteHandler,
  getSearchIdTypeIdRouteHandler,
  getSearchTypeRouteHandler,
  getShowsAnticipatedRouteHandler,
  getShowsCollectedPeriodRouteHandler,
  getShowsIdAliasesRouteHandler,
  getShowsIdCertificationsRouteHandler,
  getShowsIdCommentsSortRouteHandler,
  getShowsIdLastEpisodeRouteHandler,
  getShowsIdListsTypeSortRouteHandler,
  getShowsIdNextEpisodeRouteHandler,
  getShowsIdPeopleRouteHandler,
  getShowsIdProgressCollectionRouteHandler,
  getShowsIdProgressWatchedRouteHandler,
  getShowsIdRatingsRouteHandler,
  getShowsIdRelatedRouteHandler,
  getShowsIdRouteHandler,
  getShowsIdSeasonsRouteHandler,
  getShowsIdSeasonsSeasonCommentsSortRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodePeopleRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeStatsRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRouteHandler,
  getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRouteHandler,
  getShowsIdSeasonsSeasonListsTypeSortRouteHandler,
  getShowsIdSeasonsSeasonPeopleRouteHandler,
  getShowsIdSeasonsSeasonRatingsRouteHandler,
  getShowsIdSeasonsSeasonRouteHandler,
  getShowsIdSeasonsSeasonStatsRouteHandler,
  getShowsIdSeasonsSeasonTranslationsLanguageRouteHandler,
  getShowsIdSeasonsSeasonWatchingRouteHandler,
  getShowsIdStatsRouteHandler,
  getShowsIdStudiosRouteHandler,
  getShowsIdTranslationsLanguageRouteHandler,
  getShowsIdWatchingRouteHandler,
  getShowsPlayedPeriodRouteHandler,
  getShowsPopularRouteHandler,
  getShowsRecommendedPeriodRouteHandler,
  getShowsTrendingRouteHandler,
  getShowsUpdatesIdStartDateRouteHandler,
  getShowsUpdatesStartDateRouteHandler,
  getShowsWatchedPeriodRouteHandler,
  getSyncCollectionTypeRouteHandler,
  getSyncHistoryTypeIdRouteHandler,
  getSyncLastActivitiesRouteHandler,
  getSyncPlaybackTypeRouteHandler,
  getSyncRatingsTypeRatingRouteHandler,
  getSyncRecommendationsTypeSortRouteHandler,
  getSyncWatchedTypeRouteHandler,
  getSyncWatchlistTypeSortRouteHandler,
  getUsersHiddenSectionRouteHandler,
  getUsersIdCollectionTypeRouteHandler,
  getUsersIdCommentsCommentTypeTypeRouteHandler,
  getUsersIdFollowersRouteHandler,
  getUsersIdFollowingRouteHandler,
  getUsersIdFriendsRouteHandler,
  getUsersIdHistoryTypeItemIdRouteHandler,
  getUsersIdLikesTypeRouteHandler,
  getUsersIdListsCollaborationsRouteHandler,
  getUsersIdListsListIdCommentsSortRouteHandler,
  getUsersIdListsListIdItemsTypeRouteHandler,
  getUsersIdListsListIdLikesRouteHandler,
  getUsersIdListsListIdRouteHandler,
  getUsersIdListsRouteHandler,
  getUsersIdRatingsTypeRatingRouteHandler,
  getUsersIdRecommendationsTypeSortRouteHandler,
  getUsersIdRouteHandler,
  getUsersIdStatsRouteHandler,
  getUsersIdWatchedTypeRouteHandler,
  getUsersIdWatchingRouteHandler,
  getUsersIdWatchlistTypeSortRouteHandler,
  getUsersRequestsFollowingRouteHandler,
  getUsersRequestsRouteHandler,
  getUsersSavedFiltersSectionRouteHandler,
  getUsersSettingsRouteHandler,
  postCheckinRouteHandler,
  postCommentsIdLikeRouteHandler,
  postCommentsIdRepliesRouteHandler,
  postCommentsRouteHandler,
  postOauthDeviceCodeRouteHandler,
  postOauthDeviceTokenRouteHandler,
  postOauthRevokeRouteHandler,
  postOauthTokenRouteHandler,
  postScrobblePauseRouteHandler,
  postScrobbleStartRouteHandler,
  postScrobbleStopRouteHandler,
  postShowsIdProgressWatchedResetRouteHandler,
  postSyncCollectionRemoveRouteHandler,
  postSyncCollectionRouteHandler,
  postSyncHistoryRemoveRouteHandler,
  postSyncHistoryRouteHandler,
  postSyncRatingsRemoveRouteHandler,
  postSyncRatingsRouteHandler,
  postSyncRecommendationsRemoveRouteHandler,
  postSyncRecommendationsReorderRouteHandler,
  postSyncRecommendationsRouteHandler,
  postSyncWatchlistRemoveRouteHandler,
  postSyncWatchlistReorderRouteHandler,
  postSyncWatchlistRouteHandler,
  postUsersHiddenSectionRemoveRouteHandler,
  postUsersHiddenSectionRouteHandler,
  postUsersIdFollowRouteHandler,
  postUsersIdListsListIdItemsRemoveRouteHandler,
  postUsersIdListsListIdItemsReorderRouteHandler,
  postUsersIdListsListIdItemsRouteHandler,
  postUsersIdListsListIdLikeRouteHandler,
  postUsersIdListsReorderRouteHandler,
  postUsersIdListsRouteHandler,
  postUsersRequestsIdRouteHandler,
  putCommentsIdRouteHandler,
  putUsersIdListsListIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCalendarsAllDvdStartDateDaysRoute, getCalendarsAllDvdStartDateDaysRouteHandler)
  .openapi(getCalendarsAllMoviesStartDateDaysRoute, getCalendarsAllMoviesStartDateDaysRouteHandler)
  .openapi(
    getCalendarsAllShowsNewStartDateDaysRoute,
    getCalendarsAllShowsNewStartDateDaysRouteHandler,
  )
  .openapi(
    getCalendarsAllShowsPremieresStartDateDaysRoute,
    getCalendarsAllShowsPremieresStartDateDaysRouteHandler,
  )
  .openapi(getCalendarsAllShowsStartDateDaysRoute, getCalendarsAllShowsStartDateDaysRouteHandler)
  .openapi(getCalendarsMyDvdStartDateDaysRoute, getCalendarsMyDvdStartDateDaysRouteHandler)
  .openapi(getCalendarsMyMoviesStartDateDaysRoute, getCalendarsMyMoviesStartDateDaysRouteHandler)
  .openapi(
    getCalendarsMyShowsNewStartDateDaysRoute,
    getCalendarsMyShowsNewStartDateDaysRouteHandler,
  )
  .openapi(
    getCalendarsMyShowsPremieresStartDateDaysRoute,
    getCalendarsMyShowsPremieresStartDateDaysRouteHandler,
  )
  .openapi(getCalendarsMyShowsStartDateDaysRoute, getCalendarsMyShowsStartDateDaysRouteHandler)
  .openapi(getCertificationsTypeRoute, getCertificationsTypeRouteHandler)
  .openapi(deleteCheckinRoute, deleteCheckinRouteHandler)
  .openapi(postCheckinRoute, postCheckinRouteHandler)
  .openapi(postCommentsRoute, postCommentsRouteHandler)
  .openapi(getCommentsRecentCommentTypeTypeRoute, getCommentsRecentCommentTypeTypeRouteHandler)
  .openapi(getCommentsTrendingCommentTypeTypeRoute, getCommentsTrendingCommentTypeTypeRouteHandler)
  .openapi(getCommentsUpdatesCommentTypeTypeRoute, getCommentsUpdatesCommentTypeTypeRouteHandler)
  .openapi(deleteCommentsIdRoute, deleteCommentsIdRouteHandler)
  .openapi(getCommentsIdRoute, getCommentsIdRouteHandler)
  .openapi(putCommentsIdRoute, putCommentsIdRouteHandler)
  .openapi(getCommentsIdItemRoute, getCommentsIdItemRouteHandler)
  .openapi(deleteCommentsIdLikeRoute, deleteCommentsIdLikeRouteHandler)
  .openapi(postCommentsIdLikeRoute, postCommentsIdLikeRouteHandler)
  .openapi(getCommentsIdLikesRoute, getCommentsIdLikesRouteHandler)
  .openapi(getCommentsIdRepliesRoute, getCommentsIdRepliesRouteHandler)
  .openapi(postCommentsIdRepliesRoute, postCommentsIdRepliesRouteHandler)
  .openapi(getCountriesTypeRoute, getCountriesTypeRouteHandler)
  .openapi(getGenresTypeRoute, getGenresTypeRouteHandler)
  .openapi(getLanguagesTypeRoute, getLanguagesTypeRouteHandler)
  .openapi(getListsPopularRoute, getListsPopularRouteHandler)
  .openapi(getListsTrendingRoute, getListsTrendingRouteHandler)
  .openapi(getListsIdRoute, getListsIdRouteHandler)
  .openapi(getListsIdCommentsSortRoute, getListsIdCommentsSortRouteHandler)
  .openapi(getListsIdItemsTypeRoute, getListsIdItemsTypeRouteHandler)
  .openapi(getListsIdLikesRoute, getListsIdLikesRouteHandler)
  .openapi(getMoviesAnticipatedRoute, getMoviesAnticipatedRouteHandler)
  .openapi(getMoviesBoxofficeRoute, getMoviesBoxofficeRouteHandler)
  .openapi(getMoviesCollectedPeriodRoute, getMoviesCollectedPeriodRouteHandler)
  .openapi(getMoviesPlayedPeriodRoute, getMoviesPlayedPeriodRouteHandler)
  .openapi(getMoviesPopularRoute, getMoviesPopularRouteHandler)
  .openapi(getMoviesRecommendedPeriodRoute, getMoviesRecommendedPeriodRouteHandler)
  .openapi(getMoviesTrendingRoute, getMoviesTrendingRouteHandler)
  .openapi(getMoviesUpdatesIdStartDateRoute, getMoviesUpdatesIdStartDateRouteHandler)
  .openapi(getMoviesUpdatesStartDateRoute, getMoviesUpdatesStartDateRouteHandler)
  .openapi(getMoviesWatchedPeriodRoute, getMoviesWatchedPeriodRouteHandler)
  .openapi(getMoviesIdRoute, getMoviesIdRouteHandler)
  .openapi(getMoviesIdAliasesRoute, getMoviesIdAliasesRouteHandler)
  .openapi(getMoviesIdCommentsSortRoute, getMoviesIdCommentsSortRouteHandler)
  .openapi(getMoviesIdListsTypeSortRoute, getMoviesIdListsTypeSortRouteHandler)
  .openapi(getMoviesIdPeopleRoute, getMoviesIdPeopleRouteHandler)
  .openapi(getMoviesIdRatingsRoute, getMoviesIdRatingsRouteHandler)
  .openapi(getMoviesIdRelatedRoute, getMoviesIdRelatedRouteHandler)
  .openapi(getMoviesIdReleasesCountryRoute, getMoviesIdReleasesCountryRouteHandler)
  .openapi(getMoviesIdStatsRoute, getMoviesIdStatsRouteHandler)
  .openapi(getMoviesIdStudiosRoute, getMoviesIdStudiosRouteHandler)
  .openapi(getMoviesIdTranslationsLanguageRoute, getMoviesIdTranslationsLanguageRouteHandler)
  .openapi(getMoviesIdWatchingRoute, getMoviesIdWatchingRouteHandler)
  .openapi(getNetworksRoute, getNetworksRouteHandler)
  .openapi(getOauthAuthorizeRoute, getOauthAuthorizeRouteHandler)
  .openapi(postOauthDeviceCodeRoute, postOauthDeviceCodeRouteHandler)
  .openapi(postOauthDeviceTokenRoute, postOauthDeviceTokenRouteHandler)
  .openapi(postOauthRevokeRoute, postOauthRevokeRouteHandler)
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)
  .openapi(getPeopleUpdatesIdStartDateRoute, getPeopleUpdatesIdStartDateRouteHandler)
  .openapi(getPeopleUpdatesStartDateRoute, getPeopleUpdatesStartDateRouteHandler)
  .openapi(getPeopleIdRoute, getPeopleIdRouteHandler)
  .openapi(getPeopleIdListsTypeSortRoute, getPeopleIdListsTypeSortRouteHandler)
  .openapi(getPeopleIdMoviesRoute, getPeopleIdMoviesRouteHandler)
  .openapi(getPeopleIdShowsRoute, getPeopleIdShowsRouteHandler)
  .openapi(getRecommendationsMoviesRoute, getRecommendationsMoviesRouteHandler)
  .openapi(deleteRecommendationsMoviesIdRoute, deleteRecommendationsMoviesIdRouteHandler)
  .openapi(getRecommendationsShowsRoute, getRecommendationsShowsRouteHandler)
  .openapi(deleteRecommendationsShowsIdRoute, deleteRecommendationsShowsIdRouteHandler)
  .openapi(postScrobblePauseRoute, postScrobblePauseRouteHandler)
  .openapi(postScrobbleStartRoute, postScrobbleStartRouteHandler)
  .openapi(postScrobbleStopRoute, postScrobbleStopRouteHandler)
  .openapi(getSearchIdTypeIdRoute, getSearchIdTypeIdRouteHandler)
  .openapi(getSearchTypeRoute, getSearchTypeRouteHandler)
  .openapi(getShowsAnticipatedRoute, getShowsAnticipatedRouteHandler)
  .openapi(getShowsCollectedPeriodRoute, getShowsCollectedPeriodRouteHandler)
  .openapi(getShowsPlayedPeriodRoute, getShowsPlayedPeriodRouteHandler)
  .openapi(getShowsPopularRoute, getShowsPopularRouteHandler)
  .openapi(getShowsRecommendedPeriodRoute, getShowsRecommendedPeriodRouteHandler)
  .openapi(getShowsTrendingRoute, getShowsTrendingRouteHandler)
  .openapi(getShowsUpdatesIdStartDateRoute, getShowsUpdatesIdStartDateRouteHandler)
  .openapi(getShowsUpdatesStartDateRoute, getShowsUpdatesStartDateRouteHandler)
  .openapi(getShowsWatchedPeriodRoute, getShowsWatchedPeriodRouteHandler)
  .openapi(getShowsIdRoute, getShowsIdRouteHandler)
  .openapi(getShowsIdAliasesRoute, getShowsIdAliasesRouteHandler)
  .openapi(getShowsIdCertificationsRoute, getShowsIdCertificationsRouteHandler)
  .openapi(getShowsIdCommentsSortRoute, getShowsIdCommentsSortRouteHandler)
  .openapi(getShowsIdLastEpisodeRoute, getShowsIdLastEpisodeRouteHandler)
  .openapi(getShowsIdListsTypeSortRoute, getShowsIdListsTypeSortRouteHandler)
  .openapi(getShowsIdNextEpisodeRoute, getShowsIdNextEpisodeRouteHandler)
  .openapi(getShowsIdPeopleRoute, getShowsIdPeopleRouteHandler)
  .openapi(getShowsIdProgressCollectionRoute, getShowsIdProgressCollectionRouteHandler)
  .openapi(getShowsIdProgressWatchedRoute, getShowsIdProgressWatchedRouteHandler)
  .openapi(deleteShowsIdProgressWatchedResetRoute, deleteShowsIdProgressWatchedResetRouteHandler)
  .openapi(postShowsIdProgressWatchedResetRoute, postShowsIdProgressWatchedResetRouteHandler)
  .openapi(getShowsIdRatingsRoute, getShowsIdRatingsRouteHandler)
  .openapi(getShowsIdRelatedRoute, getShowsIdRelatedRouteHandler)
  .openapi(getShowsIdSeasonsRoute, getShowsIdSeasonsRouteHandler)
  .openapi(getShowsIdSeasonsSeasonRoute, getShowsIdSeasonsSeasonRouteHandler)
  .openapi(
    getShowsIdSeasonsSeasonCommentsSortRoute,
    getShowsIdSeasonsSeasonCommentsSortRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodePeopleRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodePeopleRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeStatsRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeStatsRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRoute,
    getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRouteHandler,
  )
  .openapi(
    getShowsIdSeasonsSeasonListsTypeSortRoute,
    getShowsIdSeasonsSeasonListsTypeSortRouteHandler,
  )
  .openapi(getShowsIdSeasonsSeasonPeopleRoute, getShowsIdSeasonsSeasonPeopleRouteHandler)
  .openapi(getShowsIdSeasonsSeasonRatingsRoute, getShowsIdSeasonsSeasonRatingsRouteHandler)
  .openapi(getShowsIdSeasonsSeasonStatsRoute, getShowsIdSeasonsSeasonStatsRouteHandler)
  .openapi(
    getShowsIdSeasonsSeasonTranslationsLanguageRoute,
    getShowsIdSeasonsSeasonTranslationsLanguageRouteHandler,
  )
  .openapi(getShowsIdSeasonsSeasonWatchingRoute, getShowsIdSeasonsSeasonWatchingRouteHandler)
  .openapi(getShowsIdStatsRoute, getShowsIdStatsRouteHandler)
  .openapi(getShowsIdStudiosRoute, getShowsIdStudiosRouteHandler)
  .openapi(getShowsIdTranslationsLanguageRoute, getShowsIdTranslationsLanguageRouteHandler)
  .openapi(getShowsIdWatchingRoute, getShowsIdWatchingRouteHandler)
  .openapi(postSyncCollectionRoute, postSyncCollectionRouteHandler)
  .openapi(postSyncCollectionRemoveRoute, postSyncCollectionRemoveRouteHandler)
  .openapi(getSyncCollectionTypeRoute, getSyncCollectionTypeRouteHandler)
  .openapi(postSyncHistoryRoute, postSyncHistoryRouteHandler)
  .openapi(postSyncHistoryRemoveRoute, postSyncHistoryRemoveRouteHandler)
  .openapi(getSyncHistoryTypeIdRoute, getSyncHistoryTypeIdRouteHandler)
  .openapi(getSyncLastActivitiesRoute, getSyncLastActivitiesRouteHandler)
  .openapi(deleteSyncPlaybackIdRoute, deleteSyncPlaybackIdRouteHandler)
  .openapi(getSyncPlaybackTypeRoute, getSyncPlaybackTypeRouteHandler)
  .openapi(postSyncRatingsRoute, postSyncRatingsRouteHandler)
  .openapi(postSyncRatingsRemoveRoute, postSyncRatingsRemoveRouteHandler)
  .openapi(getSyncRatingsTypeRatingRoute, getSyncRatingsTypeRatingRouteHandler)
  .openapi(postSyncRecommendationsRoute, postSyncRecommendationsRouteHandler)
  .openapi(postSyncRecommendationsRemoveRoute, postSyncRecommendationsRemoveRouteHandler)
  .openapi(postSyncRecommendationsReorderRoute, postSyncRecommendationsReorderRouteHandler)
  .openapi(getSyncRecommendationsTypeSortRoute, getSyncRecommendationsTypeSortRouteHandler)
  .openapi(getSyncWatchedTypeRoute, getSyncWatchedTypeRouteHandler)
  .openapi(postSyncWatchlistRoute, postSyncWatchlistRouteHandler)
  .openapi(postSyncWatchlistRemoveRoute, postSyncWatchlistRemoveRouteHandler)
  .openapi(postSyncWatchlistReorderRoute, postSyncWatchlistReorderRouteHandler)
  .openapi(getSyncWatchlistTypeSortRoute, getSyncWatchlistTypeSortRouteHandler)
  .openapi(getUsersHiddenSectionRoute, getUsersHiddenSectionRouteHandler)
  .openapi(postUsersHiddenSectionRoute, postUsersHiddenSectionRouteHandler)
  .openapi(postUsersHiddenSectionRemoveRoute, postUsersHiddenSectionRemoveRouteHandler)
  .openapi(getUsersRequestsRoute, getUsersRequestsRouteHandler)
  .openapi(getUsersRequestsFollowingRoute, getUsersRequestsFollowingRouteHandler)
  .openapi(deleteUsersRequestsIdRoute, deleteUsersRequestsIdRouteHandler)
  .openapi(postUsersRequestsIdRoute, postUsersRequestsIdRouteHandler)
  .openapi(getUsersSavedFiltersSectionRoute, getUsersSavedFiltersSectionRouteHandler)
  .openapi(getUsersSettingsRoute, getUsersSettingsRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(getUsersIdCollectionTypeRoute, getUsersIdCollectionTypeRouteHandler)
  .openapi(getUsersIdCommentsCommentTypeTypeRoute, getUsersIdCommentsCommentTypeTypeRouteHandler)
  .openapi(deleteUsersIdFollowRoute, deleteUsersIdFollowRouteHandler)
  .openapi(postUsersIdFollowRoute, postUsersIdFollowRouteHandler)
  .openapi(getUsersIdFollowersRoute, getUsersIdFollowersRouteHandler)
  .openapi(getUsersIdFollowingRoute, getUsersIdFollowingRouteHandler)
  .openapi(getUsersIdFriendsRoute, getUsersIdFriendsRouteHandler)
  .openapi(getUsersIdHistoryTypeItemIdRoute, getUsersIdHistoryTypeItemIdRouteHandler)
  .openapi(getUsersIdLikesTypeRoute, getUsersIdLikesTypeRouteHandler)
  .openapi(getUsersIdListsRoute, getUsersIdListsRouteHandler)
  .openapi(postUsersIdListsRoute, postUsersIdListsRouteHandler)
  .openapi(getUsersIdListsCollaborationsRoute, getUsersIdListsCollaborationsRouteHandler)
  .openapi(postUsersIdListsReorderRoute, postUsersIdListsReorderRouteHandler)
  .openapi(deleteUsersIdListsListIdRoute, deleteUsersIdListsListIdRouteHandler)
  .openapi(getUsersIdListsListIdRoute, getUsersIdListsListIdRouteHandler)
  .openapi(putUsersIdListsListIdRoute, putUsersIdListsListIdRouteHandler)
  .openapi(getUsersIdListsListIdCommentsSortRoute, getUsersIdListsListIdCommentsSortRouteHandler)
  .openapi(postUsersIdListsListIdItemsRoute, postUsersIdListsListIdItemsRouteHandler)
  .openapi(postUsersIdListsListIdItemsRemoveRoute, postUsersIdListsListIdItemsRemoveRouteHandler)
  .openapi(postUsersIdListsListIdItemsReorderRoute, postUsersIdListsListIdItemsReorderRouteHandler)
  .openapi(getUsersIdListsListIdItemsTypeRoute, getUsersIdListsListIdItemsTypeRouteHandler)
  .openapi(deleteUsersIdListsListIdLikeRoute, deleteUsersIdListsListIdLikeRouteHandler)
  .openapi(postUsersIdListsListIdLikeRoute, postUsersIdListsListIdLikeRouteHandler)
  .openapi(getUsersIdListsListIdLikesRoute, getUsersIdListsListIdLikesRouteHandler)
  .openapi(getUsersIdRatingsTypeRatingRoute, getUsersIdRatingsTypeRatingRouteHandler)
  .openapi(getUsersIdRecommendationsTypeSortRoute, getUsersIdRecommendationsTypeSortRouteHandler)
  .openapi(getUsersIdStatsRoute, getUsersIdStatsRouteHandler)
  .openapi(getUsersIdWatchedTypeRoute, getUsersIdWatchedTypeRouteHandler)
  .openapi(getUsersIdWatchingRoute, getUsersIdWatchingRouteHandler)
  .openapi(getUsersIdWatchlistTypeSortRoute, getUsersIdWatchlistTypeSortRouteHandler)

export default app
