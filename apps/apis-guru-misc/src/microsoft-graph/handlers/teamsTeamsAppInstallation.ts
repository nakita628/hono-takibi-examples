import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getTeamsTeamIdInstalledAppsRoute,
  getTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  patchTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  postTeamsTeamIdInstalledAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsTeamsAppInstallationHandler = app
  .openapi(getTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
