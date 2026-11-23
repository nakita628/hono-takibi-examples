import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsRoute,
  getTeamsTeamIdHeroesRoute,
  getTeamsTeamIdMatchesRoute,
  getTeamsTeamIdPlayersRoute,
  getTeamsTeamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdHeroesRoute, (c) => {
    throw new Error('Not implemented')
  })
