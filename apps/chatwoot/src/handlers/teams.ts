import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdTeamsTeamIdRoute,
  deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  getApiV1AccountsAccountIdTeamsRoute,
  getApiV1AccountsAccountIdTeamsTeamIdRoute,
  getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  patchApiV1AccountsAccountIdTeamsTeamIdRoute,
  patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  postApiV1AccountsAccountIdTeamsRoute,
  postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getApiV1AccountsAccountIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
