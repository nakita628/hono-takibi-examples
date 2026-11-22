import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdRoute,
  getTeamsCountRoute,
  getTeamsRoute,
  getTeamsTeamIdRoute,
  patchTeamsTeamIdRoute,
  postTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsTeamHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
