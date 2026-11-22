import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicSitesSiteIdWansWanIdRoute,
  getAccountsAccountIdMagicSitesSiteIdWansRoute,
  getAccountsAccountIdMagicSitesSiteIdWansWanIdRoute,
  patchAccountsAccountIdMagicSitesSiteIdWansWanIdRoute,
  postAccountsAccountIdMagicSitesSiteIdWansRoute,
  putAccountsAccountIdMagicSitesSiteIdWansWanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicSiteWANsHandler = app
  .openapi(getAccountsAccountIdMagicSitesSiteIdWansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicSitesSiteIdWansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicSitesSiteIdWansWanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicSitesSiteIdWansWanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicSitesSiteIdWansWanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicSitesSiteIdWansWanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
