import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDnsSettingsNameserverSetsNameserverSetIdRoute,
  getAccountsAccountIdDnsSettingsNameserverSetsNameserverSetIdRoute,
  getAccountsAccountIdDnsSettingsNameserverSetsRoute,
  patchAccountsAccountIdDnsSettingsNameserverSetsNameserverSetIdRoute,
  postAccountsAccountIdDnsSettingsNameserverSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customNameserverSetsForAnAccountHandler = app
  .openapi(getAccountsAccountIdDnsSettingsNameserverSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDnsSettingsNameserverSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDnsSettingsNameserverSetsNameserverSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDnsSettingsNameserverSetsNameserverSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDnsSettingsNameserverSetsNameserverSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
