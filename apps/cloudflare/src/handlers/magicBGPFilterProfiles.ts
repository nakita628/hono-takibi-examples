import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicBgpFilterProfilesProfileIdRoute,
  getAccountsAccountIdMagicBgpFilterProfilesProfileIdRoute,
  getAccountsAccountIdMagicBgpFilterProfilesRoute,
  postAccountsAccountIdMagicBgpFilterProfilesRoute,
  putAccountsAccountIdMagicBgpFilterProfilesProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicBGPFilterProfilesHandler = app
  .openapi(getAccountsAccountIdMagicBgpFilterProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicBgpFilterProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicBgpFilterProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicBgpFilterProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicBgpFilterProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
