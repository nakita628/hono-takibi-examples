import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBenchmarksRoute,
  getConstantsResourceRoute,
  getDistributionsRoute,
  getExplorerRoute,
  getFindMatchesRoute,
  getHealthRoute,
  getHeroesHeroIdDurationsRoute,
  getHeroesHeroIdItemPopularityRoute,
  getHeroesHeroIdMatchesRoute,
  getHeroesHeroIdMatchupsRoute,
  getHeroesHeroIdPlayersRoute,
  getHeroesRoute,
  getHeroStatsRoute,
  getLeaguesLeagueIdMatchesRoute,
  getLeaguesLeagueIdMatchIdsRoute,
  getLeaguesLeagueIdRoute,
  getLeaguesLeagueIdTeamsRoute,
  getLeaguesRoute,
  getLiveRoute,
  getMatchesMatchIdRoute,
  getMetadataRoute,
  getParsedMatchesRoute,
  getPlayersAccountIdCountsRoute,
  getPlayersAccountIdHeroesRoute,
  getPlayersAccountIdHistogramsFieldRoute,
  getPlayersAccountIdMatchesRoute,
  getPlayersAccountIdPeersRoute,
  getPlayersAccountIdProsRoute,
  getPlayersAccountIdRankingsRoute,
  getPlayersAccountIdRatingsRoute,
  getPlayersAccountIdRecentMatchesRoute,
  getPlayersAccountIdRoute,
  getPlayersAccountIdTotalsRoute,
  getPlayersAccountIdWardmapRoute,
  getPlayersAccountIdWlRoute,
  getPlayersAccountIdWordcloudRoute,
  getProMatchesRoute,
  getProPlayersRoute,
  getPublicMatchesRoute,
  getRankingsRoute,
  getRecordsFieldRoute,
  getRequestJobIdRoute,
  getScenariosItemTimingsRoute,
  getScenariosLaneRolesRoute,
  getScenariosMiscRoute,
  getSchemaRoute,
  getSearchRoute,
  getTeamsRoute,
  getTeamsTeamIdHeroesRoute,
  getTeamsTeamIdMatchesRoute,
  getTeamsTeamIdPlayersRoute,
  getTeamsTeamIdRoute,
  getTopPlayersRoute,
  postPlayersAccountIdRefreshRoute,
  postRequestMatchIdRoute,
} from './routes'
import {
  getBenchmarksRouteHandler,
  getConstantsResourceRouteHandler,
  getDistributionsRouteHandler,
  getExplorerRouteHandler,
  getFindMatchesRouteHandler,
  getHealthRouteHandler,
  getHeroesHeroIdDurationsRouteHandler,
  getHeroesHeroIdItemPopularityRouteHandler,
  getHeroesHeroIdMatchesRouteHandler,
  getHeroesHeroIdMatchupsRouteHandler,
  getHeroesHeroIdPlayersRouteHandler,
  getHeroesRouteHandler,
  getHeroStatsRouteHandler,
  getLeaguesLeagueIdMatchesRouteHandler,
  getLeaguesLeagueIdMatchIdsRouteHandler,
  getLeaguesLeagueIdRouteHandler,
  getLeaguesLeagueIdTeamsRouteHandler,
  getLeaguesRouteHandler,
  getLiveRouteHandler,
  getMatchesMatchIdRouteHandler,
  getMetadataRouteHandler,
  getParsedMatchesRouteHandler,
  getPlayersAccountIdCountsRouteHandler,
  getPlayersAccountIdHeroesRouteHandler,
  getPlayersAccountIdHistogramsFieldRouteHandler,
  getPlayersAccountIdMatchesRouteHandler,
  getPlayersAccountIdPeersRouteHandler,
  getPlayersAccountIdProsRouteHandler,
  getPlayersAccountIdRankingsRouteHandler,
  getPlayersAccountIdRatingsRouteHandler,
  getPlayersAccountIdRecentMatchesRouteHandler,
  getPlayersAccountIdRouteHandler,
  getPlayersAccountIdTotalsRouteHandler,
  getPlayersAccountIdWardmapRouteHandler,
  getPlayersAccountIdWlRouteHandler,
  getPlayersAccountIdWordcloudRouteHandler,
  getProMatchesRouteHandler,
  getProPlayersRouteHandler,
  getPublicMatchesRouteHandler,
  getRankingsRouteHandler,
  getRecordsFieldRouteHandler,
  getRequestJobIdRouteHandler,
  getScenariosItemTimingsRouteHandler,
  getScenariosLaneRolesRouteHandler,
  getScenariosMiscRouteHandler,
  getSchemaRouteHandler,
  getSearchRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdHeroesRouteHandler,
  getTeamsTeamIdMatchesRouteHandler,
  getTeamsTeamIdPlayersRouteHandler,
  getTeamsTeamIdRouteHandler,
  getTopPlayersRouteHandler,
  postPlayersAccountIdRefreshRouteHandler,
  postRequestMatchIdRouteHandler,
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
