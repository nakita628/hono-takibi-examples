import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdIamPermissionGroupsPermissionGroupIdRoute,
  getAccountsAccountIdIamPermissionGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPermissionGroupsHandler = app
  .openapi(getAccountsAccountIdIamPermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIamPermissionGroupsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
