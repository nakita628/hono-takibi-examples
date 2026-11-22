import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDexCommandsCommandIdDownloadsFilenameRoute,
  getAccountsAccountIdDexCommandsDevicesRoute,
  getAccountsAccountIdDexCommandsQuotaRoute,
  getAccountsAccountIdDexCommandsRoute,
  postAccountsAccountIdDexCommandsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dexRemoteCommandsHandler = app
  .openapi(getAccountsAccountIdDexCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDexCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexCommandsDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexCommandsQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexCommandsCommandIdDownloadsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
