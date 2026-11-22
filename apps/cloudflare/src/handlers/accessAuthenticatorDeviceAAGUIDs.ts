import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAccessAuthenticatorDeviceAaguidsRoute } from '../routes'

const app = new OpenAPIHono()

export const accessAuthenticatorDeviceAAGUIDsHandler = app.openapi(
  getAccountsAccountIdAccessAuthenticatorDeviceAaguidsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
