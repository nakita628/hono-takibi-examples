import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdMembershipsUsernameRoute,
  deleteTeamsTeamIdMembersUsernameRoute,
  deleteTeamsTeamIdReposOwnerRepoRoute,
  deleteTeamsTeamIdRoute,
  getTeamsTeamIdInvitationsRoute,
  getTeamsTeamIdMembershipsUsernameRoute,
  getTeamsTeamIdMembersRoute,
  getTeamsTeamIdMembersUsernameRoute,
  getTeamsTeamIdReposOwnerRepoRoute,
  getTeamsTeamIdReposRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdTeamsRoute,
  patchTeamsTeamIdRoute,
  putTeamsTeamIdMembershipsUsernameRoute,
  putTeamsTeamIdMembersUsernameRoute,
  putTeamsTeamIdReposOwnerRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
