import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdditionsRoute,
  getChangesRoute,
  getDeletionsRoute,
  getIncidentsRoute,
  getLeaguesLeagueIdOrSlugMatchesPastRoute,
  getLeaguesLeagueIdOrSlugMatchesRoute,
  getLeaguesLeagueIdOrSlugMatchesRunningRoute,
  getLeaguesLeagueIdOrSlugMatchesUpcomingRoute,
  getLeaguesLeagueIdOrSlugRoute,
  getLeaguesLeagueIdOrSlugSeriesRoute,
  getLeaguesLeagueIdOrSlugTournamentsRoute,
  getLeaguesRoute,
  getLivesRoute,
  getMatchesMatchIdOrSlugOpponentsRoute,
  getMatchesMatchIdOrSlugRoute,
  getMatchesPastRoute,
  getMatchesRoute,
  getMatchesRunningRoute,
  getMatchesUpcomingRoute,
  getPlayersPlayerIdOrSlugMatchesRoute,
  getPlayersPlayerIdOrSlugRoute,
  getPlayersRoute,
  getSeriesPastRoute,
  getSeriesRoute,
  getSeriesRunningRoute,
  getSeriesSerieIdOrSlugMatchesPastRoute,
  getSeriesSerieIdOrSlugMatchesRoute,
  getSeriesSerieIdOrSlugMatchesRunningRoute,
  getSeriesSerieIdOrSlugMatchesUpcomingRoute,
  getSeriesSerieIdOrSlugPlayersRoute,
  getSeriesSerieIdOrSlugRoute,
  getSeriesSerieIdOrSlugTournamentsRoute,
  getSeriesUpcomingRoute,
  getTeamsRoute,
  getTeamsTeamIdOrSlugLeaguesRoute,
  getTeamsTeamIdOrSlugMatchesRoute,
  getTeamsTeamIdOrSlugRoute,
  getTeamsTeamIdOrSlugSeriesRoute,
  getTeamsTeamIdOrSlugTournamentsRoute,
  getTournamentsPastRoute,
  getTournamentsRoute,
  getTournamentsRunningRoute,
  getTournamentsTournamentIdOrSlugBracketsRoute,
  getTournamentsTournamentIdOrSlugMatchesRoute,
  getTournamentsTournamentIdOrSlugPlayersRoute,
  getTournamentsTournamentIdOrSlugRostersRoute,
  getTournamentsTournamentIdOrSlugRoute,
  getTournamentsTournamentIdOrSlugStandingsRoute,
  getTournamentsTournamentIdOrSlugTeamsRoute,
  getTournamentsUpcomingRoute,
  getVideogamesRoute,
  getVideogamesVideogameIdOrSlugLeaguesRoute,
  getVideogamesVideogameIdOrSlugRoute,
  getVideogamesVideogameIdOrSlugSeriesRoute,
  getVideogamesVideogameIdOrSlugTournamentsRoute,
  getVideogamesVideogameIdOrSlugVersionsRoute,
} from './routes'
import {
  getAdditionsRouteHandler,
  getChangesRouteHandler,
  getDeletionsRouteHandler,
  getIncidentsRouteHandler,
  getLeaguesLeagueIdOrSlugMatchesPastRouteHandler,
  getLeaguesLeagueIdOrSlugMatchesRouteHandler,
  getLeaguesLeagueIdOrSlugMatchesRunningRouteHandler,
  getLeaguesLeagueIdOrSlugMatchesUpcomingRouteHandler,
  getLeaguesLeagueIdOrSlugRouteHandler,
  getLeaguesLeagueIdOrSlugSeriesRouteHandler,
  getLeaguesLeagueIdOrSlugTournamentsRouteHandler,
  getLeaguesRouteHandler,
  getLivesRouteHandler,
  getMatchesMatchIdOrSlugOpponentsRouteHandler,
  getMatchesMatchIdOrSlugRouteHandler,
  getMatchesPastRouteHandler,
  getMatchesRouteHandler,
  getMatchesRunningRouteHandler,
  getMatchesUpcomingRouteHandler,
  getPlayersPlayerIdOrSlugMatchesRouteHandler,
  getPlayersPlayerIdOrSlugRouteHandler,
  getPlayersRouteHandler,
  getSeriesPastRouteHandler,
  getSeriesRouteHandler,
  getSeriesRunningRouteHandler,
  getSeriesSerieIdOrSlugMatchesPastRouteHandler,
  getSeriesSerieIdOrSlugMatchesRouteHandler,
  getSeriesSerieIdOrSlugMatchesRunningRouteHandler,
  getSeriesSerieIdOrSlugMatchesUpcomingRouteHandler,
  getSeriesSerieIdOrSlugPlayersRouteHandler,
  getSeriesSerieIdOrSlugRouteHandler,
  getSeriesSerieIdOrSlugTournamentsRouteHandler,
  getSeriesUpcomingRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdOrSlugLeaguesRouteHandler,
  getTeamsTeamIdOrSlugMatchesRouteHandler,
  getTeamsTeamIdOrSlugRouteHandler,
  getTeamsTeamIdOrSlugSeriesRouteHandler,
  getTeamsTeamIdOrSlugTournamentsRouteHandler,
  getTournamentsPastRouteHandler,
  getTournamentsRouteHandler,
  getTournamentsRunningRouteHandler,
  getTournamentsTournamentIdOrSlugBracketsRouteHandler,
  getTournamentsTournamentIdOrSlugMatchesRouteHandler,
  getTournamentsTournamentIdOrSlugPlayersRouteHandler,
  getTournamentsTournamentIdOrSlugRostersRouteHandler,
  getTournamentsTournamentIdOrSlugRouteHandler,
  getTournamentsTournamentIdOrSlugStandingsRouteHandler,
  getTournamentsTournamentIdOrSlugTeamsRouteHandler,
  getTournamentsUpcomingRouteHandler,
  getVideogamesRouteHandler,
  getVideogamesVideogameIdOrSlugLeaguesRouteHandler,
  getVideogamesVideogameIdOrSlugRouteHandler,
  getVideogamesVideogameIdOrSlugSeriesRouteHandler,
  getVideogamesVideogameIdOrSlugTournamentsRouteHandler,
  getVideogamesVideogameIdOrSlugVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdditionsRoute, getAdditionsRouteHandler)
  .openapi(getChangesRoute, getChangesRouteHandler)
  .openapi(getDeletionsRoute, getDeletionsRouteHandler)
  .openapi(getIncidentsRoute, getIncidentsRouteHandler)
  .openapi(getLeaguesRoute, getLeaguesRouteHandler)
  .openapi(getLeaguesLeagueIdOrSlugRoute, getLeaguesLeagueIdOrSlugRouteHandler)
  .openapi(getLeaguesLeagueIdOrSlugMatchesRoute, getLeaguesLeagueIdOrSlugMatchesRouteHandler)
  .openapi(
    getLeaguesLeagueIdOrSlugMatchesPastRoute,
    getLeaguesLeagueIdOrSlugMatchesPastRouteHandler,
  )
  .openapi(
    getLeaguesLeagueIdOrSlugMatchesRunningRoute,
    getLeaguesLeagueIdOrSlugMatchesRunningRouteHandler,
  )
  .openapi(
    getLeaguesLeagueIdOrSlugMatchesUpcomingRoute,
    getLeaguesLeagueIdOrSlugMatchesUpcomingRouteHandler,
  )
  .openapi(getLeaguesLeagueIdOrSlugSeriesRoute, getLeaguesLeagueIdOrSlugSeriesRouteHandler)
  .openapi(
    getLeaguesLeagueIdOrSlugTournamentsRoute,
    getLeaguesLeagueIdOrSlugTournamentsRouteHandler,
  )
  .openapi(getLivesRoute, getLivesRouteHandler)
  .openapi(getMatchesRoute, getMatchesRouteHandler)
  .openapi(getMatchesPastRoute, getMatchesPastRouteHandler)
  .openapi(getMatchesRunningRoute, getMatchesRunningRouteHandler)
  .openapi(getMatchesUpcomingRoute, getMatchesUpcomingRouteHandler)
  .openapi(getMatchesMatchIdOrSlugRoute, getMatchesMatchIdOrSlugRouteHandler)
  .openapi(getMatchesMatchIdOrSlugOpponentsRoute, getMatchesMatchIdOrSlugOpponentsRouteHandler)
  .openapi(getPlayersRoute, getPlayersRouteHandler)
  .openapi(getPlayersPlayerIdOrSlugRoute, getPlayersPlayerIdOrSlugRouteHandler)
  .openapi(getPlayersPlayerIdOrSlugMatchesRoute, getPlayersPlayerIdOrSlugMatchesRouteHandler)
  .openapi(getSeriesRoute, getSeriesRouteHandler)
  .openapi(getSeriesPastRoute, getSeriesPastRouteHandler)
  .openapi(getSeriesRunningRoute, getSeriesRunningRouteHandler)
  .openapi(getSeriesUpcomingRoute, getSeriesUpcomingRouteHandler)
  .openapi(getSeriesSerieIdOrSlugRoute, getSeriesSerieIdOrSlugRouteHandler)
  .openapi(getSeriesSerieIdOrSlugMatchesRoute, getSeriesSerieIdOrSlugMatchesRouteHandler)
  .openapi(getSeriesSerieIdOrSlugMatchesPastRoute, getSeriesSerieIdOrSlugMatchesPastRouteHandler)
  .openapi(
    getSeriesSerieIdOrSlugMatchesRunningRoute,
    getSeriesSerieIdOrSlugMatchesRunningRouteHandler,
  )
  .openapi(
    getSeriesSerieIdOrSlugMatchesUpcomingRoute,
    getSeriesSerieIdOrSlugMatchesUpcomingRouteHandler,
  )
  .openapi(getSeriesSerieIdOrSlugPlayersRoute, getSeriesSerieIdOrSlugPlayersRouteHandler)
  .openapi(getSeriesSerieIdOrSlugTournamentsRoute, getSeriesSerieIdOrSlugTournamentsRouteHandler)
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(getTeamsTeamIdOrSlugRoute, getTeamsTeamIdOrSlugRouteHandler)
  .openapi(getTeamsTeamIdOrSlugLeaguesRoute, getTeamsTeamIdOrSlugLeaguesRouteHandler)
  .openapi(getTeamsTeamIdOrSlugMatchesRoute, getTeamsTeamIdOrSlugMatchesRouteHandler)
  .openapi(getTeamsTeamIdOrSlugSeriesRoute, getTeamsTeamIdOrSlugSeriesRouteHandler)
  .openapi(getTeamsTeamIdOrSlugTournamentsRoute, getTeamsTeamIdOrSlugTournamentsRouteHandler)
  .openapi(getTournamentsRoute, getTournamentsRouteHandler)
  .openapi(getTournamentsPastRoute, getTournamentsPastRouteHandler)
  .openapi(getTournamentsRunningRoute, getTournamentsRunningRouteHandler)
  .openapi(getTournamentsUpcomingRoute, getTournamentsUpcomingRouteHandler)
  .openapi(getTournamentsTournamentIdOrSlugRoute, getTournamentsTournamentIdOrSlugRouteHandler)
  .openapi(
    getTournamentsTournamentIdOrSlugBracketsRoute,
    getTournamentsTournamentIdOrSlugBracketsRouteHandler,
  )
  .openapi(
    getTournamentsTournamentIdOrSlugMatchesRoute,
    getTournamentsTournamentIdOrSlugMatchesRouteHandler,
  )
  .openapi(
    getTournamentsTournamentIdOrSlugPlayersRoute,
    getTournamentsTournamentIdOrSlugPlayersRouteHandler,
  )
  .openapi(
    getTournamentsTournamentIdOrSlugRostersRoute,
    getTournamentsTournamentIdOrSlugRostersRouteHandler,
  )
  .openapi(
    getTournamentsTournamentIdOrSlugStandingsRoute,
    getTournamentsTournamentIdOrSlugStandingsRouteHandler,
  )
  .openapi(
    getTournamentsTournamentIdOrSlugTeamsRoute,
    getTournamentsTournamentIdOrSlugTeamsRouteHandler,
  )
  .openapi(getVideogamesRoute, getVideogamesRouteHandler)
  .openapi(getVideogamesVideogameIdOrSlugRoute, getVideogamesVideogameIdOrSlugRouteHandler)
  .openapi(
    getVideogamesVideogameIdOrSlugLeaguesRoute,
    getVideogamesVideogameIdOrSlugLeaguesRouteHandler,
  )
  .openapi(
    getVideogamesVideogameIdOrSlugSeriesRoute,
    getVideogamesVideogameIdOrSlugSeriesRouteHandler,
  )
  .openapi(
    getVideogamesVideogameIdOrSlugTournamentsRoute,
    getVideogamesVideogameIdOrSlugTournamentsRouteHandler,
  )
  .openapi(
    getVideogamesVideogameIdOrSlugVersionsRoute,
    getVideogamesVideogameIdOrSlugVersionsRouteHandler,
  )

export default app
