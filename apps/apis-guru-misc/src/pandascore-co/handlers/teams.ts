import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsRoute,
  getTeamsTeamIdOrSlugLeaguesRoute,
  getTeamsTeamIdOrSlugMatchesRoute,
  getTeamsTeamIdOrSlugRoute,
  getTeamsTeamIdOrSlugSeriesRoute,
  getTeamsTeamIdOrSlugTournamentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOrSlugLeaguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOrSlugMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOrSlugSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOrSlugTournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
