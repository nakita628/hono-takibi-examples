import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdUsersUserIdRoute,
  deleteApiAtlasV2OrgsOrgIdUsersUserIdRoute,
  getApiAtlasV2GroupsGroupIdUsersRoute,
  getApiAtlasV2GroupsGroupIdUsersUserIdRoute,
  getApiAtlasV2OrgsOrgIdTeamsTeamIdUsersRoute,
  getApiAtlasV2OrgsOrgIdUsersRoute,
  getApiAtlasV2OrgsOrgIdUsersUserIdRoute,
  getApiAtlasV2UsersByNameUserNameRoute,
  getApiAtlasV2UsersUserIdRoute,
  patchApiAtlasV2OrgsOrgIdUsersUserIdRoute,
  postApiAtlasV2GroupsGroupIdUsersRoute,
  postApiAtlasV2GroupsGroupIdUsersUserIdAddRoleRoute,
  postApiAtlasV2GroupsGroupIdUsersUserIdRemoveRoleRoute,
  postApiAtlasV2OrgsOrgIdTeamsTeamIdAddUserRoute,
  postApiAtlasV2OrgsOrgIdTeamsTeamIdRemoveUserRoute,
  postApiAtlasV2OrgsOrgIdUsersRoute,
  postApiAtlasV2OrgsOrgIdUsersUserIdAddRoleRoute,
  postApiAtlasV2OrgsOrgIdUsersUserIdRemoveRoleRoute,
  postApiAtlasV2UsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mongoDBCloudUsersHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdUsersUserIdAddRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdUsersUserIdRemoveRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdTeamsTeamIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdTeamsTeamIdAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdTeamsTeamIdRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdUsersUserIdAddRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdUsersUserIdRemoveRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2UsersByNameUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
