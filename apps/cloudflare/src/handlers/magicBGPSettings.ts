import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdMagicBgpSettingsRoute,
  putAccountsAccountIdMagicBgpSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicBGPSettingsHandler = app
  .openapi(getAccountsAccountIdMagicBgpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicBgpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
