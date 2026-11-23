import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsRoute,
  deleteMeAudiobooksRoute,
  deleteMeEpisodesRoute,
  deleteMeFollowingRoute,
  deleteMeLibraryRoute,
  deleteMeShowsRoute,
  deleteMeTracksRoute,
  deletePlaylistsPlaylistIdFollowersRoute,
  deletePlaylistsPlaylistIdItemsRoute,
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
  getMeLibraryContainsRoute,
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
  getPlaylistsPlaylistIdItemsRoute,
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
  postMePlaylistsRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdTracksRoute,
  postUsersUserIdPlaylistsRoute,
  putMeAlbumsRoute,
  putMeAudiobooksRoute,
  putMeEpisodesRoute,
  putMeFollowingRoute,
  putMeLibraryRoute,
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
  putPlaylistsPlaylistIdItemsRoute,
  putPlaylistsPlaylistIdRoute,
  putPlaylistsPlaylistIdTracksRoute,
} from './routes'
import {
  deleteMeAlbumsRouteHandler,
  deleteMeAudiobooksRouteHandler,
  deleteMeEpisodesRouteHandler,
  deleteMeFollowingRouteHandler,
  deleteMeLibraryRouteHandler,
  deleteMeShowsRouteHandler,
  deleteMeTracksRouteHandler,
  deletePlaylistsPlaylistIdFollowersRouteHandler,
  deletePlaylistsPlaylistIdItemsRouteHandler,
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
  getMeLibraryContainsRouteHandler,
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
  getPlaylistsPlaylistIdItemsRouteHandler,
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
  postMePlaylistsRouteHandler,
  postPlaylistsPlaylistIdItemsRouteHandler,
  postPlaylistsPlaylistIdTracksRouteHandler,
  postUsersUserIdPlaylistsRouteHandler,
  putMeAlbumsRouteHandler,
  putMeAudiobooksRouteHandler,
  putMeEpisodesRouteHandler,
  putMeFollowingRouteHandler,
  putMeLibraryRouteHandler,
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
  putPlaylistsPlaylistIdItemsRouteHandler,
  putPlaylistsPlaylistIdRouteHandler,
  putPlaylistsPlaylistIdTracksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAlbumsIdRoute, getAlbumsIdRouteHandler)
  .openapi(getAlbumsRoute, getAlbumsRouteHandler)
  .openapi(getAlbumsIdTracksRoute, getAlbumsIdTracksRouteHandler)
  .openapi(getArtistsIdRoute, getArtistsIdRouteHandler)
  .openapi(getArtistsRoute, getArtistsRouteHandler)
  .openapi(getArtistsIdAlbumsRoute, getArtistsIdAlbumsRouteHandler)
  .openapi(getArtistsIdTopTracksRoute, getArtistsIdTopTracksRouteHandler)
  .openapi(getArtistsIdRelatedArtistsRoute, getArtistsIdRelatedArtistsRouteHandler)
  .openapi(getShowsIdRoute, getShowsIdRouteHandler)
  .openapi(getShowsRoute, getShowsRouteHandler)
  .openapi(getShowsIdEpisodesRoute, getShowsIdEpisodesRouteHandler)
  .openapi(getEpisodesIdRoute, getEpisodesIdRouteHandler)
  .openapi(getEpisodesRoute, getEpisodesRouteHandler)
  .openapi(getAudiobooksIdRoute, getAudiobooksIdRouteHandler)
  .openapi(getAudiobooksRoute, getAudiobooksRouteHandler)
  .openapi(getAudiobooksIdChaptersRoute, getAudiobooksIdChaptersRouteHandler)
  .openapi(getMeAudiobooksRoute, getMeAudiobooksRouteHandler)
  .openapi(putMeAudiobooksRoute, putMeAudiobooksRouteHandler)
  .openapi(deleteMeAudiobooksRoute, deleteMeAudiobooksRouteHandler)
  .openapi(getMeAudiobooksContainsRoute, getMeAudiobooksContainsRouteHandler)
  .openapi(getChaptersIdRoute, getChaptersIdRouteHandler)
  .openapi(getChaptersRoute, getChaptersRouteHandler)
  .openapi(getTracksIdRoute, getTracksIdRouteHandler)
  .openapi(getTracksRoute, getTracksRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getPlaylistsPlaylistIdRoute, getPlaylistsPlaylistIdRouteHandler)
  .openapi(putPlaylistsPlaylistIdRoute, putPlaylistsPlaylistIdRouteHandler)
  .openapi(getPlaylistsPlaylistIdTracksRoute, getPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(postPlaylistsPlaylistIdTracksRoute, postPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(putPlaylistsPlaylistIdTracksRoute, putPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(deletePlaylistsPlaylistIdTracksRoute, deletePlaylistsPlaylistIdTracksRouteHandler)
  .openapi(getPlaylistsPlaylistIdItemsRoute, getPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(postPlaylistsPlaylistIdItemsRoute, postPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(putPlaylistsPlaylistIdItemsRoute, putPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(deletePlaylistsPlaylistIdItemsRoute, deletePlaylistsPlaylistIdItemsRouteHandler)
  .openapi(getMePlaylistsRoute, getMePlaylistsRouteHandler)
  .openapi(postMePlaylistsRoute, postMePlaylistsRouteHandler)
  .openapi(putMeLibraryRoute, putMeLibraryRouteHandler)
  .openapi(deleteMeLibraryRoute, deleteMeLibraryRouteHandler)
  .openapi(getMeLibraryContainsRoute, getMeLibraryContainsRouteHandler)
  .openapi(getMeAlbumsRoute, getMeAlbumsRouteHandler)
  .openapi(putMeAlbumsRoute, putMeAlbumsRouteHandler)
  .openapi(deleteMeAlbumsRoute, deleteMeAlbumsRouteHandler)
  .openapi(getMeAlbumsContainsRoute, getMeAlbumsContainsRouteHandler)
  .openapi(getMeTracksRoute, getMeTracksRouteHandler)
  .openapi(putMeTracksRoute, putMeTracksRouteHandler)
  .openapi(deleteMeTracksRoute, deleteMeTracksRouteHandler)
  .openapi(getMeTracksContainsRoute, getMeTracksContainsRouteHandler)
  .openapi(getMeEpisodesRoute, getMeEpisodesRouteHandler)
  .openapi(putMeEpisodesRoute, putMeEpisodesRouteHandler)
  .openapi(deleteMeEpisodesRoute, deleteMeEpisodesRouteHandler)
  .openapi(getMeEpisodesContainsRoute, getMeEpisodesContainsRouteHandler)
  .openapi(getMeShowsRoute, getMeShowsRouteHandler)
  .openapi(putMeShowsRoute, putMeShowsRouteHandler)
  .openapi(deleteMeShowsRoute, deleteMeShowsRouteHandler)
  .openapi(getMeShowsContainsRoute, getMeShowsContainsRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(getUsersUserIdPlaylistsRoute, getUsersUserIdPlaylistsRouteHandler)
  .openapi(postUsersUserIdPlaylistsRoute, postUsersUserIdPlaylistsRouteHandler)
  .openapi(putPlaylistsPlaylistIdFollowersRoute, putPlaylistsPlaylistIdFollowersRouteHandler)
  .openapi(deletePlaylistsPlaylistIdFollowersRoute, deletePlaylistsPlaylistIdFollowersRouteHandler)
  .openapi(getBrowseFeaturedPlaylistsRoute, getBrowseFeaturedPlaylistsRouteHandler)
  .openapi(getBrowseCategoriesRoute, getBrowseCategoriesRouteHandler)
  .openapi(getBrowseCategoriesCategoryIdRoute, getBrowseCategoriesCategoryIdRouteHandler)
  .openapi(
    getBrowseCategoriesCategoryIdPlaylistsRoute,
    getBrowseCategoriesCategoryIdPlaylistsRouteHandler,
  )
  .openapi(getPlaylistsPlaylistIdImagesRoute, getPlaylistsPlaylistIdImagesRouteHandler)
  .openapi(putPlaylistsPlaylistIdImagesRoute, putPlaylistsPlaylistIdImagesRouteHandler)
  .openapi(getBrowseNewReleasesRoute, getBrowseNewReleasesRouteHandler)
  .openapi(getMeFollowingRoute, getMeFollowingRouteHandler)
  .openapi(putMeFollowingRoute, putMeFollowingRouteHandler)
  .openapi(deleteMeFollowingRoute, deleteMeFollowingRouteHandler)
  .openapi(getMeFollowingContainsRoute, getMeFollowingContainsRouteHandler)
  .openapi(
    getPlaylistsPlaylistIdFollowersContainsRoute,
    getPlaylistsPlaylistIdFollowersContainsRouteHandler,
  )
  .openapi(getAudioFeaturesRoute, getAudioFeaturesRouteHandler)
  .openapi(getAudioFeaturesIdRoute, getAudioFeaturesIdRouteHandler)
  .openapi(getAudioAnalysisIdRoute, getAudioAnalysisIdRouteHandler)
  .openapi(getRecommendationsRoute, getRecommendationsRouteHandler)
  .openapi(
    getRecommendationsAvailableGenreSeedsRoute,
    getRecommendationsAvailableGenreSeedsRouteHandler,
  )
  .openapi(getMePlayerRoute, getMePlayerRouteHandler)
  .openapi(putMePlayerRoute, putMePlayerRouteHandler)
  .openapi(getMePlayerDevicesRoute, getMePlayerDevicesRouteHandler)
  .openapi(getMePlayerCurrentlyPlayingRoute, getMePlayerCurrentlyPlayingRouteHandler)
  .openapi(putMePlayerPlayRoute, putMePlayerPlayRouteHandler)
  .openapi(putMePlayerPauseRoute, putMePlayerPauseRouteHandler)
  .openapi(postMePlayerNextRoute, postMePlayerNextRouteHandler)
  .openapi(postMePlayerPreviousRoute, postMePlayerPreviousRouteHandler)
  .openapi(putMePlayerSeekRoute, putMePlayerSeekRouteHandler)
  .openapi(putMePlayerRepeatRoute, putMePlayerRepeatRouteHandler)
  .openapi(putMePlayerVolumeRoute, putMePlayerVolumeRouteHandler)
  .openapi(putMePlayerShuffleRoute, putMePlayerShuffleRouteHandler)
  .openapi(getMePlayerRecentlyPlayedRoute, getMePlayerRecentlyPlayedRouteHandler)
  .openapi(getMePlayerQueueRoute, getMePlayerQueueRouteHandler)
  .openapi(postMePlayerQueueRoute, postMePlayerQueueRouteHandler)
  .openapi(getMarketsRoute, getMarketsRouteHandler)
  .openapi(getMeTopArtistsRoute, getMeTopArtistsRouteHandler)
  .openapi(getMeTopTracksRoute, getMeTopTracksRouteHandler)

export default app
