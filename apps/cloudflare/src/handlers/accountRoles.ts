import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdRolesRoleIdRoute, getAccountsAccountIdRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountRolesHandler = app
  .openapi(getAccountsAccountIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
