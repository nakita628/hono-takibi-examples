import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatActiveMembershipsRoute,
  getFormatAreasRoute,
  getFormatCanceledMembershipsRoute,
  getFormatCompetitionDetailsCompetitionRoute,
  getFormatCompetitionHierarchyRoute,
  getFormatCompetitionsRoute,
  getFormatGamesByDateDateRoute,
  getFormatHistoricalMembershipsByCompetitionCompetitionRoute,
  getFormatHistoricalMembershipsByTeamTeamidRoute,
  getFormatHistoricalMembershipsRoute,
  getFormatMembershipsByCompetitionCompetitionRoute,
  getFormatMembershipsByTeamTeamidRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersByTeamTeamidRoute,
  getFormatPlayersRoute,
  getFormatRecentlyChangedMembershipsDaysRoute,
  getFormatScheduleRoundidRoute,
  getFormatSeasonTeamsSeasonidRoute,
  getFormatStandingsRoundidRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamSeasonStatsRoundidRoute,
  getFormatTeamsRoute,
  getFormatUpcomingScheduleByPlayerPlayeridRoute,
  getFormatVenuesRoute,
} from './routes'
import {
  getFormatActiveMembershipsRouteHandler,
  getFormatAreasRouteHandler,
  getFormatCanceledMembershipsRouteHandler,
  getFormatCompetitionDetailsCompetitionRouteHandler,
  getFormatCompetitionHierarchyRouteHandler,
  getFormatCompetitionsRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatHistoricalMembershipsByCompetitionCompetitionRouteHandler,
  getFormatHistoricalMembershipsByTeamTeamidRouteHandler,
  getFormatHistoricalMembershipsRouteHandler,
  getFormatMembershipsByCompetitionCompetitionRouteHandler,
  getFormatMembershipsByTeamTeamidRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayersByTeamTeamidRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatRecentlyChangedMembershipsDaysRouteHandler,
  getFormatScheduleRoundidRouteHandler,
  getFormatSeasonTeamsSeasonidRouteHandler,
  getFormatStandingsRoundidRouteHandler,
  getFormatTeamGameStatsByDateDateRouteHandler,
  getFormatTeamSeasonStatsRoundidRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatUpcomingScheduleByPlayerPlayeridRouteHandler,
  getFormatVenuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatActiveMembershipsRoute, getFormatActiveMembershipsRouteHandler)
  .openapi(getFormatAreasRoute, getFormatAreasRouteHandler)
  .openapi(getFormatCanceledMembershipsRoute, getFormatCanceledMembershipsRouteHandler)
  .openapi(
    getFormatCompetitionDetailsCompetitionRoute,
    getFormatCompetitionDetailsCompetitionRouteHandler,
  )
  .openapi(getFormatCompetitionHierarchyRoute, getFormatCompetitionHierarchyRouteHandler)
  .openapi(getFormatCompetitionsRoute, getFormatCompetitionsRouteHandler)
  .openapi(getFormatGamesByDateDateRoute, getFormatGamesByDateDateRouteHandler)
  .openapi(getFormatHistoricalMembershipsRoute, getFormatHistoricalMembershipsRouteHandler)
  .openapi(
    getFormatHistoricalMembershipsByCompetitionCompetitionRoute,
    getFormatHistoricalMembershipsByCompetitionCompetitionRouteHandler,
  )
  .openapi(
    getFormatHistoricalMembershipsByTeamTeamidRoute,
    getFormatHistoricalMembershipsByTeamTeamidRouteHandler,
  )
  .openapi(
    getFormatMembershipsByCompetitionCompetitionRoute,
    getFormatMembershipsByCompetitionCompetitionRouteHandler,
  )
  .openapi(getFormatMembershipsByTeamTeamidRoute, getFormatMembershipsByTeamTeamidRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatPlayersByTeamTeamidRoute, getFormatPlayersByTeamTeamidRouteHandler)
  .openapi(
    getFormatRecentlyChangedMembershipsDaysRoute,
    getFormatRecentlyChangedMembershipsDaysRouteHandler,
  )
  .openapi(getFormatScheduleRoundidRoute, getFormatScheduleRoundidRouteHandler)
  .openapi(getFormatSeasonTeamsSeasonidRoute, getFormatSeasonTeamsSeasonidRouteHandler)
  .openapi(getFormatStandingsRoundidRoute, getFormatStandingsRoundidRouteHandler)
  .openapi(getFormatTeamGameStatsByDateDateRoute, getFormatTeamGameStatsByDateDateRouteHandler)
  .openapi(getFormatTeamSeasonStatsRoundidRoute, getFormatTeamSeasonStatsRoundidRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)
  .openapi(
    getFormatUpcomingScheduleByPlayerPlayeridRoute,
    getFormatUpcomingScheduleByPlayerPlayeridRouteHandler,
  )
  .openapi(getFormatVenuesRoute, getFormatVenuesRouteHandler)

export default app
