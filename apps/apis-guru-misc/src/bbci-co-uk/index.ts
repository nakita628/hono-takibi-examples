import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAtozLetterProgrammesRoute,
  getCategoriesCategoryEpisodesRoute,
  getCategoriesCategoryHighlightsRoute,
  getCategoriesCategoryProgrammesRoute,
  getCategoriesCategoryRoute,
  getCategoriesRoute,
  getChannelsChannelBroadcastsRoute,
  getChannelsChannelHighlightsRoute,
  getChannelsChannelProgrammesRoute,
  getChannelsChannelScheduleDateRoute,
  getChannelsRoute,
  getClipsPidRoute,
  getEpisodesPidNextRoute,
  getEpisodesPidPostrollsRoute,
  getEpisodesPidPrerollsRoute,
  getEpisodesPidRecommendationsRoute,
  getEpisodesPidRoute,
  getGroupsPidEpisodesRoute,
  getGroupsPopularEpisodesRoute,
  getHomeHighlightsRoute,
  getProgrammesPidEpisodesRoute,
  getProgrammesPidRoute,
  getRegionsRoute,
  getSchemaIblJsonRoute,
  getSearchRoute,
  getSearchSuggestRoute,
  getStatusRoute,
  getUserPurchasesRoute,
  getUserRecommendationsRoute,
  getUserWatchingRoute,
} from './routes'
import {
  getAtozLetterProgrammesRouteHandler,
  getCategoriesCategoryEpisodesRouteHandler,
  getCategoriesCategoryHighlightsRouteHandler,
  getCategoriesCategoryProgrammesRouteHandler,
  getCategoriesCategoryRouteHandler,
  getCategoriesRouteHandler,
  getChannelsChannelBroadcastsRouteHandler,
  getChannelsChannelHighlightsRouteHandler,
  getChannelsChannelProgrammesRouteHandler,
  getChannelsChannelScheduleDateRouteHandler,
  getChannelsRouteHandler,
  getClipsPidRouteHandler,
  getEpisodesPidNextRouteHandler,
  getEpisodesPidPostrollsRouteHandler,
  getEpisodesPidPrerollsRouteHandler,
  getEpisodesPidRecommendationsRouteHandler,
  getEpisodesPidRouteHandler,
  getGroupsPidEpisodesRouteHandler,
  getGroupsPopularEpisodesRouteHandler,
  getHomeHighlightsRouteHandler,
  getProgrammesPidEpisodesRouteHandler,
  getProgrammesPidRouteHandler,
  getRegionsRouteHandler,
  getSchemaIblJsonRouteHandler,
  getSearchRouteHandler,
  getSearchSuggestRouteHandler,
  getStatusRouteHandler,
  getUserPurchasesRouteHandler,
  getUserRecommendationsRouteHandler,
  getUserWatchingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAtozLetterProgrammesRoute, getAtozLetterProgrammesRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCategoriesCategoryRoute, getCategoriesCategoryRouteHandler)
  .openapi(getCategoriesCategoryEpisodesRoute, getCategoriesCategoryEpisodesRouteHandler)
  .openapi(getCategoriesCategoryHighlightsRoute, getCategoriesCategoryHighlightsRouteHandler)
  .openapi(getCategoriesCategoryProgrammesRoute, getCategoriesCategoryProgrammesRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(getChannelsChannelBroadcastsRoute, getChannelsChannelBroadcastsRouteHandler)
  .openapi(getChannelsChannelHighlightsRoute, getChannelsChannelHighlightsRouteHandler)
  .openapi(getChannelsChannelProgrammesRoute, getChannelsChannelProgrammesRouteHandler)
  .openapi(getChannelsChannelScheduleDateRoute, getChannelsChannelScheduleDateRouteHandler)
  .openapi(getClipsPidRoute, getClipsPidRouteHandler)
  .openapi(getEpisodesPidRoute, getEpisodesPidRouteHandler)
  .openapi(getEpisodesPidNextRoute, getEpisodesPidNextRouteHandler)
  .openapi(getEpisodesPidPostrollsRoute, getEpisodesPidPostrollsRouteHandler)
  .openapi(getEpisodesPidPrerollsRoute, getEpisodesPidPrerollsRouteHandler)
  .openapi(getEpisodesPidRecommendationsRoute, getEpisodesPidRecommendationsRouteHandler)
  .openapi(getGroupsPopularEpisodesRoute, getGroupsPopularEpisodesRouteHandler)
  .openapi(getGroupsPidEpisodesRoute, getGroupsPidEpisodesRouteHandler)
  .openapi(getHomeHighlightsRoute, getHomeHighlightsRouteHandler)
  .openapi(getProgrammesPidRoute, getProgrammesPidRouteHandler)
  .openapi(getProgrammesPidEpisodesRoute, getProgrammesPidEpisodesRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getSchemaIblJsonRoute, getSchemaIblJsonRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchSuggestRoute, getSearchSuggestRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getUserPurchasesRoute, getUserPurchasesRouteHandler)
  .openapi(getUserRecommendationsRoute, getUserRecommendationsRouteHandler)
  .openapi(getUserWatchingRoute, getUserWatchingRouteHandler)

export default app
