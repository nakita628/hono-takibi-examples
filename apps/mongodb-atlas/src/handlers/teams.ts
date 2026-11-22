import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdTeamsTeamIdRoute,
  deleteApiAtlasV2OrgsOrgIdTeamsTeamIdRoute,
  deleteApiAtlasV2OrgsOrgIdTeamsTeamIdUsersUserIdRoute,
  getApiAtlasV2GroupsGroupIdTeamsRoute,
  getApiAtlasV2GroupsGroupIdTeamsTeamIdRoute,
  getApiAtlasV2OrgsOrgIdTeamsByNameTeamNameRoute,
  getApiAtlasV2OrgsOrgIdTeamsRoute,
  getApiAtlasV2OrgsOrgIdTeamsTeamIdRoute,
  patchApiAtlasV2GroupsGroupIdTeamsTeamIdRoute,
  patchApiAtlasV2OrgsOrgIdTeamsTeamIdRoute,
  postApiAtlasV2GroupsGroupIdTeamsRoute,
  postApiAtlasV2OrgsOrgIdTeamsRoute,
  postApiAtlasV2OrgsOrgIdTeamsTeamIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdTeamsTeamIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdTeamsTeamIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdTeamsByNameTeamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
