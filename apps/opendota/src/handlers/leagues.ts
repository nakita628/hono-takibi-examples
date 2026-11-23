import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLeaguesLeagueIdMatchesRoute,
  getLeaguesLeagueIdMatchIdsRoute,
  getLeaguesLeagueIdRoute,
  getLeaguesLeagueIdTeamsRoute,
  getLeaguesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaguesHandler = app
  .openapi(getLeaguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdMatchIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaguesLeagueIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
