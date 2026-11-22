import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  deleteMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  deleteMeTeamworkRoute,
  getMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  getMeTeamworkAssociatedTeamsAssociatedTeamInfoIdTeamRoute,
  getMeTeamworkAssociatedTeamsCountRoute,
  getMeTeamworkAssociatedTeamsRoute,
  getMeTeamworkGetAllRetainedTargetedMessagesRoute,
  getMeTeamworkGetAllTargetedMessagesRoute,
  getMeTeamworkInstalledAppsCountRoute,
  getMeTeamworkInstalledAppsRoute,
  getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute,
  getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppRoute,
  getMeTeamworkRoute,
  patchMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  patchMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  patchMeTeamworkRoute,
  postMeTeamworkAssociatedTeamsRoute,
  postMeTeamworkDeleteTargetedMessageRoute,
  postMeTeamworkInstalledAppsRoute,
  postMeTeamworkSendActivityNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserTeamworkHandler = app
  .openapi(getMeTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsAssociatedTeamInfoIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeTeamworkInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkDeleteTargetedMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkGetAllRetainedTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkGetAllTargetedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
