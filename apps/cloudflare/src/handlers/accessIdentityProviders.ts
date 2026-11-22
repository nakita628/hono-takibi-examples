import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  deleteAccountsAccountIdAccessIdentityProvidersIdentityProviderIdRoute,
  deleteAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimGroupsGroupIdRoute,
  deleteAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimUsersUserIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute,
  getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdRoute,
  getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimGroupsGroupIdRoute,
  getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimGroupsRoute,
  getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimUsersRoute,
  getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimUsersUserIdRoute,
  getAccountsAccountIdAccessIdentityProvidersRoute,
  postAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute,
  postAccountsAccountIdAccessIdentityProvidersIdentityProviderIdSamlCertificateRoute,
  postAccountsAccountIdAccessIdentityProvidersRoute,
  putAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  putAccountsAccountIdAccessIdentityProvidersIdentityProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessIdentityProvidersHandler = app
  .openapi(getAccountsAccountIdAccessIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdAccessIdentityProvidersIdentityProviderIdSamlCertificateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimGroupsGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimGroupsGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimUsersUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdAccessIdentityProvidersIdentityProviderIdScimUsersUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
