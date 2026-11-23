import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAllTeamsRoute,
  getFormatAreAnyGamesInProgressRoute,
  getFormatCurrentSeasonRoute,
  getFormatFreeAgentsRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
} from './routes'
import {
  getFormatAllTeamsRouteHandler,
  getFormatAreAnyGamesInProgressRouteHandler,
  getFormatCurrentSeasonRouteHandler,
  getFormatFreeAgentsRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatGamesSeasonRouteHandler,
  getFormatNewsByDateDateRouteHandler,
  getFormatNewsByPlayerIDPlayeridRouteHandler,
  getFormatNewsRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayersTeamRouteHandler,
  getFormatStadiumsRouteHandler,
  getFormatStandingsSeasonRouteHandler,
  getFormatTeamGameStatsByDateDateRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatAllTeamsRoute, getFormatAllTeamsRouteHandler)
  .openapi(getFormatAreAnyGamesInProgressRoute, getFormatAreAnyGamesInProgressRouteHandler)
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(getFormatFreeAgentsRoute, getFormatFreeAgentsRouteHandler)
  .openapi(getFormatGamesSeasonRoute, getFormatGamesSeasonRouteHandler)
  .openapi(getFormatGamesByDateDateRoute, getFormatGamesByDateDateRouteHandler)
  .openapi(getFormatNewsRoute, getFormatNewsRouteHandler)
  .openapi(getFormatNewsByDateDateRoute, getFormatNewsByDateDateRouteHandler)
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, getFormatNewsByPlayerIDPlayeridRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
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
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)

export default app
