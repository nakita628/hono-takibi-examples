import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdDevicesRegistrationsRegistrationIdOverrideCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsDevicesOtherHandler = app.openapi(
  getAccountsAccountIdDevicesRegistrationsRegistrationIdOverrideCodesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
