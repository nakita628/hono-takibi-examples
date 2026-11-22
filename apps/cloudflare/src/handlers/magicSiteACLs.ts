import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute,
  getAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute,
  getAccountsAccountIdMagicSitesSiteIdAclsRoute,
  patchAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute,
  postAccountsAccountIdMagicSitesSiteIdAclsRoute,
  putAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicSiteACLsHandler = app
  .openapi(getAccountsAccountIdMagicSitesSiteIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicSitesSiteIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicSitesSiteIdAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
