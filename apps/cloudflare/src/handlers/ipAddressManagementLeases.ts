import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAddressingLeasesRoute } from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementLeasesHandler = app.openapi(
  getAccountsAccountIdAddressingLeasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
