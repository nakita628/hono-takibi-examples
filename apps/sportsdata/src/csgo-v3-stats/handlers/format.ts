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
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatActiveMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoreGameidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoresDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCompetitionDetailsCompetitionidRoute, (c) => {
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
  .openapi(getFormatHistoricalMembershipsByTeamTeamidRoute, (c) => {
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
  .openapi(getFormatScheduleRoundidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSeasonTeamsSeasonidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatStandingsRoundidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatVenuesRoute, (c) => {
    throw new Error('Not implemented')
  })
