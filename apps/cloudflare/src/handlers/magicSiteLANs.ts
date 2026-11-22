import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicSitesSiteIdLansLanIdRoute,
  getAccountsAccountIdMagicSitesSiteIdLansLanIdRoute,
  getAccountsAccountIdMagicSitesSiteIdLansRoute,
  patchAccountsAccountIdMagicSitesSiteIdLansLanIdRoute,
  postAccountsAccountIdMagicSitesSiteIdLansRoute,
  putAccountsAccountIdMagicSitesSiteIdLansLanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicSiteLANsHandler = app
  .openapi(getAccountsAccountIdMagicSitesSiteIdLansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicSitesSiteIdLansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicSitesSiteIdLansLanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicSitesSiteIdLansLanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicSitesSiteIdLansLanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicSitesSiteIdLansLanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
