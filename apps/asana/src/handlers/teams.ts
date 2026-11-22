import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsTeamGidRoute,
  getUsersUserGidTeamsRoute,
  getWorkspacesWorkspaceGidTeamsRoute,
  postTeamsRoute,
  postTeamsTeamGidAddUserRoute,
  postTeamsTeamGidRemoveUserRoute,
  putTeamsTeamGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamGidAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamGidRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
