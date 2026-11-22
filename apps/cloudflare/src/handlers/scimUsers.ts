import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdScimV2UsersUserIdRoute,
  getAccountsAccountIdScimV2UsersRoute,
  getAccountsAccountIdScimV2UsersUserIdRoute,
  patchAccountsAccountIdScimV2UsersUserIdRoute,
  postAccountsAccountIdScimV2UsersRoute,
  putAccountsAccountIdScimV2UsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimUsersHandler = app
  .openapi(getAccountsAccountIdScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
