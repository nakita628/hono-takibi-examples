import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAllStarsSeasonRoute,
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
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
  getFormatPlayerGameStatsByDateDateRoute,
  getFormatPlayerGameStatsByPlayerDatePlayeridRoute,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonStatsSeasonRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTeamStatsAllowedByPositionSeasonRoute,
} from './routes'
import {
  getFormatAllStarsSeasonRouteHandler,
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
  getFormatNewsByDateDateRouteHandler,
  getFormatNewsByPlayerIDPlayeridRouteHandler,
  getFormatNewsRouteHandler,
  getFormatPlayerGameStatsByDateDateRouteHandler,
  getFormatPlayerGameStatsByPlayerDatePlayeridRouteHandler,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRouteHandler,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRouteHandler,
  getFormatPlayerSeasonStatsSeasonRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayersTeamRouteHandler,
  getFormatStadiumsRouteHandler,
  getFormatStandingsSeasonRouteHandler,
  getFormatTeamGameStatsByDateDateRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatTeamStatsAllowedByPositionSeasonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatAllStarsSeasonRoute, getFormatAllStarsSeasonRouteHandler)
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
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, getFormatPlayerSeasonStatsSeasonRouteHandler)
  .openapi(
    getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute,
    getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
    getFormatPlayerSeasonStatsByTeamSeasonTeamRouteHandler,
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
  .openapi(getFormatTeamSeasonStatsSeasonRoute, getFormatTeamSeasonStatsSeasonRouteHandler)
  .openapi(
    getFormatTeamStatsAllowedByPositionSeasonRoute,
    getFormatTeamStatsAllowedByPositionSeasonRouteHandler,
  )
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)

export default app
