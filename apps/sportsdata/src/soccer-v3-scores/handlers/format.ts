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
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatActiveMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCanceledMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCompetitionDetailsCompetitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCompetitionHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCompetitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatHistoricalMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatHistoricalMembershipsByCompetitionCompetitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatHistoricalMembershipsByTeamTeamidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatMembershipsByCompetitionCompetitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatMembershipsByTeamTeamidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersByTeamTeamidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRecentlyChangedMembershipsDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatScheduleRoundidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSeasonTeamsSeasonidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatStandingsRoundidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamGameStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamSeasonStatsRoundidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatUpcomingScheduleByPlayerPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatVenuesRoute, (c) => {
    throw new Error('Not implemented')
  })
