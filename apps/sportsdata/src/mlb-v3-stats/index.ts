import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAllTeamsRoute,
  getFormatAreAnyGamesInProgressRoute,
  getFormatBoxScoreGameidRoute,
  getFormatBoxScoresDateRoute,
  getFormatBoxScoresDeltaDateMinutesRoute,
  getFormatCurrentSeasonRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatFreeAgentsRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatHitterVsPitcherHitteridPitcheridRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
  getFormatPlayerGameStatsByDateDateRoute,
  getFormatPlayerGameStatsByPlayerDatePlayeridRoute,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayerSeasonAwayStatsSeasonRoute,
  getFormatPlayerSeasonHomeStatsSeasonRoute,
  getFormatPlayerSeasonSplitStatsSeasonSplitRoute,
  getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonStatsSeasonRoute,
  getFormatPlayerSeasonStatsSplitByTeamSeasonRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamHittersVsPitcherGameidTeamRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
} from './routes'
import {
  getFormatAllTeamsRouteHandler,
  getFormatAreAnyGamesInProgressRouteHandler,
  getFormatBoxScoreGameidRouteHandler,
  getFormatBoxScoresDateRouteHandler,
  getFormatBoxScoresDeltaDateMinutesRouteHandler,
  getFormatCurrentSeasonRouteHandler,
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatFreeAgentsRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatGamesSeasonRouteHandler,
  getFormatHitterVsPitcherHitteridPitcheridRouteHandler,
  getFormatNewsByDateDateRouteHandler,
  getFormatNewsByPlayerIDPlayeridRouteHandler,
  getFormatNewsRouteHandler,
  getFormatPlayerGameStatsByDateDateRouteHandler,
  getFormatPlayerGameStatsByPlayerDatePlayeridRouteHandler,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayerSeasonAwayStatsSeasonRouteHandler,
  getFormatPlayerSeasonHomeStatsSeasonRouteHandler,
  getFormatPlayerSeasonSplitStatsSeasonSplitRouteHandler,
  getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRouteHandler,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRouteHandler,
  getFormatPlayerSeasonStatsSeasonRouteHandler,
  getFormatPlayerSeasonStatsSplitByTeamSeasonRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayersTeamRouteHandler,
  getFormatStadiumsRouteHandler,
  getFormatStandingsSeasonRouteHandler,
  getFormatTeamGameStatsByDateDateRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamHittersVsPitcherGameidTeamRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatAllTeamsRoute, getFormatAllTeamsRouteHandler)
  .openapi(getFormatAreAnyGamesInProgressRoute, getFormatAreAnyGamesInProgressRouteHandler)
  .openapi(getFormatBoxScoreGameidRoute, getFormatBoxScoreGameidRouteHandler)
  .openapi(getFormatBoxScoresDateRoute, getFormatBoxScoresDateRouteHandler)
  .openapi(getFormatBoxScoresDeltaDateMinutesRoute, getFormatBoxScoresDeltaDateMinutesRouteHandler)
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
  .openapi(getFormatFreeAgentsRoute, getFormatFreeAgentsRouteHandler)
  .openapi(getFormatGamesSeasonRoute, getFormatGamesSeasonRouteHandler)
  .openapi(getFormatGamesByDateDateRoute, getFormatGamesByDateDateRouteHandler)
  .openapi(
    getFormatHitterVsPitcherHitteridPitcheridRoute,
    getFormatHitterVsPitcherHitteridPitcheridRouteHandler,
  )
  .openapi(getFormatNewsRoute, getFormatNewsRouteHandler)
  .openapi(getFormatNewsByDateDateRoute, getFormatNewsByDateDateRouteHandler)
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, getFormatNewsByPlayerIDPlayeridRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(getFormatPlayerGameStatsByDateDateRoute, getFormatPlayerGameStatsByDateDateRouteHandler)
  .openapi(
    getFormatPlayerGameStatsByPlayerDatePlayeridRoute,
    getFormatPlayerGameStatsByPlayerDatePlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute,
    getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonAwayStatsSeasonRoute,
    getFormatPlayerSeasonAwayStatsSeasonRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonHomeStatsSeasonRoute,
    getFormatPlayerSeasonHomeStatsSeasonRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonSplitStatsSeasonSplitRoute,
    getFormatPlayerSeasonSplitStatsSeasonSplitRouteHandler,
  )
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, getFormatPlayerSeasonStatsSeasonRouteHandler)
  .openapi(
    getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute,
    getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
    getFormatPlayerSeasonStatsByTeamSeasonTeamRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonStatsSplitByTeamSeasonRoute,
    getFormatPlayerSeasonStatsSplitByTeamSeasonRouteHandler,
  )
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatPlayersTeamRoute, getFormatPlayersTeamRouteHandler)
  .openapi(getFormatStadiumsRoute, getFormatStadiumsRouteHandler)
  .openapi(getFormatStandingsSeasonRoute, getFormatStandingsSeasonRouteHandler)
  .openapi(getFormatTeamGameStatsByDateDateRoute, getFormatTeamGameStatsByDateDateRouteHandler)
  .openapi(
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  )
  .openapi(
    getFormatTeamHittersVsPitcherGameidTeamRoute,
    getFormatTeamHittersVsPitcherGameidTeamRouteHandler,
  )
  .openapi(getFormatTeamSeasonStatsSeasonRoute, getFormatTeamSeasonStatsSeasonRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)

export default app
