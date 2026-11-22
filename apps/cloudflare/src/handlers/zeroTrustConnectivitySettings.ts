import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdZerotrustConnectivitySettingsRoute,
  patchAccountsAccountIdZerotrustConnectivitySettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustConnectivitySettingsHandler = app
  .openapi(getAccountsAccountIdZerotrustConnectivitySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdZerotrustConnectivitySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
