import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCniSettingsRoute,
  putAccountsAccountIdCniSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getAccountsAccountIdCniSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCniSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
