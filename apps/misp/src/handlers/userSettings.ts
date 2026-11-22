import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserSettingsDeleteUserSettingIdRoute,
  getUserSettingsGetSettingUserIdUserSettingNameRoute,
  getUserSettingsRoute,
  getUserSettingsViewUserSettingIdRoute,
  postUserSettingsRoute,
  postUserSettingsSetSettingUserIdUserSettingNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSettingsHandler = app
  .openapi(getUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSettingsViewUserSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSettingsSetSettingUserIdUserSettingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSettingsGetSettingUserIdUserSettingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserSettingsDeleteUserSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
