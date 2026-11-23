import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatActiveMembershipsRoute,
  getFormatAreasRoute,
  getFormatBoxScoreGameidRoute,
  getFormatBoxScoresDateRoute,
  getFormatCompetitionDetailsCompetitionidRoute,
  getFormatCompetitionsRoute,
  getFormatGamesByDateDateRoute,
  getFormatHistoricalMembershipsByTeamTeamidRoute,
  getFormatHistoricalMembershipsRoute,
  getFormatMembershipsByTeamTeamidRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersByTeamTeamidRoute,
  getFormatPlayersRoute,
  getFormatScheduleRoundidRoute,
  getFormatSeasonTeamsSeasonidRoute,
  getFormatStandingsRoundidRoute,
  getFormatTeamsRoute,
  getFormatVenuesRoute,
} from './routes'
import {
  getFormatActiveMembershipsRouteHandler,
  getFormatAreasRouteHandler,
  getFormatBoxScoreGameidRouteHandler,
  getFormatBoxScoresDateRouteHandler,
  getFormatCompetitionDetailsCompetitionidRouteHandler,
  getFormatCompetitionsRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatHistoricalMembershipsByTeamTeamidRouteHandler,
  getFormatHistoricalMembershipsRouteHandler,
  getFormatMembershipsByTeamTeamidRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayersByTeamTeamidRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatScheduleRoundidRouteHandler,
  getFormatSeasonTeamsSeasonidRouteHandler,
  getFormatStandingsRoundidRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatVenuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatActiveMembershipsRoute, getFormatActiveMembershipsRouteHandler)
  .openapi(getFormatAreasRoute, getFormatAreasRouteHandler)
  .openapi(getFormatBoxScoreGameidRoute, getFormatBoxScoreGameidRouteHandler)
  .openapi(getFormatBoxScoresDateRoute, getFormatBoxScoresDateRouteHandler)
  .openapi(
    getFormatCompetitionDetailsCompetitionidRoute,
    getFormatCompetitionDetailsCompetitionidRouteHandler,
  )
  .openapi(getFormatCompetitionsRoute, getFormatCompetitionsRouteHandler)
  .openapi(getFormatGamesByDateDateRoute, getFormatGamesByDateDateRouteHandler)
  .openapi(getFormatHistoricalMembershipsRoute, getFormatHistoricalMembershipsRouteHandler)
  .openapi(
    getFormatHistoricalMembershipsByTeamTeamidRoute,
    getFormatHistoricalMembershipsByTeamTeamidRouteHandler,
  )
  .openapi(getFormatMembershipsByTeamTeamidRoute, getFormatMembershipsByTeamTeamidRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatPlayersByTeamTeamidRoute, getFormatPlayersByTeamTeamidRouteHandler)
  .openapi(getFormatScheduleRoundidRoute, getFormatScheduleRoundidRouteHandler)
  .openapi(getFormatSeasonTeamsSeasonidRoute, getFormatSeasonTeamsSeasonidRouteHandler)
  .openapi(getFormatStandingsRoundidRoute, getFormatStandingsRoundidRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)
  .openapi(getFormatVenuesRoute, getFormatVenuesRouteHandler)

export default app
