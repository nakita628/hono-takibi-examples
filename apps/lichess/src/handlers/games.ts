import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAccountPlayingRoute,
  getApiGameGameIdChatRoute,
  getApiGamesExportBookmarksRoute,
  getApiGamesExportImportsRoute,
  getApiGamesUserUsernameRoute,
  getApiStreamGameIdRoute,
  getApiUserUsernameCurrentGameRoute,
  getGameExportGameIdRoute,
  postApiGamesExportIdsRoute,
  postApiImportRoute,
  postApiStreamGamesByUsersRoute,
  postApiStreamGamesStreamIdAddRoute,
  postApiStreamGamesStreamIdRoute,
  postBookmarkGameIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getGameExportGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameCurrentGameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGamesUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGamesExportIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamGamesByUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamGamesStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamGamesStreamIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountPlayingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGamesExportImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGamesExportBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookmarkGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
