import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsRoute,
  deleteMeAudiobooksRoute,
  deleteMeEpisodesRoute,
  deleteMeFollowingRoute,
  deleteMeShowsRoute,
  deleteMeTracksRoute,
  deletePlaylistsPlaylistIdFollowersRoute,
  deletePlaylistsPlaylistIdTracksRoute,
  getAlbumsIdRoute,
  getAlbumsIdTracksRoute,
  getAlbumsRoute,
  getArtistsIdAlbumsRoute,
  getArtistsIdRelatedArtistsRoute,
  getArtistsIdRoute,
  getArtistsIdTopTracksRoute,
  getArtistsRoute,
  getAudioAnalysisIdRoute,
  getAudiobooksIdChaptersRoute,
  getAudiobooksIdRoute,
  getAudiobooksRoute,
  getAudioFeaturesIdRoute,
  getAudioFeaturesRoute,
  getBrowseCategoriesCategoryIdPlaylistsRoute,
  getBrowseCategoriesCategoryIdRoute,
  getBrowseCategoriesRoute,
  getBrowseFeaturedPlaylistsRoute,
  getBrowseNewReleasesRoute,
  getChaptersIdRoute,
  getChaptersRoute,
  getEpisodesIdRoute,
  getEpisodesRoute,
  getMarketsRoute,
  getMeAlbumsContainsRoute,
  getMeAlbumsRoute,
  getMeAudiobooksContainsRoute,
  getMeAudiobooksRoute,
  getMeEpisodesContainsRoute,
  getMeEpisodesRoute,
  getMeFollowingContainsRoute,
  getMeFollowingRoute,
  getMePlayerCurrentlyPlayingRoute,
  getMePlayerDevicesRoute,
  getMePlayerQueueRoute,
  getMePlayerRecentlyPlayedRoute,
  getMePlayerRoute,
  getMePlaylistsRoute,
  getMeRoute,
  getMeShowsContainsRoute,
  getMeShowsRoute,
  getMeTopArtistsRoute,
  getMeTopTracksRoute,
  getMeTracksContainsRoute,
  getMeTracksRoute,
  getPlaylistsPlaylistIdFollowersContainsRoute,
  getPlaylistsPlaylistIdImagesRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  getRecommendationsAvailableGenreSeedsRoute,
  getRecommendationsRoute,
  getSearchRoute,
  getShowsIdEpisodesRoute,
  getShowsIdRoute,
  getShowsRoute,
  getTracksIdRoute,
  getTracksRoute,
  getUsersUserIdPlaylistsRoute,
  getUsersUserIdRoute,
  postMePlayerNextRoute,
  postMePlayerPreviousRoute,
  postMePlayerQueueRoute,
  postPlaylistsPlaylistIdTracksRoute,
  postUsersUserIdPlaylistsRoute,
  putMeAlbumsRoute,
  putMeAudiobooksRoute,
  putMeEpisodesRoute,
  putMeFollowingRoute,
  putMePlayerPauseRoute,
  putMePlayerPlayRoute,
  putMePlayerRepeatRoute,
  putMePlayerRoute,
  putMePlayerSeekRoute,
  putMePlayerShuffleRoute,
  putMePlayerVolumeRoute,
  putMeShowsRoute,
  putMeTracksRoute,
  putPlaylistsPlaylistIdFollowersRoute,
  putPlaylistsPlaylistIdImagesRoute,
  putPlaylistsPlaylistIdRoute,
  putPlaylistsPlaylistIdTracksRoute,
} from './routes'
import {
  deleteMeAlbumsRouteHandler,
  deleteMeAudiobooksRouteHandler,
  deleteMeEpisodesRouteHandler,
  deleteMeFollowingRouteHandler,
  deleteMeShowsRouteHandler,
  deleteMeTracksRouteHandler,
  deletePlaylistsPlaylistIdFollowersRouteHandler,
  deletePlaylistsPlaylistIdTracksRouteHandler,
  getAlbumsIdRouteHandler,
  getAlbumsIdTracksRouteHandler,
  getAlbumsRouteHandler,
  getArtistsIdAlbumsRouteHandler,
  getArtistsIdRelatedArtistsRouteHandler,
  getArtistsIdRouteHandler,
  getArtistsIdTopTracksRouteHandler,
  getArtistsRouteHandler,
  getAudioAnalysisIdRouteHandler,
  getAudiobooksIdChaptersRouteHandler,
  getAudiobooksIdRouteHandler,
  getAudiobooksRouteHandler,
  getAudioFeaturesIdRouteHandler,
  getAudioFeaturesRouteHandler,
  getBrowseCategoriesCategoryIdPlaylistsRouteHandler,
  getBrowseCategoriesCategoryIdRouteHandler,
  getBrowseCategoriesRouteHandler,
  getBrowseFeaturedPlaylistsRouteHandler,
  getBrowseNewReleasesRouteHandler,
  getChaptersIdRouteHandler,
  getChaptersRouteHandler,
  getEpisodesIdRouteHandler,
  getEpisodesRouteHandler,
  getMarketsRouteHandler,
  getMeAlbumsContainsRouteHandler,
  getMeAlbumsRouteHandler,
  getMeAudiobooksContainsRouteHandler,
  getMeAudiobooksRouteHandler,
  getMeEpisodesContainsRouteHandler,
  getMeEpisodesRouteHandler,
  getMeFollowingContainsRouteHandler,
  getMeFollowingRouteHandler,
  getMePlayerCurrentlyPlayingRouteHandler,
  getMePlayerDevicesRouteHandler,
  getMePlayerQueueRouteHandler,
  getMePlayerRecentlyPlayedRouteHandler,
  getMePlayerRouteHandler,
  getMePlaylistsRouteHandler,
  getMeRouteHandler,
  getMeShowsContainsRouteHandler,
  getMeShowsRouteHandler,
  getMeTopArtistsRouteHandler,
  getMeTopTracksRouteHandler,
  getMeTracksContainsRouteHandler,
  getMeTracksRouteHandler,
  getPlaylistsPlaylistIdFollowersContainsRouteHandler,
  getPlaylistsPlaylistIdImagesRouteHandler,
  getPlaylistsPlaylistIdRouteHandler,
  getPlaylistsPlaylistIdTracksRouteHandler,
  getRecommendationsAvailableGenreSeedsRouteHandler,
  getRecommendationsRouteHandler,
  getSearchRouteHandler,
  getShowsIdEpisodesRouteHandler,
  getShowsIdRouteHandler,
  getShowsRouteHandler,
  getTracksIdRouteHandler,
  getTracksRouteHandler,
  getUsersUserIdPlaylistsRouteHandler,
  getUsersUserIdRouteHandler,
  postMePlayerNextRouteHandler,
  postMePlayerPreviousRouteHandler,
  postMePlayerQueueRouteHandler,
  postPlaylistsPlaylistIdTracksRouteHandler,
  postUsersUserIdPlaylistsRouteHandler,
  putMeAlbumsRouteHandler,
  putMeAudiobooksRouteHandler,
  putMeEpisodesRouteHandler,
  putMeFollowingRouteHandler,
  putMePlayerPauseRouteHandler,
  putMePlayerPlayRouteHandler,
  putMePlayerRepeatRouteHandler,
  putMePlayerRouteHandler,
  putMePlayerSeekRouteHandler,
  putMePlayerShuffleRouteHandler,
  putMePlayerVolumeRouteHandler,
  putMeShowsRouteHandler,
  putMeTracksRouteHandler,
  putPlaylistsPlaylistIdFollowersRouteHandler,
  putPlaylistsPlaylistIdImagesRouteHandler,
  putPlaylistsPlaylistIdRouteHandler,
  putPlaylistsPlaylistIdTracksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAlbumsRoute, getAlbumsRouteHandler)
  .openapi(getAlbumsIdRoute, getAlbumsIdRouteHandler)
  .openapi(getAlbumsIdTracksRoute, getAlbumsIdTracksRouteHandler)
  .openapi(getArtistsRoute, getArtistsRouteHandler)
  .openapi(getArtistsIdRoute, getArtistsIdRouteHandler)
  .openapi(getArtistsIdAlbumsRoute, getArtistsIdAlbumsRouteHandler)
  .openapi(getArtistsIdRelatedArtistsRoute, getArtistsIdRelatedArtistsRouteHandler)
  .openapi(getArtistsIdTopTracksRoute, getArtistsIdTopTracksRouteHandler)
  .openapi(getAudioAnalysisIdRoute, getAudioAnalysisIdRouteHandler)
  .openapi(getAudioFeaturesRoute, getAudioFeaturesRouteHandler)
  .openapi(getAudioFeaturesIdRoute, getAudioFeaturesIdRouteHandler)
  .openapi(getAudiobooksRoute, getAudiobooksRouteHandler)
  .openapi(getAudiobooksIdRoute, getAudiobooksIdRouteHandler)
  .openapi(getAudiobooksIdChaptersRoute, getAudiobooksIdChaptersRouteHandler)
  .openapi(getBrowseCategoriesRoute, getBrowseCategoriesRouteHandler)
  .openapi(getBrowseCategoriesCategoryIdRoute, getBrowseCategoriesCategoryIdRouteHandler)
  .openapi(
    getBrowseCategoriesCategoryIdPlaylistsRoute,
    getBrowseCategoriesCategoryIdPlaylistsRouteHandler,
  )
  .openapi(getBrowseFeaturedPlaylistsRoute, getBrowseFeaturedPlaylistsRouteHandler)
  .openapi(getBrowseNewReleasesRoute, getBrowseNewReleasesRouteHandler)
  .openapi(getChaptersRoute, getChaptersRouteHandler)
  .openapi(getChaptersIdRoute, getChaptersIdRouteHandler)
  .openapi(getEpisodesRoute, getEpisodesRouteHandler)
  .openapi(getEpisodesIdRoute, getEpisodesIdRouteHandler)
  .openapi(getMarketsRoute, getMarketsRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(deleteMeAlbumsRoute, deleteMeAlbumsRouteHandler)
  .openapi(getMeAlbumsRoute, getMeAlbumsRouteHandler)
  .openapi(putMeAlbumsRoute, putMeAlbumsRouteHandler)
  .openapi(getMeAlbumsContainsRoute, getMeAlbumsContainsRouteHandler)
  .openapi(deleteMeAudiobooksRoute, deleteMeAudiobooksRouteHandler)
  .openapi(getMeAudiobooksRoute, getMeAudiobooksRouteHandler)
  .openapi(putMeAudiobooksRoute, putMeAudiobooksRouteHandler)
  .openapi(getMeAudiobooksContainsRoute, getMeAudiobooksContainsRouteHandler)
  .openapi(deleteMeEpisodesRoute, deleteMeEpisodesRouteHandler)
  .openapi(getMeEpisodesRoute, getMeEpisodesRouteHandler)
  .openapi(putMeEpisodesRoute, putMeEpisodesRouteHandler)
  .openapi(getMeEpisodesContainsRoute, getMeEpisodesContainsRouteHandler)
  .openapi(deleteMeFollowingRoute, deleteMeFollowingRouteHandler)
  .openapi(getMeFollowingRoute, getMeFollowingRouteHandler)
  .openapi(putMeFollowingRoute, putMeFollowingRouteHandler)
  .openapi(getMeFollowingContainsRoute, getMeFollowingContainsRouteHandler)
  .openapi(getMePlayerRoute, getMePlayerRouteHandler)
  .openapi(putMePlayerRoute, putMePlayerRouteHandler)
  .openapi(getMePlayerCurrentlyPlayingRoute, getMePlayerCurrentlyPlayingRouteHandler)
  .openapi(getMePlayerDevicesRoute, getMePlayerDevicesRouteHandler)
  .openapi(postMePlayerNextRoute, postMePlayerNextRouteHandler)
  .openapi(putMePlayerPauseRoute, putMePlayerPauseRouteHandler)
  .openapi(putMePlayerPlayRoute, putMePlayerPlayRouteHandler)
  .openapi(postMePlayerPreviousRoute, postMePlayerPreviousRouteHandler)
  .openapi(getMePlayerQueueRoute, getMePlayerQueueRouteHandler)
  .openapi(postMePlayerQueueRoute, postMePlayerQueueRouteHandler)
  .openapi(getMePlayerRecentlyPlayedRoute, getMePlayerRecentlyPlayedRouteHandler)
  .openapi(putMePlayerRepeatRoute, putMePlayerRepeatRouteHandler)
  .openapi(putMePlayerSeekRoute, putMePlayerSeekRouteHandler)
  .openapi(putMePlayerShuffleRoute, putMePlayerShuffleRouteHandler)
  .openapi(putMePlayerVolumeRoute, putMePlayerVolumeRouteHandler)
  .openapi(getMePlaylistsRoute, getMePlaylistsRouteHandler)
  .openapi(deleteMeShowsRoute, deleteMeShowsRouteHandler)
  .openapi(getMeShowsRoute, getMeShowsRouteHandler)
  .openapi(putMeShowsRoute, putMeShowsRouteHandler)
  .openapi(getMeShowsContainsRoute, getMeShowsContainsRouteHandler)
  .openapi(getMeTopArtistsRoute, getMeTopArtistsRouteHandler)
  .openapi(getMeTopTracksRoute, getMeTopTracksRouteHandler)
  .openapi(deleteMeTracksRoute, deleteMeTracksRouteHandler)
  .openapi(getMeTracksRoute, getMeTracksRouteHandler)
  .openapi(putMeTracksRoute, putMeTracksRouteHandler)
  .openapi(getMeTracksContainsRoute, getMeTracksContainsRouteHandler)
  .openapi(getPlaylistsPlaylistIdRoute, getPlaylistsPlaylistIdRouteHandler)
  .openapi(putPlaylistsPlaylistIdRoute, putPlaylistsPlaylistIdRouteHandler)
  .openapi(deletePlaylistsPlaylistIdFollowersRoute, deletePlaylistsPlaylistIdFollowersRouteHandler)
  .openapi(putPlaylistsPlaylistIdFollowersRoute, putPlaylistsPlaylistIdFollowersRouteHandler)
  .openapi(
    getPlaylistsPlaylistIdFollowersContainsRoute,
    getPlaylistsPlaylistIdFollowersContainsRouteHandler,
  )
  .openapi(getPlaylistsPlaylistIdImagesRoute, getPlaylistsPlaylistIdImagesRouteHandler)
  .openapi(putPlaylistsPlaylistIdImagesRoute, putPlaylistsPlaylistIdImagesRouteHandler)
  .openapi(deletePlaylistsPlaylistIdTracksRoute, deletePlaylistsPlaylistIdTracksRouteHandler)
  .openapi(getPlaylistsPlaylistIdTracksRoute, getPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(postPlaylistsPlaylistIdTracksRoute, postPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(putPlaylistsPlaylistIdTracksRoute, putPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(getRecommendationsRoute, getRecommendationsRouteHandler)
  .openapi(
    getRecommendationsAvailableGenreSeedsRoute,
    getRecommendationsAvailableGenreSeedsRouteHandler,
  )
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getShowsRoute, getShowsRouteHandler)
  .openapi(getShowsIdRoute, getShowsIdRouteHandler)
  .openapi(getShowsIdEpisodesRoute, getShowsIdEpisodesRouteHandler)
  .openapi(getTracksRoute, getTracksRouteHandler)
  .openapi(getTracksIdRoute, getTracksIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(getUsersUserIdPlaylistsRoute, getUsersUserIdPlaylistsRouteHandler)
  .openapi(postUsersUserIdPlaylistsRoute, postUsersUserIdPlaylistsRouteHandler)

export default app
