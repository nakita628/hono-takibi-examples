import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsTeamGidProjectsRoute,
  getTeamsTeamGidProjectTemplatesRoute,
  getTeamsTeamGidRoute,
  getTeamsTeamGidTeamMembershipsRoute,
  getTeamsTeamGidUsersRoute,
  postTeamsRoute,
  postTeamsTeamGidAddUserRoute,
  postTeamsTeamGidProjectsRoute,
  postTeamsTeamGidRemoveUserRoute,
  putTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamGidAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidProjectTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamGidRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
