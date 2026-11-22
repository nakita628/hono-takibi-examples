import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  deleteMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  deleteMeTeamworkRoute,
  getMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  getMeTeamworkAssociatedTeamsRoute,
  getMeTeamworkInstalledAppsRoute,
  getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute,
  getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  getMeTeamworkRoute,
  patchMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute,
  patchMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute,
  patchMeTeamworkRoute,
  postMeTeamworkAssociatedTeamsRoute,
  postMeTeamworkInstalledAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserTeamworkHandler = app
  .openapi(deleteMeTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkAssociatedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTeamworkAssociatedTeamsAssociatedTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsUserScopeTeamsAppInstallationIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
