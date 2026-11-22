import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  deleteUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  deleteUsersUserIdTeamworkRoute,
  getUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  getUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdTeamRoute,
  getUsersUserIdTeamworkAssociatedTeamsCountRoute,
  getUsersUserIdTeamworkAssociatedTeamsRoute,
  getUsersUserIdTeamworkGetAllRetainedTargetedMessagesRoute,
  getUsersUserIdTeamworkGetAllTargetedMessagesRoute,
  getUsersUserIdTeamworkInstalledAppsCountRoute,
  getUsersUserIdTeamworkInstalledAppsRoute,
  getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute,
  getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppRoute,
  getUsersUserIdTeamworkRoute,
  patchUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  patchUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  patchUsersUserIdTeamworkRoute,
  postUsersUserIdTeamworkAssociatedTeamsRoute,
  postUsersUserIdTeamworkDeleteTargetedMessageRoute,
  postUsersUserIdTeamworkInstalledAppsRoute,
  postUsersUserIdTeamworkSendActivityNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserTeamworkHandler = app
  .openapi(getUsersUserIdTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsAssociatedTeamInfoIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdTeamworkInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkDeleteTargetedMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkGetAllRetainedTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkGetAllTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
