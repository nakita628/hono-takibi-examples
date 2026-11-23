import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLeaguesLeagueIdOrSlugMatchesPastRoute,
  getLeaguesLeagueIdOrSlugMatchesRoute,
  getLeaguesLeagueIdOrSlugMatchesRunningRoute,
  getLeaguesLeagueIdOrSlugMatchesUpcomingRoute,
  getLeaguesLeagueIdOrSlugRoute,
  getLeaguesLeagueIdOrSlugSeriesRoute,
  getLeaguesLeagueIdOrSlugTournamentsRoute,
  getLeaguesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaguesHandler = app
  .openapi(getLeaguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugMatchesPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugMatchesRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugMatchesUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdOrSlugTournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
