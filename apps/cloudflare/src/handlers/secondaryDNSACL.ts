import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSecondaryDnsAclsAclIdRoute,
  getAccountsAccountIdSecondaryDnsAclsAclIdRoute,
  getAccountsAccountIdSecondaryDnsAclsRoute,
  postAccountsAccountIdSecondaryDnsAclsRoute,
  putAccountsAccountIdSecondaryDnsAclsAclIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secondaryDNSACLHandler = app
  .openapi(getAccountsAccountIdSecondaryDnsAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecondaryDnsAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSecondaryDnsAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecondaryDnsAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSecondaryDnsAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
