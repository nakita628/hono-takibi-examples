import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdMembersUserIdRoute,
  deleteTeamsTeamIdRoute,
  getTeamsSearchRoute,
  getTeamsTeamIdMembersRoute,
  getTeamsTeamIdPreferencesRoute,
  getTeamsTeamIdRoute,
  postTeamsRoute,
  postTeamsTeamIdMembersRoute,
  putTeamsTeamIdMembersRoute,
  putTeamsTeamIdMembersUserIdRoute,
  putTeamsTeamIdPreferencesRoute,
  putTeamsTeamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
