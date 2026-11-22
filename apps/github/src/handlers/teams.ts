import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgTeamsTeamSlugMembershipsUsernameRoute,
  deleteOrgsOrgTeamsTeamSlugReposOwnerRepoRoute,
  deleteOrgsOrgTeamsTeamSlugRoute,
  deleteTeamsTeamIdMembershipsUsernameRoute,
  deleteTeamsTeamIdMembersUsernameRoute,
  deleteTeamsTeamIdReposOwnerRepoRoute,
  deleteTeamsTeamIdRoute,
  getOrgsOrgTeamsRoute,
  getOrgsOrgTeamsTeamSlugInvitationsRoute,
  getOrgsOrgTeamsTeamSlugMembershipsUsernameRoute,
  getOrgsOrgTeamsTeamSlugMembersRoute,
  getOrgsOrgTeamsTeamSlugReposOwnerRepoRoute,
  getOrgsOrgTeamsTeamSlugReposRoute,
  getOrgsOrgTeamsTeamSlugRoute,
  getOrgsOrgTeamsTeamSlugTeamsRoute,
  getTeamsTeamIdInvitationsRoute,
  getTeamsTeamIdMembershipsUsernameRoute,
  getTeamsTeamIdMembersRoute,
  getTeamsTeamIdMembersUsernameRoute,
  getTeamsTeamIdReposOwnerRepoRoute,
  getTeamsTeamIdReposRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdTeamsRoute,
  getUserTeamsRoute,
  patchOrgsOrgTeamsTeamSlugRoute,
  patchTeamsTeamIdRoute,
  postOrgsOrgTeamsRoute,
  putOrgsOrgTeamsTeamSlugMembershipsUsernameRoute,
  putOrgsOrgTeamsTeamSlugReposOwnerRepoRoute,
  putTeamsTeamIdMembershipsUsernameRoute,
  putTeamsTeamIdMembersUsernameRoute,
  putTeamsTeamIdReposOwnerRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getOrgsOrgTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgTeamsTeamSlugMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgTeamsTeamSlugReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugTeamsRoute, (c) => {
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
  .openapi(getUserTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
