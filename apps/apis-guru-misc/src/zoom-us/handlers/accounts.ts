import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  deleteAccountsAccountIdSettingsVirtualBackgroundsRoute,
  getAccountsAccountIdLockSettingsRoute,
  getAccountsAccountIdManagedDomainsRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSettingsRoute,
  getAccountsAccountIdTrustedDomainsRoute,
  getAccountsRoute,
  patchAccountsAccountIdLockSettingsRoute,
  patchAccountsAccountIdOptionsRoute,
  patchAccountsAccountIdSettingsRoute,
  postAccountsAccountIdSettingsVirtualBackgroundsRoute,
  postAccountsRoute,
  putAccountsAccountIdOwnerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLockSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLockSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdManagedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTrustedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
