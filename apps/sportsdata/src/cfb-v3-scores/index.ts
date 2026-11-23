import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAreAnyGamesInProgressRoute,
  getFormatCurrentSeasonDetailsRoute,
  getFormatCurrentSeasonRoute,
  getFormatCurrentSeasonTypeRoute,
  getFormatCurrentWeekRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesByWeekSeasonWeekRoute,
  getFormatGamesSeasonRoute,
  getFormatInjuredPlayersRoute,
  getFormatLeagueHierarchyRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamGameStatsByWeekSeasonWeekRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
} from './routes'
import {
  getFormatAreAnyGamesInProgressRouteHandler,
  getFormatCurrentSeasonDetailsRouteHandler,
  getFormatCurrentSeasonRouteHandler,
  getFormatCurrentSeasonTypeRouteHandler,
  getFormatCurrentWeekRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatGamesByWeekSeasonWeekRouteHandler,
  getFormatGamesSeasonRouteHandler,
  getFormatInjuredPlayersRouteHandler,
  getFormatLeagueHierarchyRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayersTeamRouteHandler,
  getFormatStadiumsRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamGameStatsByWeekSeasonWeekRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatAreAnyGamesInProgressRoute, getFormatAreAnyGamesInProgressRouteHandler)
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(getFormatCurrentSeasonDetailsRoute, getFormatCurrentSeasonDetailsRouteHandler)
  .openapi(getFormatCurrentSeasonTypeRoute, getFormatCurrentSeasonTypeRouteHandler)
  .openapi(getFormatCurrentWeekRoute, getFormatCurrentWeekRouteHandler)
  .openapi(getFormatGamesSeasonRoute, getFormatGamesSeasonRouteHandler)
  .openapi(getFormatGamesByDateDateRoute, getFormatGamesByDateDateRouteHandler)
  .openapi(getFormatGamesByWeekSeasonWeekRoute, getFormatGamesByWeekSeasonWeekRouteHandler)
  .openapi(getFormatInjuredPlayersRoute, getFormatInjuredPlayersRouteHandler)
  .openapi(getFormatLeagueHierarchyRoute, getFormatLeagueHierarchyRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatPlayersTeamRoute, getFormatPlayersTeamRouteHandler)
  .openapi(getFormatStadiumsRoute, getFormatStadiumsRouteHandler)
  .openapi(
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  )
  .openapi(
    getFormatTeamGameStatsByWeekSeasonWeekRoute,
    getFormatTeamGameStatsByWeekSeasonWeekRouteHandler,
  )
  .openapi(getFormatTeamSeasonStatsSeasonRoute, getFormatTeamSeasonStatsSeasonRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)

export default app
