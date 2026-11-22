import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicSitesSiteIdRoute,
  getAccountsAccountIdMagicSitesRoute,
  getAccountsAccountIdMagicSitesSiteIdRoute,
  patchAccountsAccountIdMagicSitesSiteIdRoute,
  postAccountsAccountIdMagicSitesRoute,
  putAccountsAccountIdMagicSitesSiteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicSitesHandler = app
  .openapi(getAccountsAccountIdMagicSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
