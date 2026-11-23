import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAllTeamsRoute,
  getFormatAreAnyGamesInProgressRoute,
  getFormatByesSeasonRoute,
  getFormatCurrentSeasonRoute,
  getFormatCurrentWeekRoute,
  getFormatDepthChartsRoute,
  getFormatFreeAgentsRoute,
  getFormatGameStatsByWeekSeasonWeekRoute,
  getFormatGameStatsSeasonRoute,
  getFormatLastCompletedSeasonRoute,
  getFormatLastCompletedWeekRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsByTeamTeamRoute,
  getFormatNewsRoute,
  getFormatPingSecondsRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatRefereesRoute,
  getFormatRookiesSeasonRoute,
  getFormatSchedulesSeasonRoute,
  getFormatScoresByDateDateRoute,
  getFormatScoresByWeekSeasonWeekRoute,
  getFormatScoresSeasonRoute,
  getFormatSimulatedScoresNumberofplaysRoute,
  getFormatStadiumsRoute,
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamGameStatsSeasonWeekRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTeamsSeasonRoute,
  getFormatTimeframesTypeRoute,
  getFormatUpcomingSeasonRoute,
  getFormatUpcomingWeekRoute,
} from './routes'
import {
  getFormatAllTeamsRouteHandler,
  getFormatAreAnyGamesInProgressRouteHandler,
  getFormatByesSeasonRouteHandler,
  getFormatCurrentSeasonRouteHandler,
  getFormatCurrentWeekRouteHandler,
  getFormatDepthChartsRouteHandler,
  getFormatFreeAgentsRouteHandler,
  getFormatGameStatsByWeekSeasonWeekRouteHandler,
  getFormatGameStatsSeasonRouteHandler,
  getFormatLastCompletedSeasonRouteHandler,
  getFormatLastCompletedWeekRouteHandler,
  getFormatNewsByDateDateRouteHandler,
  getFormatNewsByPlayerIDPlayeridRouteHandler,
  getFormatNewsByTeamTeamRouteHandler,
  getFormatNewsRouteHandler,
  getFormatPingSecondsRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayersTeamRouteHandler,
  getFormatRefereesRouteHandler,
  getFormatRookiesSeasonRouteHandler,
  getFormatSchedulesSeasonRouteHandler,
  getFormatScoresByDateDateRouteHandler,
  getFormatScoresByWeekSeasonWeekRouteHandler,
  getFormatScoresSeasonRouteHandler,
  getFormatSimulatedScoresNumberofplaysRouteHandler,
  getFormatStadiumsRouteHandler,
  getFormatStandingsSeasonRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamGameStatsSeasonWeekRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatTeamsSeasonRouteHandler,
  getFormatTimeframesTypeRouteHandler,
  getFormatUpcomingSeasonRouteHandler,
  getFormatUpcomingWeekRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatAllTeamsRoute, getFormatAllTeamsRouteHandler)
  .openapi(getFormatAreAnyGamesInProgressRoute, getFormatAreAnyGamesInProgressRouteHandler)
  .openapi(getFormatByesSeasonRoute, getFormatByesSeasonRouteHandler)
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(getFormatCurrentWeekRoute, getFormatCurrentWeekRouteHandler)
  .openapi(getFormatDepthChartsRoute, getFormatDepthChartsRouteHandler)
  .openapi(getFormatFreeAgentsRoute, getFormatFreeAgentsRouteHandler)
  .openapi(getFormatGameStatsSeasonRoute, getFormatGameStatsSeasonRouteHandler)
  .openapi(getFormatGameStatsByWeekSeasonWeekRoute, getFormatGameStatsByWeekSeasonWeekRouteHandler)
  .openapi(getFormatLastCompletedSeasonRoute, getFormatLastCompletedSeasonRouteHandler)
  .openapi(getFormatLastCompletedWeekRoute, getFormatLastCompletedWeekRouteHandler)
  .openapi(getFormatNewsRoute, getFormatNewsRouteHandler)
  .openapi(getFormatNewsByDateDateRoute, getFormatNewsByDateDateRouteHandler)
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, getFormatNewsByPlayerIDPlayeridRouteHandler)
  .openapi(getFormatNewsByTeamTeamRoute, getFormatNewsByTeamTeamRouteHandler)
  .openapi(getFormatPingSecondsRoute, getFormatPingSecondsRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatPlayersTeamRoute, getFormatPlayersTeamRouteHandler)
  .openapi(getFormatRefereesRoute, getFormatRefereesRouteHandler)
  .openapi(getFormatRookiesSeasonRoute, getFormatRookiesSeasonRouteHandler)
  .openapi(getFormatSchedulesSeasonRoute, getFormatSchedulesSeasonRouteHandler)
  .openapi(getFormatScoresSeasonRoute, getFormatScoresSeasonRouteHandler)
  .openapi(getFormatScoresByDateDateRoute, getFormatScoresByDateDateRouteHandler)
  .openapi(getFormatScoresByWeekSeasonWeekRoute, getFormatScoresByWeekSeasonWeekRouteHandler)
  .openapi(
    getFormatSimulatedScoresNumberofplaysRoute,
    getFormatSimulatedScoresNumberofplaysRouteHandler,
  )
  .openapi(getFormatStadiumsRoute, getFormatStadiumsRouteHandler)
  .openapi(getFormatStandingsSeasonRoute, getFormatStandingsSeasonRouteHandler)
  .openapi(getFormatTeamGameStatsSeasonWeekRoute, getFormatTeamGameStatsSeasonWeekRouteHandler)
  .openapi(
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  )
  .openapi(getFormatTeamSeasonStatsSeasonRoute, getFormatTeamSeasonStatsSeasonRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)
  .openapi(getFormatTeamsSeasonRoute, getFormatTeamsSeasonRouteHandler)
  .openapi(getFormatTimeframesTypeRoute, getFormatTimeframesTypeRouteHandler)
  .openapi(getFormatUpcomingSeasonRoute, getFormatUpcomingSeasonRouteHandler)
  .openapi(getFormatUpcomingWeekRoute, getFormatUpcomingWeekRouteHandler)

export default app
