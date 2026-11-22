import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getChatsChatIdInstalledAppsCountRoute,
  getChatsChatIdInstalledAppsRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  patchChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  postChatsChatIdInstalledAppsRoute,
  postChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsTeamsAppInstallationHandler = app
  .openapi(getChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdInstalledAppsTeamsAppInstallationIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
