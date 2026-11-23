import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCalendarRoute,
  getCoachesRoute,
  getConferencesRoute,
  getDraftPicksRoute,
  getDraftPositionsRoute,
  getDraftTeamsRoute,
  getDrivesRoute,
  getGameBoxAdvancedRoute,
  getGamesMediaRoute,
  getGamesPlayersRoute,
  getGamesRoute,
  getGamesTeamsRoute,
  getGamesWeatherRoute,
  getLinesRoute,
  getLivePlaysRoute,
  getMetricsWpPregameRoute,
  getMetricsWpRoute,
  getPlayerPortalRoute,
  getPlayerReturningRoute,
  getPlayerSearchRoute,
  getPlayerUsageRoute,
  getPlaysRoute,
  getPlayStatsRoute,
  getPlayStatTypesRoute,
  getPlayTypesRoute,
  getPpaGamesRoute,
  getPpaPlayersGamesRoute,
  getPpaPlayersSeasonRoute,
  getPpaPredictedRoute,
  getPpaTeamsRoute,
  getRankingsRoute,
  getRatingsEloRoute,
  getRatingsSpConferencesRoute,
  getRatingsSpRoute,
  getRatingsSrsRoute,
  getRecordsRoute,
  getRecruitingGroupsRoute,
  getRecruitingPlayersRoute,
  getRecruitingTeamsRoute,
  getRosterRoute,
  getScoreboardRoute,
  getStatsCategoriesRoute,
  getStatsGameAdvancedRoute,
  getStatsPlayerSeasonRoute,
  getStatsSeasonAdvancedRoute,
  getStatsSeasonRoute,
  getTalentRoute,
  getTeamsFbsRoute,
  getTeamsMatchupRoute,
  getTeamsRoute,
  getVenuesRoute,
} from './routes'
import {
  getCalendarRouteHandler,
  getCoachesRouteHandler,
  getConferencesRouteHandler,
  getDraftPicksRouteHandler,
  getDraftPositionsRouteHandler,
  getDraftTeamsRouteHandler,
  getDrivesRouteHandler,
  getGameBoxAdvancedRouteHandler,
  getGamesMediaRouteHandler,
  getGamesPlayersRouteHandler,
  getGamesRouteHandler,
  getGamesTeamsRouteHandler,
  getGamesWeatherRouteHandler,
  getLinesRouteHandler,
  getLivePlaysRouteHandler,
  getMetricsWpPregameRouteHandler,
  getMetricsWpRouteHandler,
  getPlayerPortalRouteHandler,
  getPlayerReturningRouteHandler,
  getPlayerSearchRouteHandler,
  getPlayerUsageRouteHandler,
  getPlaysRouteHandler,
  getPlayStatsRouteHandler,
  getPlayStatTypesRouteHandler,
  getPlayTypesRouteHandler,
  getPpaGamesRouteHandler,
  getPpaPlayersGamesRouteHandler,
  getPpaPlayersSeasonRouteHandler,
  getPpaPredictedRouteHandler,
  getPpaTeamsRouteHandler,
  getRankingsRouteHandler,
  getRatingsEloRouteHandler,
  getRatingsSpConferencesRouteHandler,
  getRatingsSpRouteHandler,
  getRatingsSrsRouteHandler,
  getRecordsRouteHandler,
  getRecruitingGroupsRouteHandler,
  getRecruitingPlayersRouteHandler,
  getRecruitingTeamsRouteHandler,
  getRosterRouteHandler,
  getScoreboardRouteHandler,
  getStatsCategoriesRouteHandler,
  getStatsGameAdvancedRouteHandler,
  getStatsPlayerSeasonRouteHandler,
  getStatsSeasonAdvancedRouteHandler,
  getStatsSeasonRouteHandler,
  getTalentRouteHandler,
  getTeamsFbsRouteHandler,
  getTeamsMatchupRouteHandler,
  getTeamsRouteHandler,
  getVenuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCalendarRoute, getCalendarRouteHandler)
  .openapi(getCoachesRoute, getCoachesRouteHandler)
  .openapi(getConferencesRoute, getConferencesRouteHandler)
  .openapi(getDraftPicksRoute, getDraftPicksRouteHandler)
  .openapi(getDraftPositionsRoute, getDraftPositionsRouteHandler)
  .openapi(getDraftTeamsRoute, getDraftTeamsRouteHandler)
  .openapi(getDrivesRoute, getDrivesRouteHandler)
  .openapi(getGameBoxAdvancedRoute, getGameBoxAdvancedRouteHandler)
  .openapi(getGamesRoute, getGamesRouteHandler)
  .openapi(getGamesMediaRoute, getGamesMediaRouteHandler)
  .openapi(getGamesPlayersRoute, getGamesPlayersRouteHandler)
  .openapi(getGamesTeamsRoute, getGamesTeamsRouteHandler)
  .openapi(getGamesWeatherRoute, getGamesWeatherRouteHandler)
  .openapi(getLinesRoute, getLinesRouteHandler)
  .openapi(getLivePlaysRoute, getLivePlaysRouteHandler)
  .openapi(getMetricsWpRoute, getMetricsWpRouteHandler)
  .openapi(getMetricsWpPregameRoute, getMetricsWpPregameRouteHandler)
  .openapi(getPlayStatTypesRoute, getPlayStatTypesRouteHandler)
  .openapi(getPlayStatsRoute, getPlayStatsRouteHandler)
  .openapi(getPlayTypesRoute, getPlayTypesRouteHandler)
  .openapi(getPlayerPortalRoute, getPlayerPortalRouteHandler)
  .openapi(getPlayerReturningRoute, getPlayerReturningRouteHandler)
  .openapi(getPlayerSearchRoute, getPlayerSearchRouteHandler)
  .openapi(getPlayerUsageRoute, getPlayerUsageRouteHandler)
  .openapi(getPlaysRoute, getPlaysRouteHandler)
  .openapi(getPpaGamesRoute, getPpaGamesRouteHandler)
  .openapi(getPpaPlayersGamesRoute, getPpaPlayersGamesRouteHandler)
  .openapi(getPpaPlayersSeasonRoute, getPpaPlayersSeasonRouteHandler)
  .openapi(getPpaPredictedRoute, getPpaPredictedRouteHandler)
  .openapi(getPpaTeamsRoute, getPpaTeamsRouteHandler)
  .openapi(getRankingsRoute, getRankingsRouteHandler)
  .openapi(getRatingsEloRoute, getRatingsEloRouteHandler)
  .openapi(getRatingsSpRoute, getRatingsSpRouteHandler)
  .openapi(getRatingsSpConferencesRoute, getRatingsSpConferencesRouteHandler)
  .openapi(getRatingsSrsRoute, getRatingsSrsRouteHandler)
  .openapi(getRecordsRoute, getRecordsRouteHandler)
  .openapi(getRecruitingGroupsRoute, getRecruitingGroupsRouteHandler)
  .openapi(getRecruitingPlayersRoute, getRecruitingPlayersRouteHandler)
  .openapi(getRecruitingTeamsRoute, getRecruitingTeamsRouteHandler)
  .openapi(getRosterRoute, getRosterRouteHandler)
  .openapi(getScoreboardRoute, getScoreboardRouteHandler)
  .openapi(getStatsCategoriesRoute, getStatsCategoriesRouteHandler)
  .openapi(getStatsGameAdvancedRoute, getStatsGameAdvancedRouteHandler)
  .openapi(getStatsPlayerSeasonRoute, getStatsPlayerSeasonRouteHandler)
  .openapi(getStatsSeasonRoute, getStatsSeasonRouteHandler)
  .openapi(getStatsSeasonAdvancedRoute, getStatsSeasonAdvancedRouteHandler)
  .openapi(getTalentRoute, getTalentRouteHandler)
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(getTeamsFbsRoute, getTeamsFbsRouteHandler)
  .openapi(getTeamsMatchupRoute, getTeamsMatchupRouteHandler)
  .openapi(getVenuesRoute, getVenuesRouteHandler)

export default app
