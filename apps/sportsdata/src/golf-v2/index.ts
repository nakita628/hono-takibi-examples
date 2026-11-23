import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatCurrentSeasonRoute,
  getFormatDfsSlatesByTournamentTournamentidRoute,
  getFormatInjuriesByHistoricalRoute,
  getFormatInjuriesRoute,
  getFormatLeaderboardTournamentidRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayerSeasonStatsSeasonRoute,
  getFormatPlayersRoute,
  getFormatPlayerTournamentProjectionStatsTournamentidRoute,
  getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRoute,
  getFormatTournamentsRoute,
  getFormatTournamentsSeasonRoute,
} from './routes'
import {
  getFormatCurrentSeasonRouteHandler,
  getFormatDfsSlatesByTournamentTournamentidRouteHandler,
  getFormatInjuriesByHistoricalRouteHandler,
  getFormatInjuriesRouteHandler,
  getFormatLeaderboardTournamentidRouteHandler,
  getFormatNewsByDateDateRouteHandler,
  getFormatNewsByPlayerIDPlayeridRouteHandler,
  getFormatNewsRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayerSeasonStatsSeasonRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayerTournamentProjectionStatsTournamentidRouteHandler,
  getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRouteHandler,
  getFormatTournamentsRouteHandler,
  getFormatTournamentsSeasonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(
    getFormatDfsSlatesByTournamentTournamentidRoute,
    getFormatDfsSlatesByTournamentTournamentidRouteHandler,
  )
  .openapi(getFormatInjuriesRoute, getFormatInjuriesRouteHandler)
  .openapi(getFormatInjuriesByHistoricalRoute, getFormatInjuriesByHistoricalRouteHandler)
  .openapi(getFormatLeaderboardTournamentidRoute, getFormatLeaderboardTournamentidRouteHandler)
  .openapi(getFormatNewsRoute, getFormatNewsRouteHandler)
  .openapi(getFormatNewsByDateDateRoute, getFormatNewsByDateDateRouteHandler)
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, getFormatNewsByPlayerIDPlayeridRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, getFormatPlayerSeasonStatsSeasonRouteHandler)
  .openapi(
    getFormatPlayerTournamentProjectionStatsTournamentidRoute,
    getFormatPlayerTournamentProjectionStatsTournamentidRouteHandler,
  )
  .openapi(
    getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRoute,
    getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRouteHandler,
  )
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatTournamentsRoute, getFormatTournamentsRouteHandler)
  .openapi(getFormatTournamentsSeasonRoute, getFormatTournamentsSeasonRouteHandler)

export default app
