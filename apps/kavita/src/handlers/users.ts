import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUsersDeleteUserRoute,
  deleteApiUsersKoboSyncPointRoute,
  getApiUsersGetPreferencesRoute,
  getApiUsersHasLibraryAccessRoute,
  getApiUsersHasProfileSharedRoute,
  getApiUsersHasReadingProgressRoute,
  getApiUsersKoboSyncPointsRoute,
  getApiUsersNamesRoute,
  getApiUsersProfileInfoRoute,
  getApiUsersRoute,
  getApiUsersTokensRoute,
  postApiUsersKoboSyncPointUndoRemoveBooksRoute,
  postApiUsersUpdatePreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteApiUsersDeleteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersProfileInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersHasProfileSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersHasReadingProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersHasLibraryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUpdatePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersGetPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersKoboSyncPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersKoboSyncPointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersKoboSyncPointUndoRemoveBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
