import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicSitesSiteIdAppConfigsAppConfigIdRoute,
  getAccountsAccountIdMagicSitesSiteIdAppConfigsRoute,
  patchAccountsAccountIdMagicSitesSiteIdAppConfigsAppConfigIdRoute,
  postAccountsAccountIdMagicSitesSiteIdAppConfigsRoute,
  putAccountsAccountIdMagicSitesSiteIdAppConfigsAppConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicSiteAppConfigsHandler = app
  .openapi(getAccountsAccountIdMagicSitesSiteIdAppConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicSitesSiteIdAppConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicSitesSiteIdAppConfigsAppConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicSitesSiteIdAppConfigsAppConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicSitesSiteIdAppConfigsAppConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
