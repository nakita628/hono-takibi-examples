import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatActiveMembershipsRoute,
  getFormatAreasRoute,
  getFormatBoxScoreGameidRoute,
  getFormatBoxScoresByCompetitionCompetitionDateRoute,
  getFormatBoxScoresDateRoute,
  getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesRoute,
  getFormatBoxScoresDeltaDateMinutesRoute,
  getFormatCompetitionDetailsCompetitionRoute,
  getFormatCompetitionHierarchyRoute,
  getFormatCompetitionsRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatGamesByDateDateRoute,
  getFormatHistoricalMembershipsByCompetitionCompetitionRoute,
  getFormatHistoricalMembershipsByTeamTeamidRoute,
  getFormatHistoricalMembershipsRoute,
  getFormatMembershipsByCompetitionCompetitionRoute,
  getFormatMembershipsByTeamTeamidRoute,
  getFormatPlayerGameStatsByDateDateRoute,
  getFormatPlayerGameStatsByPlayerDatePlayeridRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersByTeamTeamidRoute,
  getFormatPlayerSeasonStatsByPlayerRoundidPlayeridRoute,
  getFormatPlayerSeasonStatsByTeamRoundidTeamRoute,
  getFormatPlayerSeasonStatsRoundidRoute,
  getFormatPlayersRoute,
  getFormatRecentlyChangedMembershipsDaysRoute,
  getFormatScheduleRoundidRoute,
  getFormatSeasonTeamsSeasonidRoute,
  getFormatStandingsRoundidRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamSeasonStatsRoundidRoute,
  getFormatTeamsRoute,
  getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute,
  getFormatUpcomingScheduleByPlayerPlayeridRoute,
  getFormatVenuesRoute,
} from './routes'
import {
  getFormatActiveMembershipsRouteHandler,
  getFormatAreasRouteHandler,
  getFormatBoxScoreGameidRouteHandler,
  getFormatBoxScoresByCompetitionCompetitionDateRouteHandler,
  getFormatBoxScoresDateRouteHandler,
  getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesRouteHandler,
  getFormatBoxScoresDeltaDateMinutesRouteHandler,
  getFormatCompetitionDetailsCompetitionRouteHandler,
  getFormatCompetitionHierarchyRouteHandler,
  getFormatCompetitionsRouteHandler,
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatGamesByDateDateRouteHandler,
  getFormatHistoricalMembershipsByCompetitionCompetitionRouteHandler,
  getFormatHistoricalMembershipsByTeamTeamidRouteHandler,
  getFormatHistoricalMembershipsRouteHandler,
  getFormatMembershipsByCompetitionCompetitionRouteHandler,
  getFormatMembershipsByTeamTeamidRouteHandler,
  getFormatPlayerGameStatsByDateDateRouteHandler,
  getFormatPlayerGameStatsByPlayerDatePlayeridRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayersByTeamTeamidRouteHandler,
  getFormatPlayerSeasonStatsByPlayerRoundidPlayeridRouteHandler,
  getFormatPlayerSeasonStatsByTeamRoundidTeamRouteHandler,
  getFormatPlayerSeasonStatsRoundidRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatRecentlyChangedMembershipsDaysRouteHandler,
  getFormatScheduleRoundidRouteHandler,
  getFormatSeasonTeamsSeasonidRouteHandler,
  getFormatStandingsRoundidRouteHandler,
  getFormatTeamGameStatsByDateDateRouteHandler,
  getFormatTeamSeasonStatsRoundidRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRouteHandler,
  getFormatUpcomingScheduleByPlayerPlayeridRouteHandler,
  getFormatVenuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatActiveMembershipsRoute, getFormatActiveMembershipsRouteHandler)
  .openapi(getFormatAreasRoute, getFormatAreasRouteHandler)
  .openapi(getFormatBoxScoreGameidRoute, getFormatBoxScoreGameidRouteHandler)
  .openapi(getFormatBoxScoresDateRoute, getFormatBoxScoresDateRouteHandler)
  .openapi(
    getFormatBoxScoresByCompetitionCompetitionDateRoute,
    getFormatBoxScoresByCompetitionCompetitionDateRouteHandler,
  )
  .openapi(getFormatBoxScoresDeltaDateMinutesRoute, getFormatBoxScoresDeltaDateMinutesRouteHandler)
  .openapi(
    getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesRoute,
    getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesRouteHandler,
  )
  .openapi(
    getFormatCompetitionDetailsCompetitionRoute,
    getFormatCompetitionDetailsCompetitionRouteHandler,
  )
  .openapi(getFormatCompetitionHierarchyRoute, getFormatCompetitionHierarchyRouteHandler)
  .openapi(getFormatCompetitionsRoute, getFormatCompetitionsRouteHandler)
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
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
  .openapi(getFormatPlayerGameStatsByDateDateRoute, getFormatPlayerGameStatsByDateDateRouteHandler)
  .openapi(
    getFormatPlayerGameStatsByPlayerDatePlayeridRoute,
    getFormatPlayerGameStatsByPlayerDatePlayeridRouteHandler,
  )
  .openapi(getFormatPlayerSeasonStatsRoundidRoute, getFormatPlayerSeasonStatsRoundidRouteHandler)
  .openapi(
    getFormatPlayerSeasonStatsByPlayerRoundidPlayeridRoute,
    getFormatPlayerSeasonStatsByPlayerRoundidPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonStatsByTeamRoundidTeamRoute,
    getFormatPlayerSeasonStatsByTeamRoundidTeamRouteHandler,
  )
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
    getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute,
    getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRouteHandler,
  )
  .openapi(
    getFormatUpcomingScheduleByPlayerPlayeridRoute,
    getFormatUpcomingScheduleByPlayerPlayeridRouteHandler,
  )
  .openapi(getFormatVenuesRoute, getFormatVenuesRouteHandler)

export default app
