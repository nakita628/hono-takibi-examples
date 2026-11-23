import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePodcastsIdRoute,
  getBestPodcastsRoute,
  getCuratedPodcastsIdRoute,
  getCuratedPodcastsRoute,
  getEpisodesIdRecommendationsRoute,
  getEpisodesIdRoute,
  getGenresRoute,
  getJustListenRoute,
  getLanguagesRoute,
  getPlaylistsIdRoute,
  getPlaylistsRoute,
  getPodcastsIdAudienceRoute,
  getPodcastsIdRecommendationsRoute,
  getPodcastsIdRoute,
  getRegionsRoute,
  getRelatedSearchesRoute,
  getSearchRoute,
  getSpellcheckRoute,
  getTrendingSearchesRoute,
  getTypeaheadRoute,
  postEpisodesRoute,
  postPodcastsRoute,
  postPodcastsSubmitRoute,
} from './routes'
import {
  deletePodcastsIdRouteHandler,
  getBestPodcastsRouteHandler,
  getCuratedPodcastsIdRouteHandler,
  getCuratedPodcastsRouteHandler,
  getEpisodesIdRecommendationsRouteHandler,
  getEpisodesIdRouteHandler,
  getGenresRouteHandler,
  getJustListenRouteHandler,
  getLanguagesRouteHandler,
  getPlaylistsIdRouteHandler,
  getPlaylistsRouteHandler,
  getPodcastsIdAudienceRouteHandler,
  getPodcastsIdRecommendationsRouteHandler,
  getPodcastsIdRouteHandler,
  getRegionsRouteHandler,
  getRelatedSearchesRouteHandler,
  getSearchRouteHandler,
  getSpellcheckRouteHandler,
  getTrendingSearchesRouteHandler,
  getTypeaheadRouteHandler,
  postEpisodesRouteHandler,
  postPodcastsRouteHandler,
  postPodcastsSubmitRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBestPodcastsRoute, getBestPodcastsRouteHandler)
  .openapi(getCuratedPodcastsRoute, getCuratedPodcastsRouteHandler)
  .openapi(getCuratedPodcastsIdRoute, getCuratedPodcastsIdRouteHandler)
  .openapi(postEpisodesRoute, postEpisodesRouteHandler)
  .openapi(getEpisodesIdRoute, getEpisodesIdRouteHandler)
  .openapi(getEpisodesIdRecommendationsRoute, getEpisodesIdRecommendationsRouteHandler)
  .openapi(getGenresRoute, getGenresRouteHandler)
  .openapi(getJustListenRoute, getJustListenRouteHandler)
  .openapi(getLanguagesRoute, getLanguagesRouteHandler)
  .openapi(getPlaylistsRoute, getPlaylistsRouteHandler)
  .openapi(getPlaylistsIdRoute, getPlaylistsIdRouteHandler)
  .openapi(postPodcastsRoute, postPodcastsRouteHandler)
  .openapi(postPodcastsSubmitRoute, postPodcastsSubmitRouteHandler)
  .openapi(deletePodcastsIdRoute, deletePodcastsIdRouteHandler)
  .openapi(getPodcastsIdRoute, getPodcastsIdRouteHandler)
  .openapi(getPodcastsIdAudienceRoute, getPodcastsIdAudienceRouteHandler)
  .openapi(getPodcastsIdRecommendationsRoute, getPodcastsIdRecommendationsRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getRelatedSearchesRoute, getRelatedSearchesRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSpellcheckRoute, getSpellcheckRouteHandler)
  .openapi(getTrendingSearchesRoute, getTrendingSearchesRouteHandler)
  .openapi(getTypeaheadRoute, getTypeaheadRouteHandler)

export default app
