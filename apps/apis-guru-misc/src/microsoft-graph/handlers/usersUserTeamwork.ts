import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  deleteUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  deleteUsersUserIdTeamworkRoute,
  getUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  getUsersUserIdTeamworkAssociatedTeamsRoute,
  getUsersUserIdTeamworkInstalledAppsRoute,
  getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute,
  getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  getUsersUserIdTeamworkRoute,
  patchUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  patchUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  patchUsersUserIdTeamworkRoute,
  postUsersUserIdTeamworkAssociatedTeamsRoute,
  postUsersUserIdTeamworkInstalledAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserTeamworkHandler = app
  .openapi(deleteUsersUserIdTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
