import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDnsSettingsViewsViewIdRoute,
  getAccountsAccountIdDnsSettingsViewsRoute,
  getAccountsAccountIdDnsSettingsViewsViewIdRoute,
  patchAccountsAccountIdDnsSettingsViewsViewIdRoute,
  postAccountsAccountIdDnsSettingsViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsInternalViewsForAnAccountHandler = app
  .openapi(getAccountsAccountIdDnsSettingsViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDnsSettingsViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDnsSettingsViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDnsSettingsViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDnsSettingsViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
