import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsDomainAclsDomainAclIdRoute,
  getAccountsAccountIdCwsDomainAclsDomainAclIdRoute,
  getAccountsAccountIdCwsDomainAclsRoute,
  postAccountsAccountIdCwsDomainAclsRoute,
  putAccountsAccountIdCwsDomainAclsDomainAclIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsDomainACLsHandler = app
  .openapi(getAccountsAccountIdCwsDomainAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsDomainAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsDomainAclsDomainAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsDomainAclsDomainAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsDomainAclsDomainAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
