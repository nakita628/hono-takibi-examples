import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicAppsAccountAppIdRoute,
  getAccountsAccountIdMagicAppsRoute,
  patchAccountsAccountIdMagicAppsAccountAppIdRoute,
  postAccountsAccountIdMagicAppsRoute,
  putAccountsAccountIdMagicAppsAccountAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicAccountAppsHandler = app
  .openapi(getAccountsAccountIdMagicAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicAppsAccountAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicAppsAccountAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicAppsAccountAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
