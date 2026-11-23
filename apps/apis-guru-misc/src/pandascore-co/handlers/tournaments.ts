import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const tournamentsHandler = app
  .openapi(getTournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugBracketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugRostersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugStandingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTournamentsTournamentIdOrSlugTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
