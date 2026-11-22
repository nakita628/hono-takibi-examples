import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdUsersUserIdCustomSettingsRoute,
  getV21AccountsAccountIdUsersUserIdCustomSettingsRoute,
  putV21AccountsAccountIdUsersUserIdCustomSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userCustomSettingsHandler = app
  .openapi(deleteV21AccountsAccountIdUsersUserIdCustomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCustomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdCustomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
