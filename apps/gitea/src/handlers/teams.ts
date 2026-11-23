import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsIdMembersUsernameRoute,
  deleteTeamsIdReposOrgRepoRoute,
  deleteTeamsIdRoute,
  getTeamsIdActivitiesFeedsRoute,
  getTeamsIdMembersRoute,
  getTeamsIdMembersUsernameRoute,
  getTeamsIdReposOrgRepoRoute,
  getTeamsIdReposRoute,
  getTeamsIdRoute,
  patchTeamsIdRoute,
  putTeamsIdMembersUsernameRoute,
  putTeamsIdReposOrgRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(deleteTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdActivitiesFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdReposOrgRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdReposOrgRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdReposOrgRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
