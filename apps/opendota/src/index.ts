import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMatchesMatchIdRoute,
  getPlayersAccountIdRoute,
  getPlayersAccountIdWlRoute,
  getPlayersAccountIdRecentMatchesRoute,
  getPlayersAccountIdMatchesRoute,
  getPlayersAccountIdHeroesRoute,
  getPlayersAccountIdPeersRoute,
  getPlayersAccountIdProsRoute,
  getPlayersAccountIdTotalsRoute,
  getPlayersAccountIdCountsRoute,
  getPlayersAccountIdHistogramsFieldRoute,
  getPlayersAccountIdWardmapRoute,
  getPlayersAccountIdWordcloudRoute,
  getPlayersAccountIdRatingsRoute,
  getPlayersAccountIdRankingsRoute,
  postPlayersAccountIdRefreshRoute,
  getTopPlayersRoute,
  getProPlayersRoute,
  getProMatchesRoute,
  getPublicMatchesRoute,
  getParsedMatchesRoute,
  getExplorerRoute,
  getMetadataRoute,
  getDistributionsRoute,
  getSearchRoute,
  getRankingsRoute,
  getBenchmarksRoute,
  getHealthRoute,
  getRequestJobIdRoute,
  postRequestMatchIdRoute,
  getFindMatchesRoute,
  getHeroesRoute,
  getHeroStatsRoute,
  getHeroesHeroIdMatchesRoute,
  getHeroesHeroIdMatchupsRoute,
  getHeroesHeroIdDurationsRoute,
  getHeroesHeroIdPlayersRoute,
  getHeroesHeroIdItemPopularityRoute,
  getLeaguesRoute,
  getLeaguesLeagueIdRoute,
  getLeaguesLeagueIdMatchesRoute,
  getLeaguesLeagueIdMatchIdsRoute,
  getLeaguesLeagueIdTeamsRoute,
  getTeamsRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdMatchesRoute,
  getTeamsTeamIdPlayersRoute,
  getTeamsTeamIdHeroesRoute,
  getRecordsFieldRoute,
  getLiveRoute,
  getScenariosItemTimingsRoute,
  getScenariosLaneRolesRoute,
  getScenariosMiscRoute,
  getSchemaRoute,
  getConstantsResourceRoute,
} from './routes'
import {
  getMatchesMatchIdRouteHandler,
  getPlayersAccountIdRouteHandler,
  getPlayersAccountIdWlRouteHandler,
  getPlayersAccountIdRecentMatchesRouteHandler,
  getPlayersAccountIdMatchesRouteHandler,
  getPlayersAccountIdHeroesRouteHandler,
  getPlayersAccountIdPeersRouteHandler,
  getPlayersAccountIdProsRouteHandler,
  getPlayersAccountIdTotalsRouteHandler,
  getPlayersAccountIdCountsRouteHandler,
  getPlayersAccountIdHistogramsFieldRouteHandler,
  getPlayersAccountIdWardmapRouteHandler,
  getPlayersAccountIdWordcloudRouteHandler,
  getPlayersAccountIdRatingsRouteHandler,
  getPlayersAccountIdRankingsRouteHandler,
  postPlayersAccountIdRefreshRouteHandler,
  getTopPlayersRouteHandler,
  getProPlayersRouteHandler,
  getProMatchesRouteHandler,
  getPublicMatchesRouteHandler,
  getParsedMatchesRouteHandler,
  getExplorerRouteHandler,
  getMetadataRouteHandler,
  getDistributionsRouteHandler,
  getSearchRouteHandler,
  getRankingsRouteHandler,
  getBenchmarksRouteHandler,
  getHealthRouteHandler,
  getRequestJobIdRouteHandler,
  postRequestMatchIdRouteHandler,
  getFindMatchesRouteHandler,
  getHeroesRouteHandler,
  getHeroStatsRouteHandler,
  getHeroesHeroIdMatchesRouteHandler,
  getHeroesHeroIdMatchupsRouteHandler,
  getHeroesHeroIdDurationsRouteHandler,
  getHeroesHeroIdPlayersRouteHandler,
  getHeroesHeroIdItemPopularityRouteHandler,
  getLeaguesRouteHandler,
  getLeaguesLeagueIdRouteHandler,
  getLeaguesLeagueIdMatchesRouteHandler,
  getLeaguesLeagueIdMatchIdsRouteHandler,
  getLeaguesLeagueIdTeamsRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdRouteHandler,
  getTeamsTeamIdMatchesRouteHandler,
  getTeamsTeamIdPlayersRouteHandler,
  getTeamsTeamIdHeroesRouteHandler,
  getRecordsFieldRouteHandler,
  getLiveRouteHandler,
  getScenariosItemTimingsRouteHandler,
  getScenariosLaneRolesRouteHandler,
  getScenariosMiscRouteHandler,
  getSchemaRouteHandler,
  getConstantsResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMatchesMatchIdRoute, getMatchesMatchIdRouteHandler)
  .openapi(getPlayersAccountIdRoute, getPlayersAccountIdRouteHandler)
  .openapi(getPlayersAccountIdWlRoute, getPlayersAccountIdWlRouteHandler)
  .openapi(getPlayersAccountIdRecentMatchesRoute, getPlayersAccountIdRecentMatchesRouteHandler)
  .openapi(getPlayersAccountIdMatchesRoute, getPlayersAccountIdMatchesRouteHandler)
  .openapi(getPlayersAccountIdHeroesRoute, getPlayersAccountIdHeroesRouteHandler)
  .openapi(getPlayersAccountIdPeersRoute, getPlayersAccountIdPeersRouteHandler)
  .openapi(getPlayersAccountIdProsRoute, getPlayersAccountIdProsRouteHandler)
  .openapi(getPlayersAccountIdTotalsRoute, getPlayersAccountIdTotalsRouteHandler)
  .openapi(getPlayersAccountIdCountsRoute, getPlayersAccountIdCountsRouteHandler)
  .openapi(getPlayersAccountIdHistogramsFieldRoute, getPlayersAccountIdHistogramsFieldRouteHandler)
  .openapi(getPlayersAccountIdWardmapRoute, getPlayersAccountIdWardmapRouteHandler)
  .openapi(getPlayersAccountIdWordcloudRoute, getPlayersAccountIdWordcloudRouteHandler)
  .openapi(getPlayersAccountIdRatingsRoute, getPlayersAccountIdRatingsRouteHandler)
  .openapi(getPlayersAccountIdRankingsRoute, getPlayersAccountIdRankingsRouteHandler)
  .openapi(postPlayersAccountIdRefreshRoute, postPlayersAccountIdRefreshRouteHandler)
  .openapi(getTopPlayersRoute, getTopPlayersRouteHandler)
  .openapi(getProPlayersRoute, getProPlayersRouteHandler)
  .openapi(getProMatchesRoute, getProMatchesRouteHandler)
  .openapi(getPublicMatchesRoute, getPublicMatchesRouteHandler)
  .openapi(getParsedMatchesRoute, getParsedMatchesRouteHandler)
  .openapi(getExplorerRoute, getExplorerRouteHandler)
  .openapi(getMetadataRoute, getMetadataRouteHandler)
  .openapi(getDistributionsRoute, getDistributionsRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getRankingsRoute, getRankingsRouteHandler)
  .openapi(getBenchmarksRoute, getBenchmarksRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getRequestJobIdRoute, getRequestJobIdRouteHandler)
  .openapi(postRequestMatchIdRoute, postRequestMatchIdRouteHandler)
  .openapi(getFindMatchesRoute, getFindMatchesRouteHandler)
  .openapi(getHeroesRoute, getHeroesRouteHandler)
  .openapi(getHeroStatsRoute, getHeroStatsRouteHandler)
  .openapi(getHeroesHeroIdMatchesRoute, getHeroesHeroIdMatchesRouteHandler)
  .openapi(getHeroesHeroIdMatchupsRoute, getHeroesHeroIdMatchupsRouteHandler)
  .openapi(getHeroesHeroIdDurationsRoute, getHeroesHeroIdDurationsRouteHandler)
  .openapi(getHeroesHeroIdPlayersRoute, getHeroesHeroIdPlayersRouteHandler)
  .openapi(getHeroesHeroIdItemPopularityRoute, getHeroesHeroIdItemPopularityRouteHandler)
  .openapi(getLeaguesRoute, getLeaguesRouteHandler)
  .openapi(getLeaguesLeagueIdRoute, getLeaguesLeagueIdRouteHandler)
  .openapi(getLeaguesLeagueIdMatchesRoute, getLeaguesLeagueIdMatchesRouteHandler)
  .openapi(getLeaguesLeagueIdMatchIdsRoute, getLeaguesLeagueIdMatchIdsRouteHandler)
  .openapi(getLeaguesLeagueIdTeamsRoute, getLeaguesLeagueIdTeamsRouteHandler)
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(getTeamsTeamIdRoute, getTeamsTeamIdRouteHandler)
  .openapi(getTeamsTeamIdMatchesRoute, getTeamsTeamIdMatchesRouteHandler)
  .openapi(getTeamsTeamIdPlayersRoute, getTeamsTeamIdPlayersRouteHandler)
  .openapi(getTeamsTeamIdHeroesRoute, getTeamsTeamIdHeroesRouteHandler)
  .openapi(getRecordsFieldRoute, getRecordsFieldRouteHandler)
  .openapi(getLiveRoute, getLiveRouteHandler)
  .openapi(getScenariosItemTimingsRoute, getScenariosItemTimingsRouteHandler)
  .openapi(getScenariosLaneRolesRoute, getScenariosLaneRolesRouteHandler)
  .openapi(getScenariosMiscRoute, getScenariosMiscRouteHandler)
  .openapi(getSchemaRoute, getSchemaRouteHandler)
  .openapi(getConstantsResourceRoute, getConstantsResourceRouteHandler)

export default app
