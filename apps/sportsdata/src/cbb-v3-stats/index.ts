import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAreAnyGamesInProgressRoute,
  getFormatBoxScoreGameidRoute,
  getFormatBoxScoresDateRoute,
  getFormatBoxScoresDeltaDateMinutesRoute,
  getFormatCurrentSeasonRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatInjuredPlayersRoute,
  getFormatLeagueHierarchyRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
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
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTournamentSeasonRoute,
} from './routes'
import {
  getFormatAreAnyGamesInProgressRouteHandler,
  getFormatBoxScoreGameidRouteHandler,
  getFormatBoxScoresDateRouteHandler,
  getFormatBoxScoresDeltaDateMinutesRouteHandler,
  getFormatCurrentSeasonRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatGamesSeasonRouteHandler,
  getFormatInjuredPlayersRouteHandler,
  getFormatLeagueHierarchyRouteHandler,
  getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
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
  getFormatTeamGameStatsByDateDateRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatTournamentSeasonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatAreAnyGamesInProgressRoute, getFormatAreAnyGamesInProgressRouteHandler)
  .openapi(getFormatBoxScoreGameidRoute, getFormatBoxScoreGameidRouteHandler)
  .openapi(getFormatBoxScoresDateRoute, getFormatBoxScoresDateRouteHandler)
  .openapi(getFormatBoxScoresDeltaDateMinutesRoute, getFormatBoxScoresDeltaDateMinutesRouteHandler)
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(getFormatGamesSeasonRoute, getFormatGamesSeasonRouteHandler)
  .openapi(getFormatGamesByDateDateRoute, getFormatGamesByDateDateRouteHandler)
  .openapi(getFormatInjuredPlayersRoute, getFormatInjuredPlayersRouteHandler)
  .openapi(getFormatLeagueHierarchyRoute, getFormatLeagueHierarchyRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(
    getFormatPlayerGameProjectionStatsByDateDateRoute,
    getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  )
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
  .openapi(getFormatTeamGameStatsByDateDateRoute, getFormatTeamGameStatsByDateDateRouteHandler)
  .openapi(
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  )
  .openapi(getFormatTeamSeasonStatsSeasonRoute, getFormatTeamSeasonStatsSeasonRouteHandler)
  .openapi(getFormatTournamentSeasonRoute, getFormatTournamentSeasonRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)

export default app
