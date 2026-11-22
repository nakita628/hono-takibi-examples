import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdSettingsRoute,
  deleteUsersUserIdSettingsShiftPreferencesRoute,
  getUsersUserIdSettingsRoute,
  getUsersUserIdSettingsShiftPreferencesRoute,
  patchUsersUserIdSettingsRoute,
  patchUsersUserIdSettingsShiftPreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserSettingsHandler = app
  .openapi(deleteUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
