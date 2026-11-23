import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnimeIdCharactersRoute,
  getAnimeIdEpisodesEpisodeRoute,
  getAnimeIdEpisodesRoute,
  getAnimeIdExternalRoute,
  getAnimeIdForumRoute,
  getAnimeIdFullRoute,
  getAnimeIdMoreinfoRoute,
  getAnimeIdNewsRoute,
  getAnimeIdPicturesRoute,
  getAnimeIdRecommendationsRoute,
  getAnimeIdRelationsRoute,
  getAnimeIdReviewsRoute,
  getAnimeIdRoute,
  getAnimeIdStaffRoute,
  getAnimeIdStatisticsRoute,
  getAnimeIdStreamingRoute,
  getAnimeIdThemesRoute,
  getAnimeIdUserupdatesRoute,
  getAnimeIdVideosEpisodesRoute,
  getAnimeIdVideosRoute,
  getAnimeRoute,
  getCharactersIdAnimeRoute,
  getCharactersIdFullRoute,
  getCharactersIdMangaRoute,
  getCharactersIdPicturesRoute,
  getCharactersIdRoute,
  getCharactersIdVoicesRoute,
  getCharactersRoute,
  getClubsIdMembersRoute,
  getClubsIdRelationsRoute,
  getClubsIdRoute,
  getClubsIdStaffRoute,
  getClubsRoute,
  getGenresAnimeRoute,
  getGenresMangaRoute,
  getMagazinesRoute,
  getMangaIdCharactersRoute,
  getMangaIdExternalRoute,
  getMangaIdForumRoute,
  getMangaIdFullRoute,
  getMangaIdMoreinfoRoute,
  getMangaIdNewsRoute,
  getMangaIdPicturesRoute,
  getMangaIdRecommendationsRoute,
  getMangaIdRelationsRoute,
  getMangaIdReviewsRoute,
  getMangaIdRoute,
  getMangaIdStatisticsRoute,
  getMangaIdUserupdatesRoute,
  getMangaRoute,
  getPeopleIdAnimeRoute,
  getPeopleIdFullRoute,
  getPeopleIdMangaRoute,
  getPeopleIdPicturesRoute,
  getPeopleIdRoute,
  getPeopleIdVoicesRoute,
  getPeopleRoute,
  getProducersIdExternalRoute,
  getProducersIdFullRoute,
  getProducersIdRoute,
  getProducersRoute,
  getRandomAnimeRoute,
  getRandomCharactersRoute,
  getRandomMangaRoute,
  getRandomPeopleRoute,
  getRandomUsersRoute,
  getRecommendationsAnimeRoute,
  getRecommendationsMangaRoute,
  getReviewsAnimeRoute,
  getReviewsMangaRoute,
  getSchedulesRoute,
  getSeasonsNowRoute,
  getSeasonsRoute,
  getSeasonsUpcomingRoute,
  getSeasonsYearSeasonRoute,
  getTopAnimeRoute,
  getTopCharactersRoute,
  getTopMangaRoute,
  getTopPeopleRoute,
  getTopReviewsRoute,
  getUsersRoute,
  getUsersUserbyidIdRoute,
  getUsersUsernameAboutRoute,
  getUsersUsernameAnimelistRoute,
  getUsersUsernameClubsRoute,
  getUsersUsernameExternalRoute,
  getUsersUsernameFavoritesRoute,
  getUsersUsernameFriendsRoute,
  getUsersUsernameFullRoute,
  getUsersUsernameHistoryRoute,
  getUsersUsernameMangalistRoute,
  getUsersUsernameRecommendationsRoute,
  getUsersUsernameReviewsRoute,
  getUsersUsernameRoute,
  getUsersUsernameStatisticsRoute,
  getUsersUsernameUserupdatesRoute,
  getWatchEpisodesPopularRoute,
  getWatchEpisodesRoute,
  getWatchPromosPopularRoute,
  getWatchPromosRoute,
} from './routes'
import {
  getAnimeIdCharactersRouteHandler,
  getAnimeIdEpisodesEpisodeRouteHandler,
  getAnimeIdEpisodesRouteHandler,
  getAnimeIdExternalRouteHandler,
  getAnimeIdForumRouteHandler,
  getAnimeIdFullRouteHandler,
  getAnimeIdMoreinfoRouteHandler,
  getAnimeIdNewsRouteHandler,
  getAnimeIdPicturesRouteHandler,
  getAnimeIdRecommendationsRouteHandler,
  getAnimeIdRelationsRouteHandler,
  getAnimeIdReviewsRouteHandler,
  getAnimeIdRouteHandler,
  getAnimeIdStaffRouteHandler,
  getAnimeIdStatisticsRouteHandler,
  getAnimeIdStreamingRouteHandler,
  getAnimeIdThemesRouteHandler,
  getAnimeIdUserupdatesRouteHandler,
  getAnimeIdVideosEpisodesRouteHandler,
  getAnimeIdVideosRouteHandler,
  getAnimeRouteHandler,
  getCharactersIdAnimeRouteHandler,
  getCharactersIdFullRouteHandler,
  getCharactersIdMangaRouteHandler,
  getCharactersIdPicturesRouteHandler,
  getCharactersIdRouteHandler,
  getCharactersIdVoicesRouteHandler,
  getCharactersRouteHandler,
  getClubsIdMembersRouteHandler,
  getClubsIdRelationsRouteHandler,
  getClubsIdRouteHandler,
  getClubsIdStaffRouteHandler,
  getClubsRouteHandler,
  getGenresAnimeRouteHandler,
  getGenresMangaRouteHandler,
  getMagazinesRouteHandler,
  getMangaIdCharactersRouteHandler,
  getMangaIdExternalRouteHandler,
  getMangaIdForumRouteHandler,
  getMangaIdFullRouteHandler,
  getMangaIdMoreinfoRouteHandler,
  getMangaIdNewsRouteHandler,
  getMangaIdPicturesRouteHandler,
  getMangaIdRecommendationsRouteHandler,
  getMangaIdRelationsRouteHandler,
  getMangaIdReviewsRouteHandler,
  getMangaIdRouteHandler,
  getMangaIdStatisticsRouteHandler,
  getMangaIdUserupdatesRouteHandler,
  getMangaRouteHandler,
  getPeopleIdAnimeRouteHandler,
  getPeopleIdFullRouteHandler,
  getPeopleIdMangaRouteHandler,
  getPeopleIdPicturesRouteHandler,
  getPeopleIdRouteHandler,
  getPeopleIdVoicesRouteHandler,
  getPeopleRouteHandler,
  getProducersIdExternalRouteHandler,
  getProducersIdFullRouteHandler,
  getProducersIdRouteHandler,
  getProducersRouteHandler,
  getRandomAnimeRouteHandler,
  getRandomCharactersRouteHandler,
  getRandomMangaRouteHandler,
  getRandomPeopleRouteHandler,
  getRandomUsersRouteHandler,
  getRecommendationsAnimeRouteHandler,
  getRecommendationsMangaRouteHandler,
  getReviewsAnimeRouteHandler,
  getReviewsMangaRouteHandler,
  getSchedulesRouteHandler,
  getSeasonsNowRouteHandler,
  getSeasonsRouteHandler,
  getSeasonsUpcomingRouteHandler,
  getSeasonsYearSeasonRouteHandler,
  getTopAnimeRouteHandler,
  getTopCharactersRouteHandler,
  getTopMangaRouteHandler,
  getTopPeopleRouteHandler,
  getTopReviewsRouteHandler,
  getUsersRouteHandler,
  getUsersUserbyidIdRouteHandler,
  getUsersUsernameAboutRouteHandler,
  getUsersUsernameAnimelistRouteHandler,
  getUsersUsernameClubsRouteHandler,
  getUsersUsernameExternalRouteHandler,
  getUsersUsernameFavoritesRouteHandler,
  getUsersUsernameFriendsRouteHandler,
  getUsersUsernameFullRouteHandler,
  getUsersUsernameHistoryRouteHandler,
  getUsersUsernameMangalistRouteHandler,
  getUsersUsernameRecommendationsRouteHandler,
  getUsersUsernameReviewsRouteHandler,
  getUsersUsernameRouteHandler,
  getUsersUsernameStatisticsRouteHandler,
  getUsersUsernameUserupdatesRouteHandler,
  getWatchEpisodesPopularRouteHandler,
  getWatchEpisodesRouteHandler,
  getWatchPromosPopularRouteHandler,
  getWatchPromosRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnimeIdFullRoute, getAnimeIdFullRouteHandler)
  .openapi(getAnimeIdRoute, getAnimeIdRouteHandler)
  .openapi(getAnimeIdCharactersRoute, getAnimeIdCharactersRouteHandler)
  .openapi(getAnimeIdStaffRoute, getAnimeIdStaffRouteHandler)
  .openapi(getAnimeIdEpisodesRoute, getAnimeIdEpisodesRouteHandler)
  .openapi(getAnimeIdEpisodesEpisodeRoute, getAnimeIdEpisodesEpisodeRouteHandler)
  .openapi(getAnimeIdNewsRoute, getAnimeIdNewsRouteHandler)
  .openapi(getAnimeIdForumRoute, getAnimeIdForumRouteHandler)
  .openapi(getAnimeIdVideosRoute, getAnimeIdVideosRouteHandler)
  .openapi(getAnimeIdVideosEpisodesRoute, getAnimeIdVideosEpisodesRouteHandler)
  .openapi(getAnimeIdPicturesRoute, getAnimeIdPicturesRouteHandler)
  .openapi(getAnimeIdStatisticsRoute, getAnimeIdStatisticsRouteHandler)
  .openapi(getAnimeIdMoreinfoRoute, getAnimeIdMoreinfoRouteHandler)
  .openapi(getAnimeIdRecommendationsRoute, getAnimeIdRecommendationsRouteHandler)
  .openapi(getAnimeIdUserupdatesRoute, getAnimeIdUserupdatesRouteHandler)
  .openapi(getAnimeIdReviewsRoute, getAnimeIdReviewsRouteHandler)
  .openapi(getAnimeIdRelationsRoute, getAnimeIdRelationsRouteHandler)
  .openapi(getAnimeIdThemesRoute, getAnimeIdThemesRouteHandler)
  .openapi(getAnimeIdExternalRoute, getAnimeIdExternalRouteHandler)
  .openapi(getAnimeIdStreamingRoute, getAnimeIdStreamingRouteHandler)
  .openapi(getCharactersIdFullRoute, getCharactersIdFullRouteHandler)
  .openapi(getCharactersIdRoute, getCharactersIdRouteHandler)
  .openapi(getCharactersIdAnimeRoute, getCharactersIdAnimeRouteHandler)
  .openapi(getCharactersIdMangaRoute, getCharactersIdMangaRouteHandler)
  .openapi(getCharactersIdVoicesRoute, getCharactersIdVoicesRouteHandler)
  .openapi(getCharactersIdPicturesRoute, getCharactersIdPicturesRouteHandler)
  .openapi(getClubsIdRoute, getClubsIdRouteHandler)
  .openapi(getClubsIdMembersRoute, getClubsIdMembersRouteHandler)
  .openapi(getClubsIdStaffRoute, getClubsIdStaffRouteHandler)
  .openapi(getClubsIdRelationsRoute, getClubsIdRelationsRouteHandler)
  .openapi(getGenresAnimeRoute, getGenresAnimeRouteHandler)
  .openapi(getGenresMangaRoute, getGenresMangaRouteHandler)
  .openapi(getMagazinesRoute, getMagazinesRouteHandler)
  .openapi(getMangaIdFullRoute, getMangaIdFullRouteHandler)
  .openapi(getMangaIdRoute, getMangaIdRouteHandler)
  .openapi(getMangaIdCharactersRoute, getMangaIdCharactersRouteHandler)
  .openapi(getMangaIdNewsRoute, getMangaIdNewsRouteHandler)
  .openapi(getMangaIdForumRoute, getMangaIdForumRouteHandler)
  .openapi(getMangaIdPicturesRoute, getMangaIdPicturesRouteHandler)
  .openapi(getMangaIdStatisticsRoute, getMangaIdStatisticsRouteHandler)
  .openapi(getMangaIdMoreinfoRoute, getMangaIdMoreinfoRouteHandler)
  .openapi(getMangaIdRecommendationsRoute, getMangaIdRecommendationsRouteHandler)
  .openapi(getMangaIdUserupdatesRoute, getMangaIdUserupdatesRouteHandler)
  .openapi(getMangaIdReviewsRoute, getMangaIdReviewsRouteHandler)
  .openapi(getMangaIdRelationsRoute, getMangaIdRelationsRouteHandler)
  .openapi(getMangaIdExternalRoute, getMangaIdExternalRouteHandler)
  .openapi(getPeopleIdFullRoute, getPeopleIdFullRouteHandler)
  .openapi(getPeopleIdRoute, getPeopleIdRouteHandler)
  .openapi(getPeopleIdAnimeRoute, getPeopleIdAnimeRouteHandler)
  .openapi(getPeopleIdVoicesRoute, getPeopleIdVoicesRouteHandler)
  .openapi(getPeopleIdMangaRoute, getPeopleIdMangaRouteHandler)
  .openapi(getPeopleIdPicturesRoute, getPeopleIdPicturesRouteHandler)
  .openapi(getProducersIdRoute, getProducersIdRouteHandler)
  .openapi(getProducersIdFullRoute, getProducersIdFullRouteHandler)
  .openapi(getProducersIdExternalRoute, getProducersIdExternalRouteHandler)
  .openapi(getRandomAnimeRoute, getRandomAnimeRouteHandler)
  .openapi(getRandomMangaRoute, getRandomMangaRouteHandler)
  .openapi(getRandomCharactersRoute, getRandomCharactersRouteHandler)
  .openapi(getRandomPeopleRoute, getRandomPeopleRouteHandler)
  .openapi(getRandomUsersRoute, getRandomUsersRouteHandler)
  .openapi(getRecommendationsAnimeRoute, getRecommendationsAnimeRouteHandler)
  .openapi(getRecommendationsMangaRoute, getRecommendationsMangaRouteHandler)
  .openapi(getReviewsAnimeRoute, getReviewsAnimeRouteHandler)
  .openapi(getReviewsMangaRoute, getReviewsMangaRouteHandler)
  .openapi(getSchedulesRoute, getSchedulesRouteHandler)
  .openapi(getAnimeRoute, getAnimeRouteHandler)
  .openapi(getMangaRoute, getMangaRouteHandler)
  .openapi(getPeopleRoute, getPeopleRouteHandler)
  .openapi(getCharactersRoute, getCharactersRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserbyidIdRoute, getUsersUserbyidIdRouteHandler)
  .openapi(getClubsRoute, getClubsRouteHandler)
  .openapi(getProducersRoute, getProducersRouteHandler)
  .openapi(getSeasonsNowRoute, getSeasonsNowRouteHandler)
  .openapi(getSeasonsYearSeasonRoute, getSeasonsYearSeasonRouteHandler)
  .openapi(getSeasonsRoute, getSeasonsRouteHandler)
  .openapi(getSeasonsUpcomingRoute, getSeasonsUpcomingRouteHandler)
  .openapi(getTopAnimeRoute, getTopAnimeRouteHandler)
  .openapi(getTopMangaRoute, getTopMangaRouteHandler)
  .openapi(getTopPeopleRoute, getTopPeopleRouteHandler)
  .openapi(getTopCharactersRoute, getTopCharactersRouteHandler)
  .openapi(getTopReviewsRoute, getTopReviewsRouteHandler)
  .openapi(getUsersUsernameFullRoute, getUsersUsernameFullRouteHandler)
  .openapi(getUsersUsernameRoute, getUsersUsernameRouteHandler)
  .openapi(getUsersUsernameStatisticsRoute, getUsersUsernameStatisticsRouteHandler)
  .openapi(getUsersUsernameFavoritesRoute, getUsersUsernameFavoritesRouteHandler)
  .openapi(getUsersUsernameUserupdatesRoute, getUsersUsernameUserupdatesRouteHandler)
  .openapi(getUsersUsernameAboutRoute, getUsersUsernameAboutRouteHandler)
  .openapi(getUsersUsernameHistoryRoute, getUsersUsernameHistoryRouteHandler)
  .openapi(getUsersUsernameFriendsRoute, getUsersUsernameFriendsRouteHandler)
  .openapi(getUsersUsernameAnimelistRoute, getUsersUsernameAnimelistRouteHandler)
  .openapi(getUsersUsernameMangalistRoute, getUsersUsernameMangalistRouteHandler)
  .openapi(getUsersUsernameReviewsRoute, getUsersUsernameReviewsRouteHandler)
  .openapi(getUsersUsernameRecommendationsRoute, getUsersUsernameRecommendationsRouteHandler)
  .openapi(getUsersUsernameClubsRoute, getUsersUsernameClubsRouteHandler)
  .openapi(getUsersUsernameExternalRoute, getUsersUsernameExternalRouteHandler)
  .openapi(getWatchEpisodesRoute, getWatchEpisodesRouteHandler)
  .openapi(getWatchEpisodesPopularRoute, getWatchEpisodesPopularRouteHandler)
  .openapi(getWatchPromosRoute, getWatchPromosRouteHandler)
  .openapi(getWatchPromosPopularRoute, getWatchPromosPopularRouteHandler)

export default app
