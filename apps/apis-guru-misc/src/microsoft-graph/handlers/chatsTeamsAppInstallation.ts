import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getChatsChatIdInstalledAppsRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  patchChatsChatIdInstalledAppsTeamsAppInstallationIdRoute,
  postChatsChatIdInstalledAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsTeamsAppInstallationHandler = app
  .openapi(getChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
